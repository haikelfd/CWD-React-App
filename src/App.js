import React, { Component } from 'react';
import Cardlist from './Cardlist';
import { robots} from './Robots';
import SearchBox from './SearchBox';
import 'tachyons';

 


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots : robots,
            searchfield:''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    
    }


    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
      return (
       <div>
            <h1 className='tc'> RobotFriends</h1>
            <SearchBox searchChange={this.onSearchChange}  />
            <Cardlist robots={filteredRobots}/>
      </div>
    );
  }
}
export default App;
