class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = null;
    this._length = 0;
  }

  add(number) {
    let node = new Node(number),
    currentNode = this.head;
    
    if(!currentNode) {
      this.head = node;
      this._length ++;
      return node;
    }
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this._length++;
    return node;
  }

  get(index) {
    let currentNode = this.head,
    length = this._length,
    count = 1,
    message = {failure: 'node doesn\'t exist'};

    if (length == 0 || index < 1 || index > length) {
      throw new error(message.failure)
    }
    while(count<index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// => 5

module.exports = LinkedList;
