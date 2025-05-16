from django.db import models
from django.utils.text import slugify

class ServiceHighlights(models.Model):
    image = models.ImageField(upload_to='services/', null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.CharField(max_length=2000, null=True, blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title or "Untitled Service"  

    class Meta:
        ordering = ['order']

class DocumentationAssistanceBanner(models.Model):
    image = models.ImageField(upload_to='documentation_assistance_banner/', null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.CharField(max_length=2000, null=True, blank=True)

    def __str__(self):
        return self.title or "Documentation Assistance"  
    
class DocumentationAssistanceTab(models.Model):
    tab_name = models.CharField(max_length=255, null=True, blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.tab_name or "Documentation Assistance Tab"

    class Meta:
        ordering = ['order']

class DocumentationAssistanceListing(models.Model):
    tab = models.ForeignKey(
        DocumentationAssistanceTab,
        related_name='listings',
        on_delete=models.CASCADE
    )
    image = models.ImageField(upload_to='documentation_assistance_listing/', null=True, blank=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title or "Listing"

    class Meta:
        ordering = ['order']
    
class LanguageLabBanner(models.Model):
    image = models.ImageField(upload_to='language_lab_banner/', null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.CharField(max_length=2000, null=True, blank=True)

    def __str__(self):
        return self.title or "Language Lab Banner"  
    
class LanguageLabListing(models.Model):
    main_title = models.CharField(max_length=255, null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.CharField(max_length=2000, null=True, blank=True)

    def __str__(self):
        return self.title or "Language Lab Listing" 
    
class CountryServiceBanner(models.Model):
    image = models.ImageField(upload_to='country_service/', null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.title or "Country Service Banner" 

class Destination(models.Model):
    destination_image = models.ImageField(upload_to='country_service/', null=True, blank=True)
    destination_name = models.CharField(max_length=255, null=True, blank=True)
    destination_description = models.CharField(max_length=2000, null=True, blank=True)
    slug = models.SlugField(max_length=200, unique=True, null=True, blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.destination_name or self.slug or "Unnamed Destination"

    class Meta:
        ordering = ['order']

class DestinationDedicatedPage(models.Model):
    destination = models.ForeignKey(Destination, related_name='subcategories', on_delete=models.CASCADE)
    banner_image = models.ImageField(upload_to='country_service/', null=True, blank=True)
    banner_title = models.CharField(max_length=255, null=True, blank=True)
    banner_button_name = models.CharField(max_length=255, null=True, blank=True)
    banner_description = models.CharField(max_length=2000, null=True, blank=True)
    
    def __str__(self):
        return self.banner_title or "Dedicated Destination Page Banner"

class DestinationDedicatedKeyFact(models.Model):
    subcategory = models.ForeignKey(DestinationDedicatedPage, related_name='key_fact', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, null=True, blank=True)
    content = models.CharField(max_length=255, null=True, blank=True)
    
    def __str__(self):
        return self.title or "Unnamed Key Fact"
    
class DestinationDedicatedChooseTitle(models.Model):
    subcategory = models.ForeignKey(DestinationDedicatedPage, related_name='choose_title', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, null=True, blank=True)
    image = models.ImageField(upload_to='choose_background/', null=True, blank=True)
    description = models.CharField(max_length=2000, null=True, blank=True)
    
    def __str__(self):
        return self.title or "Unnamed Choose Title"
    
class DestinationDedicatedChooseList(models.Model):
    subcategory = models.ForeignKey(DestinationDedicatedPage, related_name='choose_list', on_delete=models.CASCADE)
    list_title = models.CharField(max_length=255, null=True, blank=True)
    list_description = models.CharField(max_length=2000, null=True, blank=True)
    
    def __str__(self):
        return self.title or "Unnamed Choose List"
    
class DestinationDedicatedIntakeInformation(models.Model):
    subcategory = models.ForeignKey(DestinationDedicatedPage, related_name='intake_information', on_delete=models.CASCADE)
    intake_information_title = models.CharField(max_length=255, null=True, blank=True)
    start_date = models.CharField(max_length=255, null=True, blank=True)
    end_date = models.CharField(max_length=255, null=True, blank=True)
    additional_information = models.CharField(max_length=255, null=True, blank=True)
    
    def __str__(self):
        return self.title or "Unnamed Intake Information"
    
class DestinationDedicatedAssistance(models.Model):
    subcategory = models.ForeignKey(DestinationDedicatedPage, related_name='virtual_assistance', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.CharField(max_length=2000, null=True, blank=True)
    
    def __str__(self):
        return self.title or "Unnamed Virtual Assistant"
    
class DestinationDedicatedOurCoursesTitle(models.Model):
    subcategory = models.ForeignKey(DestinationDedicatedPage, related_name='our_courses_title', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, null=True, blank=True)
    
    def __str__(self):
        return self.title or "Unnamed Our Courses Slider Title"

class DestinationDedicatedOurCourses(models.Model):
    subcategory = models.ForeignKey(DestinationDedicatedPage, related_name='our_courses_listing', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='our_courses/', null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.CharField(max_length=2000, null=True, blank=True)
    order = models.IntegerField(default=0) 

    def __str__(self):
        return self.title or "Unnamed Our Courses Listing"

    class Meta:
        ordering = ['order']
    
class CourseServiceBanner(models.Model):
    image = models.ImageField(upload_to='course_service_banner/', null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.title or "Course Service Banner" 