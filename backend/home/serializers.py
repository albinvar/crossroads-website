from rest_framework import serializers
from .models import *

class HomeBannerSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True, allow_null=True)

    class Meta:
        model = HomeBanner
        fields = '__all__'
        
class NewsEventsTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsEventsTitle
        fields = '__all__'

class TestimonialTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestimonialTitle
        fields = '__all__'

class TestimonialImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestimonialImage
        fields = '__all__'

class TestimonialVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestimonialVideo
        fields = '__all__'