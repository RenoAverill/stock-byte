from django.urls import path, include
from core import views
from rest_framework import routers  

router = routers.DefaultRouter()
router.register(r'watchlist', views.watchlistView, 'watchlist')

urlpatterns = [
    path('current_user/', views.current_user),
    path('users/', views.UserList.as_view()),
    path('watchlist/', include(router.urls)),
]