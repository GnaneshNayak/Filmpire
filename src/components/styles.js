import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    // backgroundColor: 'yellow',
  },
  content: {
    // backgroundColor: 'red',
    flexGrow: 1,
    padding: '2em',
    width: '100%',
  },
  toolbar: {
    height: '70px',
    // background: 'pink',
  },
}));
