const LinkedList = () => {
  var length = 0;
  var head = null;

  const Node = (element) => {
    this.value = element; 
    this.next = null;
    return {value, next}
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

  this.prepend = (value) => {
    var currentNode = head;
    var newNode = Node(value)
    head = newNode;
    newNode.next = head;
    while (currentNode.next) {  
      newNode.next = currentNode;
      currentNode = currentNode.next;
    }
    length++;
    // close;
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
  
  this.at = (index) => {
    var count = 0; 
    var currentNode = head;
    while (count != index) {
      currentNode = currentNode.next;
      count++; 
    }
      return currentNode.value
  }

  this.find = (value) => {
    if (head === null) return null;
    else {
      var currentNode = head;
      var count = 0;
      while (currentNode.next) {
        if (currentNode.value === value) return count;
        else if (currentNode.value === null) return null; 
        currentNode = currentNode.next; 
        count++;
      }
    }
  }

  this.toString = () => {
    var currentNode = head;
    var stringReturn = `( ${currentNode.value} ) `;
    while (currentNode.next) {
      stringReturn += `-> ( ${currentNode.next.value} ) `; 
      currentNode = currentNode.next; 
    }
    return stringReturn + ` -> ( ${null} )` 
  }

  this.remove = (element) => {
    var currentNode = head;
    var previousNode;
    if (currentNode.value === element) head = currentNode.next;
    else {
      while (currentNode.value !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next; 
      }
      previousNode.next = currentNode.next; 
    }
    length--;
  }

  this.pop = () => {
    var currentNode = head;
    var previousNode;
    if (currentNode.value === null) return null; 
    else {
      while( currentNode.next ){
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  }

  this.contains = (value) => {
    var currentNode = head;
    while ( currentNode.next ) {
      if (currentNode.value === value) return true;
      else {
        currentNode = currentNode.next;
      } 
    }
    return false;
  }
   
  return { 
    size, 
    whoIsHead, 
    whoIsTail,
    at,
    contains,
    find,
    append, 
    prepend, 
    toString, 
    remove, 
    pop
  }
}

const newList = LinkedList();
newList.append("Tom");
newList.append("Jerry");
newList.append("Bugs");
newList.append("Daffy");
newList.append("Jerry");
console.log(newList.toString());
console.log(newList.contains("Tom"));
console.log(newList.toString());