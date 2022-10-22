import { Outlet } from 'react-router-dom'
import Header from './Elements/Header/Header'
// import { useEffect, useState } from 'react'

const Layout = () => {
    
    return (
        <>   
            
            <Header />
            <Outlet />
        </>
    )
}

export {Layout}