from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('phone/', include(('phone.urls', 'phone'), namespace='phone')),
]