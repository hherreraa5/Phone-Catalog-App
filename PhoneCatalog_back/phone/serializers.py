
from collections import OrderedDict
from .models import Phone
from rest_framework import serializers


class PhoneDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phone
        fields = '__all__'
    
    def to_representation(self, value):
        repr_dict = super(PhoneDetailSerializer, self).to_representation(value)
        return OrderedDict((k, v) for k, v in repr_dict.items() 
                           if v not in [None, [], '', {}])



