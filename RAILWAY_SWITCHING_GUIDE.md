# 🚀 Railway Production ↔ Development Switching Guide

## 📋 **OPCJA A: Railway Environment Variables**

### **🔄 Przełączanie przez Railway Dashboard:**

#### **1. 🔗 Otwórz Railway Dashboard:**

https://railway.app/project/venus-strapi-backend

#### **2. ⚙️ Settings → Environment Variables**

#### **3. 🎯 Dodaj/Edytuj zmienne:**

**Dla DEVELOPMENT MODE:**

```
NODE_ENV = development
STRAPI_ADMIN_CLIENT_URL = https://venus-strapi-backend-production.up.railway.app
```

**Dla PRODUCTION MODE:**

```
NODE_ENV = production
STRAPI_ADMIN_CLIENT_URL = https://venus-strapi-backend-production.up.railway.app
```

#### **4. 🔄 Restart Service:**

- Settings → Restart Service
- Poczekaj 2-3 minuty na redeploy

---

## 🎯 **KIEDY UŻYWAĆ:**

### **DEVELOPMENT MODE:**

- ✅ Dodawanie nowych content types
- ✅ Edycja schematów
- ✅ Testowanie nowych funkcji
- ❌ Wolniejszy (nie zoptymalizowany)

### **PRODUCTION MODE:**

- ✅ Szybszy i stabilniejszy
- ✅ Zoptymalizowany build
- ✅ Bezpieczny (nie można edytować schematów)
- ❌ Nie można dodawać content types

---

## 📝 **PROCES DODAWANIA NOWYCH CONTENT TYPES:**

1. **Przełącz na DEVELOPMENT** (Railway Dashboard)
2. **Restart Service**
3. **Dodaj content type** (Strapi Admin → Content-Type Builder)
4. **Przełącz na PRODUCTION** (Railway Dashboard)
5. **Restart Service**
6. **Gotowe!** 🎉

---

## ⚠️ **UWAGI:**

- **Zawsze wracaj do PRODUCTION** po dodaniu content types
- **Development mode** jest tylko do edycji schematów
- **Production mode** jest do normalnego użytku
- **Restart Service** jest wymagany po każdej zmianie NODE_ENV

---

## 🔗 **LINKI:**

- **Railway Dashboard:** https://railway.app/project/venus-strapi-backend
- **Strapi Admin:** https://venus-strapi-backend-production.up.railway.app/admin
- **Frontend:** https://venus-hotel-spa.web.app/oferty-specjalne
