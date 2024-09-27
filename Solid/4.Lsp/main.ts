/**
 * *****************************************
 * 📝 UNCOMMENT THE CODE BELOW AND BEGIN YOUR SOLUTION:
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */
interface OldMachine{
    print(document: string): void;
}
interface Machine extends OldMachine {
    scan(document: string): void;
    fax(document: string): void;
}

class OldFashionedPrinter implements OldMachine {
    print(document: string): void {
        console.log(`Printing document: ${document}`);
    }

    
}

const printer = new OldFashionedPrinter();
printer.print("Document 1");

// printer.scan("Document 2"); // Lỗi: Scan not supported
// printer.fax("Document 3");  // Lỗi: Fax not supported

