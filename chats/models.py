from django.db import models

# from traitlets import default

# Create your models here.

class Room(models.Model):
    room = models.CharField(max_length=255)
    Creator = models.CharField(max_length=255)
    # image = models.ImageField(upload_to="books", null=True)



    
    def __str__(self):
        return self.room


class Message(models.Model):
    message = models.CharField(max_length=255)
    # author = models.CharField(max_length=255)
    # image = models.ImageField(upload_to="books", null=True)
    # location_id = models.ForeignKey(Room, on_delete=models.CASCADE, default=1)
    
    def __str__(self):
        return self.message
