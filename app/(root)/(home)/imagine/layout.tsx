

import ImagineTopNav from '@/components/shared/ImagineMobileNav'
import ImagineSidebar from '@/components/shared/ImagineSideBar'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
   return (
      
         <div className='absolute root'>
            <ImagineSidebar />
            <ImagineTopNav />
         
               
            <div className="root-container">
          <div className="wrapper">{children}</div>
        </div>
            
         <Toaster />
         </div>
            
         
     
   )
}

export default Layout
