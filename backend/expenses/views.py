from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

from .models import Expense
from .serializers import ExpenseSerializer
from .utils.parser import categorize_expense
from .auth_serializers import RegisterSerializer


# Register User
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


# User Expenses Only
class ExpenseListCreateView(generics.ListCreateAPIView):
    serializer_class = ExpenseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Expense.objects.filter(
            user=self.request.user
        ).order_by('-date')


# AI Parse + Save Expense
class ParseExpenseView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        text = request.data.get("text", "")

        data = categorize_expense(text)

        expense = Expense.objects.create(
            user=request.user,
            title=data["title"],
            amount=data["amount"],
            category=data["category"]
        )

        return Response({
            "id": expense.id,
            "title": expense.title,
            "amount": expense.amount,
            "category": expense.category
        })