from django.urls import path, include
from core import views
from rest_framework import routers, viewsets  

router = routers.DefaultRouter()
router.register(r'watchlist', views.watchlistView)
router.register(r'users', views.UserViewSet)

urlpatterns = [
    
    path('', include(router.urls)),
    path('users/', views.UserList.as_view()),
    path('current_user/', views.current_user),
    
]