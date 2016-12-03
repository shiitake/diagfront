function getScenarioList(checklist, callback){		
	$.getJSON( "scenarios")
	.done(function( data) {
		if (data != null){
		return callback(checklist, data);
		}
		else{
			console.log('no data returned.')
		}
	});
};

function populateScenarios(id, data){
	var scenarios = data;
	var scenarioList = [];
	for (scenario in scenarios){		
		scenarioList.push({name: scenarios[scenario].name, value: scenarios[scenario].value});
	}
	buildChecklist(id, scenarioList);
	/*var sortedOptions = sortOptions(options, 'Name');
	var dropDown = $(id);
	for (option in sortedOptions)
	{
		var opt = sortedOptions[option];
		dropDown.append('<li url=' + opt.Url + ' value="' + opt.Name + '" service="' + opt.Service +'"><a href="#" onclick="return selectprimary(this)">' + opt.Name + '</a></li>');
		
	}*/
};

function buildChecklist(id, options){
	var checkList = $(id);
	for (option in options)
	{
		var checkbox = "";		
		checkbox += '<div class="checkbox">';
		checkbox += '<label>';
		checkbox += '<input type="checkbox" name="ScenarioOptions" id="' + options[option].value + '" value="' + options[option].value + '">';
		checkbox += options[option].name;
		checkbox += '</label>';
		checkbox += '</div>';
		checkList.append(checkbox);
	}

};

$(window).load(function(){	
	getScenarioList("#scenariochecklist", populateScenarios);
});

