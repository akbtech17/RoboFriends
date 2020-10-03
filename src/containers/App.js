import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

//Redux
import { requestRobots, setSearchField } from '../actions';
import { connect } from 'react-redux';


const mapStateToProps= (state) => {
    return {
        //searching a robots
        searchFeild: state.searchRobots.searchFeild,
        //requesting a robots
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField((event.target.value))),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots : [],
    //         // searchFeild:''
    //     }
    // }
    
    componentDidMount() {
        // console.log(this.props.store);
        // fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        // .then(users => this.setState({robots:users}));
        this.props.onRequestRobots();
    }

    // onSearchChange = (event) => {
    //     this.setState({
    //         searchFeild : event.target.value
    //     })
    // }
    render() {
        // const {robots,searchFeild} = this.state;
        // const {robots} = this.state;
        const {searchFeild, onSearchChange, robots, isPending} = this.props;

        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchFeild.toLowerCase());
        })
        return isPending ? <h1>Loading!!!</h1> :
        (
                <div className='tc'>
                    <h1 className='f1' id='title'>RoboFriends</h1>
                    <SearchBox searchChange = {onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filterRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
        );
        
    } 
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);