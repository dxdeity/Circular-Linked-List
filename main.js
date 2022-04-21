import {Node} from './Node.js'
import {MyCircularLinkedList} from './MyCircularLinkedList.js'

function main() {    
        let myList = new MyCircularLinkedList();
        
        myList.add(new Node(10));
        myList.add(new Node(20));
        myList.add(new Node(30));
        myList.add(new Node(40));
        myList.add(new Node(50));


        // myList.printOutAllNodeProcedurely();
        
        // console.log("\nHere we are calling the recursive method");
        // console.log("\n************************");
        myList.printOutAllNodeRecursively();

        console.log(myList.pop().toString()); 
        myList.printOutAllNodeRecursively();

        // console.log("\nUse the pop method");
        // console.log("The popped node is " + myList.pop().toString());
    }
    
main();

/**
Here we are creating a linked list

************************
Value: 3
Value: 2
Value: 1
************************
 */

