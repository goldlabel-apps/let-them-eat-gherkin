
export default theme => ({
  app:{
    border: `1px solid ` + theme.palette.white,
    marginTop: theme.spacing.unit,
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
    padding:  theme.spacing.unit,
    margin:  theme.spacing.unit,
  },
  appHeader: {
    marginTop: 75,
    marginBottom: theme.spacing.unit * 2,
  },
  pushTop:{
    marginTop: theme.spacing.unit * 2,
  },

  router:{
    marginTop: 75,
  },
  gitAccountImg:{
    width: '100%',
  },
  mainTitle: {
    paddingTop: theme.spacing.unit * 3.5,
  },
  loadingCard:{
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
  },
  pad: {
    margin: theme.spacing.unit,
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  btnIconLeft:{
    marginRight: theme.spacing.unit,
  },
  btnIconRight:{
    marginLeft: theme.spacing.unit,
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
