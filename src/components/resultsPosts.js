import React, { Component } from 'react';

import { connect } from 'react-redux';

class ResultsPosts extends Component {
  render () {
    return (
      <div>
        <div className="results-posts">
          <div className="results-posts-wrapper">
            <ul className="results-posts-posts">
              Results go here
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(ResultsPosts);