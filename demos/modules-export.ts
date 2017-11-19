export interface IValidator {
    validate(value: any): boolean;
}

export class NumberValidator implements IValidator {
    validate(value: number) {
        return !isNaN(value) && isFinite(value);
    }
}

export function sum(x: number, y: number) {
    return x + y;
}

export const key = '1a2b3c';
