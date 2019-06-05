/* Thanks to Brian Vaughn for this great component 
    https://github.com/bvaughn/react-presents
*/

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './TalkContent.Style';
import cn from 'classnames';
import {
  Presentation, 
  // Step,
  Slide,
} from 'react-presents';
import SlideNew from './SlideNew';

class TalkContent extends Component {

  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={cn(classes.slide)}>
        <Presentation>

        <Slide
          component={SlideNew}
          key={0}
        />

        </Presentation>


      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TalkContent)