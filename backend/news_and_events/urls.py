from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'news-events-banner', views.NewsEventsBannerViewSet)
router.register(r'news-events-listing', views.NewsEventsListingViewSet)
router.register(r'news-events-recap', views.NewsEventsRecapViewSet)

urlpatterns = [
    path('', include(router.urls)),
]