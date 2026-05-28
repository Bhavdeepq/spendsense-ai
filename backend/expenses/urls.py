from django.urls import path
from .views import ExpenseListCreateView, ParseExpenseView

urlpatterns = [
    path('expenses/', ExpenseListCreateView.as_view(), name='expenses'),
    path('parse-expense/', ParseExpenseView.as_view(), name='parse-expense'),
]