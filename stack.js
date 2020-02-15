//For Understanding only, js array will act as a stack as well
//eg.
console.log('\n\nMy stack implementation\n\n');


var stack = [];
console.log('Pushed 100');
stack.push(100);
console.log('Popped: ' + stack.pop());


console.log('\n\n\nNow the class we created, to understand stacks; \n\n\n')


function Stack() {
  this._top = -1;
  this._val = [];
}

Stack.prototype.push = function(data) {
  this._top++;
  this._val[this._top] = data;
};

Stack.prototype.pop = function() {
	//not using Array.prototype.pop()
  if (this._top < 0) {
    return null;
  }
  
  var topEl = this._val[this._top];
  this._top--;
  
  this._val.length--;
  
  return topEl;
};

Stack.prototype.peek = function() {
  if (this._top < 0) {
    return null;
  }
  
  return this._val[this._top];
};

Stack.prototype.size = function() {
  return this._top +1;
}


Stack.prototype.isEmpty = function() {
  if(this._top <0){
    return true;
  }else{
    return false;
  }
  
}

var stack = new Stack();

for (var i = 100; i <= 300; i+=100) {
  console.log('Pushed: ' + i); 
  stack.push(i);
}

console.log('Top Peek: ' + stack.peek());

console.log('Pop. \nPopped element = ' + stack.pop());
console.log('Pop. \nPopped element = ' + stack.pop());