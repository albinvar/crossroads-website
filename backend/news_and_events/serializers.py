from rest_framework import serializers
from .models import *

class NewsEventsBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsEventsBanner
        fields = '__all__'

class NewsEventsListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsEventsListing
        fields = [
            'id', 'title', 'description', 'image', 'link', 'order', 'date',
            'detailed_page_image', 'detailed_page_title', 'detailed_page_description',
            'detailed_page_date', 'detailed_page_time', 'detailed_page_event_location',
            'detailed_page_event_category', 'detailed_page_additional_information', 'google_map_latitude', 'google_map_longitude'
        ]
        extra_kwargs = {
            'date': {'required': True},
            'link': {'required': True, 'validators': []},  
        }
        
class NewsEventsRecapSerializer(serializers.ModelSerializer):
    event = serializers.PrimaryKeyRelatedField(
        queryset=NewsEventsListing.objects.all(),
        allow_null=True
    )
    event_title = serializers.CharField(source='event.title', read_only=True)

    class Meta:
        model = NewsEventsRecap
        fields = ['id', 'event', 'event_title', 'image']