from django.db import models
from django.core.exceptions import ValidationError

class PopularCourses(models.Model):
    tab_name = models.CharField(max_length=255, null=True, blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.tab_name or "Untitled Course"

    class Meta:
        ordering = ['order']
        verbose_name = "Popular Course"
        verbose_name_plural = "Popular Courses"

class CourseListing(models.Model):
    popular_course = models.ForeignKey(
        PopularCourses,
        related_name='listings',
        on_delete=models.CASCADE
    )
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='course_images/', null=True, blank=True)
    link = models.SlugField(max_length=255, unique=True, null=True, blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title or "Untitled Listing"

    class Meta:
        ordering = ['order']
        verbose_name = "Course Listing"
        verbose_name_plural = "Course Listings"
        indexes = [
            models.Index(fields=['link']),
        ]

class FreeEducationCourses(models.Model):
    course_image = models.ImageField(upload_to='free_courses/', null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    link = models.SlugField(max_length=100, unique=True, null=True, blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title or "Untitled Course"

    class Meta:
        ordering = ['order']
        verbose_name = "Free Education Course"
        verbose_name_plural = "Free Education Courses"
        indexes = [
            models.Index(fields=['link']),
        ]

class FreeCourseDetailPageBanner(models.Model):
    course_listing = models.ForeignKey(
        CourseListing,
        related_name='banners',
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    banner_image = models.ImageField(upload_to='course_page_images/', null=True, blank=True)
    banner_title = models.TextField(null=True, blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.banner_title or "Untitled Banner"

    class Meta:
        ordering = ['order']
        verbose_name = "Free Course Detail Page Banner"
        verbose_name_plural = "Free Course Detail Page Banners"

class FreeCourseDetailPageTab(models.Model):
    course_listing = models.ForeignKey(
        CourseListing,
        related_name='tabs',
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    tab_name = models.CharField(max_length=255, null=True, blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.tab_name or "Untitled Tab"

    class Meta:
        ordering = ['order']
        verbose_name = "Free Course Detail Page Tab"
        verbose_name_plural = "Free Course Detail Page Tabs"

class FreeCourseDetailPageTabContent(models.Model):
    tab = models.ForeignKey(
        FreeCourseDetailPageTab,
        related_name='contents',
        on_delete=models.CASCADE
    )
    background_image = models.ImageField(upload_to='course_tab_images/', null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.content or "Untitled Content"

    class Meta:
        ordering = ['order']
        verbose_name = "Free Course Detail Page Tab Content"
        verbose_name_plural = "Free Course Detail Page Tab Contents"

class FreeCourseDetailPageWhyChooseTitle(models.Model):
    course_listing = models.ForeignKey(
        CourseListing,
        related_name='why_choose_titles',
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    title = models.CharField(max_length=500, null=True, blank=True)

    def __str__(self):
        return self.title or "Untitled Why Choose Title"

    class Meta:
        verbose_name = "Free Course Detail Page Why Choose Title"
        verbose_name_plural = "Free Course Detail Page Why Choose Titles"

class FreeCourseDetailPageWhyChoose(models.Model):
    course_listing = models.ForeignKey(
        CourseListing,
        related_name='why_choose_items',
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title or "Untitled Why Choose Item"

    class Meta:
        ordering = ['order']
        verbose_name = "Free Course Detail Page Why Choose Item"
        verbose_name_plural = "Free Course Detail Page Why Choose Items"