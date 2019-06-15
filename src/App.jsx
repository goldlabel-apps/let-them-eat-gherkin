import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cn from 'classnames';
import muiTheme from './theme/mui';
import commonStyles from "./theme/commonStyles";
import {
  CssBaseline,
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  // Tabs,
  // Tab,
} from '@material-ui/core/';
// import {
//   Tennis,
// } from './neo-containers';
// import IconGithub from './theme/svg/github.svg';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import PersonPinIcon from '@material-ui/icons/PersonPin';

export const styles = theme => ({
  ...commonStyles(theme),
});

class App extends Component {

  render() {
    
    const {
      classes,
    } = this.props;

    const title = `Let them eat Gherkin`;
    const subtitle = `Win friends and influense people?`;
    const media = `/jpg/let-them-eat-gherkin.jpg`;
    const avatar = `/png/icon.png`;

    return (
      <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
        <CssBaseline />
        <div className={cn(classes.app)}>
           <Card className={cn(classes.card)}>
            <CardHeader
              title={title}
              subheader={subtitle}
              avatar={
                <Avatar 
                  aria-label="Avatar" 
                  className={cn(classes.avatar)}
                  src={avatar}
                />
              }
              action={

                <IconButton 
                  aria-label="Github"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://github.com/listingslab-software/let-them-eat-gherkin', '_blank')
                    console.log ('github click') 
                  }}  
                >
                  <Avatar 
                    aria-label="Github" 
                    className={cn(classes.github)}
                    src={`/png/github.png`}
                  />
                </IconButton>
              }
            />
              <CardMedia
                className={cn(classes.media)}
                image={media}
                title={`title`}
              />
           </Card>
           
           
            {/* <Paper square className={classes.tabs}>
              <Tabs
                value={0}
                onChange={()=>{}}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
              >
                <Tab icon={<PhoneIcon />} label="Gherkin" />
                <Tab icon={<PersonPinIcon />} label="Game" />
              </Tabs>
            </Paper>           */}
          {/* <Tennis /> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);


