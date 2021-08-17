from django.db import models
from django.db.models.base import Model
from django.contrib.auth.models import User

# Create your models here.


class Watchlist(models.Model):
    ticker = models.TextField()
    price = models.TextField()
    onwer = models.ForeignKey(User, related_name='cores', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.ticker