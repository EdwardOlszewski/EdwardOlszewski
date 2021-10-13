import React from 'react'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Grid,
  Container,
  Typography,
  Divider,
} from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'initial',
    marginBottom: 0,
    top: 'auto',
    backgroundColor: '#2b2b2b',
    padding: '1rem',
    textAlign: 'center',
    margin: 'auto',
  },
  footerTitle: {
    textAlign: 'center',
  },
  copyright: {
    padding: '1rem',
  },
  divider: {
    backgroundColor: '#3e3e3e',
    marginBottom: '2rem',
  },
  gridItem: {
    marginTop: '1rem',
    textAlign: 'left',
  },
  link: {
    '&:hover': {
      opacity: '50%',
    },
  },
  mainGrid: {
    width: '100%',

    [theme.breakpoints.up('md')]: {
      marginLeft: '10rem',
    },
  },
}))

export default function BottomAppBar() {
  const classes = useStyles()
  const currentYear = new Date()

  return (
    <AppBar className={classes.appBar}>
      <Container maxWidth='lg'>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item sm={6}>
            <Grid container className={classes.gridItem}>
              <Grid item xs={2} sm={1}>
                <PhoneIcon />
              </Grid>
              <Grid item xs={10} sm={11}>
                <a href='tel:+7089048915'>
                  <Typography variant='subtitle1' className={classes.link}>
                    (708) 904-8915
                  </Typography>
                </a>
              </Grid>
              <Grid container className={classes.gridItem}>
                <Grid item xs={2} sm={1}>
                  <EmailIcon />
                </Grid>
                <Grid item xs={10} sm={11}>
                  <a href='mailto:edolszewski96@gmail.com'>
                    <Typography variant='subtitle1' className={classes.link}>
                      edolszewski96@gmail.com
                    </Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm={6}>
            <Grid container className={classes.gridItem}>
              <Grid item xs={2} sm={1}>
                <LinkedInIcon />
              </Grid>
              <Grid item xs={10} sm={11}>
                <a href='https://www.linkedin.com/in/olszewskiedward'>
                  <Typography variant='subtitle1' className={classes.link}>
                    linkedin.com/in/olszewskiedward
                  </Typography>
                </a>
              </Grid>
              <Grid container className={classes.gridItem}>
                <Grid item xs={2} sm={1}>
                  <GitHubIcon />
                </Grid>
                <Grid item xs={10} sm={11}>
                  <a href='https://github.com/EdwardOlszewski'>
                    <Typography variant='subtitle1' className={classes.link}>
                      github.com/EdwardOlszewski
                    </Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <div className={classes.copyright}>
        <Divider className={classes.divider} />
        <Typography variant='caption'>
          ©{currentYear.getFullYear()} EDWARD OLSZEWSKI ALL RIGHTS RESERVED.
        </Typography>
      </div>
    </AppBar>
  )
}
