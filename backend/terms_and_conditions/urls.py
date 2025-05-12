from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'terms-conditions-banner', views.TermsConditionsBannerViewSet)
router.register(r'terms-conditions-content', views.TermsConditionsContentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]