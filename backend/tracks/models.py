from django.contrib.auth import get_user_model
from django.db import models
from django.core.files.storage import FileSystemStorage

fa = FileSystemStorage(location='/media/albums')
fp = FileSystemStorage(location='/media/photos')
fs = FileSystemStorage(location='/media/songs')

class Album(models.Model):
    user = models.ForeignKey(get_user_model(), default=1,on_delete=models.CASCADE)
    artist = models.CharField(max_length=250)
    album_title = models.CharField(max_length=500)
    genre = models.CharField(max_length=100)
    album_logo = models.FileField(storage=fa)
    total_songs = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.artist

class UploadSong(models.Model):
    file = models.FileField(upload_to='songs', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)



class SongImage(models.Model):
    file = models.FileField(upload_to='photos', blank=True, null=True)

    

class MusicDec(models.Model):
    name = models.CharField(max_length=250, blank=True,null=True, default=0.0)
    decrib = models.CharField(max_length=550,blank=True,null=True, default=0.0)

    def __str__(self):
        return self.name
    



class Like(models.Model):
    user = models.ForeignKey(
        get_user_model(), null=True, on_delete=models.CASCADE)
    track = models.ForeignKey(
        'tracks.Album', related_name='likes', on_delete=models.CASCADE)
    

