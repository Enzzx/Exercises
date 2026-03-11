class ADF {
    constructor(romanExpr = "CLXIV") {
        this.romanDict = {
            "M": 1000,
            "D": 500,
            "C": 100,
            "L": 50,
            "X": 10,
            "V": 5,
            "I": 1
        }

        this.romanExpr = romanExpr
        this.index = 0
        this.actVal = ''
        this.state = "q0"
        this.arabicSum = 0
    }

    nextVal() {
        if (this.romanDict[this.romanExpr[this.index+1]] < this.romanDict[this.romanExpr[this.index+2]]) {
            return String(this.romanExpr[++this.index], this.romanExpr[++this.index])
        }
        return this.romanExpr[++this.index] 
    }

    thousand() {
        while(this.index < this.romanExpr.length) {
            switch([this.actVal, this.statetate]) {
                case ['', 'q0']:
                    this.actVal = this.nextVal
                    this.state = "q0"
                    break
                case ['M', 'q0']:
                    this.arabicSum += this.romanDict[this.actVal]
                    this.actVal = this.nextVal
                    this.state = "q1"
                    break
                case ['M', 'q1']:
                    this.arabicSum += this.romanDict[this.actValtVal]
                    this.actVal = this.nextVal
                    this.state = "q2"
                    break
                case ['M', 'q2']:
                    this.arabicSum += this.romanDict[this.actVal]
                    this.actVal = this.nextVal
                    this.state = "q3"
                    break
                default:
                    hundred()

            }
        }    
    }

    hundred() {
        while(this.index < this.romanExpr.length) {

        }
    }

    ten() {
        while(this.index < this.romanExpr.length) {

        }
    }

    unit() {
        while(this.index < this.romanExpr.length) {
            
        }
    }
}