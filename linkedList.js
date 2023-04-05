const LinkedList = () => {
  var length = 0;
  var head = null;

  const Node = ( element ) => {
    this.value = element; 
    this.next = null;
    return {value, next}
  }
  
  this.append = ( element ) => {
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

  this.prepend = ( value ) => {

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
  
  this.at = ( index ) => {
    var count = 0; 
    var currentNode = head;
    while ( count != index ) {
      currentNode = currentNode.next;
      count++; 
    }
      return currentNode.value
  }

  this.find = ( value ) => {
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

  this.remove = ( element ) => {
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
    if ( currentNode.value === null ) return currentNode;
    else {
      while (currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      } 
    previousNode = null; 
    length--;
    }
  }

  this.contains = ( value ) => {
    var currentNode = head;
    while ( currentNode.next ) {
      return currentNode.value === value ? true : false; 
      currentNode = currentNode.next;
    }
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
newList.remove("Jerry");
console.log(newList.contains("Usama"));

