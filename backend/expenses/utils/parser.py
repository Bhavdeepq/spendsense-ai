import re


def categorize_expense(text):
    text = text.lower()

    categories = {
        "Food": ["pizza", "burger", "swiggy", "zomato", "food", "restaurant"],
        "Transport": ["uber", "ola", "cab", "metro", "bus", "fuel"],
        "Shopping": ["amazon", "flipkart", "shopping", "mall"],
        "Bills": ["recharge", "electricity", "wifi", "bill"],
        "Entertainment": ["movie", "netflix", "game"],
    }

    amount_match = re.search(r'\d+', text)
    amount = float(amount_match.group()) if amount_match else 0

    category = "Other"

    for cat, keywords in categories.items():
        if any(word in text for word in keywords):
            category = cat
            break

    title = text

    return {
        "title": title,
        "amount": amount,
        "category": category
    }