from django.urls import path

from .views import RoomListAPIView, MessageListCreateAPIView

urlpatterns = [
     path('messages/', MessageListCreateAPIView.as_view()),
    path('rooms/', RoomListAPIView.as_view()),
]