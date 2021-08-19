
from django.urls import path
from .views import UserList, BlacklistTokenUpdateView

app_name = 'users'

urlpatterns = [
    path('create/',UserList.as_view(), name="create_user"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(), name='blacklist')
]