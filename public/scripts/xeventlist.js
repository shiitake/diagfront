function getXeventList(checklist, callback){		
	$.getJSON( "xevents")
	.done(function( data) {
		if (data != null){
		return callback(checklist, data);
		}
		else{
			console.log('no data returned.')
		}
	});
};
/*
function populateList(id, data){
	var xevents = data;
	var xeventList = [];
	for (xevent in xevents){
		//get child events
		var childEvents = xevents[xevent].["child events"];
		var children = [];
		for (child in childEvents){
			children.push(childEvents[child].name);
		}
		xeventList.push({name: xevents[xevent].name, events: children});
	}	
}*/

function buildTree(id, data){
	$(id).treeview({data: data});
}



$(window).load(function(){		
	getXeventList("#xeventlist", buildTree);
});