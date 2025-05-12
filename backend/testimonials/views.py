from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import TestimonialBanner, TestimonialTabs, TestimonialListingImage, TestimonialListingVideo
from .serializers import TestimonialBannerSerializer, TestimonialTabsSerializer, TestimonialListingImageSerializer, TestimonialListingVideoSerializer

class TestimonialBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = TestimonialBanner.objects.all()
    serializer_class = TestimonialBannerSerializer
    
class TestimonialTabsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = TestimonialTabs.objects.all()
    serializer_class = TestimonialTabsSerializer

    @action(detail=False, methods=['post'], url_path='reorder')
    def reorder(self, request):
        order_data = request.data.get('order', [])
        
        if not order_data:
            return Response(
                {"error": "No order data provided"},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            for item in order_data:
                testimonials_tab_id = item.get('id')
                new_order = item.get('order')
                if testimonials_tab_id is None or new_order is None:
                    return Response(
                        {"error": "Invalid order data format"},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                
                TestimonialTabs.objects.filter(id=testimonials_tab_id).update(order=new_order)

            return Response(
                {"message": "Order updated successfully"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class TestimonialListingImageViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = TestimonialListingImage.objects.all()
    serializer_class = TestimonialListingImageSerializer

    @action(detail=False, methods=['post'], url_path='reorder')
    def reorder(self, request):
        order_data = request.data.get('order', [])
        
        if not order_data:
            return Response(
                {"error": "No order data provided"},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            for item in order_data:
                testimonials_image_id = item.get('id')
                new_order = item.get('order')
                if testimonials_image_id is None or new_order is None:
                    return Response(
                        {"error": "Invalid order data format"},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                
                TestimonialListingImage.objects.filter(id=testimonials_image_id).update(order=new_order)

            return Response(
                {"message": "Order updated successfully"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class TestimonialListingVideoViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = TestimonialListingVideo.objects.all()
    serializer_class = TestimonialListingVideoSerializer

    @action(detail=False, methods=['post'], url_path='reorder')
    def reorder(self, request):
        order_data = request.data.get('order', [])
        
        if not order_data:
            return Response(
                {"error": "No order data provided"},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            for item in order_data:
                testimonials_video_id = item.get('id')
                new_order = item.get('order')
                if testimonials_video_id is None or new_order is None:
                    return Response(
                        {"error": "Invalid order data format"},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                
                TestimonialListingImage.objects.filter(id=testimonials_video_id).update(order=new_order)

            return Response(
                {"message": "Order updated successfully"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )