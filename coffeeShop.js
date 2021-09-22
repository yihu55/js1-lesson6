class Customer {
    constructor() {
        this.transactions = []
        this.discountThreshold = 1000
    }
    addTransaction(amount) {
        this.transactions.push(amount)
    }
    getTotalSpent() {
        let sum = 0
        this.transactions.forEach(transaction => {
            sum += transaction
        })
        return sum
    }
    isEligableForDiscount() {
        return this.getTotalSpent() >= this.discountThreshold

    }
}
const custom1 = new Customer()
custom1.addTransaction(500)
custom1.addTransaction(50)
console.log(custom1.isEligableForDiscount())
    //