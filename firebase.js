import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json'; // Adjust the path

// Ensure Firebase is only initialized once
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: serviceAccount.type,
      project_id: serviceAccount.project_id,
      private_key_id: serviceAccount.private_key_id,
      private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'), // Replace \n characters in private key
      client_email: serviceAccount.client_email,
      client_id: serviceAccount.client_id,
      auth_uri: serviceAccount.auth_uri,
      token_uri: serviceAccount.token_uri,
      auth_provider_x509_cert_url: serviceAccount.auth_provider_x509_cert_url,
      client_x509_cert_url: serviceAccount.client_x509_cert_url,
      universe_domain: serviceAccount.universe_domain
    }),
  });
}

const db = admin.firestore();

export { db };
