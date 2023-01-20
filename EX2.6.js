function YearsAndCenturies(year) {
    if (year % 100 == 0) {
        return year / 100;
    }
    return Number.parseInt((year / 100) + 1);
}

console.log(YearsAndCenturies(1705));
console.log(YearsAndCenturies(1900));
console.log(YearsAndCenturies(1601));
console.log(YearsAndCenturies(2000));