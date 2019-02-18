import React, {
  Component
} from 'react';

// doesn't this need to be INSIDE the component?! instructions from Codecademy said to put it here ...
const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
  "Distance": "distance"
}

class SortByOptions extends Component {
  getSortByClass(sortByOption) {
    if (this.props.sortBy === sortByOption) {
      return "active";
    } else {
      return "";
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

  // this is actually running anytime anyting in the App updates, because there are setState() calls in an ancestor Component - App. Should I move the state to a lower component? It seems like I need it there because some Yelp API response data is sent to components that branch from that ancestor App component. That's why the if below tests to only fire the AjAX call if the click event target element was an <li> (as opposed to an input field).
  // Awkward implmentation (unexpected user actions cause API requests), must be a better way of accomplishing this
  componentDidUpdate(prevProps, prevState) {
    if (this.props.location !== "" && this.props.term !== "" && this.props.clickEventTarget.toString() === "[object HTMLLIElement]") {
      this.props.searchYelp(this.props.term, this.props.location, this.props.sortBy, this.props.radius);
      this.props.onHandleClearClickEventTarget();
    }
  }

  render() {
    return this.renderSortByOptions();
  }
}

export default SortByOptions;