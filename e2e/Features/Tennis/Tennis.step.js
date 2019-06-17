
const { Given } = require(`cucumber`);
const { 
  iAmOn,
  iClickBlank,
  iShouldSeeBlankInBlank,
  iWaitForBlankSeconds,
 } = require(`../../createWorld`);

async function iOpenTheApp() {
  const url = `http://localhost:3000`;
  await iAmOn(url);
  await iWaitForBlankSeconds(1);
}
exports.iOpenTheApp = iOpenTheApp;
Given(/^I open the App$/, iOpenTheApp);

async function iAmOnTheTennisPage() {
  await iClickBlank (`#tennis-game`);
  await iWaitForBlankSeconds(1);
}
exports.iAmOnTheTennisPage = iAmOnTheTennisPage;
Given(/^I click the Tennis Game tab$/, iAmOnTheTennisPage);

async function checkScore(score) {
  await iShouldSeeBlankInBlank(score, `#score`);
  await iWaitForBlankSeconds(1);
}
exports.checkScore = checkScore;
Given(/^The score should be "([^"]*)"$/, checkScore);

async function resetGame() {
  await iWaitForBlankSeconds(1);
  await iClickBlank (`#new-game`);
}
exports.resetGame = resetGame;
Given(/^I start a new game$/, resetGame);

async function scenarioDone() {
  await iWaitForBlankSeconds(3);
}
exports.scenarioDone = scenarioDone;
Given(/^this scenario is done$/, scenarioDone);


