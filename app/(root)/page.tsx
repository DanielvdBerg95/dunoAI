
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen min-w-screen">
<div className='relative w-full'>
        
        

        {/* Main container*/}
        <div className='flex flex-col min-h-screen min-w-screen'>
          {/* This is the Buttons and title container*/}
          <div className='flex flex-row justify-between'>
            {/* Seperator*/}

            {/* This is the Buttons and title container*/}
            <div className='flex-row py-6 px-4 md:ml-20 text-center text-3xl font-poppins font-bold not-italic text-white'>
              Duno.ai
            </div>


            {/* This is the Buttons and title container for when user is not signed in*/}
            <SignedOut>
            <div className='flex flex-row-reverse px-4 py-4 justify-evenly'>
              {/* This is the Buttons and title container*/}
              <div className='px-3'>
                <SignInButton><Button className="inline-flex h-10 animate-shimmer items-center text-sm font-bold justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#0f172a,45%,#94a3b8,55%,#0f172a)] bg-[length:200%_100%] px-6 text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  Login
                </Button></SignInButton>
              </div>
              <Button className='h-10 px-4 py-2 border border-white font-bold rounded-md text-sm text-white bg-transparent'>
                Learn More
              </Button>

            </div>
            </SignedOut>

            {/* This is the Buttons and title container for when user is not signed in*/}
            <SignedIn>
            <div className='flex flex-row-reverse px-4 py-4 justify-evenly'>
              {/* This is the Buttons and title container*/}
              <div className='px-3'>
                <Link href="/dashboard"><Button className="inline-flex h-10 animate-shimmer items-center text-sm font-bold justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#0f172a,45%,#94a3b8,55%,#0f172a)] bg-[length:200%_100%] px-6 text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  Go to Dashboard
                </Button></Link>
              </div>
              <SignOutButton><Button className='h-10 px-4 py-2 border border-white font-bold rounded-md text-sm text-white bg-transparent'>
                Logout
              </Button></SignOutButton>

            </div>
            </SignedIn>

          </div>

          <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
            <h1 className="text-4xl md:text-7xl font-bold text-white">
              Starting a Business<br /> made easy
            </h1>
            <p className="max-w-2xl text-base md:text-xl font-bold mt-8 text-neutral-200">
              Transform and scale your business quickly with Duno. The worlds first business partner AI.
            </p>
            <SignedOut>
            <div className='flex flex-row py-4'>
              <SignUpButton><Button className="inline-flex h-8 animate-shimmer items-center text-sm font-bold justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#0f172a,45%,#94a3b8,55%,#0f172a)] bg-[length:200%_100%] px-6 text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Start Now 
                <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
              </Button></SignUpButton>
            </div>
            </SignedOut>
          </div>


        </div>

      </div>





    </main>
  )
}

export default LandingPage






