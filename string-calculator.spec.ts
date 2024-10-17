import { describe, vitest,it, expect, test } from "vitest";
import { StringCalculator } from "./string-calculator";

let input: string;
let result: number;

test('empty string', () => {
    input = '';
    result = StringCalculator.add(input);
    expect(result).toBe(0);
})

test('single input', () => {
    input = '1';
    result = StringCalculator.add(input);
    expect(result).toBe(1);
})

test('multiple input', () => {
    input = '1,5';
    result = StringCalculator.add(input);
    expect(result).toBe(6);
})

test('input in multiple lines 1', () => {
    input = '1\n2,3';
    result = StringCalculator.add(input);
    expect(result).toBe(6);
})

test('input in multiple lines 2', () => {
    input = '1\n2,3\n2';
    result = StringCalculator.add(input);
    expect(result).toBe(8);
})
    
test('custom delimiter 1', () => {
    input = '//;\n1;2';
    result = StringCalculator.add(input);
    expect(result).toBe(3);
})

test('custom delimiter 2', () => {
    input = '//*$\n1*$2*$4';
    result = StringCalculator.add(input);
    expect(result).toBe(7);
})
