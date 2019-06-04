import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from './theme/mui';
import commonStyles from "./theme/commonStyles";
import {
  CssBaseline,
} from '@material-ui/core/';
import {
  TalkContent,
} from './neo-containers';

export const styles = theme => ({
  ...commonStyles(theme),
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
        <React.Fragment>
          <CssBaseline />
          <TalkContent />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App)