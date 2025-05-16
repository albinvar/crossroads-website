from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'service-highlights', views.ServiceHighlightsViewSet)
router.register(r'service-doumentation-assistance-banner', views.DocumentationAssistanceBannerViewSet)
router.register(r'service-documentation-assistance-tabs', views.DocumentationAssistanceTabViewSet)
router.register(r'service-documentation-assistance-listings', views.DocumentationAssistanceListingViewSet)
router.register(r'service-language-lab-banner', views.LanguageLabBannerViewSet)
router.register(r'service-language-lab-listings', views.LanguageLabListingViewSet)
router.register(r'service-country-banner', views.CountryServiceBannerViewSet)
router.register(r'service-destination-listings', views.DestinationViewSet)
router.register(r'service-destination-banner-entry', views.DestinationDedicatedPageViewSet, basename='destination-banner')
router.register(r'service-destination-key-fact-entry', views.DestinationDedicatedKeyFactViewSet, basename='destination-key-fact')
router.register(r'service-destination-choose-title-entry', views.DestinationDedicatedChooseTitleViewSet, basename='destination-choose-title')
router.register(r'service-destination-choose-list-entry', views.DestinationDedicatedChooseListViewSet, basename='destination-choose-list')
router.register(r'service-destination-intake-information-entry', views.DestinationDedicatedIntakeInformationViewSet, basename='destination-intake-information')
router.register(r'service-destination-assistance-entry', views.DestinationDedicatedAssistanceViewSet, basename='destination-assistance')
router.register(r'service-destination-our-courses-title', views.DestinationDedicatedOurCoursesTitleViewSet, basename='our-courses-title')
router.register(r'service-destination-our-courses-listing', views.DestinationDedicatedOurCoursesViewSet, basename='our-courses')
router.register(r'service-course-banner', views.CourseServiceBannerViewSet)

urlpatterns = [
    path('', include(router.urls)),
]