export class StringCalculator {
    static add(numbers: string): number {
        if (!numbers.length) return 0;
        return Number(numbers);
    }
}



