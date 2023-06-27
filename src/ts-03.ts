export type formatedTime = 'year' | 'month' | 'day';

class MyDate1 {

    constructor(
        public year: number, 
        public month: number, 
        public day: number
        ){}

    printTime(): string{

        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        return `day: ${day} month: ${month} year: ${this.year}`;
    };
    
    addPadding(value: number){
        if(value < 10){
          return `0${value}`
        }
        return`${value}`
      }
    add(amount: number, time: formatedTime){
        this[time] += amount
        return this.printTime
    } 

}

const schedule = new MyDate1(2023, 9, 7);
console.log(schedule.printTime());
console.log(schedule.add( 2, 'day'));


