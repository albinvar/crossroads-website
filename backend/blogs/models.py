from django.db import models

class BannerBlog(models.Model):
    image = models.ImageField(upload_to='blog_image/', null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.title or "Blog Banner" 

class BlogPosts(models.Model):
    image = models.ImageField(upload_to='blog_posts/', null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    dedicated_page_title = models.CharField(max_length=500, null=True, blank=True)
    date = models.DateField(null=True, blank=True)
    date_manual = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    link = models.SlugField(max_length=250, unique=True, null=True, blank=True)
    
    def __str__(self):
        return self.title or "Blog Post" 
