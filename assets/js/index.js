var React = require('react')
var ReactDOM = require('react-dom')
var createReactClass = require('create-react-class')



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
		setInterval(this.loadExercisesFromServer, this.props.pollInterval)
	},

	render: function() {
		if (this.state.data) {
			console.log('DATA!')
			var exerciseNodes = this.state.data.map(function(Exercises)
			{
				exerciseList = <li key = {Exercises.id} ><a id="specific_exercise" href= {'../exercises/' + Exercises.id}>  
					{Exercises.question_name} </a> </li>;
				return exerciseList;
			})

			
		}
		return (
			<div>
				<h1>
	            Hello, React!
	            <ul>
	            	{exerciseNodes}
	            </ul>
	            </h1>
            </div>
		)
	}

})

ReactDOM.render(<ExercisesList url = '/exercises_database/' />, document.getElementById('container'))