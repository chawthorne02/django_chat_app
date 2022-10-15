from django.shortcuts import render
from rest_framework import generics
from .models import Room, Message
from .serializers import RoomSerializer, MessageSerializer

# Create your views here.

class RoomListAPIView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

    

class MessageListCreateAPIView(generics.ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer