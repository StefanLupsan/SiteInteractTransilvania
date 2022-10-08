import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const HomeProjectHeader = () => {
    return (
        <div className='homeprojectclass'>
                {/* aici vine imagine si logo */}
                <Link to="/projects">
                    <Button variant="contained" class="ourprojectsbutton">Vezi proiectele noastre</Button>
                </Link>
        </div>
    )
}

export default HomeProjectHeader
