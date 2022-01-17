import React from 'react'
import { Link } from 'react-router-dom'

const Mainpost = () => {
    return (
        <div className='space-y-4'>
            <Link to="/post/add" className=" p-3 bg-slate-800 text-white rounded-lg">Add Post</Link><br/>
            <h1>Post Problem Page</h1>
        </div>
    )
}

export default Mainpost
