from rest_framework import viewsets
from blog.models import Post
from .serializers import PostSerializer
from rest_framework.permissions import AllowAny

# Create your views here.

class PostViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    



