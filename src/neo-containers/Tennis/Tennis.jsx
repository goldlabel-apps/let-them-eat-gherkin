import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './Tennis.Style';
import cn from 'classnames';
import {
  Button,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core/';
import IconPlayer from '@material-ui/icons/PersonAdd';

class Tennis extends Component {

  state ={
    matches:[],
    currentMatch: null,
  }

  startMatch = () => {
    let newMatches = this.state.matches;
    const newObj = {
      dateStarted: Date.now(),
      lastUpdate: Date.now(),
      player1Points: 0,
      player2Points: 0,
      winner: null,
      score: `0:0`,
    };
    newMatches.push (newObj);
    this.setState({
      matches: newMatches,
      currentMatch: newObj
    })
  }

  pointWon = (player) => {
    const {
      currentMatch,
    } = this.state;
    let p1 = currentMatch.player1Points;
    let p2 = currentMatch.player2Points;
    let winner = null;

    player === 'player1' ? p1++ : p2++;
    let score = `${this.getPeculiarScore(p1)}:${this.getPeculiarScore(p2)}`;
    if (p1 === 3 && p2 === 3){
      score = 'Deuce';
    }  
    if (p1 > 3 || p2 > 3){
      const d =  Math.max(p1, p2) - Math.min(p1, p2);
      let playerX = `Player 1`;
      if (p2 === Math.max(p1, p2)){
        playerX = `Player 2`;
      }
      switch (d) {
        case 0:
          score = `Deuce`;
          break;
        case 1:
          score = `Advantage ${playerX}`;
          break;
        default:
          winner = playerX;
      }
    }
    this.setState ({
      currentMatch:{
        ...currentMatch,
        player1Points: p1,
        player2Points: p2,
        winner,
        score,
      }
    })
  }

  randomisePointWin = () => {
    if (Math.random() >= 0.5){
      return 'player1';
    }
    return 'player2';
  }

  getPeculiarScore = (points) => {
    let peculiarScore;
    switch (points) {
      case 0:
        peculiarScore = `0`; // || `Love`
        break;
      case 1:
        peculiarScore = `15`;
        break;
      case 2:
        peculiarScore = `30`;
        break;
      case 3:
        peculiarScore = `40`;
        break;
      default: 
        peculiarScore = 'error';
    }
    return peculiarScore;
  }

  render() {
    const {
      classes
    } = this.props;
    const {
      currentMatch,
    } = this.state;
    if (currentMatch !== null){
      if (currentMatch.winner !== null){
        return (
        <Grid container className={cn(classes.tennis)}>
          <Grid item xs={12} className={cn(classes.result)}>
            <Typography variant={`button`}>
              Game Over
            </Typography>
            <div  className={cn(classes.winner)}>
              <Typography variant={`h5`}>
                {currentMatch.winner} Wins
              </Typography>
            </div>
            <Button
              id={`new-game`}
              variant={`contained`}
              color={`primary`}
              onClick={(e) => {
                e.preventDefault();
                this.startMatch();
              }}>
              New Game
            </Button>
          </Grid>
        </Grid>
        );
      }
    }
    return (
        <Grid container className={cn(classes.tennis)}>
          { currentMatch === null ? 
            <Grid item xs={12}  className={cn(classes.startMatchBtn)}>
              <Button
                id={`start-game`}
                variant={`contained`}
                color={`primary`}
                onClick={(e) => {
                  e.preventDefault();
                  this.startMatch();
                }}>
                {`Start Game`}
              </Button>
            </Grid>
          : 
          <React.Fragment>  
            <Grid item xs={12}>
              <Grid container className={cn(classes.court)}>          
                  <Grid item xs={6}> 
                    <Typography variant={`h5`} className={cn(classes.playerTitle)}>
                      {`Player 1`}
                    </Typography>
                    <div style={{ borderRight: '1px solid #eee' }}>
                      <IconButton
                        id={`player1`}
                        color={`primary`}
                        onClick={(e) => {
                          e.preventDefault();
                          this.pointWon('player1');
                        }}>
                        <IconPlayer className={cn(classes.iconBtn)} />
                      </IconButton>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant={`h5`} className={cn(classes.playerTitle)}>
                      {`Player 2`}
                    </Typography>
                    <div style={{ borderLeft: '1px solid #eee' }}>
                      <IconButton
                        id={`player2`}
                        color={`secondary`}
                        onClick={(e) => {
                          e.preventDefault();
                          this.pointWon('player2');
                        }}>
                        <IconPlayer className={cn(classes.iconBtn)} />
                      </IconButton>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} className={cn(classes.points)}>
                <div id={`score`}>
                  <Typography variant={`h5`}>
                    {currentMatch.score}
                  </Typography>
                </div>
              </Grid>
            </React.Fragment>
          }
        </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Tennis)