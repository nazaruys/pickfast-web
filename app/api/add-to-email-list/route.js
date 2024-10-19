import { NextResponse } from 'next/server';
import { db } from '../../../firebase';

export async function POST(req) {
	const { email } = await req.json();

	// If no email provided
	if (email === null) {
		return NextResponse.json({message: "Email already added."}, {status: 400})
	}

	// If the email already exists
	const emailQuery = await db.collection('emails')
                               .where('email', '==', email)
                               .get();

    if (!emailQuery.empty) {
      return NextResponse.json({ message: 'Email already exists.' }, { status: 200 });
    }

	// Add email
	const emailRef = db.collection('emails').doc();
	
	await emailRef.set({
		email: email
	});

	// Send email
	const mailgunApiKey = process.env.MAILGUN_API_KEY;
    const mailgunDomain = "pick-fast.com"
    const mailgunUrl = `https://api.eu.mailgun.net/v3/${mailgunDomain}/messages`

    const response = await fetch(mailgunUrl, {
		method: 'POST',
		headers: {
		  Authorization: `Basic ${Buffer.from(`api:${mailgunApiKey}`).toString('base64')}`,
		  'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({
		  from: 'support@pick-fast.com',
		  to: 'nazary.box@gmail.com',
		  subject: 'New Tester on PickFast!',
		  text: `New tester access request from ${email}`,
		}),
	});	  

	return NextResponse.json({message: "Email added succesfully."}, {status: 200})
}



