import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import PropTypes from 'prop-types';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={({ target }) => {
            dispatch(setTextFilter(target.value));
          }}
        />
        <select
          value={this.props.filters.sortedBy}
          onChange={({ target }) => {
            if (target.value === 'date') {
              this.props.dispatch(sortByAmount(target.value));
            } else if (target.value === 'amount') {
              this.props.dispatch(sortByDate(target.value));
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

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
