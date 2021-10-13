import React from 'react'
import { makeStyles, Typography, Paper, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '4rem',
    padding: '5rem',
    textAlign: 'center',
    margin: 'auto',
  },
}))

export default function ButtonAppBar({ title }) {
  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.root}>
      <Container>
        <Typography variant='h2'>{title}</Typography>
      </Container>
    </Paper>
  )
}
