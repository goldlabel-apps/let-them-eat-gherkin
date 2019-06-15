import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cn from 'classnames';
import muiTheme from './theme/mui';
import commonStyles from "./theme/commonStyles";
import {
  CssBaseline,
} from '@material-ui/core/';
import {
  Tennis,
} from './neo-containers';

export const styles = theme => ({
  ...commonStyles(theme),
});

class App extends Component {

  render() {
    
    const {
      classes,
    } = this.props;

    return (
      <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
        <div className={cn(classes.app)}>
          <CssBaseline />
          <Tennis />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App)