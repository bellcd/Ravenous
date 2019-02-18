import React from 'react';
import './SearchBar.css';
import SortByOptions from './../SortByOptions/SortByOptions';

class SearchBar extends React.Component {

  handleSearch = (event) => {
    this.props.searchYelp(this.props.term, this.props.location, this.props.sortBy, this.props.radius);
    // UNCOMMENT
    if (event) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            <SortByOptions
              onSortByChange={this.props.onSortByChange}
              onSortBy={this.props.onSortBy}
              term={this.props.term}
              location={this.props.location}
              radius={this.props.radius}
              sortBy={this.props.sortBy}
              searchYelp={this.props.searchYelp}
              clickEventTarget={this.props.clickEventTarget}
              onHandleClearClickEventTarget={this.props.onHandleClearClickEventTarget}
          />
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.props.onTermChange} placeholder="Search - Food Category or Business Name" />
          <input onChange={this.props.onLocationChange} placeholder="Where?" />
          <input type="number" onChange={this.props.onRadiusChange} placeholder="Radius To Search (miles)" min="0" max="31" />
        </div>
        <div className="SearchBar-submit">
          <a href="google.com" onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;