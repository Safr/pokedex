import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setSearchValue from '../../actions/searchValue';
import SearchInput from './Input.style';

class Input extends Component {
  state = {
    inputValue: '',
  };

  componentDidMount() {
    this.input.focus();
  }

  handleSearch = evt => {
    this.setState({ inputValue: evt.target.value });
    this.props.onSearchValue(evt.target.value);
  }

  render() {
    return (
      <form action="">
        <SearchInput
          className="search"
          type="search"
          id="search"
          innerRef={x => { this.input = x; }}
          value={this.state.inputValue}
          placeholder="Search..."
          onChange={this.handleSearch}
        />
      </form>
    );
  }
}

Input.propTypes = {
  onSearchValue: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSearchValue: searchValue => dispatch(setSearchValue(searchValue)),
});

export default connect(null, mapDispatchToProps)(Input);
