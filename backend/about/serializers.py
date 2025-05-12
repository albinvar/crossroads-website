from rest_framework import serializers
from .models import *

class AboutHighlightsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutHighlights
        fields = '__all__'

class AboutBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutBanner
        fields = '__all__'
        
class AboutTailorGuidanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutTailorGuidance
        fields = '__all__'        
        
class AboutWhyCrossroadsTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutWhyCrossroadsTitle
        fields = '__all__'  
        
class AboutWhyCrossroadsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutWhyCrossroads
        fields = '__all__'  
   
class AboutMissionVisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutMissionVision
        fields = '__all__'
        
class AboutOurValuesTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutOurValuesTitle
        fields = '__all__'
        
class AboutOurValuesSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutOurValues
        fields = '__all__'