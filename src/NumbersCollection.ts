class NumbersCollection{
    constructor(public data: number[]){}
    get length() : number{
        return this.data.length
    }
    compare(leftIndex: number, rightIndex: number) : boolean{
        return this.data[leftIndex] > this.data[rightIndex]
    }
    swap(leftIndex: number, rightIndex: number) : void{
        const lefthand = this.data[leftIndex]
        this.data[leftIndex] = this.data[rightIndex]
        this.data[rightIndex] = lefthand
    }
}

export default NumbersCollection