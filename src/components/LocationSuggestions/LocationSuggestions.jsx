import React, {
  Component
} from 'react';

class LocationSuggestions extends Component {
  renderLocationSuggestions() {
    if (this.props.suggestions.length > 0) {
      return this.props.suggestions.map((suggestion, index) => {
        return <option key={suggestion} value={suggestion}>{suggestion}</option>;
      })
    }
  }

  render() {
    return this.renderLocationSuggestions();
  }
}

export default LocationSuggestions;