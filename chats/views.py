
from rest_framework import generics
from .models import Room, Message
from .serializers import RoomSerializer, MessageSerializer
from .permissions import isAuthorOrReadOnly

# Create your views here.

class RoomListAPIView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

    

class MessageListAPIView(generics.ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)



class MessageDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = (isAuthorOrReadOnly,)