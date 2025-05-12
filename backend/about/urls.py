from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'about-highlights', views.AboutHighlightsViewSet)
router.register(r'about-banner', views.AboutBannerViewSet)
router.register(r'about-tailor-guidance', views.AboutTailorGuidanceViewSet)
router.register(r'about-why-crossroads-title', views.AboutWhyCrossroadsTitleViewSet)
router.register(r'about-why-crossroads', views.AboutWhyCrossroadsViewSet)
router.register(r'about-mission-vision', views.AboutMissionVisionViewSet)
router.register(r'about-our-values-title', views.AboutOurValuesTitleViewSet)
router.register(r'about-our-values', views.AboutOurValuesViewSet)

urlpatterns = [
    path('', include(router.urls)),
]