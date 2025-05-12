from django.db import models

class PrivacyPolicyBanner(models.Model):
    image = models.ImageField(upload_to='privacy_policy_banner/', null=True, blank=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    
class PrivacyPolicyContent(models.Model):
    content = models.TextField(null=True, blank=True)