# class FreeEducationTitle(models.Model):
#     title = models.CharField(max_length=255, null=True, blank=True)
#     description = models.CharField(max_length=2000, null=True, blank=True)

#     def __str__(self):
#         return f"{self.title} - {self.description}"

# class FreeEducationCountry(models.Model):
#     country_image = models.ImageField(upload_to='free_education/', null=True, blank=True)
#     country_name = models.CharField(max_length=255, null=True, blank=True)
#     link = models.SlugField(max_length=250, unique=True, null=True, blank=True)
#     order = models.IntegerField(default=0)

#     def __str__(self):
#         return f"{self.country_name} - {self.country_image}"

#     class Meta:
#         ordering = ['order']
        
# class FreeEducationTitleSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = FreeEducationTitle
#         fields = '__all__'

# class FreeEducationCountrySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = FreeEducationCountry
#         fields = '__all__'
        
# class FreeEducationTitleViewSet(viewsets.ModelViewSet):
#     permission_classes = [AllowAny]
#     queryset = FreeEducationTitle.objects.all()
#     serializer_class = FreeEducationTitleSerializer

# class FreeEducationCountryViewSet(viewsets.ModelViewSet):
#     permission_classes = [AllowAny]
#     queryset = FreeEducationCountry.objects.all()
#     serializer_class = FreeEducationCountrySerializer

#     @action(detail=False, methods=['post'], url_path='reorder')
#     def reorder(self, request):
#         order_data = request.data.get('order', [])
        
#         if not order_data:
#             return Response(
#                 {"error": "No order data provided"},
#                 status=status.HTTP_400_BAD_REQUEST
#             )

#         try:
#             for item in order_data:
#                 country_id = item.get('id')
#                 new_order = item.get('order')
#                 if country_id is None or new_order is None:
#                     return Response(
#                         {"error": "Invalid order data format"},
#                         status=status.HTTP_400_BAD_REQUEST
#                     )
                
#                 FreeEducationCountry.objects.filter(id=country_id).update(order=new_order)

#             return Response(
#                 {"message": "Order updated successfully"},
#                 status=status.HTTP_200_OK
#             )
#         except Exception as e:
#             return Response(
#                 {"error": str(e)},
#                 status=status.HTTP_500_INTERNAL_SERVER_ERROR
#             )
            
# router.register(r'free-education-title', views.FreeEducationTitleViewSet)
# router.register(r'free-education-country', views.FreeEducationCountryViewSet)


# class Destination(models.Model):
#     destination_image = models.ImageField(upload_to='country_service/', null=True, blank=True)
#     destination_name = models.CharField(max_length=255, null=True, blank=True)
#     destination_description = models.CharField(max_length=2000, null=True, blank=True)
#     slug = models.SlugField(max_length=200, unique=True, null=True, blank=True)
#     order = models.IntegerField(default=0)

#     def __str__(self):
#         return self.destination_name or self.slug or "Unnamed Destination"

#     class Meta:
#         ordering = ['order']

# class DestinationDedicatedPage(models.Model):
#     destination = models.ForeignKey(Destination, related_name='subcategories', on_delete=models.CASCADE)
#     banner_image = models.ImageField(upload_to='country_service/', null=True, blank=True)
#     banner_title = models.CharField(max_length=255, null=True, blank=True)
    
#     def __str__(self):
#         return self.banner_title or "Dedicated Destination Page Banner"

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