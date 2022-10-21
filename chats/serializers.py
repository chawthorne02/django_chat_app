from rest_framework import serializers



from .models import Room, Message

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ( 'id', 'name')



class MessageSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Message
        fields = ('id', 'text', 'room', 'author', 'username' )
