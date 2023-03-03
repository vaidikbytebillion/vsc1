import React from 'react'
import NavBar from '../navbar'
// import image from '../../images/background1.eps'
import AlertDialogSlide from '../dialogBox'
import { Typography } from '@mui/material';




const Home = () => {

  return (

    <div >
      <NavBar />
      <div>
        <Typography>Hello this is Home</Typography>
      </div>
      <AlertDialogSlide />
    </div>
  )
}
export default Home