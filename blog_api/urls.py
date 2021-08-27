from django.urls import path, include
from blog_api import views
from rest_framework.routers import DefaultRouter

app_name = 'blog_api'

blog_router = DefaultRouter()
blog_router.register('', views.PostViewSet)




urlpatterns = [
    path('', include(blog_router.urls))
]