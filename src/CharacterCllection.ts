import Sorter from "./Sort"
class CharactersCollection extends Sorter {
    constructor(public data: string){
        super()
    }
    get length() : number {
        return this.data.length
    }
    compare(leftIndex: number, rightIndex: number) : boolean{
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    }
    swap(leftIndex: number, rightIndex: number): void{
        const arraystring = this.data.split('')
        const lefthand = arraystring[leftIndex]
        arraystring[leftIndex] = arraystring[rightIndex]
        arraystring[rightIndex] = lefthand
        this.data = arraystring.join('')
    }

}


export default CharactersCollection