import React, { Component }from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
// import { robots } from './robots' 
import './App.css';
class App extends Component {
	constructor(){
		super()
		this.state = {
		robots: [],
		searchfield: ''
		}
		console.log('constructor'); //理解生命週期
	}

	componentDidMount()
	{
		// make request
		fetch('https://jsonplaceholder.typicode.com/users').
		then(response => response.json()).
		then(users => this.setState({ robots: users })) //更新state
		console.log('ComponentDidMount');
	}

	onSearchChange = (event) =>{ //永遠記得用 arrow function 
		//更新satate的寫法，而不用寫成 this.state.searchfield =...
		this.setState({ searchfield: event.target.value})
		
	}



	render(){
		console.log('render');
		//讓 card list 即時反應
		const filteredRobots = this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if(this.state.robots.length === 0)
		{
			return <h1>Loading</h1>
		}
		else
		{
			return(
				<div className='tc'>
				<h1 className='f1'>ROBOTS FRIENDS</h1>
				<SearchBox searchChange={this.onSearchChange}/>
			{/*searchChange原本是 prop 在這裡又成了 function*/}
		  		<CardList robots={filteredRobots} /> 
		  		</div>
				);
			}
		}
		
	
}

export default App;