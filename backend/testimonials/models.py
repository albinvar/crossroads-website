from django.db import models

class TestimonialBanner(models.Model):
    image = models.ImageField(upload_to='testimonial_banner/', null=True, blank=True)
    title = models.CharField(max_length=500, null=True, blank=True)

class TestimonialTabs(models.Model):
    tab_name = models.CharField(max_length=255, null=True, blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.tab_name or "Untitled Testimonials"

    class Meta:
        ordering = ['order']

class TestimonialListingImage(models.Model):
    testimonials = models.ForeignKey(
        TestimonialTabs,
        related_name='image_listings',
        on_delete=models.CASCADE
    )
    image = models.ImageField(upload_to='testimonial_stories_images/', null=True, blank=True)
    name = models.CharField(max_length=500, null=True, blank=True)
    flag = models.ImageField(upload_to='flags/', null=True, blank=True)
    rating = models.PositiveIntegerField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    order = models.IntegerField(default=0)
    
    def __str__(self):
        return self.name or "Untitled Image Listing"

    class Meta:
        ordering = ['order']
        
class TestimonialListingVideo(models.Model):
    testimonials = models.ForeignKey(
        TestimonialTabs,
        related_name='video_listings',
        on_delete=models.CASCADE
    )
    video = models.FileField(upload_to='testimonial_stories_videos/', null=True, blank=True)
    name = models.CharField(max_length=500, null=True, blank=True)
    flag = models.ImageField(upload_to='flags/', null=True, blank=True)
    rating = models.PositiveIntegerField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    order = models.IntegerField(default=0)
    
    def __str__(self):
        return self.name or "Untitled Video Listing"

    class Meta:
        ordering = ['order']