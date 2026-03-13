// creation of a deterministic finite automatum, using Mealy algorithhm 

class MealyAFD {
    constructor(romanExpr) {
        this.romanExpr = romanExpr
        this.lastVal = ''
        this.i = 0
        this.actVal = this.romanExpr[this.i]
        this.state = 'q0'
        this.arabicSum = 0
    }

    convert() {
        while (this.i < this.romanExpr.length) {
            let sum = 0
            console.log(this.state, this.actVal, this.i)
            switch(this.state) {
                case "q0":
                    if (this.actVal == "M") { sum+=1000; this.state = 'q1'}
                    else this.state = 'q3'
                    break
                case "q1":
                    if (this.actVal == "M") { sum+=1000; this.state = 'q2'}
                    else this.state = 'q3'
                    break
                case "q2":
                    if (this.actVal == "M") { sum+=1000; this.state = 'q3'}
                    else this.state = 'q3'
                    break
                case "q3":
                    if (this.actVal == "D") { sum+=500; this.state = 'q4' }
                    else this.state = "q4"
                    break
                case "q4":
                    if (this.actVal == "C") { sum+=100; this.state = 'q5' }
                    else this.state = 'q8'
                    break
                case "q5":
                    if (this.actVal == "C") { sum+=100; this.state = 'q6' }
                    else if (this.actVal == "D") { sum+=300; this.state = 'q7' }
                    else if (this.actVal == "M") { sum+=800; this.state = 'q7' }
                    else this.state = 'q7'
                    break
                case "q6":
                    if (this.actVal == "C") { sum+=100; this.state = 'q7' }
                    else this.state = "q7"
                    break
                case "q7":
                    if (this.actVal == "L") { sum+=50; this.state = 'q8' }
                    else this.state = "q8"
                    break
                case "q8":
                    if (this.actVal == "X") { sum+=10; this.state = 'q9' }
                    else this.state = "q11"
                    break
                case "q9":
                    if (this.actVal == "X") { sum+=10; this.state = 'q10' }
                    else if (this.actVal == "L") { sum+=30; this.state = 'q11' }
                    else if (this.actVal == "C") { sum+=80; this.state = 'q11' }
                    else this.state = "q11"
                    break
                case "q10":
                    if (this.actVal == "X") { sum+=10; this.state = 'q11' }
                    else this.state = "q11"
                    break
                case "q11":
                    if (this.actVal == "V") { sum+=5; this.state = 'q12' }
                    else this.state = "q12"
                    break
                case "q12":
                    if (this.actVal == "I") { sum+=1; this.state = 'q13' }
                    else this.state = "q15"
                    break
                case "q13":
                    if (this.actVal == "I") { sum+=1; this.state = 'q14' }
                    else if (this.actVal == "V") { sum+=3; this.state = 'q15' }
                    else if (this.actVal == "X") { sum+=8; this.state = 'q15' }
                    else this.state = "q15"
                    break
                case "q14":
                    if (this.actVal == "I") { sum+=1; this.state = 'q15' }
                    else this.state = "q15"
                    break
                case "q15":
                    return
            }
            console.log(sum)

            if (sum != 0) {
                this.arabicSum += sum
                this.actVal = this.romanExpr[++this.i]
            }
        }
    }

    show() {
        console.log(`Valor em romano:\t${this.romanExpr}\nValor em arábico:\t${this.arabicSum}`)
    }
}

const value1 = new MealyAFD("MCMLVII")
value1.convert()
value1.show()