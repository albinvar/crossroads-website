from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'blog-banner', views.BannerBlogViewSet)
router.register(r'blog-post-create', views.BlogPostsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]