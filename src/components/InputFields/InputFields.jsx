import React, {
  Component
} from 'react';
import LocationSuggestions from './../LocationSuggestions/LocationSuggestions';

class InputFields extends Component {

  // same solution (but there's probably a better one!) as componentDidUpdate in SortByOptions.jsx
  componentDidUpdate(prevProps, prevState) {
    if (this.props.location !== "" && this.props.term !== "" && this.props.keyPressed === "Enter") {
      this.props.searchYelp(this.props.term, this.props.location, this.props.sortBy, this.props.radius);
      this.props.onHandleClearEnterPress();
    } else if (this.props.clickEventTargetId === "locationInputField" && this.props.location !== "" && this.props.suggestions === prevProps.suggestions) {
      // double check this logic??!!
      this.props.getLocations(this.props.location);
      // this.props.searchYelp(this.props.term, this.props.location, this.props.sortBy, this.props.radius);
      // this.props.onHandleClearEnterPress();
    }
  }

  render() {
    return (
      <React.Fragment>
      <input id="termInputField" onKeyUp={this.props.onTermChange} placeholder="Food Category or Business Name" />
      <input list="locations" id="locationInputField" onKeyUp={this.props.onLocationChange} placeholder="Where?" />
      <datalist id="locations">
        <LocationSuggestions suggestions={this.props.suggestions} />
      </datalist>
      <input id="radiusInputField" type="number" onKeyUp={this.props.onRadiusChange} placeholder="Radius to Search (miles)" min="0" max="31" />
    </React.Fragment>)
  }
}

export default InputFields;