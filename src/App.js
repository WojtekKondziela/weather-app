import React, { Component } from 'react';
import './app.scss';
import { Layout } from './components/Layout';
import SunIcon from './assets/sun-icon2.png'


class App extends Component {

  state = {
    isResponseReady: true
  }

  render() {

    if(this.state.isResponseReady === false) {

      return (

        <React.Fragment>
          <Layout>
            <div className='animated-icon'>
              <img src={SunIcon} alt='sun' className='spinning-icon'  />
            </div>
          </Layout>
        </React.Fragment>
  
      );

    } else if(this.state.isResponseReady === true) {

      return (

        <React.Fragment>
          <Layout>
            
          </Layout>
        </React.Fragment>

      )

    }

  }

}

export default App;