import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = ({ filters, dispatch }) => (
  <div>
    <input
      type="text"
      value={filters.text}
      onChange={({ target }) => {
        dispatch(setTextFilter(target.value));
      }}
    />
  </div>
);

const mapStateToProps = state => ({
  filters: state.filters
});

ExpenseListFilters.propTypes = {
  dispatch: PropTypes.func,
  filters: PropTypes.shape({
    text: PropTypes.string
  })
};

export default connect(mapStateToProps)(ExpenseListFilters);
