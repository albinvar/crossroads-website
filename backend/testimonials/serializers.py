from rest_framework import serializers
from .models import *

class TestimonialBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestimonialBanner
        fields = '__all__'
        
class TestimonialListingImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestimonialListingImage
        fields = ['id', 'testimonials', 'image', 'name', 'flag', 'rating', 'description', 'order']

class TestimonialListingVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestimonialListingVideo
        fields = ['id', 'testimonials', 'video', 'name', 'flag', 'rating', 'description', 'order']

class TestimonialTabsSerializer(serializers.ModelSerializer):
    image_listings = TestimonialListingImageSerializer(many=True, read_only=True)
    video_listings = TestimonialListingVideoSerializer(many=True, read_only=True)
    
    class Meta:
        model = TestimonialTabs
        fields = ['id', 'tab_name', 'order', 'image_listings', 'video_listings']