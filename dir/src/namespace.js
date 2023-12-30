export var MathUtil;
(function (MathUtil) {
    function sumOfArray(...numbers) {
        let total = 0;
        for (let index in numbers) {
            total += numbers[index];
        }
        return total;
    }
    MathUtil.sumOfArray = sumOfArray;
    MathUtil.PI = 3.14;
})(MathUtil || (MathUtil = {}));
