
// const greenColor = `#00a818`;
const appWidth = 600;

export default theme => ({
  app:{
    maxWidth: appWidth,
    margin: 'auto',
    background: 'white',
    height: '100vh',
  },
  appBar: {
    maxWidth: appWidth,
    left: '50%',
    transform: 'translate(-50%, 0)',
    top: 'auto',
    bottom: 0,
  },
  bottomAppBar:{
    margin: 'auto',
    border: 'none',
    boxShadow: 'none',
    borderRadius: 'none',
  },
  card:{
    width: '100%',
    padding: theme.spacing(),
    border: 'none',
    boxShadow: 'none',
    borderRadius: 'none',
  },
  avatar:{
    // background: lightBgColor,
  },
  media:{
    height: 0,
    paddingTop: '46.875%'
  },
  iconButtonSize:{
    width: 40,
    height: 50,
  },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  
});
