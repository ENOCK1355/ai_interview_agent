
import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/lib/actions/auth.action';

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if(!isUserAuthenticated) redirect('/sign-in');

  return (
    <div className='root-layout'>
      <nav>
        <Link href='/' className='flex item-center gap-2'>
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className='text-primary-100'>WaleAI</h2>
        </Link>
      </nav>
      
      {children}
    </div>
  )
}

export default RootLayout