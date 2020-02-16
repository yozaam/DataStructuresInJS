function Set() {
  this.set = {};
  this.size = 0;
}

console.log('\n\nMy Set implementation\n\n(ES6 has a better one with no string coercion)');

Set.prototype.add = function(data) {
  if (!(this.set.hasOwnProperty(data))) {
    this.set[data] = 'true';
    this.size++;
  }
}

Set.prototype.remove = function(data) {
  if (this.set.hasOwnProperty(data)) {
    delete this.set[data];
    this.size--;
  }
}

Set.prototype.sizeOfSet = function() {
  return this.size;
}

Set.prototype.union = function(secondset) {
  var unionset = new Set();
  for (var key in this.set) {
    if (this.set.hasOwnProperty(key)) {
      unionset.add(key);
    }
  }
  for (var key in secondset.set) {
    if (!unionset.set.hasOwnProperty(key)) {
      unionset.add(key);
    }
  }
  return unionset;
}

Set.prototype.intersect = function(secondset) {
  var inter = new Set();
  for (var key in this.set) {
    if (secondset.set.hasOwnProperty(key)) {
      inter.add(key);
    }
  }
  return inter;
} 

var myset = new Set();
myset.add(1);
myset.add(2);
myset.add(3);
myset.print();
console.log('removing 2');
myset.remove(2);
myset.print();