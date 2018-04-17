import { connect } from 'react-redux';

import { fetchBenches } from '../../actions/bench_actions';
import { updateBounds } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';
import Search from './search.jsx';

const mapStateToProps = state => ({
  benches: asArray(state.entities)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches()),
  updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
