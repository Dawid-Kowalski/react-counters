class Title extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}

class Counter extends React.Component {

	state = {
		value: 0
	}


	render() {
		return (
			<div>
				<p>{this.props.title}</p>
				<p>{this.state.value}</p>
			</div>
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<div>
				<Title title='liczniki' />
				<Counter title='licznik 1'/>
				<Counter title='licznik 2'/>
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('app'));