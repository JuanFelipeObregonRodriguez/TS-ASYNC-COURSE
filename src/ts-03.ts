export type formatedTime = 'year' | 'month' | 'day';

class MyDate1 {
  constructor(public year: number, public month: number, private day: number) {}

  printTime(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `day: ${day} month: ${month} year: ${this.year}`;
  }

  addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }
  add(amount: number, type: formatedTime) {
    if (type === 'day') {
      this.day += amount;
    }
    if (type === 'month') {
      this.month += amount;
    }
    if (type === 'year') {
      this.year += amount;
    }
  }
  get isLeapYear() {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get Day() {
    return this.day;
  }
  set Month(newValue: number){
    if (newValue >= 1 && newValue <= 12) {
        this.month = newValue   
    }  
  }
}

const schedule = new MyDate1(2023, 9, 7);
console.log(schedule.printTime());
schedule.add(10, 'month');
console.log(schedule.printTime());
console.log(schedule.Day); 
const schedule2 = new MyDate1(2023, 9, 7);
console.log('2023', schedule2.isLeapYear);

const schedule3 = new MyDate1(2000, 9, 7);
console.log('2000', schedule3.isLeapYear);
 