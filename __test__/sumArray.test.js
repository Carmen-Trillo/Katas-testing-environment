import  sumArray  from "../src/sumArray";

test ("should return 6 if arrayis [1,2,3]",

() => {
    expect(sumArray([1,2,3])).toBe(6);
})