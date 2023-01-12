class Job {
    constructor(company, role, salary, start, end) {
        this.company = company;
        this.role = role;
        this.salary = salary;
        this.start = start;
        this.end = end;
    }
}
class Debt {
    constructor(amount, n_months, interest, maintainance) {
        this.amount = amount;
        this.n_months = n_months;
        this.interest = interest;
        this.maintainance = maintainance;
        this.monthlyPayment = this.calcMonthCost()
    }
    calcMonthCost() {
        const baseMP = this.amount / this.n_months;
        let draftAmount = this.amount
        let interestPayed = 0;
        for (let month = 1; month <= this.n_months; month++) {
            interestPayed += draftAmount * this.interest;
            draftAmount -= baseMP
        }
        const totalPayment = this.amount + interestPayed + this.maintainance * this.n_months;
        const monthlyPayment = totalPayment / this.n_months
        return Math.trunc(monthlyPayment);
    }
}
class Persona {
    constructor(nombre, dob, startingAmount = 0, startingDebt = 0) {
        this.nombre = nombre;
        this.dob = dob;
        this.startingAmount = startingAmount;
        this.jobs = [];
        this.debts = [];
        this.startingDebt = startingDebt;
        this.networth = this.startingAmount - this.startingDebt;
    }
    addJob(job) {
        this.jobs.push(job);
    }
    addDebt(debt) {
        this.debts.push(debt);
    }
    addExpense() {

    }
    showInfo() {
        for (const propiedad in this) {
            if (propiedad == 'jobs') {
                for (const job in this[propiedad]) {
                    for (const jobProp in this[propiedad][job]) {
                        console.log(`${jobProp}: ${this[propiedad][job][jobProp]}`)
                    }
                }
            } else if (propiedad == 'debts') {
                for (const debt in this[propiedad]) {
                    for (const debtProp in this[propiedad][debt]) {
                        console.log(`${debtProp}: ${this[propiedad][debt][debtProp]}`)
                    }
                }
            } else {
                console.log(`${propiedad}: ${this[propiedad]}`)
            }
        }
        console.log()
    }
}

function SelectPerson(personas) {
    let selectString = "Selecciona una persona: "
    for (const person in personas) {
        selectString = selectString.concat(`\n${person} - ${personas[persona].nombre}`)
    }
    personChoice = prompt(selectString)
    return personChoice;
}



let personas = []


let exitMenu = false
while (!exitMenu) {
    const menuString = "Que te gustaría hacer?\
                    \n1 - añadir una persona al PFS\
                    \n2 - añadir un trabajo a una persona\
                    \n3 - añadir una deuda a una persona\
                    \n4 - mostrar la información de una persona\
                    \nexit - salir del PFS"
    let menuChoice = prompt(menuString)
    let personChoice
    switch (menuChoice.toLowerCase()) {
        case "exit":
            exitMenu = true
            break;
        case "1":
            let name = prompt("cual es el nombre de la persona?")
            let dob = prompt("¿Cuál es la fecha de nacimiento de la persona?")
            let startingAmount = prompt("¿Cuál es la cantidad inicial de la persona?")
            let startingDebt = prompt("¿Cuál es la persona que comienza la deuda?")
            let persona = new Persona(name, dob, startingAmount, startingDebt)
            personas.push(persona)
            break;
        case "2":
            personChoice = SelectPerson(personas)
            let company = prompt("cual es el nombre de la empresa?")
            let role = prompt("¿Cuál era el cargo en la empresa?")
            let salary = prompt("cual era tu salario?")
            let start = prompt("¿Cuándo empezaste este trabajo?")
            let end = prompt("¿Cuándo dejará/dejó este trabajo?")
            let job = new Job(compania, rol, salario, empezar, terminar)
            personas[personChoice].addJob(job)
            break;
        case "3":
            console.log(menuChoice)
            break;
        case "4":
            personChoice = SelectPerson(personas)
            personas[personChoice].showInfo()
            break;
        default:
            exitMenu = true
            break;
    }
}

const debt1 = new Debt(100, 12, 0.05, 3);
console.log(debt1.monthlyPayment)
