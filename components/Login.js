import Image from 'next/image'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Head from 'next/head'

const Login = () => {
  return (
    <>
    <Head>
        <title>Log In Page</title>
    </Head>
     <div className='grid place-items-center'>

<Image src="https://links.papareact.com/t4i" width={400} height={400}  style={{ objectFit: "contain" }}/>
<h1 className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer' onClick={signIn}>Log in with Facebook </h1>
</div>
    </>
   
  )
}

export default Login