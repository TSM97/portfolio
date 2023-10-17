import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';

import { options } from './api/auth/[...nextauth]/options';

export default async function Home() {
  const session = await getServerSession(options);
  if (!session?.user) {
    console.log('No active session : + ', JSON.stringify(session, null, 2));
    redirect(`/signin?callbackUrl=/home`);
  } else {
    redirect(`/home`);
  }
}
