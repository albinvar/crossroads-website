from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import BannerBlog, BlogPosts
from .serializers import BannerBlogSerializer, BlogPostsSerializer

class BannerBlogViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = BannerBlog.objects.all()
    serializer_class = BannerBlogSerializer
    
class BlogPostsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = BlogPosts.objects.all()
    serializer_class = BlogPostsSerializer

    @action(detail=False, methods=['get'], url_path='by-link/(?P<link>[^/.]+)')
    def get_by_link(self, request, link=None):
            try:
                blog_post = self.queryset.get(link=link)
                serializer = self.get_serializer(blog_post)
                return Response(serializer.data)
            except BlogPosts.DoesNotExist:
                return Response(
                    {"error": "Blog post not found."},
                    status=status.HTTP_404_NOT_FOUND
                )