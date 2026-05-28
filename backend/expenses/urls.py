from django.urls import path
from .views import (
    ExpenseListCreateView,
    ParseExpenseView,
    RegisterView
)

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path(
        'expenses/',
        ExpenseListCreateView.as_view(),
        name='expenses'
    ),

    path(
        'parse-expense/',
        ParseExpenseView.as_view(),
        name='parse-expense'
    ),

    path(
        'register/',
        RegisterView.as_view(),
        name='register'
    ),

    path(
        'login/',
        TokenObtainPairView.as_view(),
        name='login'
    ),

    path(
        'token/refresh/',
        TokenRefreshView.as_view(),
        name='token_refresh'
    ),
]