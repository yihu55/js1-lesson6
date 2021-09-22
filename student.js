const students = [
    { birthYear: 1980, marks: 80 },
    { birthYear: 1979, marks: 60 },
    { birthYear: 1990, marks: 70 },
    { birthYear: 2000, marks: 85 },
    { birthYear: 2010, marks: 62 },
    { birthYear: 1967, marks: 49 },
    { birthYear: 1949, marks: 30 },
    { birthYear: 1996, marks: 83 },
    { birthYear: 2001, marks: 19 },
]
class Students {
    constructor(birthYear, marks, firstName, lastName) {
        this.birthYear = birthYear
        this.marks = marks
        this.firstName = firstName
        this.lastName = lastName
    }
    getAge() {
        return 2021 - this.birthYear
    }
    getAgeAtYear(year) {
            return year - this.birthYear
        }
        //ändrar birthYear
    changeBirthYear(newBirthYear) {
        this.birthYear = newBirthYear
    }
    getFullName() {
        return ` ${this.firstName} ${this.lastName}`
    }

}
const student1 = new Students(2001, 19, "Anna", "Lagerlöf") //student1 är instance
console.log(student1.getAge(), student1.getFullName())
console.log(student1.getAgeAtYear(2023))
student1.changeBirthYear(2000)
console.log(student1.getAge())