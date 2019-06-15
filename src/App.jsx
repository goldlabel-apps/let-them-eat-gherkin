import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cn from 'classnames';
import muiTheme from './theme/mui';
import commonStyles from "./theme/commonStyles";
import {
  CssBaseline,
  AppBar,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Fab,
  IconButton,
  Typography,
  Toolbar,
  // Tabs,
  // Tab,
} from '@material-ui/core/';
// import {
//   Tennis,
// } from './neo-containers';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

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
    const body = `Maecenas condimentum sagittis elit at ornare. In molestie erat nec sapien semper, sit amet condimentum nunc condimentum. Etiam a commodo massa.`;

    return (
      <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
        <CssBaseline />
        <div className={cn(classes.app)}>
           <Card className={cn(classes.card, classes.flexGrow)}>
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
                title={title}
              />


            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {body}
              </Typography>
            </CardContent>


           </Card>

           
        </div>


        <div className={cn(classes.bottomAppBar)}>
            <AppBar 
              position={`fixed`}
              color={`primary`}
              className={cn(classes.appBar)
            }>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="Open drawer"
              >
                <MenuIcon />
              </IconButton>
              <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
                <AddIcon />
              </Fab>
              <div className={classes.grow} />
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton edge="end" color="inherit">
                <MoreIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          </div>


      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);


