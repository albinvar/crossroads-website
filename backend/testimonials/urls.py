from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'testimonial-banner', views.TestimonialBannerViewSet)
router.register(r'testimonials-tab', views.TestimonialTabsViewSet)
router.register(r'testimonials-image-listings', views.TestimonialListingImageViewSet)
router.register(r'testimonials-video-listings', views.TestimonialListingVideoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]