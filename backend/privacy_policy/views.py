from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import PrivacyPolicyBanner, PrivacyPolicyContent
from .serializers import PrivacyPolicyBannerSerializer, PrivacyPolicyContentSerializer

class PrivacyPolicyBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = PrivacyPolicyBanner.objects.all()
    serializer_class = PrivacyPolicyBannerSerializer
    
class PrivacyPolicyContentViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = PrivacyPolicyContent.objects.all()
    serializer_class = PrivacyPolicyContentSerializer