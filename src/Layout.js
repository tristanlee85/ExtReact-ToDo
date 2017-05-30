import React, { Component } from 'react'
import { Transition, Container, TitleBar, Button, Sheet, Panel } from '@extjs/ext-react';
import {  BrowserRouter as Router, Switch, Route, Redirect, withRouter} from 'react-router-dom'
import { medium, large } from './responsiveQueries';
import About from './About/About';
import Todos from './Todos/Todos';
import NavMenu from './NavMenu';
import {toggleAppMenu} from './actions';

import { connect } from 'react-redux';

class Layout extends Component {

    navigate = (path) => {
        const { dispatch, history } = this.props;
        dispatch(toggleAppMenu(false));
        history.push(path);
    }

    render() {
        const { showAppMenu, location, dispatch } = this.props;

        const navMenuDefaults = {
            onItemClick: this.navigate,
            selection: location.pathname
        }

        const isPhone = Ext.platformTags.phone;

        return (
            <Container fullscreen layout="fit">
                <TitleBar title="TODOs Example" docked="top">
                    {isPhone && <Button align="left" iconCls="x-fa fa-bars" handler={() => dispatch(toggleAppMenu())} />}
                </TitleBar>
                {isPhone ? 
                    <Sheet displayed={showAppMenu} side="left" onHide={() => dispatch(toggleAppMenu(false))}>
                        <Panel scrollable title="TODO Navigation">
                            <NavMenu {...navMenuDefaults} width="250"/>
                        </Panel>
                    </Sheet>
                : 
                    <Panel scrollable docked="left">
                        <NavMenu {...navMenuDefaults}/>
                    </Panel>
                }
                <Transition type="fade">
                    <Switch>
                        <Route path="/todos" component={Todos} />
                        <Route path="/about" component={About} />
                        <Redirect from="/" to="/todos" exact />
                     </Switch>
                </Transition>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showAppMenu: state.showAppMenu
    }
}
export default connect(mapStateToProps)(withRouter(Layout));