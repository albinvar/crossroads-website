from rest_framework import serializers
from .models import *

class TermsConditionsBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = TermsConditionsBanner
        fields = '__all__'
        
class TermsConditionsContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = TermsConditionsContent
        fields = '__all__'