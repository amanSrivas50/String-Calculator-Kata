export class StringCalculator {
    static add(numbers: string): number {
        const inputNumberArray = numbers.split(',')
        let sum: number = 0;
        inputNumberArray.forEach((number) => {
            if (isNaN(Number(number))) throw Error("Invalid Output");
            sum += Number(number);
        })
        return sum;
    }
}




