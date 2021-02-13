import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError
from django.db.models import Q
from tracks.models import Album, Like, UploadSong, SongImage, MusicDec
from users.schema import UserType

from graphql_jwt.decorators import login_required

from graphene_file_upload.scalars import Upload


class AlbumType(DjangoObjectType):
    class Meta:
        model = Album

class LikeType(DjangoObjectType):
    class Meta:
        model = Like

class UploadSongType(DjangoObjectType):
    class Meta:
        model = UploadSong

    def resolve_song(self, info):
        """Resolve product image absolute path"""
        if self.file:
            self.file = info.context.build_absolute_uri(self.file.url)
        return self.file

class SongImageType(DjangoObjectType):
    class Meta:
        model = SongImage

    def resolve_image(self, info):
        """Resolve product image absolute path"""
        if self.file:
            self.file = info.context.build_absolute_uri(self.file.url)
        return self.file
        

class MusicDecType(DjangoObjectType):
    class Meta:
        model = MusicDec

class MusicUnion(graphene.Union):
    class Meta:
        types = (MusicDecType, SongImageType, UploadSongType)

    @classmethod
    def resolve_type(cls, instance, info):
        # This function tells Graphene what Graphene type the instance is
        if isinstance(instance, MusicDec):
            return MusicDecType
        if isinstance(instance, SongImage):
            return SongImageType
        if isinstance(instance, UploadSong):
            return UploadSongType
        return MusicUnion.resolve_type(instance, info)

class Query(graphene.ObjectType):
    album = graphene.Field(AlbumType, id=graphene.Int(required=True))
    albums = graphene.List(AlbumType)
    likes = graphene.List(LikeType)
    all_music = graphene.List(MusicUnion)
    audio = graphene.Field(UploadSongType, id=graphene.Int(required=True))
    audios = graphene.List(UploadSongType)
    audioimage = graphene.Field(SongImageType, id=graphene.Int(required=True))
    audioimages = graphene.List(SongImageType)
    musicinfo = graphene.Field(MusicDecType, id=graphene.Int(required=True))
    musicinfos = graphene.List(MusicDecType)
    


    def resolve_all_music(self, info):
        return (list(MusicDec.objects.all()) + list(SongImage.objects.all() + list(UploadMusic.objects.all())))[:limit]

    def resolve_audio(self, info, id):
        return UploadSong.objects.get(id=id)

    def resolve_audios(self, info):
        return UploadSong.objects.all()

    def resolve_audioimage(self, info, id):
        return SongImage.objects.get(id=id)

    def resolve_audioimages(self, info):
        return SongImage.objects.all()

    def resolve_musicinfo(self, info, id):
        return MusicDec.objects.get(id=id)

    def resolve_musicinfos(self, info):
        return MusicDec.objects.all()



    def resolve_album(self, info, id):
        return Album.objects.get(id=id)


    def resolve_albums(self, info, search=None):
        if search:
            filter = (
                Q(album_title__icontains=search) |
                Q(artist__icontains=search) |
                Q(genre__icontains=search)
            )
            return Album.objects.filter(filter)

        return Album.objects.all()

    def resolve_likes(self, info):
        return Like.objects.all()


class CreateAlbum(graphene.Mutation):
    album = graphene.Field(AlbumType)
    user = graphene.Field(UserType)

    class Arguments:
        artist = graphene.String(required=True)
        album_title = graphene.String(required=True)
        genre = graphene.String(required=True)
        album_logo = Upload()
        total_songs = graphene.Int(required=True)


    @staticmethod
    def mutate(
        self,
        info, 
        artist, 
        album_title, 
        genre, 
        album_logo, 
        total_songs,
    ):

        user = info.context.user or None

        if user.is_anonymous:
            raise GraphQLError('Log in to add a track.')

        album = Album(
            artist=artist, 
            album_title=album_title, 
            genre=genre, 
            album_logo=album_logo, 
            total_songs=total_songs,
        )
        album.save()
        return CreateAlbum(album=album)

class UpdateAlbum(graphene.Mutation):
    album = graphene.Field(AlbumType)
    user = graphene.Field(UserType)

    class Arguments:
        artist = graphene.String(required=True)
        album_title = graphene.String(required=True)
        genre = graphene.String(required=True)
        album_logo = Upload()
        total_songs = graphene.Int(required=True)

    @staticmethod
    def mutate(
        self,
        info,
        album_id, 
        artist, 
        album_title, 
        genre, 
        album_logo, 
        is_favorite, 
        is_private,
        total_songs,
    ):
        user = info.context.user or None
        album = Album.objects.get(id=album_id)
        if album.user != user:
            raise  GraphQLError("Only the owner can update album")

        if artist:
            album.artist = artist
        
        if album_title:
            album.album_title = album_title
        
        if genre:
            album.genre = genre
        
        if album_logo:
            album.album_logo = album_logo

        album.save()
        return UpdateAlbum(album=album)

class DeleteAlbum(graphene.Mutation):
    album_id = graphene.Int()
    user = graphene.Field(UserType)

    class Arguments:
        album_id = graphene.Int(required=True)


    @staticmethod
    def mutate(self, info, album_id):
        user = info.context.user or None
        album = Album.objects.get(id=album_id)
        if album.user is not None and album.user != user:
            raise GraphQLError("Only the owner can delete album")

        album.delete()
        return DeleteAlbum(album_id=album_id)

class UploadMusic(graphene.Mutation):
    song = graphene.Field(UploadSongType)
    user = graphene.Field(UserType)

    class Arguments:
        file = Upload()

    @staticmethod
    def mutate(self, info, file):
        uploaded_file = info.context.FILES.get(file)
        user = info.context.user or None
        if user.is_anonymous:
            raise GraphQLError("Log in to add Song")

        song = UploadSong(file=file)

        song.save()
        return UploadMusic(song=song)

class UploadImages(graphene.Mutation):
    image = graphene.Field(SongImageType)
    user = graphene.Field(UserType)

    class Arguments:
        file = Upload()

    @staticmethod
    def mutate(self, info, file):
        user = info.context.user or None
        if user.is_anonymous:
            raise GraphQLError("Log in to add Song")

        image = SongImage(file=file)

        image.save()
        return UploadImages(image=image)


class SongInformation(graphene.Mutation):
    info = graphene.Field(MusicDecType)
    user = graphene.Field(UserType)

    class Arguments:
       name = graphene.String()
       decrib = graphene.String()


    @staticmethod
    def mutate(self, info, name, decrib):
        user = info.context.user or None
        if user.is_anonymous:
            raise GraphQLError("Log in to add Song")


        info = MusicDec(name=name, decrib=decrib)

        info.save()
        return SongInformation(info=info)



class CreateLike(graphene.Mutation):
    song = graphene.Field(AlbumType)
    user = graphene.Field(UserType)
    
    class Arguments:
        song_id = graphene.Int(required=True)

    def mutate(self, info, song_id):
            user = info.context.user or None
            if user.is_anonymous:
                raise GraphQLError("Login to like a song")

            song = Song.objects.get(id=song_id)
            if not song:
                raise GraphQLError("Cannot find song with this song id")

            Like.objects.create(
                user=user,
                song=song
            )

            return CreateLike(user=user, song=song)

class Mutation(graphene.ObjectType):
    create_album = CreateAlbum.Field()
    update_album = UpdateAlbum.Field()
    delete_album = DeleteAlbum.Field()
    create_like = CreateLike.Field()

    upload_music = UploadMusic.Field()
    upload_images = UploadImages.Field()
    song_information = SongInformation.Field()
