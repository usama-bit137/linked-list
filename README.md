# Linked List
## Introduction
A linked list is a data structure which is a linear collection of data elements (known as nodes). The order of the nodes is not given by their placement in memory, rather, each element points to the next. We can represent a list of `n` elements as follows,

`[head]->[Node 1]->[Node 2]->...[Node n-1]->[null]`.


This factory function will create a new linked list as well as some methods to alter and append their nodes.

## `whoIsHead()`
Let's instantiate the linked list and call the `whoIsHead()` method,

```js 
const newList = LinkedList();
console.log(newList.whoIsHead()); // null  
```
## `append()`
Since, `newList` is an empty linked list, the head is `null`. Let's add a new node by using the `append` method. 

```js
newList.append("Tom");
```

Now we call `whoIsHead()` on the Linked List,

```js
console.log(newList.whoIsHead()); // "Tom"
```
This will log `"Tom"`. If we add another Node to the list and check the head again, we should expect the same result,

```js
newList.append("Jerry");
console.log(newList.whoIsHead()); // "Tom"
```

## `whoIsTail()`
Now, that we have a linked list of two nodes, let's check the tail of the linked list. To do this, we can invoke the `whoIsTail()` method. For our current `newList`, we call by the following, 

```js
console.log(newList.whoIsTail()); // "Jerry"
```  

This is especially useful for longer linked lists.



## `size()`
If we wanted to check the size of the linked list, we can use the convenient `size()` method, 

```js 
console.log(newList.size()); // 2
```

## `toSting()`
If you were to `console.log` a linked list of numbers `1` up to `n`, you would find an extremely complex `n`-nested object much like the following, 5-nested object:

```js
list = {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 4,
              next: {
                value: 5,
                next: null
                }
              }
            }
          }
        }
```
Which is not particularly easy on the eyes. Luckily, we can make use of the `toString()` method.

``` js 
console.log(list.toString()); // ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( null ) 
```

## `remove()`
Suppose you wanted to remove and element from the linked list. We can use the `remove` method on the to remove the first instance of that value in the linked list.

``` js 
const newList = LinkedList();
newList.append("Tom");
newList.append("Jerry");
newList.append("Bugs");
newList.append("Daffy");
newList.append("Jerry");
console.log(newList.toString()); // ( "Tom" ) -> ( "Jerry" ) -> ( "Bugs" ) -> ( "Daffy" ) -> ( "Jerry" ) -> ( null )

newList.remove("Jerry");
console.log(newList.toString()); // ( "Tom" ) -> ( "Bugs" ) -> ( "Daffy" ) -> ( "Jerry" ) -> ( null )
```

Remember, that this method will only remove the first instance of a particular value.

## `.at(index)` 
Linked lists are data structures that do not support array indexing, however, we can make use of the `at` method on the linked list to find the value of the `nth` node,

``` js 
console.log(newList.at(3)); // "Daffy"
console.log(newList.at(2)); // "Bugs"
```

The index labelling is identical to array indexing in JavaScript.

## `.pop()`
Another method similar to that of arrays is the `.pop()` method. `.pop()` will remove the final element from the linked list,

```js   
console.log(newList.pop()); //  ( "Tom" ) -> ( "Bugs" ) -> ( "Daffy" ) -> ( null )
```

```