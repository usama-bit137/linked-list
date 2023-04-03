const LinkedList = () => {
  var length = 0;
  var head = null;

  const Node = (element) => {
    this.value = element; 
    this.next = null;
    return {value, next}
  }
  
  this.size = () => length; 
  
  this.whoIsHead = () => head;
  
  this.whoIsTail = () => {
    if (head === null) return head;
    else {
      var currentNode = head;
      while (currentNode.next) currentNode = currentNode.next;   
      return currentNode.value; 
    }
  }

  this.append = (element) => {
    var node = Node(element);
    if (head === null) head = node;
    else {
      var currentNode = head; 
      while (currentNode.next) {
      currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  }
  
  this.toString = () => {
    var currentNode = head;
    var stringReturn = `(${currentNode.value}) `;
    while (currentNode.next) {
      stringReturn += `-> ( ${currentNode.next.value} )`; 
      currentNode = currentNode.next; 
    }
    return stringReturn + ` -> ( ${null} )` 
  }

  this.remove = (element) => {
    var currentNode = head;
    var previousNode;
    if (currentNode.element === element) head = currentNode.next;
    else {
      while (currentNode.value !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next; 
      }
      previousNode.next = currentNode.next; 
    }
    length--;
  }   

  return { 
    Node, 
    size, 
    whoIsHead, 
    whoIsTail,
    append,  
    toString, 
    remove
  }
}

const newList = LinkedList(); 
console.log(newList.whoIsHead()); 
newList.append("usama");
newList.append("nour");
newList.append("iram");
newList.append("aqeel");
newList.append("hira");
newList.append("orion");
newList.append("kenza");
console.log(newList.whoIsHead()); 
console.log(newList.size()); 

console.log(newList.toString()); 