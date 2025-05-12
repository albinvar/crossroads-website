from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import TermsConditionsBanner, TermsConditionsContent
from .serializers import TermsConditionsBannerSerializer, TermsConditionsContentSerializer

class TermsConditionsBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = TermsConditionsBanner.objects.all()
    serializer_class = TermsConditionsBannerSerializer
    
class TermsConditionsContentViewSet(viewsets.ModelViewSet): 
    permission_classes = [AllowAny]
    queryset = TermsConditionsContent.objects.all()
    serializer_class = TermsConditionsContentSerializer