var React = require('react')
var ReactDOM = require('react-dom')
var createReactClass = require('create-react-class')
var loaded = false;


var ExercisesList = createReactClass ({
	loadExercisesFromServer: function(){
		$.ajax({
			url: this.props.url,
			datatype: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this)
		})
	},	

	getInitialState: function() {
		return {data: [] };
	},

	componentDidMount: function() {
		this.loadExercisesFromServer();
		setInterval(this.loadBooksFromServer, this.props.pollInterval)
	},

	render: function() {
		if (this.state.data) {

			var elements = this.state.data.map( 
				function(Exercises) {
				if (Exercises.category == 'Elements') {
					exerciseList = <p key = {Exercises.id} ><a id="specific_exercise" href= {'../exercises/' + Exercises.slug}> 
					{Exercises.question_name} </a> - {Exercises.question_description}</p>;
					return exerciseList;
				}	
			})			

			var functions = this.state.data.map(
				function(Exercises) {
					if (Exercises.category == 'Functions') {
						exerciseList = <p key = {Exercises.id} ><a id="specific_exercise" href= {'../exercises/' + Exercises.slug}> 
						{Exercises.question_name} </a> - {Exercises.question_description}</p>;
						return exerciseList;
					}
				})

			var object = this.state.data.map(
				function(Exercises) {
					if (Exercises.category == 'OOP') {
						exerciseList = <p key = {Exercises.id} ><a id="specific_exercise" href= {'../exercises/' + Exercises.slug}> 
						{Exercises.question_name}</a> - {Exercises.question_description}</p>;
						return exerciseList;
					}
				})

			var dataStructures = this.state.data.map(
				function(Exercises) {
					if (Exercises.category == 'data') {
						exerciseList = <p key = {Exercises.id} ><a id="specific_exercise" href= {'../exercises/' + Exercises.slug}> 
						{Exercises.question_name}</a> - {Exercises.question_description}</p>;
						return exerciseList;
					}
				})
		}

		return (
			<div>
				<h2> Elements of Python </h2>
				<h4>
	            	{elements}
	            </h4>
	            <h2> Functions in Python </h2>
				<h4>
	            	{functions}
	            </h4>
	            <h2> Object Oriented Programming </h2>
				<h4>
	            	{object}
	            </h4>
	            <h2> Python Data Structures </h2>
	            <h4>
	            	{dataStructures}
	            </h4>
            </div>
		)
	}

})


ReactDOM.render(<ExercisesList url = '/exercises_database/'/>, document.getElementById('container'))

