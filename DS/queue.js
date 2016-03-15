//Queue Implementation
function Queue() {
	this.items = [];	
}

Queue.prototype.queue = function(val){
	return this.items.push(val);
}

Queue.prototype.dequeue = function(){
	return (this.items.length > 0)? this.items.shift() : 'Queue is empty';
}

Queue.prototype.peek = function(){
	return (this.items.length > 0)? this.items[0] : -1;
}

Queue.prototype.search = function(val){
	return this.items.indexOf(val);
}

Queue.prototype.isEmpty = function(val){
	return (this.items.length === 0)? true : false;
}

var q = new Queue();
q.queue(1);
q.queue(2);
q.queue(3);
q.queue(4);
q.dequeue();
q.search(3);
q.items;
q.isEmpty();
q.peek();