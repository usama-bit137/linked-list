const LinkedList = () => {
  var length = 0, head = null;

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
    var currentNode = head, newNode = Node(value)
    head = newNode;
    newNode.next = currentNode;
    while (currentNode.next) {  
      newNode = currentNode;
      newNode = newNode.next;
      currentNode = currentNode.next;
    }
    length++;
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
    var count = 0,
        currentNode = head;
    while (count != index) {
      currentNode = currentNode.next;
      count++; 
    }
    return currentNode.value
  }

  this.find = (value) => {
    if (head === null) return null;
    else {
      var currentNode = head, count = 0;
      while (currentNode.next) {
        if (currentNode.value === value) return count;
        else if (currentNode.value === null) return null; 
        currentNode = currentNode.next; 
        count++;
      }
    }
  }

  this.toString = () => {
    var currentNode = head, stringReturn = `( ${currentNode.value} ) `;
    while (currentNode.next) {
      stringReturn += `-> ( ${currentNode.next.value} ) `; 
      currentNode = currentNode.next; 
    }
    return stringReturn + ` -> ( ${null} )` 
  }

  this.remove = (element) => {
    var currentNode = head, previousNode;

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
    var currentNode = head, previousNode;
    
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

  this.insertAt = (value, index) => {
    var currentNode = head, nextNode, count = 0;
  }

  this.removeAt = (index) => {
    if (index >= length) {
      throw `Index input referenced out of bounds! Input passed was ${index} while the list has length ${length}.`
    }

    var currentNode = head, previousNode, count = 0;
    while (count !== index) {
      previousNode = currentNode;
      currentNode = currentNode.next;  
      count++;
    }
    previousNode.next = currentNode.next;
    length--;
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
    pop, 
    insertAt, 
    removeAt
  }
}

const newList = LinkedList();
newList.append("Tom");
newList.append("Jerry");
newList.append("Bugs");
newList.append("Daffy");
newList.append("Jerry");
newList.pop();
console.log(newList.toString());
newList.prepend("Usama");
console.log(newList.toString());
newList.removeAt(2);
newList.removeAt(2);
newList.removeAt(2);
console.log(newList.size())
console.log(newList.toString()); 
