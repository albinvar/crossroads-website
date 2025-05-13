from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import SocialMedia
from .serializers import SocialMediaSerializer

class SocialMediaViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = SocialMedia.objects.all()
    serializer_class = SocialMediaSerializer