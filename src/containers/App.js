import React, {Component} from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots : [],
            searchFeild:''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(users => this.setState({robots:users}));
    }

    onSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            searchFeild : event.target.value
        })
        
        // this.state.robots = filterRobots;
        // console.log(filterRobots);
        // this.setState({robots:filterRobots});
    }
    render() {
        const {robots,searchFeild} = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchFeild.toLowerCase());
        })
        return !robots.length ? <h1>Loading!!!</h1> :
        (
                <div className='tc'>
                    <h1 className='f1' id='title'>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filterRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
        );
        
    } 
}

export default App;