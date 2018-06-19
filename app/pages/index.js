import React, { Component } from 'react'
import Highlight from 'react-highlight';

import { Layout } from '../components/layout';

export default class extends Component {
  render() {
    return (
      <Layout>
        <Highlight className='github' languages={['shell']}>
          {`
            $ npm install -g lcommit

            $ lcommit --am "Hello There"
          `}
        </Highlight>
      </Layout>
    )
  }
}
