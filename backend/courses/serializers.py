from rest_framework import serializers
from .models import (
    PopularCourses,
    CourseListing,
    FreeEducationCourses,
    FreeCourseDetailPageBanner,
    FreeCourseDetailPageTab,
    FreeCourseDetailPageTabContent,
    FreeCourseDetailPageWhyChooseTitle,
    FreeCourseDetailPageWhyChoose,
)

class PopularCoursesSerializer(serializers.ModelSerializer):
    listings = serializers.SerializerMethodField()

    class Meta:
        model = PopularCourses
        fields = ['id', 'tab_name', 'order', 'listings']

    def get_listings(self, obj):
        listings = obj.listings.all()
        return CourseListingSerializer(listings, many=True).data

class CourseListingSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='popular_course.tab_name', read_only=True)
    popular_course = serializers.PrimaryKeyRelatedField(queryset=PopularCourses.objects.all())
    image = serializers.ImageField(use_url=True, allow_null=True)

    class Meta:
        model = CourseListing
        fields = ['id', 'popular_course', 'title', 'description', 'image', 'link', 'order', 'category']

class FreeEducationCoursesSerializer(serializers.ModelSerializer):
    course_image = serializers.ImageField(use_url=True, allow_null=True)

    class Meta:
        model = FreeEducationCourses
        fields = ['id', 'course_image', 'title', 'description', 'link', 'order']

class FreeCourseDetailPageBannerSerializer(serializers.ModelSerializer):
    course_listing = serializers.PrimaryKeyRelatedField(
        queryset=CourseListing.objects.all(),
        required=False,
        allow_null=True
    )
    banner_image = serializers.ImageField(use_url=True, allow_null=True)

    class Meta:
        model = FreeCourseDetailPageBanner
        fields = ['id', 'course_listing', 'banner_image', 'banner_title', 'order']

class FreeCourseDetailPageTabSerializer(serializers.ModelSerializer):
    course_listing = serializers.PrimaryKeyRelatedField(
        queryset=CourseListing.objects.all(),
        required=False,
        allow_null=True
    )
    contents = serializers.SerializerMethodField()

    class Meta:
        model = FreeCourseDetailPageTab
        fields = ['id', 'course_listing', 'tab_name', 'order', 'contents']

    def get_contents(self, obj):
        contents = obj.contents.all()
        return FreeCourseDetailPageTabContentSerializer(contents, many=True).data

class FreeCourseDetailPageTabContentSerializer(serializers.ModelSerializer):
    background_image = serializers.ImageField(use_url=True, allow_null=True)

    class Meta:
        model = FreeCourseDetailPageTabContent
        fields = ['id', 'tab', 'background_image', 'content', 'order']

class FreeCourseDetailPageWhyChooseTitleSerializer(serializers.ModelSerializer):
    course_listing = serializers.PrimaryKeyRelatedField(
        queryset=CourseListing.objects.all(),
        required=False,
        allow_null=True
    )

    class Meta:
        model = FreeCourseDetailPageWhyChooseTitle
        fields = ['id', 'course_listing', 'title']

class FreeCourseDetailPageWhyChooseSerializer(serializers.ModelSerializer):
    course_listing = serializers.PrimaryKeyRelatedField(
        queryset=CourseListing.objects.all(),
        required=False,
        allow_null=True
    )

    class Meta:
        model = FreeCourseDetailPageWhyChoose
        fields = ['id', 'course_listing', 'title', 'description', 'order']