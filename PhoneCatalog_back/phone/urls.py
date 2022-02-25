
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from .views import PhoneViewSet

urlpatterns = [
    path('', PhoneViewSet.as_view({'get': 'list'})),
]

urlpatterns = format_suffix_patterns(urlpatterns)
