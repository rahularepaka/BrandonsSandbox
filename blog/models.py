from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=500)
    created = models.DateField()
    content = models.TextField(max_length=20000)