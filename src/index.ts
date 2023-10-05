import Sorter from "./Sort"
import NumbersCollection from "./NumbersCollection"

const numbersCollection = new NumbersCollection([10, 5, -4, 0 , 45])
const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(numbersCollection.data)