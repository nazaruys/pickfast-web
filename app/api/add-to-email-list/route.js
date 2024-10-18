"use client";
import { NextResponse } from 'next/server';
import { db } from '../../../firebase'; // Adjust based on your actual path
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  try {
    // Step 1: Check if email already exists in Firebase Firestore
    const emailQuery = query(collection(db, 'emailList'), where('email', '==', email));
    const querySnapshot = await getDocs(emailQuery);

    if (!querySnapshot.empty) {
      return NextResponse.json({ message: 'Email is already in the list' }, { status: 409 });
    }

    // Step 2: Add email to Firebase Firestore
    await addDoc(collection(db, 'emailList'), { email });

    // Step 3: Send email via Mailgun using fetch
    const mailgunApiKey = process.env.MAILGUN_API_KEY;
    const mailgunDomain = process.env.MAILGUN_DOMAIN;
    const mailgunUrl = `https://api.eu.mailgun.net/v3/${mailgunDomain}/messages`;

    const response = await fetch(mailgunUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${mailgunApiKey}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        from: 'support@pick-fast.com',
        to: 'nazary.box@gmail.com',
        subject: 'New Tester on PickFast!',
        text: `New tester access request from ${email}`
      })
    });

    const mailgunResponse = await response.json();

    return NextResponse.json({ message: 'Email added and notification sent!', mailgunResponse });
  } catch (error) {
    console.error('Error adding email or sending notification:', error);
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}
