import React, {
  Component
} from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import {
  Yelp
} from './util/Yelp.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
      term: "",
      location: "",
      radius: 0,
      sortBy: "best_match",
      clickEventTarget: "",
      keyPressed: "",
    }
  }

  handleClearEnterPress = () => {
    if (this.state.keyPressed === "Enter") {
      this.setState({
        keyPressed: ""
      });
    }
  }

  handleClearClickEventTarget = () => {
    this.setState({
      clickEventTarget: ""
    });
  }

  handleSortByChange(sortByOption, e) {
    this.setState({
      sortBy: sortByOption,
      clickEventTarget: e.target
    });
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value,
      keyPressed: event.key
    });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value,
      keyPressed: event.key
    });
  }

  handleRadiusChange(event) {
    let radiusInMeters = Math.floor(event.target.value * 1609.34);

    // better way would be data validation at the input field level that prompts the user for a lower radius!
    radiusInMeters = radiusInMeters > 50000 ? 50000 : radiusInMeters;

    this.setState({
      radius: radiusInMeters,
      keyPressed: event.key
    });
  }

  searchYelp = (term, location, sortBy, radius = 0) => {
    console.log("radius", radius);
    Yelp.search(term, location, sortBy, radius).then(businesses => {
      this.setState({
        businesses: businesses
      });
    })
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar
          searchYelp={this.searchYelp}
          onSortByChange={(sortByOption, e) => this.handleSortByChange(sortByOption, e)}
          onTermChange={(event) => this.handleTermChange(event)}
          onLocationChange={(event) => this.handleLocationChange(event)}
          onRadiusChange={(event) => this.handleRadiusChange(event)}
          term={this.state.term}
          location={this.state.location}
          sortBy={this.state.sortBy}
          radius={this.state.radius}
          clickEventTarget={this.state.clickEventTarget}
          keyPressed={this.state.keyPressed}
          onHandleClearClickEventTarget={this.handleClearClickEventTarget}
          onHandleClearEnterPress={this.handleClearEnterPress}
        />
        <BusinessList businesses={this.state.businesses} />
      </div>
    )
  }
}

export default App;