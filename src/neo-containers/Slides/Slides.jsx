import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './Slides.Style';
import cn from 'classnames';
import {
  Button,
  // Grid,
  // IconButton,
  // Typography,
} from '@material-ui/core/';
// import IconPlayer from '@material-ui/icons/PersonAdd';

class Slides extends Component {

  render() {
    const {
      classes,
    } = this.props;
    return (
      <React.Fragment>
        <Button 
          color={`secondary`}
          variant={`contained`}
          className={cn(classes.slidesBtn)}>
          Slide Show
        </Button>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Slides)