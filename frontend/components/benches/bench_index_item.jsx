import React from 'react';

class BenchIndexItem extends React.Component {
  constructor (props) {
    super(props);
  }


  render () {
    const { description } = this.props.bench;

    return (
      <div>
        <span className="index-item-category">Description: </span>
        <span className="index-item-copy">{description}</span>
      </div>
    );
  }
}

export default BenchIndexItem;
