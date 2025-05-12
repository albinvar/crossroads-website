from rest_framework import serializers
from .models import *

class FreeEducationTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreeEducationTitle
        fields = '__all__'

class FreeEducationCountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = FreeEducationCountry
        fields = ['id', 'country_image', 'country_name', 'link', 'order']

class FreeEducationCountryDedicatedPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreeEducationCountryDedicatedPage
        fields = ['id', 'free_education_country', 'banner_image', 'banner_title']

class FreeEducationCountryDedicatedPageKeyFactTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreeEducationCountryDedicatedPageKeyFactTitle
        fields = ['id', 'free_education_country', 'key_fact_main_title']

class FreeEducationCountryDedicatedPageKeyFactListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreeEducationCountryDedicatedPageKeyFactListing
        fields = ['id', 'free_education_country', 'title', 'description']
        
class FreeEducationCountryDedicatedPageRequirementsTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreeEducationCountryDedicatedPageRequirementsTitle
        fields = ['id', 'free_education_country', 'requirement_background_image', 'requirement_title', 'requirement_description', 'content']

class FreeEducationCountryDedicatedPageRequirementsListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreeEducationCountryDedicatedPageRequirementsListing
        fields = ['id', 'free_education_country', 'list_title', 'list_description']
        
class FreeEducationCountryDedicatedPageOtherOptionsTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreeEducationCountryDedicatedPageOtherOptionsTitle
        fields = ['id', 'free_education_country', 'main_title']

class FreeEducationCountryDedicatedPageOtherOptionsListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreeEducationCountryDedicatedPageOtherOptionsListing
        fields = ['id', 'free_education_country', 'list_title', 'content']