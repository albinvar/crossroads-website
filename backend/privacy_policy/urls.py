from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'privacy-policy-banner', views.PrivacyPolicyBannerViewSet)
router.register(r'privacy-policy-content', views.PrivacyPolicyContentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]