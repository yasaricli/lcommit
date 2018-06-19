import React, { Component } from 'react'
import Highlight from 'react-highlight';

import { Layout } from '../components/layout';

export default class extends Component {
  render() {
    return (
      <Layout>
        <img className='loading' src={require('../static/images/loading.svg')} />
      </Layout>
    )
  }
}
