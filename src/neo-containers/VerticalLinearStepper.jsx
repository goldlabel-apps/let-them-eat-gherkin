import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import cn from 'classnames';
import content from '../content';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  code:{
    fontSize: `2rem`,
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  startOverButton:{
    marginTop: theme.spacing(3),
  }
}));

function getSteps() {
  let steps = [];
  for (let i = 0; i<content.steps.length; i++){
    steps.push(content.steps[i].title);
  }
  return steps;
}

function getStepContent(step) {
  return content.steps[step].stepHTML;
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      <Stepper 
        activeStep={activeStep} 
        orientation={`vertical`}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>
                <span dangerouslySetInnerHTML={{__html: getStepContent(index) }} />
              </Typography>
              <div className={cn(classes.actionsContainer)}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    variant="outlined"
                    color="primary"
                    onClick={handleBack}
                    className={cn(classes.button)}
                  >
                    Back
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleNext}
                    className={cn(classes.button)}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper 
          square elevation={0} 
          className={cn(classes.resetContainer)}>
          <Typography variant={`h5`}>Job done. Everyone is happy.</Typography>
          <Button 
            variant={`outlined`}
            color={`secondary`}
            onClick={handleReset} 
            className={cn(classes.button, classes.startOverButton)}>
            Start Over
          </Button>
        </Paper>
      )}
    </div>
  );
}
