console.log('\n\nMy queue implementation\n\n(while we can use arr.push() and arr.shift() to implement a queue, each shift operation is expensive)');



function Queue() {
  this._head = 0;
  this._data = [];
}

Queue.prototype.enqueue = function(data) {
  this._data.push(data);
};


Queue.prototype.dequeueMemoryLeak = function() {
  if (this._head < 0 || 
      this._head >= this._data.length) {
    return null;
  }
  
  var dequeuedItem = this._data[this._head];
  this._head++;
  
  return dequeuedItem;
};

Queue.prototype.peek = function() {
  if (this._head < 0 || 
      this._head >= this._data.length) {
    return null;
  }
  
  return this._data[this._head];
};

Queue.prototype.size = function() {
  return this._data.length - this._head;
}


Queue.prototype.isEmpty = function() {
  if (this._head < 0 || 
      this._head >= this._data.length) {
    return true;
  }else{
    return false;
  }
}

Queue.prototype.dequeue = function() {
  if (this._head < 0 || 
      this._head >= this._data.length) {
    return null;
  }
  
  var dequeuedItem = this._data[this._head];
  this._head++;
  
  if (this._head === 100) {
    // when more than 100 items in front of head, delete them
    this._data.splice(0, 100);
    
    // Reset the head
    this._head = 0;
  }
  
  return dequeuedItem;
};


var queue = new Queue();
console.log("Enqueue 100");
queue.enqueue(100);

console.log("Enqueue 200");
queue.enqueue(200);

console.log('Dequeue: ' + queue.dequeue());
console.log('Dequeue: ' + queue.dequeue());
console.log('Dequeue: ' + queue.dequeue());