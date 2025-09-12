# 🔧 Railway Environment Variables Setup

## 📋 **WYMAGANE ZMIENNE ŚRODOWISKOWE:**

### **1. 🔐 Security Variables:**
```
ADMIN_JWT_SECRET = your-admin-jwt-secret-here
API_TOKEN_SALT = your-api-token-salt-here
TRANSFER_TOKEN_SALT = your-transfer-token-salt-here
ENCRYPTION_KEY = your-encryption-key-here
```

### **2. 🌍 Environment Mode:**
```
NODE_ENV = development
```

### **3. 🗄️ Database:**
```
DATABASE_URL = postgresql://postgres:password@postgres.railway.internal:5432/railway
```

### **4. ☁️ Cloudinary (Media Storage):**
```
CLOUDINARY_NAME = your-cloudinary-name
CLOUDINARY_KEY = your-cloudinary-key
CLOUDINARY_SECRET = your-cloudinary-secret
```

### **5. 🚀 Railway Specific:**
```
PORT = 1337
```

---

## 🎯 **JAK DODAĆ W RAILWAY:**

### **1. 🔗 Railway Dashboard:**
https://railway.app/project/venus-strapi-backend

### **2. ⚙️ Settings → Environment Variables**

### **3. ➕ Add Variable:**
- **Key:** `TRANSFER_TOKEN_SALT`
- **Value:** `your-transfer-token-salt-here`

### **4. 🔄 Restart Service**

---

## 🔑 **GENEROWANIE SECRETÓW:**

### **Online Generator:**
https://generate-secret.vercel.app/32

### **Lub przez Node.js:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

---

## ⚠️ **UWAGI:**

- **Nie commituj** zmiennych środowiskowych do git
- **Używaj silnych haseł** (32+ znaków)
- **Restart Service** po każdej zmianie
- **Sprawdź logi** czy warningi zniknęły

---

## 🔗 **LINKI:**

- **Railway Dashboard:** https://railway.app/project/venus-strapi-backend
- **Strapi Admin:** https://venus-strapi-backend-production.up.railway.app/admin
