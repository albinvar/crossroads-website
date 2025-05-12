from django.db import models

class GalleryBanner(models.Model):
    image = models.ImageField(upload_to='gallery_banner/', null=True, blank=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    
class GalleryCreate(models.Model):
    image = models.ImageField(upload_to='gallery_create/', null=True, blank=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    year = models.CharField(max_length=250, null=True, blank=True)
    link = models.SlugField(unique=True)

    def __str__(self):
        return self.title or self.link

class GalleryAddImage(models.Model):
    gallery = models.ForeignKey(
        GalleryCreate,
        on_delete=models.CASCADE,
        related_name='gallery_images',
        null=True,
        blank=True
    )
    image = models.ImageField(upload_to='gallery_images/', null=True, blank=True)

    def __str__(self):
        return f"Image for {self.gallery.link}"

class GalleryAddVideo(models.Model):
    gallery = models.ForeignKey(
        GalleryCreate,
        on_delete=models.CASCADE,
        related_name='gallery_videos',
        null=True,
        blank=True
    )
    video = models.FileField(upload_to='gallery_videos/', null=True, blank=True)

    def __str__(self):
        return f"Video for {self.gallery.link}"