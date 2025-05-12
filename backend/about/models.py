from django.db import models

class AboutHighlights(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    subtitle = models.CharField(max_length=255, null=True, blank=True)
    description = models.CharField(max_length=2000, null=True, blank=True)
    link = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.title or "Untitled About Highlights" 
    
class AboutBanner(models.Model):
    image = models.ImageField(upload_to='about_banner/', null=True, blank=True)
    title = models.CharField(max_length=500, null=True, blank=True)

class AboutTailorGuidance(models.Model):
    title = models.CharField(max_length=500, null=True, blank=True)
    description = models.CharField(max_length=2000, null=True, blank=True)
    
class AboutWhyCrossroadsTitle(models.Model):
    image = models.ImageField(upload_to='about_why_choose_us/', null=True, blank=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    description = models.CharField(max_length=2000, null=True, blank=True)
    highlights = models.CharField(max_length=2000, null=True, blank=True)
    
class AboutWhyCrossroads(models.Model):
    list_title = models.CharField(max_length=500, null=True, blank=True)
    list_description = models.CharField(max_length=2000, null=True, blank=True)

class AboutMissionVision(models.Model):
    video = models.FileField(upload_to='about_mission_vision/', null=True, blank=True)
    video_thumbnail_image = models.ImageField(upload_to='about_mission_vision/', null=True, blank=True)
    mission_image = models.ImageField(upload_to='about_mission_vision/', null=True, blank=True)
    mission_title = models.CharField(max_length=500, null=True, blank=True)
    mission_description = models.CharField(max_length=2000, null=True, blank=True)
    vision_image = models.ImageField(upload_to='about_mission_vision/', null=True, blank=True)
    vision_title = models.CharField(max_length=500, null=True, blank=True)
    vision_description = models.CharField(max_length=2000, null=True, blank=True)
    order = models.IntegerField(default=0)
    
class AboutOurValuesTitle(models.Model):
    title = models.CharField(max_length=500, null=True, blank=True)
    
class AboutOurValues(models.Model):
    image = models.ImageField(upload_to='our_values/', null=True, blank=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    description = models.CharField(max_length=2000, null=True, blank=True)
