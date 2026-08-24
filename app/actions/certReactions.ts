'use server'
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import { headers } from 'next/headers';

const redis = Redis.fromEnv();
const rateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(30, '10 s'),
});

export async function incrementLike(certId: string, amount: number = 1) {
  try {
    const headerList = await headers();
    const ip = headerList.get('x-forwarded-for') ?? '127.0.0.1';

    const { success } = await rateLimit.limit(`rate_limit_likes:${ip}`);
    
    if (!success) {
      return { error: 'Rate limit exceeded.' };
    }

    const likes = await redis.incrby(`cert_likes:${certId}`, amount);
    return { success: true, likes };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to react' };
  }
}

export async function getCertLikes(certId: string) {
  try {
    const likes = await redis.get(`cert_likes:${certId}`);
    return Number(likes);
  } catch(error) {
    return 0;
  }
}