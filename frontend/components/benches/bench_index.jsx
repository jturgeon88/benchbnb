import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    const benches = this.props.benches;
    return (
      <div>
        <h1>Benches: </h1>
        {Object.keys(benches).map((benchId, idx) => (
          <BenchIndexItem
            bench={Object.values(benches)[idx]}
            key={benchId}
          />
        ))}
      </div>
    );
  }
};

export default BenchIndex;
