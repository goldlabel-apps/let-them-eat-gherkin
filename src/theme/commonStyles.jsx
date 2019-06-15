
export default theme => ({
  app:{
    border: `1px solid ` + theme.palette.white,
    marginTop: theme.spacing(),
    maxWidth: 375,
    margin: 'auto',
  },
  topBarContrain:{
    width: 375,
    margin: 'auto',
    display: 'flex',
  },
  bottomBarContrain:{
    width: 375,
    margin: 'auto',
    display: 'flex',
  },
  card:{
    background: `rgba(0,0,0,0.01)`,
    padding:  theme.spacing(),
    margin:  theme.spacing(),
  },
  appHeader: {
    marginTop: 75,
    marginBottom: theme.spacing(2),
  },
  pushTop:{
    marginTop: theme.spacing(2),
  },

  router:{
    marginTop: 75,
  },
  gitAccountImg:{
    width: '100%',
  },
  mainTitle: {
    paddingTop: theme.spacing(3.5),
  },
  loadingCard:{
    padding: theme.spacing(),
    margin: theme.spacing(),
  },
  pad: {
    margin: theme.spacing(),
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  btnIconLeft:{
    marginRight: theme.spacing(),
  },
  btnIconRight:{
    marginLeft: theme.spacing(),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  redBorder:{
    border: '1px solid red',
  },
  greenBorder:{
    border: '1px solid green',
  },
  centered:{
    textAlign: 'center',
  },
  pullRight: {
    textAlign: 'right',
  },
  pullLeft: {
    textAlign: 'left',
  },
  grow:{
    flexGrow: 1,
  },
  white:{
    color: 'white',
  },
  blank:{
  },
});
