/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

interface IEmailService{
    sendEmail(message: string): void;
}
class EmailService implements IEmailService {
    sendEmail(message: string): void {
        console.log(`Sending email with message: ${message}`);
    }
}

class SendNotification {
    private emailService: IEmailService;

    constructor() {
        this.emailService = new EmailService();
    }

    sendNotification(message: string): void {
        this.emailService.sendEmail(message);
    }
}

const notification = new SendNotification();
notification.sendNotification("Hello, this is a notification!");