from rest_framework import serializers
from .models import ServiceHighlights, DocumentationAssistanceBanner, LanguageLabBanner, CountryServiceBanner, CourseServiceBanner, DocumentationAssistanceTab, DocumentationAssistanceListing, LanguageLabListing, Destination, DestinationDedicatedKeyFact, DestinationDedicatedPage, DestinationDedicatedChooseTitle, DestinationDedicatedChooseList, DestinationDedicatedIntakeInformation, DestinationDedicatedAssistance, DestinationDedicatedOurCourses, DestinationDedicatedOurCoursesTitle

class ServiceHighlightsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceHighlights
        fields = '__all__'
        
class DocumentationAssistanceBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentationAssistanceBanner
        fields = '__all__'
        
class DocumentationAssistanceListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentationAssistanceListing
        fields = ['id', 'tab', 'image', 'title', 'description', 'order']

class DocumentationAssistanceTabSerializer(serializers.ModelSerializer):
    listings = DocumentationAssistanceListingSerializer(many=True, read_only=True)

    class Meta:
        model = DocumentationAssistanceTab
        fields = ['id', 'tab_name', 'order', 'listings']
        
class LanguageLabBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = LanguageLabBanner
        fields = '__all__'
        
class LanguageLabListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = LanguageLabListing
        fields = '__all__'
        
class CountryServiceBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = CountryServiceBanner
        fields = '__all__'
        
class DestinationDedicatedOurCoursesTitleSerializer(serializers.ModelSerializer):
    subcategory = serializers.PrimaryKeyRelatedField(
        queryset=DestinationDedicatedPage.objects.all()
    )

    class Meta:
        model = DestinationDedicatedOurCoursesTitle
        fields = ['id', 'subcategory', 'title']

class DestinationDedicatedOurCoursesSerializer(serializers.ModelSerializer):
    subcategory = serializers.PrimaryKeyRelatedField(
        queryset=DestinationDedicatedPage.objects.all()
    )

    class Meta:
        model = DestinationDedicatedOurCourses
        fields = ['id', 'subcategory', 'image', 'title', 'description', 'order']

class DestinationDedicatedAssistanceSerializer(serializers.ModelSerializer):
    subcategory = serializers.PrimaryKeyRelatedField(
        queryset=DestinationDedicatedPage.objects.all()
    )

    class Meta:
        model = DestinationDedicatedAssistance
        fields = ['id', 'subcategory', 'title', 'description']

class DestinationDedicatedIntakeInformationSerializer(serializers.ModelSerializer):
    subcategory = serializers.PrimaryKeyRelatedField(
        queryset=DestinationDedicatedPage.objects.all()
    )

    class Meta:
        model = DestinationDedicatedIntakeInformation
        fields = ['id', 'subcategory', 'intake_information_title', 'start_date', 'end_date', 'additional_information']

class DestinationDedicatedChooseListSerializer(serializers.ModelSerializer):
    subcategory = serializers.PrimaryKeyRelatedField(
        queryset=DestinationDedicatedPage.objects.all()
    )

    class Meta:
        model = DestinationDedicatedChooseList
        fields = ['id', 'subcategory', 'list_title', 'list_description']

class DestinationDedicatedChooseTitleSerializer(serializers.ModelSerializer):
    subcategory = serializers.PrimaryKeyRelatedField(
        queryset=DestinationDedicatedPage.objects.all()
    )

    class Meta:
        model = DestinationDedicatedChooseTitle
        fields = ['id', 'subcategory', 'title', 'image', 'description']

class DestinationDedicatedKeyFactSerializer(serializers.ModelSerializer):
    subcategory = serializers.PrimaryKeyRelatedField(
        queryset=DestinationDedicatedPage.objects.all()
    )

    class Meta:
        model = DestinationDedicatedKeyFact
        fields = ['id', 'subcategory', 'title', 'content']

class DestinationDedicatedPageSerializer(serializers.ModelSerializer):
    key_fact = DestinationDedicatedKeyFactSerializer(many=True, read_only=True)
    choose_title = DestinationDedicatedChooseTitleSerializer(many=True, read_only=True)
    choose_list = DestinationDedicatedChooseListSerializer(many=True, read_only=True)
    intake_information = DestinationDedicatedIntakeInformationSerializer(many=True, read_only=True)
    virtual_assistance = DestinationDedicatedAssistanceSerializer(many=True, read_only=True)
    our_courses_title = DestinationDedicatedOurCoursesTitleSerializer(many=True, read_only=True)
    our_courses_listing = DestinationDedicatedOurCoursesSerializer(many=True, read_only=True)  # Updated
    destination = serializers.SlugRelatedField(
        slug_field='slug',
        queryset=Destination.objects.all()
    )

    class Meta:
        model = DestinationDedicatedPage
        fields = [
            'id',
            'destination',
            'banner_image',
            'banner_title',
            'banner_button_name',
            'banner_description',
            'key_fact',
            'choose_title',
            'choose_list',
            'intake_information',
            'virtual_assistance',
            'our_courses_title',
            'our_courses_listing',  
        ]

class DestinationSerializer(serializers.ModelSerializer):
    subcategories = DestinationDedicatedPageSerializer(many=True, read_only=True)

    class Meta:
        model = Destination
        fields = [
            'id',
            'destination_image',
            'destination_name',
            'destination_description',
            'slug',
            'order',
            'subcategories',
        ]
    
class CourseServiceBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseServiceBanner
        fields = '__all__'