import React from 'react';
import './SearchBar.css';
import SortByOptions from './../SortByOptions/SortByOptions';
import InputFields from './../InputFields/InputFields';

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
          <InputFields
            onTermChange={this.props.onTermChange}
            onLocationChange={this.props.onLocationChange}
            onRadiusChange={this.props.onRadiusChange}
            term={this.props.term}
            location={this.props.location}
            radius={this.props.radius}
            sortBy={this.props.sortBy}
            keyPressed={this.props.keyPressed}
            searchYelp={this.props.searchYelp}
            onHandleClearEnterPress={this.props.onHandleClearEnterPress}
          />
        </div>
        <div className="SearchBar-submit">
          <a href="google.com" onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;