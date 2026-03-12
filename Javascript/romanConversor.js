class AFD {
    constructor(romanExpr) {
        this.romanExpr = romanExpr
        this.lastVal = ''
        this.i = 0
        this.actVal = ''
        this.state = 'q0'
        this.arabicSum = 0
    }

    convert() {
        while (this.i < this.romanExpr.length) {
            this.lastVal = this.actVal
            this.actVal = this.romanExpr[this.i++]

            switch(this.state) {
                case "q0":
                    if (this.actVal == "M") { this.arabicSum+=1000; this.state = 'q1'}
                    else this.state = 'q3'
                    break
                case "q1":
                    if (this.actVal == "M") { this.arabicSum+=1000; this.state = 'q2'}
                    else this.state = 'q3'
                    break
                case "q2":
                    if (this.actVal == "M") { this.arabicSum+=1000; this.state = 'q3'}
                    else this.state = 'q3'
                    break
                case "q3":
                    if (this.actVal == "D") { this.arabicSum+=500; this.state = 'q4' }
                    else this.state = "q4"
                    break
                case "q4":
                    if (this.actVal == "C") { this.arabicSum+=100; this.state = 'q5' }
                    else this.state = 'q8'
                    break
                case "q5":
                    if (this.actVal == "C") { this.arabicSum+=100; this.state = 'q6' }
                    else if (this.actVal == "D") { this.arabicSum+=300; this.state = 'q7' }
                    else if (this.actVal == "M") { this.arabicSum+=800; this.state = 'q7' }
                    else this.state = 'q7'
                    break
                case "q6":
                    if (this.actVal == "C") { this.arabicSum+=100; this.state = 'q7' }
                    else this.state = "q7"
                    break
                case "q7":
                    if (this.actVal == "L") { this.arabicSum+=50; this.state = 'q8' }
                    else this.state = "q8"
                    break
                case "q8":
                    if (this.actVal == "X") { this.arabicSum+=10; this.state = 'q9' }
                    else this.state = "q11"
                    break
                case "q9":
                    if (this.actVal == "X") { this.arabicSum+=10; this.state = 'q10' }
                    else if (this.actVal == "L") { this.arabicSum+=30; this.state = 'q11' }
                    else if (this.actVal == "C") { this.arabicSum+=80; this.state = 'q11' }
                    else this.state = "q11"
                    break
                case "q10":
                    if (this.actVal == "X") { this.arabicSum+=10; this.state = 'q11' }
                    else this.state = "q11"
                    break
                case "q11":
                    if (this.actVal == "V") { this.arabicSum+=5; this.state = 'q12' }
                    else this.state = "q12"
                    break
                case "q12":
                    if (this.actVal == "I") { this.arabicSum+=1; this.state = 'q13' }
                    else this.state = "q15"
                    break
                case "q13":
                    if (this.actVal == "I") { this.arabicSum+=1; this.state = 'q14' }
                    else if (this.actVal == "V") { this.arabicSum+=3; this.state = 'q15' }
                    else if (this.actVal == "X") { this.arabicSum+=8; this.state = 'q15' }
                    else this.state = "q15"
                    break
                case "q14":
                    if (this.actVal == "I") { this.arabicSum+=1; this.state = 'q15' }
                    else this.state = "q15"
                    break
                case "q15":
                    return
            }
        }
    }

    show() {
        console.log(`Valor em romano:\t${this.romanExpr}\nValor em arábico:\t${this.arabicSum}`)
    }
}

const value1 = new AFD("MCMLVII")
value1.convert()
value1.show()