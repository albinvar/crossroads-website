from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'free-education-title', views.FreeEducationTitleViewSet)
router.register(r'free-education-country', views.FreeEducationCountryViewSet)
router.register(r'free-education-country-banner-entry', views.FreeEducationCountryDedicatedPageViewSet, basename='free-education-country-banner')
router.register(r'free-education-country-key-fact-title-entry', views.FreeEducationCountryDedicatedPageKeyFactTitleViewSet, basename='free-education-country-key-fact-title')
router.register(r'free-education-country-key-fact-listing-entry', views.FreeEducationCountryDedicatedPageKeyFactListingViewSet, basename='free-education-country-key-fact-listing')
router.register(r'free-education-country-requirements-title-entry', views.FreeEducationCountryDedicatedPageRequirementsTitleViewSet, basename='free-education-country-requirements-title')
router.register(r'free-education-country-requirements-listing-entry', views.FreeEducationCountryDedicatedPageRequirementsListingViewSet, basename='free-education-country-requirements-listing')
router.register(r'free-education-country-other-options-title-entry', views.FreeEducationCountryDedicatedPageOtherOptionsTitleViewSet, basename='free-education-country-other-options-title')
router.register(r'free-education-country-other-options-listing-entry', views.FreeEducationCountryDedicatedPageOtherOptionsListingViewSet, basename='free-education-country-other-options-listing')

urlpatterns = [
    path('', include(router.urls)),
]