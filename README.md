# Disaster Mitigation Solutions

This is a Next.js application built with React, Tailwind CSS, and Firebase, designed to provide resources for climate resilience and disaster recovery.

## Getting Started

To run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS & ShadCN UI
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **AI**: Genkit (Google AI)

## Connecting a Custom Domain (GoDaddy)

To point your GoDaddy domain to this application, follow these steps:

### 1. In the Firebase Console
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Select your project.
3. In the left-hand menu, navigate to **App Hosting**.
4. Select your active backend.
5. Click on the **Settings** tab and look for the **Custom Domains** section.
6. Click **Add Custom Domain** and enter your GoDaddy domain name (e.g., `www.yourdomain.com`).

### 2. Verify Ownership (GoDaddy DNS)
1. Firebase will provide a **TXT record** for verification.
2. Log in to your [GoDaddy Domain Portfolio](https://dcc.godaddy.com/control/portfolio).
3. Select your domain and click **DNS** or **Manage DNS**.
4. Click **Add New Record**:
   - **Type**: `TXT`
   - **Name**: `@` (or the host provided by Firebase)
   - **Value**: Paste the verification string from Firebase.
   - **TTL**: Default (e.g., 1 hour).
5. Return to the Firebase Console and click **Verify**.

### 3. Point to Firebase (A Records)
1. Once verified, Firebase will provide one or more **IP addresses (A records)**.
2. In the GoDaddy DNS settings, delete any existing `A` records for `@`.
3. Click **Add New Record** for each IP provided:
   - **Type**: `A`
   - **Name**: `@`
   - **Value**: The IP address provided.
4. If you are using a `www` subdomain, add a **CNAME** record:
   - **Type**: `CNAME`
   - **Name**: `www`
   - **Value**: `@`

### 4. Wait for Propagation
DNS changes can take anywhere from a few minutes to 48 hours to propagate globally. Firebase will automatically provision an SSL certificate once the domain is successfully pointed.

---

*Note: You must go to the Firebase console to initiate these steps. This application is configured for Firebase App Hosting as defined in `apphosting.yaml`.*