import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="auth flex-col sm:flex-row justify-items-stretch">
            
            <div className='sm:rounded-l-3xl bg-white w-full h-screen items-center justify-self-stretch justify-center flex'>
                {children}
            </div>


        </main>
    )
}

export default Layout