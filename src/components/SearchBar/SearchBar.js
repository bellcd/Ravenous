import React from 'react';
import './SearchBar.css';
import SortByOptions from './../SortByOptions/SortByOptions';
import InputFields from './../InputFields/InputFields';

class SearchBar extends React.Component {

  handleSearch = (event) => {
    if (this.props.term !== "" && this.props.location !== "")
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
            clickEventTargetId={this.props.clickEventTargetId}
            getLocations={this.props.getLocations}
            suggestions={this.props.suggestions}
          />
        </div>
        <div className="SearchBar-submit">
          <a href="google.com" onClick={this.handleSearch}>Search for Food!</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;