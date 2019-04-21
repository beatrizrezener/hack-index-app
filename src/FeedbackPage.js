import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import iconeSJ from './assets/salvejorge.png';
import logoTV from './assets/televisa.png';
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Line } from './Line';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel'

function FeedbackPage(props) {
  
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <img src={require('./assets/icon.png')} style={{ width: '55px', float: 'right' }} />
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          {/* <Link style={{textTransform: 'none', fontSize: '20px', fontWeight: 'bold', textDecoration: 'none', color: 'gray'}} to="/">GloboIndex</Link> */}
          </Typography>
          <Button color="primary" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
        <main className={classes.layout}>
          <div>
              <br></br>
              <Card style={{padding: '40px'}} >
              <Button variant="contained" className={classes.button}>
                <Link style={{textTransform: 'none', fontSize: '15px',  textDecoration: 'none', color: 'gray'}} to="/">Voltar</Link>
              </Button>
              <CardHeader
                  title="Como foi a venda?"
                  titleTypographyProps={{ align: 'center', variant:'h6' }}
                  subheaderTypographyProps={{ align: 'center' }}
                />
                  <div className={classes.root}>
                    <Grid container spacing={12}>
                      <Grid item xs={8}>
                        <Paper className={classes.paper}>
                          <img src={tier.logo} style={{ width: '95px', float:'left', marginRight: '15px' }} />
                          <div >
                            <Typography variant="h6" align="left" >
                              {tier.cliente}
                            </Typography>
                            <Typography style={{ fontSize: '14px' }} align="left" color="textPrimary" gutterBottom>
                              {tier.subheader}
                            </Typography>
                          </div>
                        </Paper>                      
                      </Grid>
                      <Grid item xs={4}>
                        <Paper className={classes.paper}>
                          <Typography variant="grau" align="right" style={{ fontSize: '20px' }}>
                            {tier.grau}
                          </Typography>
                          <Typography variant="grau" align="right" style={{ fontSize: '12px' }}>
                            match
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                  </div>

                  <Line color="#c4c4c4" opacity="1.0"/>
                  
                  <CardContent>
                    <Typography variant="h6">
                      A Televisa mostrou-se satisfeita com o produto?
                    </Typography>                   
                    <Typography variant="h8">
                    <FormControl component="fieldset" className={classes.formControl}>
                      <RadioGroup
                        aria-label="Satisfacao"
                        name="satisfacao"
                        className={classes.group}
                        // value={this.state.value}
                        // onChange={this.handleChange}
                      >
                        <FormControlLabel value="sim" control={<Radio color="" />} label="Sim" />
                        <FormControlLabel value="não" control={<Radio color="" />} label="Não" />
                      </RadioGroup>
                    </FormControl>
                    </Typography>            
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <Button fullWidth style={{color: 'white', border: 'none', textTransform: 'none', fontSize: '20px', fontWeight: 'bold'}} buttonStyle={{width:"100%"}}>
                      <Link style={{color: 'white', border: 'none', textTransform: 'none', fontSize: '20px', fontWeight: 'bold', textDecoration: 'none'}} to="/">confirmar</Link>
                    </Button>
                  </CardActions>
              </Card>
            </div>
      </main>
    </React.Fragment>
  );
}

FeedbackPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    backgroundColor: '#84ddc6',
    fontSize: 24,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    boxShadow: 'none',
  },
});

const tier = {
    title: 'Salve Jorge',
    subheader: 'México',
    cliente: 'TeleVisa Inc.',
    grau: '90%',
    icone: iconeSJ,
    logo: logoTV,
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonVariant: 'outlined',
};

export default withStyles(styles)(FeedbackPage);
