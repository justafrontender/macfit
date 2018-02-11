import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import PageHeader from '../PageHeader';
import PageContent from '../PageContent';
import PageFooter from '../PageFooter';
import Popup from '../Popup';
import GoodsList from '../GoodsList';
import GoodDetails from '../GoodDetails';
import ContactsPage from '../ContactsPage';
import Order from '../Order';

class App extends React.Component {
  render() {
    const { siteMenu, deliveryTypes, contacts } = this.props;

    return (
      <div>
        <PageHeader siteMenu={siteMenu} />

        <PageContent>
          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                <GoodsList />
              )}
            />

            <Route
              path='/order/'
              render={() => (
                <Order deliveryTypes={deliveryTypes} />
              )}
            />

            <Route
              path='/contacts/'
              render={() => (
                <ContactsPage contacts={contacts} />
              )}
            />

            <Route
              path='/product/:productCode/'
              render={() => (
                <GoodsList />
              )}
            />

            <Route
              render={() => <Redirect to='/' />}
            />
          </Switch>
        </PageContent>

        <PageFooter contacts={contacts} />

        <Route
          path='/product/:productCode/'
          render={props => (
            <Popup history={props.history}>
              <GoodDetails {...props} />
            </Popup>
          )}
        />

      </div>
    );
  }
}

export default withRouter(App);
