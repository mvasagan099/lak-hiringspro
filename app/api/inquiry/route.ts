import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { mode, name, company, email, phone, industry, headcountOrRole, details } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required.' },
        { status: 400 }
      );
    }

    // Check for mode-specific webhook URL or fallback to unified webhook
    const webhookUrl =
      mode === 'candidate'
        ? process.env.GOOGLE_SHEET_CANDIDATES_WEBHOOK_URL || process.env.GOOGLE_SHEET_WEBHOOK_URL
        : process.env.GOOGLE_SHEET_EMPLOYERS_WEBHOOK_URL || process.env.GOOGLE_SHEET_WEBHOOK_URL;

    // If Google Sheet Webhook URL is configured, forward payload
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: mode, // 'employer' | 'candidate'
            timestamp: new Date().toISOString(),
            name,
            company,
            email,
            phone,
            industry,
            headcountOrRole,
            details,
          }),
        });
      } catch (webhookErr) {
        console.error('Failed to forward lead to Google Sheet webhook:', webhookErr);
        // We continue so the user still gets a positive experience
      }
    } else {
      console.log('Inquiry submission received (webhook not configured yet):', {
        mode,
        name,
        company,
        email,
        phone,
        industry,
        headcountOrRole,
        details,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully.',
    });
  } catch (error) {
    console.error('Inquiry API error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing inquiry.' },
      { status: 500 }
    );
  }
}
