from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'gallery-banner', views.GalleryBannerViewSet)
router.register(r'gallery-create', views.GalleryCreateViewSet)
router.register(r'gallery-image-listing', views.GalleryAddImageViewSet, basename='gallery-image')
router.register(r'gallery-video-listing', views.GalleryAddVideoViewSet, basename='gallery-video')

urlpatterns = [
    path('', include(router.urls)),
]