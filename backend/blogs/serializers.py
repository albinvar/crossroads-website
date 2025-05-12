from rest_framework import serializers
from .models import *

class BannerBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = BannerBlog
        fields = '__all__'
        
class BlogPostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPosts
        fields = '__all__'