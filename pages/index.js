import { useState } from 'react'
import Head from 'next/head'
import { Container, Typography, makeStyles, Tab, Tabs } from '@material-ui/core'
import Projects from '../components/Projects'
import Graphics from '../components/Graphics'
import Box from '@mui/material/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgb(0,0,0,0)',
    minHeight: '200vh',
    width: '100%',
    padding: '0',
  },
  titleContainer: {
    textAlign: 'center',
    paddingTop: '10rem',
    paddingBottom: '10rem',
    background: 'rgb(0,0,0,0)',
  },
  tab: {
    fontSize: '1.2rem',
    marginLeft: '1rem',
  },
}))

function TabPanel(props) {
  const { children, value, index } = props
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export default function Home({}) {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  return (
    <Box className={classes.root}>
      <Head>
        <title>Edward Olszewski Portfolio</title>
      </Head>

      <Container className={classes.titleContainer}>
        <Typography variant='h3'>Hello, Im Edward Olszewski</Typography>
        <br />
        <Typography variant='h4'>
          I am a self taught and degree holding web developer
        </Typography>
      </Container>

      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: 'blue' } }}
        variant='scrollable'
      >
        <Tab className={classes.tab} label='React Projects' />
        <Tab className={classes.tab} label='NextJS Projects' />
        <Tab className={classes.tab} label='Graphics' />
      </Tabs>
    </Box>
  )
}

/*

<TabPanel value={value} index={0}>
        <Projects data={reactProjects.data} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Projects data={nextJSProjects.data} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Graphics data={graphicsProjects.data} />
      </TabPanel>





export const getStaticProps = async () => {
  const [ReactProjectsRes, NextJSRes, GraphicsRes] = await Promise.all([
    fetch(`${process.env.PRODUCTION_URL}/api/reactprojects`),
    fetch(`${process.env.PRODUCTION_URL}/api/nextjsprojects`),
    fetch(`${process.env.PRODUCTION_URL}/api/graphics`),
  ])

  const [reactProjects, nextJSProjects, graphicsProjects] = await Promise.all([
    ReactProjectsRes.json(),
    NextJSRes.json(),
    GraphicsRes.json(),
  ])

  return { props: { reactProjects, nextJSProjects, graphicsProjects } }
}

*/
