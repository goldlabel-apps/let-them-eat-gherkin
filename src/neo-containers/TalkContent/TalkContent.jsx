

/* Thanks to Brian Vaughn for this great component 
    https://github.com/bvaughn/react-presents
*/

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './TalkContent.Style';
// import { Presentation, ContentSlide } from 'react-presents';

import cn from 'classnames';

class TalkContent extends Component {

  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={cn(classes.presentation)}>
        
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TalkContent)