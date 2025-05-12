from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from django.utils.html import strip_tags
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
from .serializers import (
    PopularCoursesSerializer,
    CourseListingSerializer,
    FreeEducationCoursesSerializer,
    FreeCourseDetailPageBannerSerializer,
    FreeCourseDetailPageTabSerializer,
    FreeCourseDetailPageTabContentSerializer,
    FreeCourseDetailPageWhyChooseTitleSerializer,
    FreeCourseDetailPageWhyChooseSerializer,
)

class PopularCoursesViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = PopularCourses.objects.all()
    serializer_class = PopularCoursesSerializer

    @action(detail=False, methods=['get'], url_path='tabs')
    def get_tabs(self, request):
        tabs = PopularCourses.objects.values_list('tab_name', flat=True).distinct().order_by('order')
        return Response(list(tabs), status=status.HTTP_200_OK)

class CourseListingViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = CourseListing.objects.select_related('popular_course').all()
    serializer_class = CourseListingSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        link = self.request.query_params.get('link')
        if link:
            queryset = queryset.filter(link=link)
        return queryset

    @action(detail=False, methods=['get'], url_path='by-tab')
    def by_tab(self, request):
        tab = request.query_params.get('tab')
        if not tab:
            courses = self.get_queryset()
        else:
            tab_cleaned = strip_tags(tab).strip()
            if tab_cleaned == 'All Courses':
                courses = self.get_queryset()
            else:
                courses = self.get_queryset().filter(popular_course__tab_name=tab_cleaned)
        
        serializer = self.get_serializer(courses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class FreeEducationCoursesViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = FreeEducationCourses.objects.all()
    serializer_class = FreeEducationCoursesSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        link = self.request.query_params.get('link')
        if link:
            queryset = queryset.filter(link=link)
        return queryset

class FreeCourseDetailPageBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = FreeCourseDetailPageBanner.objects.select_related('course_listing').all()
    serializer_class = FreeCourseDetailPageBannerSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        course_slug = self.request.query_params.get('course_slug')
        if course_slug:
            queryset = queryset.filter(course_listing__link=course_slug)
        return queryset

class FreeCourseDetailPageTabViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = FreeCourseDetailPageTab.objects.select_related('course_listing').prefetch_related('contents').all()
    serializer_class = FreeCourseDetailPageTabSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        course_slug = self.request.query_params.get('course_slug')
        if course_slug:
            queryset = queryset.filter(course_listing__link=course_slug)
        return queryset

class FreeCourseDetailPageTabContentViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = FreeCourseDetailPageTabContent.objects.select_related('tab').all()
    serializer_class = FreeCourseDetailPageTabContentSerializer

class FreeCourseDetailPageWhyChooseTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = FreeCourseDetailPageWhyChooseTitle.objects.select_related('course_listing').all()
    serializer_class = FreeCourseDetailPageWhyChooseTitleSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        course_slug = self.request.query_params.get('course_slug')
        if course_slug:
            queryset = queryset.filter(course_listing__link=course_slug)
        return queryset

class FreeCourseDetailPageWhyChooseViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = FreeCourseDetailPageWhyChoose.objects.select_related('course_listing').all()
    serializer_class = FreeCourseDetailPageWhyChooseSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        course_slug = self.request.query_params.get('course_slug')
        if course_slug:
            queryset = queryset.filter(course_listing__link=course_slug)
        return queryset