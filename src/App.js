import React, { Component } from 'react';
import './app.scss';
import { Layout } from './components/Layout';

class App extends Component {

  render() {

    return (

      <React.Fragment>
        <Layout>
          <h1 className='text-center py-5'>Podaj nazwę miasta</h1>
        </Layout>
      </React.Fragment>

    );

  }

}

export default App;