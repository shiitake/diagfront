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


function buildTree(id, data){
	$(id).treeview({
		data: data, 
		multiSelect: true, 
		selectedIcon: "glyphicon glyphicon-check", 
		nodeIcon: "glyphicon glyphicon-stop"
	});
}



$(window).load(function(){		
	getXeventList("#xeventlist", buildTree);
});