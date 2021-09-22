class Voter {
    constructor(age) {
            this.age = age
        }
        // canVote() {
        //     return this.age >= 18
        // }
    canVote = () => this.age >= 18
}
const voter1 = new Voter(17)
console.log(voter1.canVote())

const voter2 = new Voter(23)
console.log(voter2.canVote())