console.log('\n\nMy Dictionary implementation\n\n');

function Dictionary() {
  this._data = {};
  this._length = 0;
}

Dictionary.prototype.add = function(key, value) {
  var keyType = typeof(key);
  
  if (keyType !== 'string'  && keyType !== 'number') {
    throw 'Key type can only be string or a number';
  }
  
  if (this._data.hasOwnProperty(key)) {
    throw 'Duplicate keys are not supported';
  }
  
  this._data[key] = value;
  this._length++;
}


Dictionary.prototype.find = function(key) {
  if (key === null) {
    return undefined;
  }
  
  var keyType = typeof(key);
  if (keyType !== 'string'  && keyType !== 'number') {
    return undefined;
  }
  
  if (this._data.hasOwnProperty(key)) {
    return this._data[key];
  }
  
  return undefined;
}


Dictionary.prototype.remove = function(key) {
  if (this._data.hasOwnProperty(key)) { 
  	delete this._data[key];
  	this._length--;
  }
}


var dict = new Dictionary();
dict.add("alice", 123);
dict.add("eve", 456);
dict.add("bob", 789);

console.log('dict.find(\'alice\') = '+ dict.find('alice'));
console.log('dict.find(\'foo\') = '+ dict.find('foo'));


Dictionary.prototype.size = function() {
  return this._length;  
}