from rest_framework import generics
from .models import Expense
from .serializers import ExpenseSerializer


class ExpenseListCreateView(generics.ListCreateAPIView):
    queryset = Expense.objects.all().order_by('-date')
    serializer_class = ExpenseSerializer

from rest_framework.response import Response
from rest_framework.views import APIView
from .utils.parser import categorize_expense

class ParseExpenseView(APIView):
    def post(self, request):
        text = request.data.get("text", "")

        data = categorize_expense(text)

        expense = Expense.objects.create(
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