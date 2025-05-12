from rest_framework import serializers
from .models import *

class ContactBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactBanner
        fields = '__all__'
        
class InfoHubSerializer(serializers.ModelSerializer):   
    class Meta:
        model = InfoHub
        fields = '__all__'