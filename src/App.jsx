import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cn from 'classnames';
import muiTheme from './theme/mui';
import commonStyles from "./theme/commonStyles";
import moment from 'moment';
import {
  CssBaseline,
  AppBar,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  // CardMedia,
  IconButton,
  Typography,
  Tabs,
  Tab,
} from '@material-ui/core/';
import {
  VerticalLinearStepper,
  Tennis,
} from './neo-containers';
import IconGame from '@material-ui/icons/Phone';
import IconGherkin from '@material-ui/icons/Favorite';

export const styles = theme => ({
  ...commonStyles(theme),
});

class App extends Component {

  state = {
    tabValue: 0,
  }

  render() {
    
    const {
      classes,
    } = this.props;
    const {
      tabValue,
    } = this.state;

    let contentObj = {
      appTitle: `Let them eat Gherkin`,
      avatar: `/png/icon.png`,
    };

    if (tabValue === 0){
      contentObj.media= `/jpg/let-them-eat-gherkin.jpg`;
    } else {
      contentObj.pageTitle = `Tennis Game`;
      contentObj.pageBody = `Play the game`;
      contentObj.media= `/jpg/tennis.jpg`;
    }

    return (
      <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
        <CssBaseline />
        <div className={cn(classes.app)}>
           <Card className={cn(classes.card, classes.flexGrow)}>
            <CardHeader
              title={contentObj.appTitle}
              subheader={moment(Date.now()).format("ddd, MMMM Do, h:mm a")}
              avatar={
                <Avatar 
                  aria-label="Avatar" 
                  className={cn(classes.avatar)}
                  src={contentObj.avatar}
                />
              }
              action={
                <IconButton 
                  aria-label="Github Button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://github.com/listingslab-software/let-them-eat-gherkin', '_blank')
                  }}>
                  <Avatar 
                    aria-label="Github Logo" 
                    className={cn(classes.github)}
                    src={`/png/github.png`}
                  />
                </IconButton>
              }
            />
              {/* <CardMedia
                className={cn(classes.media)}
                image={contentObj.media}
                title={contentObj.appTitle}
              /> */}
            <CardContent>
              <Typography variant="h5" color="textSecondary" component="p">
                {contentObj.pageTitle}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {contentObj.pageBody}
              </Typography>


              {
                tabValue === 0 ? 
                  <VerticalLinearStepper />
                :
                  <Tennis />
              }
              
            </CardContent>
           </Card>           
        </div>
        <div className={cn(classes.bottomAppBar)}>
            <AppBar 
              position={`fixed`}
              color={`default`}
              className={cn(classes.appBar)
            }>
              <Tabs
                value={tabValue}
                variant={`fullWidth`}
                indicatorColor={`primary`}
                textColor={`primary`}
                onChange={(e, tabValue) => {
                  e.preventDefault();
                  this.setState({
                    tabValue
                  });
                }}>
                <Tab icon={<IconGherkin />} label={`Context`} />
                <Tab icon={<IconGherkin />} label={`Process`} />
                <Tab icon={<IconGame />} label={`Tennis Game`} />
              </Tabs>
            </AppBar>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);


