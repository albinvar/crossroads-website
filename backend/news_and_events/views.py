from rest_framework import viewsets, permissions
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from django.http import Http404
from .models import NewsEventsBanner, NewsEventsListing, NewsEventsRecap
from .serializers import NewsEventsBannerSerializer, NewsEventsListingSerializer, NewsEventsRecapSerializer
from django_filters.rest_framework import DjangoFilterBackend

class NewsEventsBannerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = NewsEventsBanner.objects.all()
    serializer_class = NewsEventsBannerSerializer

class NewsEventsListingViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = NewsEventsListing.objects.all()
    serializer_class = NewsEventsListingSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['date']

    def get_queryset(self):
        queryset = super().get_queryset()
        date_lt = self.request.query_params.get('date__lt', None)
        if date_lt:
            try:
                queryset = queryset.filter(date__lt=date_lt)
            except ValueError:
                pass 
        ordering = self.request.query_params.get('ordering', None)
        if ordering:
            queryset = queryset.order_by(ordering)
        return queryset

    @action(detail=False, methods=['get'], url_path='by-link/(?P<link>[^/.]+)')
    def get_by_link(self, request, link=None):
        try:
            event = NewsEventsListing.objects.get(link=link)
            serializer = self.get_serializer(event)
            return Response(serializer.data)
        except NewsEventsListing.DoesNotExist:
            raise Http404("Event not found")

    @action(detail=False, methods=['post'], url_path='reorder')
    def reorder(self, request):
        try:
            order_data = request.data.get('order', [])
            if not order_data or not isinstance(order_data, list):
                return Response(
                    {"error": "Invalid order data provided."},
                    status=400
                )

            for item in order_data:
                news_events_id = item.get('id')
                new_order = item.get('order')
                
                try:
                    event = NewsEventsListing.objects.get(id=news_events_id)
                    event.order = new_order
                    event.save()
                except NewsEventsListing.DoesNotExist:
                    return Response(
                        {"error": f"Event with id {news_events_id} not found."},
                        status=404
                    )

            return Response(
                {"message": "Order updated successfully."},
                status=200
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=500
            )
            
class NewsEventsRecapViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = NewsEventsRecap.objects.all()
    serializer_class = NewsEventsRecapSerializer
