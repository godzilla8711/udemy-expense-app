import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <p>The request page is not found.  Please click <Link to="/">here</Link> to return to the Dashboard.</p>
      </div>
    );
  }
}

export default NotFound;
