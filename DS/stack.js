//Stack Implementation
function Stack() {
	this.items = [];	
}

Stack.prototype.push = function(val){
	return this.items.push(val);
}

Stack.prototype.pop = function(){
	return (this.items.length > 0)? this.items.pop() : 'Stack is empty';
}

Stack.prototype.search = function(val){
	return this.items.indexOf(val);
}

Stack.prototype.isEmpty = function(val){
	return (this.items.length === 0)? true : false;
}

var st = new Stack();
st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.pop();
st.search(3);
st.items;