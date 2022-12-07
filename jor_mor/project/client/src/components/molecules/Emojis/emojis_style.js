import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  circular: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
