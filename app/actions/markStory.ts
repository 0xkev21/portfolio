'use server'
import { cookies } from "next/headers"

export const markStoryAsSeen = async (certId: string) => {
  const cookieStore = await cookies();
  const cookieSeen = cookieStore.get('seen_certs')?.value;
  let seenArray: string [] = [];
  if(cookieSeen) {
    seenArray = JSON.parse(cookieSeen);
  }

  if(!seenArray.includes(certId)) {
    seenArray.push(certId);
    cookieStore.set('seen_certs', JSON.stringify(seenArray), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 364
    });
  }
}