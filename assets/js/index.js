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
			console.log('DATA!');
			var beginnerExercises = this.state.data.map( 
				function(Exercises) {
				if (Exercises.id < 10) {
					exerciseList = <p key = {Exercises.id} ><a id="specific_exercise" href= {'../exercises/' + Exercises.id}> 
					Exercise {Exercises.id}: {Exercises.question_name} </a> - {Exercises.question_description}</p>;
					return exerciseList;
				}	
			})			

			var intermediateExercises = this.state.data.map(
				function(Exercises) {
					if (Exercises.id >= 10 && Exercises.id < 20) {
						exerciseList = <p key = {Exercises.id} ><a id="specific_exercise" href= {'../exercises/' + Exercises.id}> 
						Exercise {Exercises.id}: {Exercises.question_name} </a> - {Exercises.question_description}</p>;
						return exerciseList;
					}
				})

			var advancedExercises = this.state.data.map(
				function(Exercises) {
					if (Exercises.id >= 20) {
						exerciseList = <p key = {Exercises.id} ><a id="specific_exercise" href= {'../exercises/' + Exercises.id}> 
						Exercise {Exercises.id}: {Exercises.question_name}</a> - {Exercises.question_description}</p>;
						return exerciseList;
					}
				})
		}

		return (
			<div>
				<h2> Beginner </h2>
				<h4>
	            	{beginnerExercises}
	            </h4>
	            <h2> Intermediate </h2>
				<h4>
	            	{intermediateExercises}
	            </h4>
	            <h2> Advanced </h2>
				<h4>
	            	{advancedExercises}
	            </h4>
            </div>
		)
	}

})






ReactDOM.render(<ExercisesList url = '/exercises_database/' pollInterval={1000}/>, document.getElementById('container'))