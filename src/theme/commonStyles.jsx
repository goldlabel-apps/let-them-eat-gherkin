
// const lightBgColor = `#e9ebee`;

export default theme => ({
  app:{
    // border: `1px solid black`,
    maxWidth: 600,
    margin: 'auto',
    display: 'flex',
    flexDirection: `row`,
    flexGrow: 1,
  },
  card:{
    width: '100%',
    padding: theme.spacing(),
  },
  avatar:{
    // background: lightBgColor,
  },
  media:{
    height: 0,
    paddingTop: '46.875%'
  },
  iconButtonSize:{
    width: 50,
    height: 50,
  }
});
