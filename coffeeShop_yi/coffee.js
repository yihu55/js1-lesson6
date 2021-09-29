const coffees = [{
    name: 'Brygg Kaffe',
    price: 20
}, {
    name: 'Cappucino',
    price: 30
}, {
    name: 'Latte',
    price: 40
}]


let transactions = []


// loop through coffe options
function options() {
    const select = document.getElementById("coffee")
    select.innerHTML = ""
    for (let i = 0; i < coffees.length; i++) {
        let option = document.createElement("option")
        option.innerHTML = `${coffees[i].name} -${countPrice(i)} kr`
        option.value = i;
        select.appendChild(option)
    }
}

//add transactions to transactions array
function addTransaction(id, amount) {
    const price = countPrice(id)
    const name = coffees[id].name
    const sum = price * amount
    transactions.push({
        id,
        name,
        amount,
        price,
        sum
    })

}

function getTotalCups() {
    let totalCups = 0
    transactions.forEach((item) => {
        totalCups += parseInt(item.amount)
    })
    return totalCups
}


function getTotalSum() {
    let totalSum = 0
    transactions.forEach((transaction) => {
        totalSum += transaction.sum

    })
    return totalSum
}

function countPrice(id) {
    const reached500 = 500
    const reached1000 = 1000
    const discountAfter500 = 0.9
    const discountAfter1000 = 0.85

    let price = coffees[id].price //get all three prices 
    const totalSum = getTotalSum()
    if (totalSum >= reached1000) {
        price *= discountAfter1000
    } else if (totalSum >= reached500) {
        price *= discountAfter500
    }
    return price

}


function currentTotalSum() {
    const currentTotal = document.getElementById("currentTotalSum")
    currentTotal.innerHTML = `Du har handlat för ${getTotalSum()}`
}


function getMembershipStatus(totalCups) {
    const memberStatus = document.getElementById("memberstatus")

    if (totalCups >= 0 && totalCups < 10) { //|| isNaN(totalCups)) { //isNaN(totalCups)return true, when amount is a empty string
        memberStatus.innerHTML = "Medlemskapsstatus:Brons"
    } else if (totalCups >= 10 && totalCups <= 30) {
        memberStatus.innerHTML = "Medlemskapsstatus:Silver"
    } else {
        memberStatus.innerHTML = "Medlemskapsstatus:Guld"
    }
}


function checkCupsAmount(amountOfCups) {
    const maxCups = 10
    const errorText = document.getElementById("errorTextMessage")

    if (amountOfCups <= 0 || amountOfCups === "") {

        errorText.innerText = "Du måste ha ett positive antal."
        throw new RangeError("Only positive values allowd")
        return false
    } else if (amountOfCups > maxCups) {

        errorText.innerText = "Du kan inte köpa mer än 10 koppar." //error message should be called before throw new rangeError
        throw new RangeError("No more than 10 cups")
        return false
    } else {
        errorText.innerHTML = ""
        return true

    }
}

function showTransaction() {
    const transactionsHeader = document.getElementById("transactionHeader")
    const parentTransaction = document.getElementById("transaction")
    parentTransaction.innerHTML = ""


    transactions.forEach(function(transaction) {
        const coffeeList = document.createElement("p")
        coffeeList.innerHTML = `Du har handlat ${transaction.amount}  ${transaction.name} för ${transaction.price} kr styck. Summa: ${transaction.sum}`
        parentTransaction.prepend(coffeeList)
    })
    if (transactions.length >= 1) {
        transactionsHeader.innerHTML = "Dina transaktioner"
    }
}


function onBuyButton() {

    const amountOfCups = document.getElementById("amountOfCups").value
    const coffeeSelected = document.getElementById("coffee").value

    if (checkCupsAmount(amountOfCups)) {

        addTransaction(coffeeSelected, amountOfCups)
        checkCupsAmount()
        options() //options() after checkCups(),otherwise when totalSum reached 500, options price is unchanged
        getMembershipStatus(getTotalCups())
        showTransaction()
        currentTotalSum()
    }

}