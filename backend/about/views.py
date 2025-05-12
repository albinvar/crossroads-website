from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from .models import AboutHighlights, AboutBanner, AboutTailorGuidance, AboutWhyCrossroadsTitle, AboutWhyCrossroads, AboutMissionVision, AboutOurValues, AboutOurValuesTitle
from .serializers import AboutHighlightsSerializer, AboutBannerSerializer, AboutWhyCrossroadsTitleSerializer, AboutWhyCrossroadsSerializer, AboutTailorGuidanceSerializer, AboutMissionVisionSerializer, AboutOurValuesSerializer, AboutOurValuesTitleSerializer

class AboutHighlightsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = AboutHighlights.objects.all()
    serializer_class = AboutHighlightsSerializer

class AboutBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = AboutBanner.objects.all()
    serializer_class = AboutBannerSerializer

class AboutTailorGuidanceViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = AboutTailorGuidance.objects.all()
    serializer_class = AboutTailorGuidanceSerializer
  
class AboutWhyCrossroadsTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = AboutWhyCrossroadsTitle.objects.all()
    serializer_class = AboutWhyCrossroadsTitleSerializer  

class AboutWhyCrossroadsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = AboutWhyCrossroads.objects.all()
    serializer_class = AboutWhyCrossroadsSerializer

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
                why_crossroads_id = item.get('id')
                new_order = item.get('order')
                if why_crossroads_id is None or new_order is None:
                    return Response(
                        {"error": "Invalid order data format"},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                
                AboutWhyCrossroads.objects.filter(id=why_crossroads_id).update(order=new_order)

            return Response(
                {"message": "Order updated successfully"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class AboutMissionVisionViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = AboutMissionVision.objects.all()
    serializer_class = AboutMissionVisionSerializer

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
                mission_vision_id = item.get('id')
                new_order = item.get('order')
                if mission_vision_id is None or new_order is None:
                    return Response(
                        {"error": "Invalid order data format"},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                
                AboutMissionVision.objects.filter(id=mission_vision_id).update(order=new_order)

            return Response(
                {"message": "Order updated successfully"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
            
class AboutOurValuesTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = AboutOurValuesTitle.objects.all()
    serializer_class = AboutOurValuesTitleSerializer
    
class AboutOurValuesViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = AboutOurValues.objects.all()
    serializer_class = AboutOurValuesSerializer
    
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
                courses_offered_id = item.get('id')
                new_order = item.get('order')
                if courses_offered_id is None or new_order is None:
                    return Response(
                        {"error": "Invalid order data format"},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                
                AboutOurValues.objects.filter(id=courses_offered_id).update(order=new_order)

            return Response(
                {"message": "Order updated successfully"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )