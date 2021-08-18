from .models import Watchlist
from django.shortcuts import render
from .serializers import WatchlistSerializer
from django.http import HttpResponseRedirect
from rest_framework import permissions, status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import WatchlistSerializer

# Create your views here.
class watchlistView(viewsets.ModelViewSet):
    serializer_class = WatchlistSerializer
    queryset = Watchlist.objects.all()


@api_view(['GET', 'POST', 'DELETE'])
def watchlistList(request, ticker=None):
    if request.method == 'GET':
        data = Watchlist.objects.all()

        serializer = WatchlistSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = WatchlistSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Watchlist.objects.get(ticker=ticker).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    return Response(status=status.HTTP_400_BAD_REQUEST)

def delete_view(request, id):
    context ={}
    obj = Watchlist.objects.get(id=id)
    if request.method =="POST":
        obj.delete()
        return HttpResponseRedirect("/")
    return render(request, "delete_view.html", context)