from django.db import models

class FreeEducationTitle(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.CharField(max_length=2000, null=True, blank=True)

    def __str__(self):
        return f"{self.title} - {self.description}"

class FreeEducationCountry(models.Model):
    country_image = models.ImageField(upload_to='free_education_country/', null=True, blank=True)
    country_name = models.CharField(max_length=255, null=True, blank=True)
    link = models.SlugField(max_length=250, unique=True, null=True, blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.country_name or 'Unnamed Country'} - {self.country_image or 'No Image'}"

    class Meta:
        ordering = ['order']

class FreeEducationCountryDedicatedPage(models.Model):
    free_education_country = models.ForeignKey(
        FreeEducationCountry,
        related_name='dedicated_pages',
        on_delete=models.CASCADE
    )
    banner_image = models.ImageField(upload_to='free_education_country/', null=True, blank=True)
    banner_title = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.banner_title or "Unnamed Dedicated Page"
    
class FreeEducationCountryDedicatedPageKeyFactTitle(models.Model):
    free_education_country = models.ForeignKey(
        FreeEducationCountry,
        related_name='key_fact_titles',
        on_delete=models.CASCADE
    )
    key_fact_main_title = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.key_fact_main_title or "Unnamed Key Fact Main Title"

class FreeEducationCountryDedicatedPageKeyFactListing(models.Model):
    free_education_country = models.ForeignKey(
        FreeEducationCountry,
        related_name='key_fact_listings',
        on_delete=models.CASCADE
    )
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title or "Unnamed Key Fact"
    
class FreeEducationCountryDedicatedPageRequirementsTitle(models.Model):
    free_education_country = models.ForeignKey(
        FreeEducationCountry,
        related_name='requirements_titles',
        on_delete=models.CASCADE
    )
    requirement_background_image = models.ImageField(upload_to='free_education_country/', null=True, blank=True)
    requirement_title = models.CharField(max_length=255, null=True, blank=True)
    requirement_description = models.TextField(null=True, blank=True)
    content = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.requirement_title or "Unnamed Requirements Title"

class FreeEducationCountryDedicatedPageRequirementsListing(models.Model):
    free_education_country = models.ForeignKey(
        FreeEducationCountry,
        related_name='requirements_listings',
        on_delete=models.CASCADE
    )
    list_title = models.CharField(max_length=255, null=True, blank=True)
    list_description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.list_title or "Unnamed Requirement Listing"
    
class FreeEducationCountryDedicatedPageOtherOptionsTitle(models.Model):
    free_education_country = models.ForeignKey(
        FreeEducationCountry,
        related_name='other_options_titles',
        on_delete=models.CASCADE
    )
    main_title = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.main_title or "Unnamed Other Options Title"

class FreeEducationCountryDedicatedPageOtherOptionsListing(models.Model):
    free_education_country = models.ForeignKey(
        FreeEducationCountry,
        related_name='other_options_listings',
        on_delete=models.CASCADE
    )
    list_title = models.CharField(max_length=255, null=True, blank=True)
    content = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.list_title or "Unnamed Other Option Listing"