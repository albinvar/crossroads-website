from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'contact-banner', views.ContactBannerViewSet)
router.register(r'contact-info-hub', views.InfoHubViewSet)

urlpatterns = [
    path('', include(router.urls)),
]