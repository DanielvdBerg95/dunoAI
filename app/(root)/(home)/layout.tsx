import MobileAppBar from '@/components/shared/MobileAppBar'


import React from 'react'
import { Providers } from '../providers'
import NewSidebar from '@/components/shared/NewSideBar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Providers>
            
            
                <main className="root">
                <MobileAppBar />
                <NewSidebar />
                    <div className='root-container'>
                    
                    
                        <div className='wrapper'> 
                            {children}
                        </div>
                    </div>
                </main>
            
           
        </Providers>
    )
}

export default Layout
