import React from 'react';
import './SearchBar.css';

// doesn't this need to be INSIDE the SearchBar component?! instructions from Codecademy said to put it here ...
const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  getSortByClass(sortByOption) {
    if (this.props.sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  }

  handleSearch = (event) => {
    this.props.searchYelp(this.props.term, this.props.location, this.props.sortBy);
    // UNCOMMENT
    if (event) {
      event.preventDefault();
    }
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      // sortByOptionValue is an [] of the SortByOptions values, ie the Yelp formatting
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}
      onClick={this.props.onSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
    });
  }
  // do I need the "this" in the bind function? because onSortByChange is already an arrow function...



  render() {
    console.log("beginning of each render()", this.props.sortBy);

    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.props.onTermChange} placeholder="Search Businesses" />
          <input onChange={this.props.onLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href="google.com" onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;