# 🔥 PostCraft AI 🔥

PostCraft AI is a **Next.js + Laravel** project that helps you grow your social media presence by automating post creation while maintaining consistent templates.  
It’s better than most AI tools because it keeps all your content aligned to your chosen design.

## 🌍 Live Demo
👉 [https://postcraftai.in](https://postcraftai.in)


## ✨ Features
- 🔑 Login with **Mobile Number** or **Crypto Wallet** (Decentralized approach)
- 🖼️ Create or import your **post templates**
- 🤖 AI-powered content generation that follows your template
- 🔥 Download posts in **HD quality**
- 📱 Easily edit content before publishing
- 💳 Integrated **Payment Gateway**
- ⚡ Real-time image preview
- 🚀 Production-ready with **Nix deployment**


## 📋 Prerequisites
Make sure you have installed:
- **Node.js 18+**
- **Ollama** installed and running locally
- **LLaVA model** downloaded in Ollama


## 🚀 Quick Start (Development)

### Option 1: Traditional (npm)
1. Install dependencies:
```bash
   npm install
```

2. Pull the LLaVA model for Ollama:

```bash
   ollama pull llava:latest
```

3. Start the development server:

```bash
   npm run dev
```

4. Open your browser at:
   👉 [http://localhost:3000](http://localhost:3000)


## Option 2: Nix Development

From the app directory, run:

```bash
nix run
```

This will automatically:

* Start the Ollama server
* Pull the LLaVA model
* Build & run the Next.js app



## ⚡ API Backend (Laravel Setup)

This project uses **Laravel** as the backend.
You’ll find it in the `backend` folder.

1. Install dependencies:

   ```bash
   cd backend && composer install
   ```

2. Copy `.env.example` → `.env` and set the following keys:

   ```env
   UNSPLASH_ACCESS_KEY=your_unsplash_key
   RAZORPAY_KEY=your_razorpay_key
   RAZORPAY_SECRET=your_razorpay_secret
   OLLAMA_API_URL=http://localhost:11434/api
   ```

3. Run migrations:

   ```bash
   php artisan migrate
   ```

4. Start the Laravel dev server:

   ```bash
   php artisan serve
   ```

   It will run at: **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

5. Update your frontend `axios.js` file:

   ```js
   const API_URL = "http://127.0.0.1:8000/api";
   ```


## 📦 Deployment

### Local Production Build

```bash
npm run build
npm run start
```

### Nix Deployment (Recommended)

```bash
nix build
nix run
```


## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss your ideas.


## 📜 License

This project is licensed under the **MIT License**.
