import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import iconeSJ from './assets/salvejorge.png';
import logoTV from './assets/televisa.png';
import logoTC from './assets/tvchile.png';
import iconeEV from './assets/espelhodavida.png';
import { Link } from 'react-router-dom'
import { Line } from './Line';

function Leads(props) {
  
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
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h4" align="left" color="textPrimary" gutterBottom>
            Novelas
          </Typography>
        </div>
        <Grid container spacing={40} alignItems="flex-end">
          {props.data.map(tier => (
            <Grid item key={tier.title} xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={tier.recommendation || tier.recomendation}
                  subheader={tier.imdb.Released}
                  titleTypographyProps={{ align: 'center', variant:'h6' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                  avatar={
                    <Avatar style={{marginLeft: '15px',  width: 60, height: 60}}>
                      {tier.url_recomendation && 
                        <img src={tier.url_recomendation} style={{ width: '75px' }} />
                      }
                      {!tier.url_recomendation && 
                        tier.title.charAt(0)
                      }
                    </Avatar>
                  }
                />
                <Line color='#c4c4c4' width='75%' />
                <CardContent>
                  <Typography variant="subtitle1" align="center" style={{ fontSize: '12px' }}>
                      parceiro sugerido<br/>
                      {tier.icon_url &&
                        <img src={tier.icon_url} alt="Logo" align='center' style={{ maxHeight:'50px' }} />
                      }
                      <br/>
                      {tier.issuers.title}
                  </Typography>
                  <Typography variant="h6" align="center" style={{color:'#c4c4c4', fontWeight:'550'}} fontSize={24}>
                  {tier.hit}% match
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button fullWidth style={{color: 'white', border: 'none', textTransform: 'none', fontSize: '20px', fontWeight: 'bold'}} buttonStyle={{width:"100%"}}>
                    <Link style={{color: 'white', border: 'none', textTransform: 'none', fontSize: '20px', fontWeight: 'bold', textDecoration: 'none'}} to={"/Detail/" + tier._id}>veja mais</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    </React.Fragment>
  );
}

Leads.propTypes = {
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
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const tiers = [
  {
    title: 'Salve Jorge',
    subheader: '(2012 - 2013)',
    icone: iconeSJ,
    logo: logoTV,
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    grau: '90%',
    buttonVariant: 'outlined',
  },
  {
    title: 'Espelho da Vida',
    subheader: '(2002 - 2003)',
    icone: iconeEV,
    logo: logoTV,
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    grau: '80%',
    buttonVariant: 'outlined',
  },
  {
    title: 'Avenida Brasil',
    subheader: '(2012 - 2013)',
    icone: '',
    logo: logoTC,
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    grau: '85%',
    buttonVariant: 'outlined',
  },
];

export default withStyles(styles)(Leads);
