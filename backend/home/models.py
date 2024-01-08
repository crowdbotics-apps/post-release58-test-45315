from django.conf import settings
from django.db import models


class Suma(models.Model):
    "Generated Model"
    testv1 = models.CharField(
        max_length=99,
    )
    testv2 = models.EmailField(
        max_length=254,
    )
    testv3 = models.BigIntegerField()
