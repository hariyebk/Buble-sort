class Sorter {
    constructor(public collection : number[]){}
    sort() : void {
        const {length} = this.collection
        // buble sort
        for(let i = 0; i < length; i++){
            for(let j = 0; j < length - i - 1; j++){
                if(this.collection[j] > this.collection[ j + 1]){
                    let left = this.collection[j]
                    // swap
                    this.collection[j] = this.collection[j + 1]
                    this.collection[j + 1] = left
                }
            }

        }

    }
}

const sorter = new Sorter([10, 4, 6, -8])
sorter.sort()
console.log(sorter.collection)