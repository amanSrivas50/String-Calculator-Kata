export class StringCalculator {
    
    static readonly REGEX = /,|\n/; // for comma and new line

    static readonly startOfCustomDelimiter = '//';
    
    static readonly endOfCustomDelimiter ='\n';

    static add(numbers: string): number {
        let delimiter:any = StringCalculator.REGEX;
        if (numbers.startsWith(StringCalculator.startOfCustomDelimiter)) {
            const indexOfEndOfCustomDelimiter = numbers.indexOf(StringCalculator.endOfCustomDelimiter);
            delimiter = StringCalculator.getCustomDelimiter(numbers,indexOfEndOfCustomDelimiter);
            numbers = numbers.slice(indexOfEndOfCustomDelimiter + 1);
        }
        const inputNumberArray = numbers.split(delimiter)
        let sum: number = 0;
        let negativeNumbers:string =''; //to store negative numbers if present
        inputNumberArray.forEach((number) => {
            const numberValue=Number(number)
            if (isNaN(numberValue)) throw Error("Invalid Output");
            else if (numberValue < 0) {
                negativeNumbers+=numberValue+', '
            }
            else sum += numberValue;
        })
        if (negativeNumbers.length > 0) {
            throw Error("negative numbers not allowed "+negativeNumbers.slice(0,-2))
        }
        return sum;
    }


    static getCustomDelimiter(numbers: string,indexOfEndOfCustomDelimiter:number): string{
        if(indexOfEndOfCustomDelimiter<0) throw Error("Invalid Output");
        return numbers.slice(2, indexOfEndOfCustomDelimiter);
    }
}




