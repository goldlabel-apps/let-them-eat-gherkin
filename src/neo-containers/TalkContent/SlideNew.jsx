

/* Thanks to Brian Vaughn for this great component 
    https://github.com/bvaughn/react-presents
*/

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './TalkContent.Style';
import cn from 'classnames';
import {
  ContentSlide, 
  Step
} from 'react-presents';

class SlideNew extends Component {

  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={cn(classes.talkContent)}>
          <ContentSlide>
            <h1>A simple slide</h1>
            <p>Slides can contain multiple steps.</p>
            <ul>
              <Step index={1} exact><li>Sub-text can appear only for a specific step</li></Step>
              <Step index={2}><li>Or it can be additive</li></Step>
              <Step index={3}><li>(By default it is additive)</li></Step>
              <Step index={4} maxIndex={5}><li>They can also be shown for a range</li></Step>
            </ul>
          </ContentSlide>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SlideNew)