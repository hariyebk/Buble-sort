import Sorter from "./Sort"
import NumbersCollection from "./NumbersCollection"
import CharactersCollection from "./CharacterCllection"
import { LinkedList } from "./LinkedList"

const numbersCollection = new NumbersCollection([10, 5, -4, 0 , 45])
numbersCollection.sort()
console.log(numbersCollection.data)
const characterscollection = new CharactersCollection("harun")
characterscollection.sort()
console.log(characterscollection.data)
const linkedlist = new LinkedList()
linkedlist.addNode(10)
linkedlist.addNode(40)
linkedlist.addNode(60)
linkedlist.addNode(5)
linkedlist.sort()
linkedlist.print()

