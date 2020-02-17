console.log('\n\nMy graph implementation\n\n');

function Graph() {
  this._vertices = {};
  this._vertexCount = 0;
}

Graph.prototype.addVertex = function(v) {
  var vertexType = typeof(v);
  
  if (vertexType != 'number' && 
      vertexType != 'string') {
    throw 'Vertex can only be a string or number';
  }
  
  if (this._vertices.hasOwnProperty(v)) {
    throw 'Duplicate Vertex is not allowed';
  }
  
  this._vertices[v] = {};
  this._vertexCount++;
}


Graph.prototype.addEdges = function(v, edges) {
  if (!this._vertices.hasOwnProperty(v)) {
    throw 'Vertex not found';
  }
  
  var edgesObj = this._vertices[v];
  
  for (var i = 0; i < edges.length; i++) {
    var edge = edges[i];
    
    if (this._vertices.hasOwnProperty(v)) {
      throw 'Invalid vertex cannot be added as edge';
    }
    
    edgesObj[edge] = true;
  }
}

Graph.prototype.getVertices = function() {
  var vertices = [];
  for (var v in this._vertices) {
    vertices.push(v);
  }
  
  return vertices;
}

Graph.prototype.getEdges = function(v) {
  if (!this._vertices.hasOwnProperty(v)) {
    throw 'Vertex not found';
  }
  
  var edgesObj = this._vertices[v];
  var edges = [];
  
  for (var e in edgesObj) {
    edges.push(e);
  }
  
  return edges;
}

var graph = new Graph();
graph.addVertex('Anna');
graph.addVertex('Bob');
graph.addVertex('Frank');
graph.addVertex('Jane');

graph.addEdges('Anna', ['Bob', 'Frank']);
graph.addEdges('Bob', ['Anna', 'Frank']);
graph.addEdges('Frank', ['Anna', 'Bob', 'Jane']);
graph.addEdges('Jane', ['Frank']);

var vertices = graph.getVertices();
for(var i=0; i<vertices.length; i++){
  var edges = graph.getEdges(vertices[i]);
  console.log(vertices[i] + ' is friends with '+ edges);
}

var DFS = function(graph) {
  var vertices = graph.getVertices();  
  if (vertices.length === 0) {
    return;
  }
  
  // Mark all vertices as NOT VISITED at start
  var visited = {};
  for (var i = 0; i < vertices.length; i++) {
    visited[vertices[i]] = false;
  }
  
  // Define our DFS impl method
  function DFSImpl(v) {
    visited[v] = true;
    console.log('Visiting Vertex: ' + v);

    var edges = graph.getEdges(v);
    for (var j = 0; j < edges.length; j++) {
      var edge = edges[j];
      if (!visited[edge]) {
       DFSImpl(edge);
      }
    }
  }
  
  // Start DFS
  for (var i = 0; i < vertices.length; i++) {
    var vertex = vertices[i];
    if (!visited[vertex]) {
      DFSImpl(vertex);
    }
  }
};


var graph = new Graph();
graph.addVertex('Anna');
graph.addVertex('Bob');
graph.addVertex('Frank');
graph.addVertex('Jane');

graph.addEdges('Anna', ['Bob', 'Frank']);
graph.addEdges('Bob', ['Anna', 'Frank']);
graph.addEdges('Frank', ['Anna', 'Bob', 'Jane']);
graph.addEdges('Jane', ['Frank']);

DFS(graph);


var BFS = function(graph) {
  var vertices = graph.getVertices();  
  if (vertices.length === 0) {
    return;
  }
  
  // Mark all vertices as NOT VISITED at start
  var visited = {};
  for (var i = 0; i < vertices.length; i++) {
    visited[vertices[i]] = false;
  }
  
  var queue = [];
  var startV = vertices[0];
  queue.push(startV);
  visited[startV] = true;
  
  while (queue.length > 0) {
    // Inefficient. use the Wueue that
    // we created in Queue tutorial
    var v = queue.shift();
    console.log('Visited: ' + v); 
    var edges = graph.getEdges(v);
    
    for (var i = 0; i < edges.length; i++) {
      var e = edges[i];
      if (!visited[e]) {
        queue.push(e);
        visited[e] = true;
      }
    }
  }
};

var graph = new Graph();
graph.addVertex('Anna');
graph.addVertex('Bob');
graph.addVertex('Frank');
graph.addVertex('Jane');

graph.addEdges('Anna', ['Bob', 'Frank']);
graph.addEdges('Bob', ['Anna', 'Frank']);
graph.addEdges('Frank', ['Anna', 'Bob', 'Jane']);
graph.addEdges('Jane', ['Frank']);

BFS(graph);


Graph.prototype.countTotalEdges = function() {
  var count = 0;
  var vertices = this.getVertices();  
  for (var i = 0; i < vertices.length; i++) {
    var v = vertices[i];
    var edges = this.getEdges(v);

    count+=edges.length;
  }

  return count;
}
