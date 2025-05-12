from rest_framework import serializers
from .models import *

class PrivacyPolicyBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = PrivacyPolicyBanner
        fields = '__all__'
    
class PrivacyPolicyContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PrivacyPolicyContent
        fields = '__all__'