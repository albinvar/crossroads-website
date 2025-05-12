from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'home-banner', views.HomeBannerViewSet)
router.register(r'news-events-title', views.NewsEventsTitleViewSet)
router.register(r'testimonial-title', views.TestimonialTitleViewSet)
router.register(r'testimonial-images', views.TestimonialImageViewSet)
router.register(r'testimonial-videos', views.TestimonialVideoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]