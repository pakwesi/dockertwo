import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError

from pictures.models import Photo
from users.schema import UserType

from graphene_file_upload.scalars import Upload

class PhotoType(DjangoObjectType):
    class Meta:
        model = Photo

class Query(graphene.ObjectType):
    photo = graphene.Field(PhotoType, id=graphene.Int(required=True))
    photos = graphene.List(PhotoType)

    def resolve_photo(self, info, id):
        return Photo.objects.get(id=id)

    def resolve_photos(self, info):
        return Photo.objects.all()

class CreatePhoto(graphene.Mutation):
    image = graphene.Field(PhotoType)
    user = graphene.Field(UserType)

    class Arguments:
        title = graphene.String(required=False)
        desc = graphene.String(required=False)
        image = Upload()
        is_favorite = graphene.Boolean(required=False)

    @staticmethod
    def mutate(
        self,
        info,
        title,
        desc,
        image,
        is_favorite
    ):
        user = info.context.user or None
        if user.is_anonymous:
            raise GraphQLError("Sorry, you need to logged in to upload image")

        photo = Photo(
            title=title,
            desc=desc,
            image=image,
            is_favorite=is_favorite
        ) 
        photo.save()
        return CreatePhoto(image=photo)

class UpdatePhoto(graphene.Mutation):
    photo = graphene.Field(PhotoType)
    user = graphene.Field(UserType)

    class Arguments:
        photo_id = graphene.Int(required=True)
        title = graphene.String(required=False)
        desc = graphene.String(required=False)
        image = Upload()
        is_favorite = graphene.Boolean(required=False)

    @staticmethod
    def mutate(
        self,
        info,
        photo_id,
        title,
        desc,
        image,
        is_favorite
    ):
        user = info.context.user or None
        photo = Photo.objects.get(id=photo_id)
        if photo.user != user:
            raise GraphQLError("Only the owner can edit photo")

        if title:
            photo.title = title
        
        if desc:
            photo.desc = desc

        if image:
            photo.image = image

        if is_favorite:
            photo.is_favorite = is_favorite

        photo.save()
        return UpdatePhoto(photo=photo)

class DeletePhoto(graphene.Mutation):
    photo_id = graphene.Int()
    user = graphene.Field(UserType)

    class Arguments:
        photo_id = graphene.Int(required=True)

    
    def mutate(self, info, photo_id):
        user = info.context.user or None
        photo = Photo.objects.get(id=photo_id)
        if photo.user is not None and photo.user != user:
            raise GraphQLError("Only the owner can delete this image")

        photo.delete()
        return DeletePhoto(photo_id=photo_id)

class Mutation(graphene.ObjectType):
    create_photo = CreatePhoto.Field()
    update_photo = UpdatePhoto.Field()
    delete_photo = DeletePhoto.Field()