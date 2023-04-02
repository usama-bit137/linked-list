const LinkedList = require("./linkedList"); 

test(".head method works on initialized linked list", () => {
  expect(LinkedList().whoIsHead).toBe(null);
})