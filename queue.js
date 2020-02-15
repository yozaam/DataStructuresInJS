console.log('\n\nMy queue implementation\n\n');



function Queue() {
  this._head = 0;
  this._data = [];
}

Queue.prototype.enqueue = function(data) {
  this._data.push(data);
};


Queue.prototype.dequeueMemoryInefficient = function() {
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


var queue = new Queue();
console.log("Enqueue 100");
queue.enqueue(100);

console.log("Enqueue 200");
queue.enqueue(200);

console.log('Dequeue: ' + queue.dequeue());
console.log('Dequeue: ' + queue.dequeue());
console.log('Dequeue: ' + queue.dequeue());