import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movieContaiiner: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'auto',
    // backgroundColor: 'yellow',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));
