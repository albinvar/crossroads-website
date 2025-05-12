from rest_framework import serializers
from .models import *

class GalleryBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryBanner
        fields = '__all__'
        
class GalleryAddImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryAddImage
        fields = ['id', 'gallery', 'image']

class GalleryAddVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryAddVideo
        fields = ['id', 'gallery', 'video']

class GalleryCreateSerializer(serializers.ModelSerializer):
    gallery_images = GalleryAddImageSerializer(many=True, read_only=True)
    gallery_videos = GalleryAddVideoSerializer(many=True, read_only=True)

    class Meta:
        model = GalleryCreate
        fields = ['id', 'image', 'title', 'year', 'link', 'gallery_images', 'gallery_videos']