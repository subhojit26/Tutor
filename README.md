# 🧠 AI Tutor — Voice-Based Learning Sessions

An intelligent, voice-interactive tutoring platform built with **Next.js**, **TypeScript**, **Vapi.ai**, and **Clerk**. Book sessions with an AI tutor tailored to your topic, duration, and voice preference. Learn in a **casual or formal tone**—entirely via voice.

---

## ✨ Features

- 🎯 **Customizable Sessions**  
  Choose your topic of interest, set the duration, and pick the tone (casual/formal).

- 🧑‍🏫 **Voice Style Options**  
  Interact with an AI tutor using **male or female voices**.

- 🎙️ **100% Voice-Based Interaction**  
  Speak your queries — get voice responses. Hands-free, seamless learning.

- 📊 **Track Your Learning Journey**  
  See your **session history** and keep track of what you've learned.

- 💳 **Subscription Plans**  
  Multiple pricing tiers with different access levels and features.

---

## 🛠️ Tech Stack

| Technology    | Usage                                  |
|---------------|----------------------------------------|
| **Next.js**   | Frontend framework                     |
| **TypeScript**| Type safety & better dev experience    |
| **Vapi.ai**   | Provided useful voice assistants       |
| **ShadCN UI** | Elegant, modern UI components          |
| **Clerk**     | User authentication and session mgmt   |

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/subhojit26/ai-tutor.git
cd ai-tutor
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Set Up Environment Variables
Create a .env.local file and add your API keys:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/


NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

NEXT_PUBLIC_VAPI_WEB_TOKEN=
```
### 4. Run the App
```bash
npm run dev
```
## 🤝 Contributing
Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.
