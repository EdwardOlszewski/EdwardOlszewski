import React from 'react'
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
} from '@material-ui/core'
import ScreenShareIcon from '@mui/icons-material/ScreenShare'
import GitHubIcon from '@mui/icons-material/GitHub'
import Fade from '@mui/material/Fade'

const useStyles = makeStyles((theme) => ({
  card: {
    padding: '15px',
    boxShadow:
      'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
    height: '100%',
  },
  cardTitle: {
    padding: '10px',
  },
}))

const Projects = ({ data }) => {
  const classes = useStyles()

  return (
    <Grid container spacing={1} className={classes.root}>
      {data.map((info) => (
        <Fade key={info._id} timeout={1000} in={true}>
          <Grid key={info._id} item xs={12} sm={12} md={12} lg={6}>
            <Card key={info._id} className={classes.card} elevation={0}>
              <Typography variant='h5' className={classes.cardTitle}>
                {info.title}
              </Typography>

              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CardMedia
                      component='img'
                      height='100%'
                      image={info.imgURL}
                      alt='TooFightersPicture'
                    />
                  </Grid>

                  <Grid container xs={12} style={{ textAlign: 'center' }}>
                    <Grid item xs={6}>
                      <a href={info.webLink}>
                        <Button size='medium'>
                          <ScreenShareIcon /> View Live
                        </Button>
                      </a>
                    </Grid>
                    <Grid item xs={6}>
                      <a href={info.gitHubLink}>
                        <Button size='small'>
                          <GitHubIcon /> GitHub Link
                        </Button>
                      </a>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <br />
                    <Typography gutterBottom variant='h5'>
                      Technologies Used
                    </Typography>

                    <Grid container spacing={2} className={classes.techUsed}>
                      <Grid item xs={6} sm={6} md={6}>
                        <Typography gutterBottom variant='subtitle1'>
                          {info.techUsed.map((tech, i) => (
                            <>
                              {i < 0.5 * info.techUsed.length ? (
                                <li>{tech}</li>
                              ) : null}
                            </>
                          ))}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6}>
                        <Typography gutterBottom variant='subtitle1'>
                          {info.techUsed.map((tech, i) => (
                            <>
                              {i >= 0.5 * info.techUsed.length ? (
                                <li>{tech}</li>
                              ) : null}
                            </>
                          ))}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <Typography gutterBottom variant='h5'>
                    My Role
                  </Typography>
                  <Typography gutterBottom variant='subtitle1'>
                    {info.myRole}
                  </Typography>
                  <br />
                  <Typography gutterBottom variant='h5'>
                    Project Difficulties
                  </Typography>
                  <Typography gutterBottom variant='subtitle1'>
                    {info.projectDif}
                  </Typography>
                  <br />
                  <Typography gutterBottom variant='h5'>
                    My Solution
                  </Typography>
                  <Typography gutterBottom variant='subtitle1'>
                    {info.mySolution}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Fade>
      ))}
    </Grid>
  )
}

export default Projects
