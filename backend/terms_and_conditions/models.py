from django.db import models

class TermsConditionsBanner(models.Model):
    image = models.ImageField(upload_to='terms_and_conditions_banner/', null=True, blank=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    
class TermsConditionsContent(models.Model):
    content = models.TextField(null=True, blank=True)