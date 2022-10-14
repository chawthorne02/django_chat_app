from django.db import models

# Create your models here.

class Room(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    # image = models.ImageField(upload_to="books", null=True)



    
    def __str__(self):
        return self.title


class Message(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    # image = models.ImageField(upload_to="books", null=True)
    
    def __str__(self):
        return self.title
