export class StringCalculator {
    static add(numbers: string): number {
        if (!numbers.length) return 0;
        throw Error("Invalid Input");
    }
}



