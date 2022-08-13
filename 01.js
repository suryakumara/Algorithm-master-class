// piece of data -val
// reference to next node - next.

class Nodes {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let first = new Nodes("Hi");
first.next = new Nodes("there");
first.next.next = new Nodes("how");
first.next.next.next = new Nodes("are");
first.next.next.next.next = new Nodes("you");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Nodes(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
