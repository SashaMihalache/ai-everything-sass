import { auth } from '@clerk/nextjs';
import { Configuration, OpenAIApi } from 'openai';
import { NextResponse } from 'next/server';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!config.apiKey) {
      return new NextResponse('OpenAI API Key not configured', { status: 500 });
    }

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 });
    }

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages,
    });

    return NextResponse.json(response.data.choices[0].message);
  } catch (err) {
    console.log('[CONVERSATION_ERROR', err);
    return new NextResponse('Internal error', { status: 500 });
  }
}
