from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from .models import FreeEducationTitle, FreeEducationCountry, FreeEducationCountryDedicatedPage, FreeEducationCountryDedicatedPageKeyFactListing, FreeEducationCountryDedicatedPageKeyFactTitle, FreeEducationCountryDedicatedPageRequirementsListing, FreeEducationCountryDedicatedPageRequirementsTitle, FreeEducationCountryDedicatedPageOtherOptionsListing, FreeEducationCountryDedicatedPageOtherOptionsTitle
from .serializers import FreeEducationCountrySerializer, FreeEducationTitleSerializer, FreeEducationCountryDedicatedPageSerializer, FreeEducationCountryDedicatedPageKeyFactTitleSerializer, FreeEducationCountryDedicatedPageKeyFactListingSerializer, FreeEducationCountryDedicatedPageRequirementsListingSerializer, FreeEducationCountryDedicatedPageRequirementsTitleSerializer, FreeEducationCountryDedicatedPageOtherOptionsListingSerializer, FreeEducationCountryDedicatedPageOtherOptionsTitleSerializer

class FreeEducationTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = FreeEducationTitle.objects.all()
    serializer_class = FreeEducationTitleSerializer

class FreeEducationCountryViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = FreeEducationCountry.objects.all()
    serializer_class = FreeEducationCountrySerializer

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
                free_education_country_id = item.get('id')
                new_order = item.get('order')
                if not isinstance(free_education_country_id, int) or not isinstance(new_order, int):
                    return Response(
                        {"error": "Invalid order data format"},
                        status=status.HTTP_400_BAD_REQUEST
                    )

                FreeEducationCountry.objects.filter(id=free_education_country_id).update(order=new_order)

            return Response(
                {"message": "Order updated successfully"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class FreeEducationCountryDedicatedPageViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = FreeEducationCountryDedicatedPage.objects.all()
    serializer_class = FreeEducationCountryDedicatedPageSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        free_education_country_slug = self.request.query_params.get('free_education_country_slug')
        if free_education_country_slug:
            queryset = queryset.filter(free_education_country__link=free_education_country_slug)
        return queryset

class FreeEducationCountryDedicatedPageKeyFactTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = FreeEducationCountryDedicatedPageKeyFactTitle.objects.all()
    serializer_class = FreeEducationCountryDedicatedPageKeyFactTitleSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        free_education_country_slug = self.request.query_params.get('free_education_country_slug')
        if free_education_country_slug:
            queryset = queryset.filter(free_education_country__link=free_education_country_slug)
        return queryset

class FreeEducationCountryDedicatedPageKeyFactListingViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = FreeEducationCountryDedicatedPageKeyFactListing.objects.all()
    serializer_class = FreeEducationCountryDedicatedPageKeyFactListingSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        free_education_country_slug = self.request.query_params.get('free_education_country_slug')
        if free_education_country_slug:
            queryset = queryset.filter(free_education_country__link=free_education_country_slug)
        return queryset
    
class FreeEducationCountryDedicatedPageRequirementsTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = FreeEducationCountryDedicatedPageRequirementsTitle.objects.all()
    serializer_class = FreeEducationCountryDedicatedPageRequirementsTitleSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        free_education_country_slug = self.request.query_params.get('free_education_country_slug')
        if free_education_country_slug:
            queryset = queryset.filter(free_education_country__link=free_education_country_slug)
        return queryset

class FreeEducationCountryDedicatedPageRequirementsListingViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = FreeEducationCountryDedicatedPageRequirementsListing.objects.all()
    serializer_class = FreeEducationCountryDedicatedPageRequirementsListingSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        free_education_country_slug = self.request.query_params.get('free_education_country_slug')
        if free_education_country_slug:
            queryset = queryset.filter(free_education_country__link=free_education_country_slug)
        return queryset
    
class FreeEducationCountryDedicatedPageOtherOptionsTitleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = FreeEducationCountryDedicatedPageOtherOptionsTitle.objects.all()
    serializer_class = FreeEducationCountryDedicatedPageOtherOptionsTitleSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        free_education_country_slug = self.request.query_params.get('free_education_country_slug')
        if free_education_country_slug:
            queryset = queryset.filter(free_education_country__link=free_education_country_slug)
        return queryset

class FreeEducationCountryDedicatedPageOtherOptionsListingViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = FreeEducationCountryDedicatedPageOtherOptionsListing.objects.all()
    serializer_class = FreeEducationCountryDedicatedPageOtherOptionsListingSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        free_education_country_slug = self.request.query_params.get('free_education_country_slug')
        if free_education_country_slug:
            queryset = queryset.filter(free_education_country__link=free_education_country_slug)
        return queryset