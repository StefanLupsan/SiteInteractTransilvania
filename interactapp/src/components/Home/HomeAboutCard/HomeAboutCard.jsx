import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import './style.css'

const HomeAboutCard = () => {
    return (
        <div className='homeaboutclass'>
            <Link to="/about-us">
                <Button variant="contained" className='whoarewebutton'>Cine suntem?</Button>
            </Link>
        </div>
    )
}

export default HomeAboutCard