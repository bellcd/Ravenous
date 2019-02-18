import React, {
  Component
} from 'react';

class InputFields extends Component {

  // same solution (but there's probably a better one!) as componentDidUpdate in SortByOptions.jsx
  componentDidUpdate(prevProps, prevState) {
    if (this.props.location !== "" && this.props.term !== "" && this.props.keyPressed === "Enter") {
      this.props.searchYelp(this.props.term, this.props.location, this.props.sortBy, this.props.radius);
      this.props.onHandleClearEnterPress();
    }
  }

  render() {
    return (
      <React.Fragment>
      <input onKeyUp={this.props.onTermChange} placeholder="Search - Food Category or Business Name" />
      <input onKeyUp={this.props.onLocationChange} placeholder="Where?" />
      <input type="number" onKeyUp={this.props.onRadiusChange} placeholder="Radius To Search (miles)" min="0" max="31" />
    </React.Fragment>)
  }
}

export default InputFields;