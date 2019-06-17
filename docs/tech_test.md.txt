
## [Home](./index.md)

# [The Challenge](https://github.com/DiUS/coding-tests/blob/master/dius_tennis.md)

DiUS is hosting a tennis tournament. To aid with this, we're developing a scoring system.

The scoring system for tennis works like this.

* A match has one set and a set has many games

* A game is won by the first player to have won at least 4 points in total and at least 2 points more than the opponent.

  * The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as 0, 15, 30, 40, respectively

 * If at least 3 points have been scored by each player, and the scores are equal, the score is "deuce".

 * If at least 3 points have been scored by each side and a player has one more point than his opponent, the score of the game is "advantage" for the player in the lead.

* There are many games to a set in tennis

 * A player wins a set by winning at least 6 games and at least 2 games more than the opponent.
 
 * If one player has won six games and the opponent five, an additional game is played. If the leading player wins that game, the player wins the set 7–5. If the trailing player wins the game, a tie-break is played.
 
 * A tie-break, played under a separate set of rules, allows one player to win one more game and thus the set, to give a final set score of 7–6. A tie-break is scored one point at a time. The tie-break game continues until one player wins seven points by a margin of two or more points. Instead of being scored from 0, 15, 30, 40 like regular games, the score for a tie breaker goes up incrementally from 0 by 1. i.e a player's score will go  from 0 to 1 to 2 to 3 …etc.
 
* Add a score method that will return the current set score followed by the current game score 

* Add a pointWonBy method that indicates who won the point

Constraints

* Only worry about 1 set
* Don't worry about validation, assume the client passes in correct data

More information on tennis scoring can be found here https://en.wikipedia.org/wiki/Tennis_scoring_system

For example:


The interface should look something like this in Java:

```

  Match match = new Match("player 1", "player 2");
  match.pointWonBy("player 1");
  match.pointWonBy("player 2");
  // this will return "0-0, 15-15"
  match.score();

  match.pointWonBy("player 1");
  match.pointWonBy("player 1");
  // this will return "0-0, 40-15"
  match.score();
  
  match.pointWonBy("player 2");
  match.pointWonBy("player 2");
  // this will return "0-0, Deuce"
  match.score();
  
  match.pointWonBy("player 1");
  // this will return "0-0, Advantage player 1"
  match.score();
  
  match.pointWonBy("player 1");
  // this will return "1-0"
  match.score();
 
```

Notes on implementation:

- use **Java, Javascript, Ruby, Kotlin, Swift, or Groovy**
- try not to spend more than 2 hours maximum. (We don't want you to lose a weekend over this!)
- don't build guis etc, we're more interested in your approach to solving the given task, not how shiny it looks
- don't worry about making a command line interface to the application
- don't use any frameworks (rails, spring etc), or any external jars/gems (unless it's for testing or build/dependency mgt)

When you've finished, send through the link to your github-repo. Happy coding