import { addTwoValues } from "./utils";

test('It adds the value correctly', () => {
    expect(addTwoValues(1,3)).toBe(5);
})