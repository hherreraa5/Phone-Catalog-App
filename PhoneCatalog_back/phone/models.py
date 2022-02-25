from django.db import models

# Create your models here.

class Phone(models.Model):
    name = models.CharField(max_length=50, null=True,blank=True,default="")
    description = models.CharField(max_length=800, null=True,blank=True,default="")
    price = models.CharField(max_length=50, null=True,blank=True,default="")
    color = models.CharField(max_length=50, null=True,blank=True,default="")
    storage = models.CharField(max_length=50, null=True,blank=True,default="")
    model = models.CharField(max_length=50, null=True,blank=True,default="")
    company = models.CharField(max_length=50, null=True,blank=True,default="")
    year = models.CharField(max_length=50, null=True,blank=True,default="")
    imageFront = models.CharField(max_length=500, null=True,blank=True,default="")
    video = models.CharField(max_length=500, null=True,blank=True,default="")
    amazon = models.CharField(max_length=500, null=True,blank=True,default="")
    store = models.CharField(max_length=500, null=True,blank=True,default="")
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(blank = True, null = True)

    def __str__(self):
        return self.name + '-' + self.company 