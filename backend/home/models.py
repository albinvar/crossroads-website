from django.db import models

class HomeBanner(models.Model):
    image = models.ImageField(upload_to='home_banner/', null=True, blank=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    description = models.CharField(max_length=2000, null=True, blank=True)
    apply_now_url = models.URLField(max_length=200, null=True, blank=True)
    link = models.SlugField(max_length=255, unique=True, null=True, blank=True) 
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title or "Untitled Banner"

    class Meta:
        ordering = ['order']
        
class NewsEventsTitle(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title or "Untitled News Title"
        
class TestimonialTitle(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
        
class TestimonialImage(models.Model):
    image = models.ImageField(upload_to='testimonial_images/', null=True, blank=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    flag = models.ImageField(upload_to='flags/', null=True, blank=True)
    rating = models.PositiveIntegerField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)

class TestimonialVideo(models.Model):
    video = models.FileField(upload_to='testimonial_videos/', null=True, blank=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    flag = models.ImageField(upload_to='flags/')
    rating = models.PositiveIntegerField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)