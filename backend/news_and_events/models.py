from django.db import models

class NewsEventsBanner(models.Model):
    image = models.ImageField(upload_to='news_and_events_banner/', null=True, blank=True)
    title = models.CharField(max_length=500, null=True, blank=True)

class NewsEventsListing(models.Model):
    title = models.CharField(max_length=1500, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='events_images/', null=True, blank=True)
    link = models.CharField(max_length=500, null=True, blank=True)
    order = models.IntegerField(default=0)
    date = models.DateField(null=True, blank=True)
    detailed_page_image = models.ImageField(upload_to='events_images/', null=True, blank=True)
    detailed_page_title = models.CharField(max_length=1500, null=True, blank=True)
    detailed_page_description = models.TextField(null=True, blank=True)
    detailed_page_date = models.CharField(max_length=500, null=True, blank=True)
    detailed_page_time = models.CharField(max_length=1500, null=True, blank=True)
    detailed_page_event_location = models.CharField(max_length=1500, null=True, blank=True)
    detailed_page_event_category = models.CharField(max_length=250, null=True, blank=True)
    detailed_page_additional_information = models.TextField(null=True, blank=True)
    google_map_latitude = models.CharField(max_length=250, null=True, blank=True)
    google_map_longitude = models.CharField(max_length=250, null=True, blank=True)
    
    def __str__(self):
        return self.title or "Untitled Listing"

    class Meta:
        ordering = ['order']
        
class NewsEventsRecap(models.Model):
    event = models.ForeignKey(
        NewsEventsListing,
        on_delete=models.CASCADE,
        related_name='recaps',
        null=True,
        blank=True
    )
    image = models.ImageField(upload_to='events_recap_images/', null=True, blank=True)

    def __str__(self):
        return f"Recap for {self.event.title if self.event else 'Untitled Event'}"