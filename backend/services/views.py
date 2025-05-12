from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from .models import ServiceHighlights, DocumentationAssistanceBanner, LanguageLabBanner, CountryServiceBanner, CourseServiceBanner, DocumentationAssistanceTab, DocumentationAssistanceListing, LanguageLabListing, Destination, DestinationDedicatedPage, DestinationDedicatedKeyFact, DestinationDedicatedChooseTitle, DestinationDedicatedChooseList, DestinationDedicatedIntakeInformation, DestinationDedicatedAssistance
from .serializers import ServiceHighlightsSerializer, DocumentationAssistanceBannerSerializer, LanguageLabBannerSerializer, CountryServiceBannerSerializer, CourseServiceBannerSerializer, DocumentationAssistanceTabSerializer, DocumentationAssistanceListingSerializer, LanguageLabListingSerializer, DestinationSerializer, DestinationDedicatedPageSerializer, DestinationDedicatedKeyFactSerializer, DestinationDedicatedChooseTitleSerializer, DestinationDedicatedChooseListSerializer, DestinationDedicatedIntakeInformationSerializer, DestinationDedicatedAssistanceSerializer

class ServiceHighlightsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = ServiceHighlights.objects.all()
    serializer_class = ServiceHighlightsSerializer

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
                service_highlights_id = item.get('id')
                new_order = item.get('order')
                if service_highlights_id is None or new_order is None:
                    return Response(
                        {"error": "Invalid order data format"},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                
                ServiceHighlights.objects.filter(id=service_highlights_id).update(order=new_order)

            return Response(
                {"message": "Order updated successfully"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
            
class DocumentationAssistanceBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = DocumentationAssistanceBanner.objects.all()
    serializer_class = DocumentationAssistanceBannerSerializer
    
class DocumentationAssistanceTabViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = DocumentationAssistanceTab.objects.all()
    serializer_class = DocumentationAssistanceTabSerializer

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
                tab_id = item.get('id')
                new_order = item.get('order')
                if tab_id is None or new_order is None:
                    return Response(
                        {"error": "Invalid order data format"},
                        status=status.HTTP_400_BAD_REQUEST
                    )

                DocumentationAssistanceTab.objects.filter(id=tab_id).update(order=new_order)

            return Response(
                {"message": "Order updated successfully"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class DocumentationAssistanceListingViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = DocumentationAssistanceListing.objects.all()
    serializer_class = DocumentationAssistanceListingSerializer

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
                documentation_listing_id = item.get('id')
                new_order = item.get('order')
                if documentation_listing_id is None or new_order is None:
                    return Response(
                        {"error": "Invalid order data format"},
                        status=status.HTTP_400_BAD_REQUEST
                    )

                DocumentationAssistanceListing.objects.filter(id=documentation_listing_id).update(order=new_order)

            return Response(
                {"message": "Order updated successfully"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
class LanguageLabBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = LanguageLabBanner.objects.all()
    serializer_class = LanguageLabBannerSerializer
    
class LanguageLabListingViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = LanguageLabListing.objects.all()
    serializer_class = LanguageLabListingSerializer

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
                language_lab_listing_id = item.get('id')
                new_order = item.get('order')
                if language_lab_listing_id is None or new_order is None:
                    return Response(
                        {"error": "Invalid order data format"},
                        status=status.HTTP_400_BAD_REQUEST
                    )

                LanguageLabListing.objects.filter(id=language_lab_listing_id).update(order=new_order)

            return Response(
                {"message": "Order updated successfully"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
class CountryServiceBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = CountryServiceBanner.objects.all()
    serializer_class = CountryServiceBannerSerializer
    
class DestinationViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer
    lookup_field = "slug"

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
                destination_id = item.get('id')
                new_order = item.get('order')
                if destination_id is None or new_order is None:
                    return Response(
                        {"error": "Invalid order data format"},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                Destination.objects.filter(id=destination_id).update(order=new_order)
            return Response(
                {"message": "Order updated successfully"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class DestinationDedicatedPageViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = DestinationDedicatedPage.objects.all()
    serializer_class = DestinationDedicatedPageSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        destination_slug = self.request.query_params.get('destination_slug')
        if destination_slug:
            queryset = queryset.filter(destination__slug=destination_slug)
        return queryset

class DestinationDedicatedKeyFactViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = DestinationDedicatedKeyFact.objects.all()
    serializer_class = DestinationDedicatedKeyFactSerializer
    
class DestinationDedicatedChooseTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = DestinationDedicatedChooseTitle.objects.all()
    serializer_class = DestinationDedicatedChooseTitleSerializer

class DestinationDedicatedChooseListViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = DestinationDedicatedChooseList.objects.all()
    serializer_class = DestinationDedicatedChooseListSerializer

class DestinationDedicatedIntakeInformationViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = DestinationDedicatedIntakeInformation.objects.all()
    serializer_class = DestinationDedicatedIntakeInformationSerializer
    
class DestinationDedicatedAssistanceViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = DestinationDedicatedAssistance.objects.all()
    serializer_class = DestinationDedicatedAssistanceSerializer

class CourseServiceBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = CourseServiceBanner.objects.all()
    serializer_class = CourseServiceBannerSerializer