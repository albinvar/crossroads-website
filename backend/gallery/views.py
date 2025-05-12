from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import GalleryBanner, GalleryCreate, GalleryAddImage, GalleryAddVideo
from .serializers import GalleryBannerSerializer, GalleryCreateSerializer, GalleryAddImageSerializer, GalleryAddVideoSerializer

class GalleryBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = GalleryBanner.objects.all()
    serializer_class = GalleryBannerSerializer
    
class GalleryCreateViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = GalleryCreate.objects.all()
    serializer_class = GalleryCreateSerializer

    @action(detail=False, methods=['get'], url_path='by-link/(?P<link>[^/.]+)')
    def get_by_link(self, request, link=None):
        try:
            gallery = self.queryset.get(link=link)
            serializer = self.get_serializer(gallery)
            return Response(serializer.data)
        except GalleryCreate.DoesNotExist:
            return Response({"error": "Gallery not found"}, status=404)

class GalleryAddImageViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = GalleryAddImage.objects.all()
    serializer_class = GalleryAddImageSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        gallery_id = self.request.query_params.get('gallery')
        if gallery_id:
            queryset = queryset.filter(gallery_id=gallery_id)
        return queryset

class GalleryAddVideoViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = GalleryAddVideo.objects.all()
    serializer_class = GalleryAddVideoSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        gallery_id = self.request.query_params.get('gallery')
        if gallery_id:
            queryset = queryset.filter(gallery_id=gallery_id)
        return queryset