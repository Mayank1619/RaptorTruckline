# Firebase Integration Checklist

This document outlines all the Firebase integration points and what needs to be implemented.

## Current Status
- ✅ Firebase config file created (`src/config/firebase.jsx`)
- ✅ Placeholder comments added to forms
- ⬜ Form submission logic not yet implemented
- ⬜ Firebase services not yet connected

## 🔐 Firebase Setup

### Prerequisites
1. Create Firebase project at https://console.firebase.google.com/
2. Create Web app in Firebase Console
3. Copy credentials to `.env.local`
4. Enable required services:
   - ✅ Authentication (for potential user accounts)
   - ✅ Firestore Database (for form submissions)
   - ✅ Storage (for file uploads like resumes)

## 📝 Contact Form Integration

**File**: `src/pages/Contact.jsx`

### Current State
- Form collects: name, email, phone, company, subject, message
- Has validation and error handling
- TODO comments at lines ~60-70

### Implementation Steps
1. Uncomment Firebase imports
2. Replace console.log with Firestore submission:
   ```javascript
   const docRef = await addDoc(collection(db, 'contact_messages'), {
     ...formData,
     timestamp: serverTimestamp(),
     status: 'new'
   })
   ```
3. Create Firestore collection: `contact_messages`
4. Optional: Set up Cloud Function for email notifications

### Expected Collection Structure
```javascript
// contact_messages collection
{
  id: auto-generated,
  name: string,
  email: string,
  phone: string,
  company: string,
  subject: string,
  message: string,
  timestamp: serverTimestamp(),
  status: 'new' // change to 'reviewed' when handled
}
```

### Email Notification Setup (Optional)
- Set up Cloud Function to send email on new submission
- Install Firebase CLI: `npm install -g firebase-tools`
- Create function in `functions/` directory
- Deploy: `firebase deploy --only functions`

## 👔 Career Applications Integration

**File**: `src/pages/Careers.jsx`

### Current State
- Form collects: name, email, phone, position, cover letter
- Shows job details before application
- TODO comments at lines ~65-75

### Implementation Steps
1. Uncomment Firebase imports
2. Replace console.log with Firestore submission:
   ```javascript
   const docRef = await addDoc(collection(db, 'career_applications'), {
     ...formData,
     appliedAt: serverTimestamp(),
     status: 'new'
   })
   ```
3. Create Firestore collection: `career_applications`
4. Optional: Set up Cloud Function for email notifications

### Expected Collection Structure
```javascript
// career_applications collection
{
  id: auto-generated,
  name: string,
  email: string,
  phone: string,
  position: string,
  message: string, // cover letter
  appliedAt: serverTimestamp(),
  status: 'new' // change to 'reviewed', 'rejected', 'accepted'
}
```

## 🔐 Authentication (Optional Future Feature)

For potential user accounts/admin dashboard:

### Users Collection
```javascript
{
  uid: firebase.auth() uid,
  email: string,
  company: string,
  role: 'client' | 'admin',
  createdAt: serverTimestamp(),
  updatedAt: serverTimestamp()
}
```

### Features to Implement
- Sign up form
- Email verification
- Admin dashboard to view submissions
- Ability to mark submissions as reviewed/responded

## 📄 File Upload Support (Optional)

For resume uploads in career applications:

### Implementation
1. Update Careers form to accept file input
2. Upload to Firebase Storage: `gs://bucket/resumes/`
3. Store file URL in career_applications document
4. Add security rules to Firebase Storage

### Security Rules Example
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /resumes/{allPaths=**} {
      allow read: if request.auth != null && request.auth.token.admin == true;
      allow write: if true; // Allow public resume uploads
    }
  }
}
```

## 🔒 Firestore Security Rules

### Recommended Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Contact messages - write from app, read from admin
    match /contact_messages/{document=**} {
      allow create: if true; // Anyone can submit
      allow read, update, delete: if request.auth != null && request.auth.token.admin == true;
    }
    
    // Career applications - write from app, read from admin
    match /career_applications/{document=**} {
      allow create: if true; // Anyone can apply
      allow read, update, delete: if request.auth != null && request.auth.token.admin == true;
    }
    
    // Users collection - secure
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
      allow read: if request.auth.token.admin == true;
    }
  }
}
```

## 🌐 Cloud Functions (Optional)

### Email Notification Function

```javascript
// functions/index.js
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configure your email service
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password,
  },
});

// Trigger on new contact message
exports.onNewContactMessage = functions.firestore
  .document('contact_messages/{docId}')
  .onCreate(async (snap) => {
    const data = snap.data();
    
    await mailTransport.sendMail({
      from: 'noreply@raptortruckline.com',
      to: 'dispatch@raptortruckline.com',
      subject: `New Contact: ${data.subject}`,
      text: `From: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\n${data.message}`,
    });
  });

// Trigger on new application
exports.onNewApplication = functions.firestore
  .document('career_applications/{docId}')
  .onCreate(async (snap) => {
    const data = snap.data();
    
    await mailTransport.sendMail({
      from: 'noreply@raptortruckline.com',
      to: 'amandeep@raptortruckline.com',
      subject: `New Career Application: ${data.position}`,
      text: `From: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nPosition: ${data.position}\n\nCover Letter:\n${data.message}`,
    });
  });
```

### Deploy Functions
```bash
cd functions
npm install
firebase deploy --only functions
```

## 📊 Admin Dashboard (Future)

Suggested pages for admin area:
- `/admin` - Dashboard overview
- `/admin/submissions` - View all contact forms
- `/admin/applications` - View all career applications
- `/admin/settings` - Manage company info

## 🧪 Testing

### Local Testing
```bash
# Terminal 1: Start app
npm run dev

# Terminal 2: Start Firebase emulator
firebase emulators:start
```

### Test Contact Form
1. Go to http://localhost:3000/contact
2. Fill form and submit
3. Check Firebase console for new document
4. Verify email notification (if configured)

### Test Career Application
1. Go to http://localhost:3000/careers
2. Click on a job
3. Click "Apply Now"
4. Fill form and submit
5. Check Firebase console for new document

## 🚀 Deployment Checklist

Before deploying to production:
- [ ] Firebase project created
- [ ] Web app added to Firebase
- [ ] Credentials in .env.local
- [ ] Firestore collections created
- [ ] Security rules implemented
- [ ] Contact form integrated
- [ ] Career form integrated
- [ ] Email notifications configured (optional)
- [ ] Admin dashboard built (optional)
- [ ] All forms tested
- [ ] Environment variables set in Vercel

## 📚 Helpful Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Getting Started](https://firebase.google.com/docs/firestore/quickstart)
- [Cloud Functions Guide](https://firebase.google.com/docs/functions)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

## 💡 Next Steps

1. **Immediate**: Set up Firestore collections and security rules
2. **Week 1**: Implement contact and career form submissions
3. **Week 2**: Set up email notifications via Cloud Functions
4. **Week 3**: Build admin dashboard (optional)
5. **Week 4**: Full testing and deployment

---

**Status**: Template ready, Firebase integration pending
**Created**: February 2026
**Last Updated**: February 2026
