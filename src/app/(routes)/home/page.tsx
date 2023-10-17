import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';

import { options } from '@/app/api/auth/[...nextauth]/options';

export default async function Home() {
  const session = await getServerSession(options);
  if (!session?.user) {
    console.log(
      'No active Server Session : + ',
      JSON.stringify(session, null, 2)
    );
    redirect(`/signin?callbackUrl=/home`);
  }

  console.log('Home Page Server Session:', JSON.stringify(session, null, 2));

  return <HomeContent />;
}

function HomeContent() {
  return (
    <div className='container mx-auto flex flex-col  justify-items-center items-center gap-10'>
      <h1>title</h1>
      <div className='container mx-auto place-items-center place-content-stretch items-stretch grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  auto-rows-fr'>
      </div>
    </div>
  );
}
