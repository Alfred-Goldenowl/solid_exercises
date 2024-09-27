/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

class PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing payment of $${amount}`);
    }
}

class OnlinePaymentProcessor extends PaymentProcessor{
    processPayment(amount: number): void {
        console.log(`Processing payment of $${amount}`);
    }
}

class DirectPaymentProcessor extends PaymentProcessor{
    processPayment(amount: number): void {
        console.log(`Processing payment of $${amount}`);
    }
}

class CreditCardPayment extends OnlinePaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
        console.log("Validating credit card details...");
        console.log("Charging the credit card...");
    }
}

class PayPalPayment extends OnlinePaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
        console.log("Redirecting to PayPal...");
        console.log("Completing PayPal transaction...");
    }
}
class CashPayment extends DirectPaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing cash payment of $${amount}`);
        console.log('....');
        
    }
}

function handlePayment(paymentProcessor: PaymentProcessor, amount: number): void {
    paymentProcessor.processPayment(amount);
}

const creditCardPayment = new CreditCardPayment();
handlePayment(creditCardPayment, 100); // Output: Processed payment successfully

const payPalPayment = new PayPalPayment();
handlePayment(payPalPayment, 200); // Output: Processed payment successfully

const cashPayment = new CashPayment();
handlePayment(cashPayment, 50); // Output: Error: Cannot process cash payment online!
