from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import HomeBanner, NewsEventsTitle,  TestimonialTitle, TestimonialImage, TestimonialVideo
from .serializers import HomeBannerSerializer, NewsEventsTitleSerializer, TestimonialTitleSerializer, TestimonialImageSerializer, TestimonialVideoSerializer

class HomeBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = HomeBanner.objects.all()
    serializer_class = HomeBannerSerializer

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
                banner_id = item.get('id')
                new_order = item.get('order')
                if banner_id is None or new_order is None:
                    return Response(
                        {"error": "Invalid order data format"},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                
                HomeBanner.objects.filter(id=banner_id).update(order=new_order)

            return Response(
                {"message": "Order updated successfully"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
            
class NewsEventsTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = NewsEventsTitle.objects.all()
    serializer_class = NewsEventsTitleSerializer

class TestimonialTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = TestimonialTitle.objects.all()
    serializer_class = TestimonialTitleSerializer        
            
class TestimonialImageViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = TestimonialImage.objects.all()
    serializer_class = TestimonialImageSerializer
    
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
                testimonial_image_id = item.get('id')
                new_order = item.get('order')
                if testimonial_image_id is None or new_order is None:
                    return Response(
                        {"error": "Invalid order data format"},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                
                TestimonialImage.objects.filter(id=testimonial_image_id).update(order=new_order)

            return Response(
                {"message": "Order updated successfully"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class TestimonialVideoViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = TestimonialVideo.objects.all()
    serializer_class = TestimonialVideoSerializer
    
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
                testimonial_video_id = item.get('id')
                new_order = item.get('order')
                if testimonial_video_id is None or new_order is None:
                    return Response(
                        {"error": "Invalid order data format"},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                
                TestimonialVideo.objects.filter(id=testimonial_video_id).update(order=new_order)

            return Response(
                {"message": "Order updated successfully"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )