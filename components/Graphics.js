import React from 'react'
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardMedia,
} from '@material-ui/core'

import Fade from '@mui/material/Fade'

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 0,
    boxShadow:
      'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
  },
  cardTitle: { textAlign: 'center', marginTop: '2rem' },
}))

const Graphics = ({ data }) => {
  const classes = useStyles()

  return (
    <Grid container spacing={1}>
      {data.map((graphics) => (
        <Fade timeout={1000} in={true}>
          <Grid key={graphics._id} item xs={12} sm={12} md={12} lg={4}>
            <Card key={graphics._id} className={classes.card} elevation={0}>
              <Typography variant='h4' className={classes.cardTitle}>
                {graphics.title}
              </Typography>
              <CardMedia
                component='img'
                height='100%'
                image={graphics.imgURL}
                alt={graphics.title}
              />
            </Card>
          </Grid>
        </Fade>
      ))}
    </Grid>
  )
}

export default Graphics
