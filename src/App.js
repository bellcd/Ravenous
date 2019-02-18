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
      sortBy: "best_match",
      clickEventTarget: ""
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
      term: event.target.value
    });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then(businesses => {
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
          term={this.state.term}
          location={this.state.location}
          sortBy={this.state.sortBy}
          clickEventTarget={this.state.clickEventTarget}
          onHandleClearClickEventTarget={this.handleClearClickEventTarget}
        />
        <BusinessList businesses={this.state.businesses} />
      </div>
    )
  }
}

export default App;