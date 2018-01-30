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
    const { siteMenu, catalogSections, catalog, deliveryTypes, contacts } = this.props;

    return (
      <div>
        <PageHeader siteMenu={siteMenu} catalogSections={catalogSections} />

        <PageContent>
          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                <GoodsList
                  catalog={catalog}
                />
              )}
            />

            <Route
              path='/order/'
              render={() => (
                <Order
                  catalog={catalog}
                  deliveryTypes={deliveryTypes}
                />
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
                <GoodsList
                  catalog={catalog}
                />
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
              <GoodDetails
                catalog={catalog}
                {...props}
              />
            </Popup>
          )}
        />

      </div>
    );
  }
}

export default withRouter(App);
