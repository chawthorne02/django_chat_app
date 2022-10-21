from django.db import models
from django.conf import settings









# Create your models here.

class Room(models.Model):
    name = models.CharField(max_length=255, blank=True)
    
    # image = models.ImageField(upload_to="books", null=True
    
    def __str__(self):
        return self.name


class Message(models.Model):
    text = models.TextField(null=True)
    room = models.ForeignKey(Room, on_delete=models.CASCADE, null=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    # image = models.ImageField(upload_to="books", null=True)
    
    
    def __str__(self):
        return self.text[:50]
