export type formatedTime = 'year' | 'month' | 'day';

class MyDate1 {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    addPadding(value: number){
      if(value < 10){
        return `0${value}`
      }
      return`${value}`
    }
    printTime(): string{
        return `day: ${this.day} month: ${this.month} year: ${this.year}`;
    };
    add(amount: number, time: formatedTime){
        this[time] += amount
        return this.printTime
    } 

}

const schedule = new MyDate1(2023, 9, 7);
console.log(schedule.printTime());
console.log(schedule.add( 2, 'day'));


