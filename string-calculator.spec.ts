import { describe, vitest,it, expect, test } from "vitest";
import { StringCalculator } from "./string-calculator";

let input: string;
let result: number;

describe('without delimiter', () => {

    it('empty string', () => {
        input = '';
        result = StringCalculator.add(input);
        expect(result).toBe(0);
    })

    it('single input', () => {
        input = '1';
        result = StringCalculator.add(input);
        expect(result).toBe(1);
    })

    it('multiple input', () => {
        input = '1,5';
        result = StringCalculator.add(input);
        expect(result).toBe(6);
    })
    
})
