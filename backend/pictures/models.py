from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.


class Photo(models.Model):
    user = models.ForeignKey(get_user_model(), default=1,on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    desc = models.TextField(blank=True)
    image = models.ImageField(upload_to="media/photos/")
    created_at = models.DateTimeField(auto_now_add=True)
    is_favorite = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title + ": " + str(self.id)