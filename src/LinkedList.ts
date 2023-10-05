class Node {
    next : Node | null = null
    constructor(public data: number){}
}
export class LinkedList {
    head : Node | null = null
    addNode(data : number) : void{
        // creating a new node
        const node = new Node(data)
        if(!this.head){
            this.head = node
            return
        }
        // finding the last node
        let tail = this.head
        while(tail.next){
            tail = tail.next
        }
        // insertig the new node after the last node
        tail = node
    }
    get length() : number{
        // if the linked list is empty
        if(!this.head?.next){
            return 0
        }
        // find the length of the linked list
        let length = 1
        let node = this.head
        while(node.next){
            length++
            node = node.next
        }

        return length
    }
    at(index : number) : Node{
        if(!this.head){
            throw new Error("Empty linked list")
        }
        let counter = 0
        let node : Node | null = this.head
        while(node){
            // if the current counter matches with the index , return the current node
            if(counter === index){
                return node
            }

            counter ++
            node = node.next
        }

        // if node (head.next) equals to null, it means there is no node that matches the index
        throw new Error("Index out of bounds")

    }
    compare(leftIndex: number, rightIndex: number) : boolean{
        if(!this.head){
            throw new Error("Empty Linked list")
        }
        return this.at(leftIndex).data > this.at(rightIndex).data
    }
    swap(leftIndex: number, rightIndex: number) : void {
        let leftNode = this.at(leftIndex).data
        let rightNode = this.at(rightIndex).data
        this.at(leftIndex).data = rightNode
        rightNode = leftNode
    }
    print() : void{
        if(!this.head){
            throw new Error("Empty Linked list")
        }
        let node : Node | null = this.head
        while(node){
            console.log(node)
            node = node.next
        }
    }
}
