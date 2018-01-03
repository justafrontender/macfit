import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import PageHeader from '../PageHeader';
import PageContent from '../PageContent';
import PageFooter from '../PageFooter';
import Popup from '../Popup';
import GoodsList from '../GoodsList';
import GoodDetails from '../GoodDetails';
import Order from '../Order';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <PageHeader siteMenu={this.props.siteMenu} />

          <PageContent>
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <GoodsList
                    catalog={this.props.catalog}
                  />
                )}
              />

              <Route
                path='/order/'
                render={() => (
                  <Order
                    catalog={this.props.catalog}
                    deliveryTypes={this.props.deliveryTypes}
                  />
                )}
              />

              <Route
                path='/product/:productCode/'
                render={() => (
                  <GoodsList
                    catalog={this.props.catalog}
                  />
                )}
              />

              <Route
                render={() => <Redirect to='/' />}
              />
            </Switch>
          </PageContent>

          <PageFooter contacts={this.props.contacts} />

          <Route
            path='/product/:productCode/'
            render={props => (
              <Popup history={props.history}>
                <GoodDetails
                  catalog={this.props.catalog}
                  {...props}
                />
              </Popup>
            )}
          />

        </div>
      </Router>
    );
  }
}

export default withRouter(App);
