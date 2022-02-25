  
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import permission_classes
from rest_framework.permissions import  AllowAny

from .models import Phone
from .serializers import PhoneDetailSerializer

# Create your views here.
class PhoneViewSet(viewsets.ModelViewSet):

  @permission_classes([AllowAny, ]) 
  def list(self, request):
        queryset = Phone.objects.all().order_by('id')
        serializer = PhoneDetailSerializer(queryset, many=True)       
        return Response(serializer.data, status= status.HTTP_200_OK)