// interface dateHandlerProps {
//     today: Date
//     current: Date
//     max: Date
//     min: Date
//     incrementDate: Function
//     decrementDate: Function
// }

export class DateHandler  {
    today: Date
    current: Date
    max: Date
    min: Date

    constructor() {    
        this.today = new Date();
        this.current = new Date();
        this.max = new Date();
        this.min = new Date("1995-06-16");
    }
    
        decrementDate = () => {
            if(this.current.getTime() == this.min.getTime()) return
            this.current.setDate(this.current.getDate() - 1)
            console.log(this.current)
        }
        incrementDate = ()=>  {
            if(this.current.getTime() == this.max.getTime()) return
            this.current.setDate(this.current.getDate() + 1)
            console.log(this.current)
        }
}
