import React from 'react'
import HomeProjectHeader from '../components/Home/HomeProjectHeader/HomeProjectHeader'
import HomeAboutCard from '../components/Home/HomeAboutCard/HomeAboutCard'
import { featuredBlog } from '../config/blogData'
import Blogs from '../components/BlogList/Blogs'
import HomeBlogHeader from '../components/Home/HomeBlogHeader/HomeBlogHeader'

const Home = () => {
    return (
        <>
        <HomeAboutCard/>
        <HomeBlogHeader/>
        <Blogs blogs={featuredBlog}/>
        <HomeProjectHeader/>    
        {/*Aici mai vine chestia cu "new articles", dar nu stiu cum ai implementat card-urile la blog, le poti adauga tu?*/}
        </>
    )
}

export default Home