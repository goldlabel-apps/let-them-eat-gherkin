Feature: Tennis

  In order that the players don't have to keep score
  As the tournament organiser
  I want the app to score a tennis game correctly

  Scenario: Open App and start game
    Given I open the App
    And I click the Tennis Game tab
    Then I should see "START GAME"
    When I click "#start-game"
    Then The score should be "0:0"

  Scenario: Player 1 wins by a Whitewash
    When I click "#player1"
    Then The score should be "15:0"
    When I click "#player1"
    Then The score should be "30:0"
    When I click "#player1"
    Then The score should be "40:0"
    When I click "#player1"
    Then I should see "Player 1 Wins"
    And I should see "GAME OVER"

  Scenario: Reset Game
    When I start a new game
    Then The score should be "0:0"

  Scenario: Player 1 & 2 Battle it out 
    When I click "#player2"
    Then The score should be "0:15"   
    And I click "#player1"
    Then The score should be "15:15"
    And I click "#player2"
    Then The score should be "15:30"
    And I click "#player1"
    Then The score should be "30:30"
    And I click "#player1"
    Then The score should be "40:30"
    And I click "#player2"
    Then The score should be "Deuce"
    And I click "#player1"
    Then The score should be "Advantage Player 1"
    And I click "#player2"
    Then The score should be "Deuce"
    And I click "#player2"
    Then The score should be "Advantage Player 2"
    And I click "#player2"
    Then I should see "Player 2 Wins"
    And I should see "GAME OVER"
    And this scenario is done