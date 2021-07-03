import React, { Component }from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots' 
import './App.css';
class App extends Component {
	constructor(){
		super()
		this.state = {
		robots: robots,
		searchfield: ''
		}
	}

	onSearchChange = (event) =>{ //永遠記得用 arrow function 
		//更新satate的寫法，而不用寫成 this.state.searchfield =...
		this.setState({ searchfield: event.target.value})
		
	}

	render(){
		//讓 card list 即時反應
		const filteredRobots = this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
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

export default App;