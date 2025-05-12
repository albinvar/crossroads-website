from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import ContactBanner, InfoHub
from .serializers import ContactBannerSerializer, InfoHubSerializer

class ContactBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = ContactBanner.objects.all()
    serializer_class = ContactBannerSerializer
    
class InfoHubViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = InfoHub.objects.all()
    serializer_class = InfoHubSerializer
    