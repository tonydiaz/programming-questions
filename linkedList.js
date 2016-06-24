// Create a LinkedList - set head to null on intialization
function LinkedList(){
    this.head = null;
}
// Push function to add a node
LinkedList.prototype.push = function (value) {
    var node = {
            data: value,
            next: null
        },
        currentNode;

    //Make this node the head if it is null
    if (!this.head) {
        this.head = node;
    }
    else {
        currentNode = this.head;
        // while there is a next element set current to the next one.
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        // Add the node to next at the end of the LL
        currentNode.next = node;
    }
}

LinkedList.prototype.pop = function(value){
    var currentNode = this.head;

    // check if pop is for head element
    if(currentNode.data == value){
       this.head = currentNode.next;
    }
    else{
      var previous = currentNode;

      while(currentNode.data){
        //case-3
        console.log(value)
        console.log("Yes",currentNode.data)
        if(currentNode.data == value){
        console.log("Fuck you.")
          previous.next = currentNode.next;
          break;
        }
        previous = currentNode;
        currentNode = currentNode.next;
      }
      //case -2
      if(currentNode.data == value){
        previous.next == null;
      }
    }
}

console.log("Single Linked List example - in JS");
var singleLinkedList = new LinkedList();

//push nodes
singleLinkedList.push(555);
singleLinkedList.push("Hello");
singleLinkedList.push("Goodbye");

console.log(singleLinkedList.head);
console.log(singleLinkedList.head.next);
console.log(singleLinkedList.head.next.next);

console.log("Pop - Goodbye");
singleLinkedList.pop("Goodbye");
console.log(singleLinkedList.head);

console.log("Pop - Goodbye");
singleLinkedList.pop(555);
console.log(singleLinkedList.head);
