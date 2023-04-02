const LinkedList = () => {
  var length = 0;
  var head = null;

  const Node = (element) => {
    this.value = element; 
    this.next = null;
    return {value, next}
  }
  
  this.size = function() {
    return length; 
  }
  
  this.whoIsHead = function() {
    return head;
  }

  this.append = function(element) {
    var node = Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head; 
      while (currentNode.next) {
      currentNode.next = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  }

  this.prepend = function(element) {

  }
  return {
    Node, 
    size, 
    whoIsHead, 
    append, 
    prepend
  }
}

const newList = LinkedList(); 
console.log(newList.whoIsHead()); 
newList.append("usama");
newList.append("nour");
console.log(newList.whoIsHead()); 
console.log(newList.size()); 