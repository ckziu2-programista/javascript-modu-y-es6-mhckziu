export function divide(a, b) {
    if(!b) {
        throw new Error("Cannot divide by zero");
    }
    return a / b
}