import React, { Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import ContactsPage from 'components/ContactsPage';
import Dialogs from 'components/Dialogs';
import GoodsList from 'components/GoodsList';
import GoodDetails from 'components/GoodDetails';
import Order from 'components/Order';
import PageHeader from 'components/PageHeader';
import PageContent from 'components/PageContent';
import PageFooter from 'components/PageFooter';
import Popup from 'components/Popup';

class App extends React.Component {
  render() {
    const { siteMenu, deliveryTypes, contacts } = this.props;

    return (
      <Fragment>
        <PageHeader siteMenu={siteMenu} />

        <PageContent>
          <Switch>
            <Route
              exact
              path='/'
              render={() => <GoodsList />}
            />

            <Route
              path='/order/'
              render={() => <Order deliveryTypes={deliveryTypes} />}
            />

            <Route
              path='/contacts/'
              render={() => (
                <ContactsPage contacts={contacts} />
              )}
            />

            <Route
              path='/product/:productCode/'
              render={() => <GoodsList />}
            />

            <Route
              path='/:sectionCode'
              render={({ history, match }) => <GoodsList history={history} match={match} />}
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
            <Popup history={props.history} type='big' closeButton>
              <GoodDetails {...props} />
            </Popup>
          )}
        />

        <Dialogs />
      </Fragment>
    );
  }
}

export default withRouter(App);
