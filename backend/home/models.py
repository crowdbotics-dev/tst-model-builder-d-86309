from django.conf import settings
from django.db import models
class Hi(models.Model):
    'Generated Model'
    hello = models.CharField(max_length=256,)
