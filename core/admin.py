from django.contrib import admin
from .models import Watchlist
# Register your models here.

class WatchlistAdmin(admin.ModelAdmin):
    list = ('ticker', 'price')

admin.site.register(Watchlist, WatchlistAdmin)
