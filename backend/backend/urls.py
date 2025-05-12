"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('authapp.urls')),
    path('api/home/', include('home.urls')),
    path('api/service/', include('services.urls')),
    path('api/about/', include('about.urls')),
    path('api/courses/', include('courses.urls')), 
    path('api/testimonials/', include('testimonials.urls')),
    path('api/blog/', include('blogs.urls')),
    path('api/contact/', include('contact.urls')),
    path('api/terms-and-conditions/', include('terms_and_conditions.urls')),
    path('api/privacy-policy/', include('privacy_policy.urls')),
    path('api/news-and-events/', include('news_and_events.urls')),
    path('api/gallery/', include('gallery.urls')),
    path('api/free-education/', include('free_education.urls')),
    path('documentation/', include('documentation.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)