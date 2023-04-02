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
  
  this.whoIsTail = function() {
    if (head === null) return head;
    else {
      var currentNode = head;
      while (currentNode.next) currentNode = currentNode.next;   
      return currentNode.value; 
    }
  }

  this.append = function(element) {
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

  this.prepend = function(element) {
    var node = Node(element);
    if (head === null) head = node;
    else {

    }
  }

  this.toString = () => {
    var currentNode = head;
    var stringReturn = `(${currentNode.value}) `;
    while (currentNode.next) {
      stringReturn += `-> (${currentNode.next.value})`; 
      currentNode = currentNode.next; 
    }
      return stringReturn
  }

  return {
    Node, 
    size, 
    whoIsHead, 
    whoIsTail,
    append, 
    prepend, 
    toString
  }
}