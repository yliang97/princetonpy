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
		setInterval(this.loadBooksFromServer, this.props.pollInterval)
	},

	render: function() {
		if (this.state.data) {
			console.log('DATA!')
			var exerciseNodes = this.state.data.map(function(Exercise)
			{
				return <li> {Exercise.question_name} </li>
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

ReactDOM.render(<ExercisesList url = '/exercises/'  pollInterval = {1000} />, document.getElementById('container'))