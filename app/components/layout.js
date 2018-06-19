import React, { Component } from 'react';

import '../less/styles.less';

export class Layout extends Component {
  render() {
    return (
      <div id='Surface'>
        <div className='brand'>LCOMMIT</div>
        {this.props.children}
        <a href='https://github.com/yasaricli/lcommit.git' target='_blank'>
          <img src={require('../static/images/github.png')} />
        </a>
      </div>
    )
  }
}
