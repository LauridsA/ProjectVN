import React from 'react'
import App from './App.jsx'
import AboutUs from '../HeadersFooters/AboutUs.jsx'
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from '../HeadersFooters/Header.jsx'
import Footer from '../HeadersFooters/Footer.jsx'
import LoginForm from '../user-site/components/LoginForm.jsx'
import { connect } from 'react-redux'
import { RESET, ROUTE_BASE, ROUTE_ABOUTUS, 
    ROUTE_ADMIN, ROUTE_SHOPPINGCART, ROUTE_LOGIN, EMPTY_CURRENTUSER, ROUTE_USER_DETAILS, SET_CURRENTUSER 
} from '../components/Constants.jsx'
import UserDetailsContainer from '../user-site/containers/UserDetailsContainer.jsx'

class Root extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <Header  
                    currentUser = {this.props.currentUser}
                    />
                </div>

                <Switch>
                    <Route exact path={ROUTE_BASE} render={() => (
                        <App dispatch={this.props.dispatch}
                            products={this.props.products}
                            categories={this.props.categories}
                            filter={this.props.filter}
                            currentProduct={this.props.currentProduct}
                        />
                    )} />
                    <Route exact path={ROUTE_LOGIN} render={() => (
                        <LoginForm 
                            currentUser = {this.props.currentUser}
                            handleLogin = {(u) => this.props.dispatch({type: SET_CURRENTUSER, payload: u})}
                        />
                    )} />
                    <Route exact path={ROUTE_ABOUTUS} render={() => (
                        <AboutUs />
                    )} />
                    <Route exact path={ROUTE_USER_DETAILS} render={() => (
                        <UserDetailsContainer 
                        currentUser={this.props.user}
                        handleLogout = {() => this.props.dispatch({type: EMPTY_CURRENTUSER})}
                        />
                    )} />
                </Switch>

                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}
function mapStateToProps(centralState) {
    return {
        products: centralState.products,
        categories: centralState.categories,
        shoppingcart: centralState.shoppingCart,
        filter: centralState.filter,
        currentProduct: centralState.currentProduct,
        currentUser: centralState.currentUser,
        user: centralState.user
    }
}
export default withRouter(connect(mapStateToProps)(Root))