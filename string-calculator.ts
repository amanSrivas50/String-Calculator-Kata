export class StringCalculator {
    
    static readonly regex = /,|\n/; // for comma and new line

    static add(numbers: string): number {
        const inputNumberArray = numbers.split(StringCalculator.regex)
        let sum: number = 0;
        inputNumberArray.forEach((number) => {
            if (isNaN(Number(number))) throw Error("Invalid Output");
            sum += Number(number);
        })
        return sum;
    }
}




