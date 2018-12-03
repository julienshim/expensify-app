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

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    // eslint-disable-next-line no-shadow
    const { setStartDate, setEndDate } = this.props;
    setStartDate(startDate);
    setEndDate(endDate);
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = ({ target }) => {
    // eslint-disable-next-line no-shadow
    const { setTextFilter } = this.props;
    setTextFilter(target.value);
  };

  onSortChange = ({ target }) => {
    // eslint-disable-next-line no-shadow
    const { sortByAmount, sortByDate } = this.props;
    if (target.value === 'date') {
      sortByDate(target.value);
    } else if (target.value === 'amount') {
      sortByAmount(target.value);
    }
  };

  render() {
    const { filters } = this.props;
    const { calendarFocused } = this.state;
    return (
      <div>
        <input type="text" value={filters.text} onChange={this.onTextChange} />
        <select value={filters.sortedBy} onChange={this.onSortChange}>
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

const mapDispatchToProps = dispatch => ({
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate())
});

ExpenseListFilters.propTypes = {
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  sortByAmount: PropTypes.func,
  sortByDate: PropTypes.func,
  setTextFilter: PropTypes.func,
  filters: PropTypes.shape({
    text: PropTypes.string,
    startDate: PropTypes.shape({
      moment: PropTypes.func
    }),
    endDate: PropTypes.shape({
      moment: PropTypes.func
    }),
    sortBy: PropTypes.string
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
