from django.db import models
# Create your models here.

class Watchlist(models.Model):
    ticker = models.TextField()
    price = models.TextField()

    def __str__(self):
        return self.ticker