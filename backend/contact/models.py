from django.db import models

class ContactBanner(models.Model):
    image = models.ImageField(upload_to='contact_banner/', null=True, blank=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    
class InfoHub(models.Model):
    address = models.TextField(null=True, blank=True)
    phone = models.TextField(null=True, blank=True)
    email = models.TextField(null=True, blank=True)