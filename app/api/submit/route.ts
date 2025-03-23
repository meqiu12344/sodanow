// app/api/submit/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    console.log('Starting POST request for /api/submit'); // add log.
    const body = await request.json();
    const { method } = body as { method: string };

    if (!method || typeof method !== 'string') {
      console.error('Invalid method:', method); // add log.
      return NextResponse.json({ success: false, error: 'Method is required and must be a string' }, { status: 400 });
    }

    const submission = await prisma.submission.create({
      data: { method },
    });
    console.log('Submission created:', submission); // add log.

    return NextResponse.json({ success: true, data: submission });
  } catch (error) {
    console.error('Error in /api/submit:', error); // add log.
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}