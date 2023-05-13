import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import { getSession, useSession } from 'next-auth/react'
import Login from '@/components/Login'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ session }) {
  // const { data: session } = useSession()
  if (!session) {
    return <Login />
  }
  return (
    <div className=''>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />
      <main>

        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </main>

    </div>
  )


}

export async function getServerSideProps(context) {
  // get the user
  const session = await getSession(context)
  return {
    props: {
      session
    }
  }
}
