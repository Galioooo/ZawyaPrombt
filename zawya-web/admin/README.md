# Zawya Admin Dashboard — Setup Guide

## خطوات الإعداد (5 دقائق)

---

### 1. إنشاء مشروع Supabase

- اذهب إلى [supabase.com](https://supabase.com) وسجّل دخول
- اضغط "New Project"
- احفظ: **Project URL** و **anon public key**

---

### 2. إعداد قاعدة البيانات

- Supabase Dashboard → **SQL Editor**
- افتح ملف `setup.sql` وانسخ محتواه كاملاً
- اضغط **Run**

---

### 3. إنشاء Storage Bucket

- Supabase Dashboard → **Storage** → **New bucket**
- الاسم: `item-images`
- Public: **✅ Yes**

أضف هذه الـ Policy:
```
Name: allow_public_read
Operation: SELECT
Role: public
Using expression: true
```

```
Name: allow_auth_upload
Operation: INSERT
Role: authenticated
Using expression: true
```

---

### 4. إضافة بيانات Supabase

افتح `/admin/supabase-config.js` وضع بياناتك:

```js
const SUPABASE_URL  = 'https://xxxx.supabase.co';   // من Settings → API
const SUPABASE_ANON = 'eyJhbGciOiJIUzI...';         // anon public key
```

---

### 5. إنشاء حساب Admin

- Supabase Dashboard → **Authentication** → **Users** → **Add user**
- أدخل الإيميل وكلمة المرور اللي هتستخدمها

---

### 6. تشغيل النظام

```
/admin/login.html   ← صفحة تسجيل الدخول
/admin/index.html   ← Dashboard
```

أو ضع في السيرفر كـ:
```
yoursite.com/admin/login.html
```

---

## الصفحات

| الصفحة | الوصف |
|--------|-------|
| `/admin/login.html` | تسجيل الدخول |
| `/admin/index.html` | Dashboard الرئيسي |

## Views داخل الـ Dashboard

| View | الوظيفة |
|------|---------|
| المكتبة | عرض + بحث + تعديل + حذف |
| إضافة عنصر | إضافة عنصر جديد مع رفع صورة |
| Prompt Builder | بناء Prompt من العناصر |
| الإحصائيات | ملخص الأرقام |

---

## ملاحظات

- النظام يعمل بدون React أو build step
- يفتح مباشرة بدون npm
- كل الـ files في `/admin/`
- المكتبة الحالية في الموقع منفصلة — الـ Admin يدير Supabase فقط
