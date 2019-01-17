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

	increment = event => {
		this.setState({
			value: this.state.value + 1
		})
	}

	decrement = event => {
		this.setState({
			value: this.state.value - 1
		})
	}

	setNull = event => {
		this.setState({
			value: 0
		})
	}


	render() {
		return (
			<div>
				<p>{this.props.title}</p>
				<p>{this.state.value}</p>
				<button onClick={this.increment}>dodaj</button>
				<button onClick={this.decrement}>odejmij</button>
				<button onClick={this.setNull}>wyzeruj</button>
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