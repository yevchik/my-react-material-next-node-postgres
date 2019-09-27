import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 11,
    padding: theme.spacing(3),
  },
}));
  