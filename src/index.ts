import Sorter from "./Sort"
import NumbersCollection from "./NumbersCollection"
import CharactersCollection from "./CharacterCllection"

const numbersCollection = new NumbersCollection([10, 5, -4, 0 , 45])
const characterscollection = new CharactersCollection("harun")
const sorter1 = new Sorter(numbersCollection)
const sorter2 = new Sorter(characterscollection)
sorter2.sort()
console.log(sorter2.collection.data)