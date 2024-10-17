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
    
})
