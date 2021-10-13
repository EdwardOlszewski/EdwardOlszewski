import React from 'react'
import Link from 'next/link'
import { makeStyles, Hidden, IconButton } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MobileMenu from './MobileMenu'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const useStyles = makeStyles((theme) => ({
  zoom: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    color: 'black',
    marginRight: theme.spacing(2),
    fontSize: '150%',
  },
  appBar: {
    backgroundColor: 'white',
    boxShadow:
      'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
    padding: '.5rem',
  },
  toolbar: {
    [theme.breakpoints.up('sm')]: {
      paddingRight: '4rem',
      paddingLeft: '4rem',
    },
  },
  title: {
    flexGrow: 1,
    color: '#3e3e3e',
    [theme.breakpoints.up('xs')]: {
      fontSize: '4.5vmax',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3vmax',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.5vmax',
    },
  },
}))

function ScrollTop(props) {
  const { children, window } = props
  const classes = useStyles()

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role='presentation' className={classes.zoom}>
        {children}
      </div>
    </Zoom>
  )
}

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root} id='back-to-top-anchor'>
      <AppBar className={classes.appBar} position='fixed' elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h5' className={classes.title}>
            Edward Olszewski
          </Typography>
          <Hidden smDown>
            <Link href='/resume'>
              <a
                className='nav-icons'
                href='../images/Resume.pdf'
                target='_blank'
              >
                <Button className={classes.menuButton}>Resume </Button>
              </a>
            </Link>

            <IconButton className={classes.menuButton}>
              <a href='tel:+7089048915'>
                <PhoneIcon fontSize='large' />
              </a>
            </IconButton>

            <IconButton className={classes.menuButton}>
              <a href='mailto:edolszewski96@gmail.com'>
                <EmailIcon fontSize='large' />
              </a>
            </IconButton>

            <IconButton className={classes.menuButton}>
              <a href='https://www.linkedin.com/in/olszewskiedward'>
                <LinkedInIcon fontSize='large' />
              </a>
            </IconButton>

            <IconButton className={classes.menuButton} size='inherit'>
              <a href='https://github.com/EdwardOlszewski'>
                <GitHubIcon fontSize='large' />
              </a>
            </IconButton>
          </Hidden>

          <MobileMenu />
          <ScrollTop>
            <Fab
              style={{ backgroundColor: '#617398', color: 'white' }}
              size='large'
              aria-label='scroll back to top'
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Toolbar>
      </AppBar>
    </div>
  )
}
