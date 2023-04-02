# Linked List
## Introduction
A linked list is a data structure which is a linear collection of data elements (known as nodes). The order of the nodes is not given by their placement in memory, rather, each element points to the next. We can represent a list of `n` elements as follows,

`[head]->[Node 1]->[Node 2]->...[Node n-1]->[null]`.


This JavaScript object creates a new linked list.

## whoIsHead()
Suppose we initialize the linked list and call the `whoIsHead()` method,

```js 
  const newList = linkedList();
  console.log(newList.whoIsHead()); // null  
```

Since, `newList` is an empty list, the head is `null`. Now let's add a new node by using the `append` method. 

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

## size()
If we wanted to check the size of the linked list, we can use the convenient `size()` method, 

```js 
  console.log(newList.size()); // 2
```

