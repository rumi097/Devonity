# EmailJS Setup Guide

Follow these steps to enable the contact form:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account: **devonitytechnologiesltd@gmail.com**
5. Copy the **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Service Interested In: {{service}}
Budget: {{budget}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

4. Save and copy the **Template ID** (e.g., `template_xyz789`)

## 4. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `abcdefghijklmnop`)

## 5. Update Contact.tsx
Open `src/pages/Contact.tsx` and replace these values around line 42:

```typescript
await emailjs.send(
  'service_abc123',        // Replace with your Service ID
  'template_xyz789',       // Replace with your Template ID
  templateParams,
  'abcdefghijklmnop'      // Replace with your Public Key
);
```

## 6. Gmail Configuration (Important!)
If using Gmail, you need to:
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable **2-Step Verification**
3. Create an **App Password** specifically for EmailJS
4. Use this App Password when connecting Gmail to EmailJS

## 7. Test the Form
1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your Gmail inbox for the submission
4. You should see the exciting success popup!

## Troubleshooting
- **403 Error**: Check your Public Key is correct
- **No email received**: Verify your email service is connected
- **Template Error**: Make sure all {{variables}} match the templateParams

## Free Plan Limits
- 200 emails per month
- Perfect for a business contact form

Need help? Check [EmailJS Documentation](https://www.emailjs.com/docs/)
