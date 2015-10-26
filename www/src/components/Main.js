require('normalize.css');
require('styles/App.css');

import React from 'react';
import ExampleData from 'sources/exampledata';
import Opponent from 'components/Opponent';

const yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  render() {
    const opponents = Object.keys(ExampleData.opponents).map(key => {
      return (<div>
        <Opponent key={key} data={ExampleData.opponents[key]} />
        </div>);
    });

    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">
        {opponents}
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
