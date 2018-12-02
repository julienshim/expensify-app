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
    const { dispatch } = this.props;
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    const { filters, dispatch } = this.props;
    const { calendarFocused } = this.state;
    return (
      <div>
        <input
          type="text"
          value={filters.text}
          onChange={({ target }) => {
            dispatch(setTextFilter(target.value));
          }}
        />
        <select
          value={filters.sortedBy}
          onChange={({ target }) => {
            if (target.value === 'date') {
              dispatch(sortByAmount(target.value));
            } else if (target.value === 'amount') {
              dispatch(sortByDate(target.value));
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={filters.startDate}
          startDateId="start_date_input"
          endDate={filters.endDate}
          endDateId="end_date_input"
          onDatesChange={this.onDatesChange}
          focusedInput={calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates
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
    text: PropTypes.string,
    startDate: PropTypes.number,
    endDate: PropTypes.number,
    sortBy: PropTypes.string
  })
};

export default connect(mapStateToProps)(ExpenseListFilters);
