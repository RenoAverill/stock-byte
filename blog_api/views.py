from rest_framework import generics, serializers
from blog.models import Post
from .serializers import PostSerializer
from rest_framework.permissions import DjangoModelPermissions, IsAuthenticated, DjangoModelPermissionsOrAnonReadOnly, BasePermission, SAFE_METHODS

# Create your views here.

class PostList(generics.ListCreateAPIView):
    permission_classes = [DjangoModelPermissions]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [DjangoModelPermissions]
    queryset = Post.objects.all()
    serializer_class = PostSerializer

