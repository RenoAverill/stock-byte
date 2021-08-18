from .models import Watchlist
from rest_framework import serializers


class WatchlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Watchlist
        fields = ('ticker', 'price')