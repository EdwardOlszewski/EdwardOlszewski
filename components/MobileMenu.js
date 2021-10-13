import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles, Hidden, IconButton, Divider } from '@material-ui/core'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MenuIcon from '@mui/icons-material/Menu'
import GitHubIcon from '@mui/icons-material/GitHub'
import DescriptionIcon from '@mui/icons-material/Description'

const useStyles = makeStyles((theme) => ({
  list: {
    width: 280,
  },
  fullList: {
    width: 'auto',
  },
  hamburgerIcon: {
    color: 'black',
    width: '2.5rem',
    height: '2.5rem',
  },
}))

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles()
  const [state, setState] = useState(false)

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
    >
      <List style={{ paddingTop: '2rem' }}>
        <a className='nav-icons' href='../images/Resume.pdf' target='_blank'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary='Resume ' />
          </ListItem>
        </a>

        <a href='tel:+7089048915'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary='(708) 904-8915 ' />
          </ListItem>
        </a>

        <a href='mailto:edolszewski96@gmail.com'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary='edolszewski96 @gmail.com' />
          </ListItem>
        </a>

        <a href='https://www.linkedin.com/in/olszewskiedward'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary='linkedin.com/in/ olszewskiedward' />
          </ListItem>
        </a>

        <a href='https://github.com/EdwardOlszewski'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary='github.com/ EdwardOlszewski' />
          </ListItem>
        </a>
      </List>
    </div>
  )

  return (
    <Hidden mdUp>
      <React.Fragment key={'left'}>
        <IconButton
          onClick={toggleDrawer('left', true)}
          className={classes.hamburgerIcon}
          id='back-to-top-anchor'
        >
          <MenuIcon fontSize='large' />
        </IconButton>

        <SwipeableDrawer
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
    </Hidden>
  )
}
