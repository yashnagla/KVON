def calculate_tax_and_gst():
    print("Income Tax and GST Calculator\n")

    # Input income details
    monthly_income = float(input("Enter your monthly income (in INR): "))
    annual_income = monthly_income * 12

    # Input income tax details
    income_tax_rate = float(input("Enter income tax rate (as a percentage, e.g., 10 for 10%): "))

    # Input GST details
    gst_rate = float(input("Enter GST rate (as a percentage, e.g., 18 for 18%): "))
    gst_applicable_income = float(input("Enter income subject to GST (monthly, in INR): "))

    # Calculate income tax
    monthly_income_tax = (income_tax_rate / 100) * monthly_income
    annual_income_tax = monthly_income_tax * 12

    # Calculate GST
    monthly_gst = (gst_rate / 100) * gst_applicable_income
    annual_gst = monthly_gst * 12

    # Total tax and GST
    total_monthly_tax = monthly_income_tax + monthly_gst
    total_annual_tax = annual_income_tax + annual_gst

    # Output results
    print("\n--- Results ---")
    print(f"Monthly Income Tax: INR {monthly_income_tax:.2f}")
    print(f"Annual Income Tax: INR {annual_income_tax:.2f}")
    print(f"Monthly GST: INR {monthly_gst:.2f}")
    print(f"Annual GST: INR {annual_gst:.2f}")
    print(f"Total Monthly Tax and GST: INR {total_monthly_tax:.2f}")
    print(f"Total Annual Tax and GST: INR {total_annual_tax:.2f}")

# Run the program
calculate_tax_and_gst()
