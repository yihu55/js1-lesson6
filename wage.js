/*
day
starTime
endTime
hourlySalary
*/

class Wage {
    constructor(day, startTime, endTime, hourlySalary) {
        this.day = day
        this.startTime = startTime
        this.endTime = endTime
        this.hourlySalary = hourlySalary

        this.maximumHours = 12
        this.extraHoursCountFrom = 8

        this.normalSalary = 0
        this.extraSalary = 0
        this.weekendSalary = 0

    }
    getTotalHours() {
        return this.endTime - this.startTime
    }
    getExtraTimeHours() {
        if (this.getTotalHours() > this.extraHoursCountFrom) {
            return this.getTotalHours() - this.extraHoursCountFrom
        } else {
            return 0
        }
    }
    isWeekend() {
        return this.day === "Saturday" || this.day === "Sunday"
    }
    calculateWeekEndWage() {
        this.normalSalary = this.getTotalHours() * this.hourlySalary
        this.weekendSalary = this.normalSalary
    }
    calculateWeekDayWage() {
        this.normalSalary = this.getTotalHours() * this.hourlySalary
        this.extraSalary = this.getExtraTimeHours() * this.hourlySalary * 0.5
    }
    getMessage() {
        if (this.getTotalHours() > this.maximumHours) {
            return `You may not work for more than ${this.maximumHours}`
        } else {
            return `Your total salary is: ${this.calculateWage()}`
        }
    }
    calculateWage() {
        if (this.isWeekend()) {
            this.calculateWeekEndWage()
        } else {
            this.calculateWeekDayWage()
        }
        return this.normalSalary + this.extraSalary + this.weekendSalary
    }

}
const wage1 = new Wage("Sunday", 8, 17, 200)
console.log(wage1.getTotalHours())
console.log(wage1.getExtraTimeHours())
console.log(wage1.isWeekend())
console.log(wage1.calculateWage())

const wage2 = new Wage("Monday", 9, 20, 200)
console.log(wage2.getMessage(), wage2.calculateWage())