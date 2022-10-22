from django.urls import path

from .views import RoomListAPIView, MessageListAPIView, MessageDetailAPIView

urlpatterns = [
    path('rooms/', RoomListAPIView.as_view()),
    path('messages/<int:pk>/', MessageDetailAPIView.as_view()),
     path('messages/', MessageListAPIView.as_view()),
    
]