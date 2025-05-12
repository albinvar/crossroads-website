from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'popular-courses', views.PopularCoursesViewSet, basename='popular-courses')
router.register(r'free-education-courses', views.FreeEducationCoursesViewSet, basename='free-education-courses')
router.register(r'course-listings', views.CourseListingViewSet, basename='course-listings')
router.register(r'course-banner-entry', views.FreeCourseDetailPageBannerViewSet, basename='course-banner')
router.register(r'course-tab-entry', views.FreeCourseDetailPageTabViewSet, basename='course-tab')
router.register(r'course-tab-content-entry', views.FreeCourseDetailPageTabContentViewSet, basename='course-tab-content')
router.register(r'course-why-choose-title-entry', views.FreeCourseDetailPageWhyChooseTitleViewSet, basename='course-why-choose-title')
router.register(r'course-why-choose-entry', views.FreeCourseDetailPageWhyChooseViewSet, basename='course-why-choose')

urlpatterns = [
    path('', include(router.urls)),
]