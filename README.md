# زاوية (Zawya) — Prompt Builder للمصممين والمصورين

موقع ثابت (Static Site) بالكامل — HTML/CSS/JS خالص، من غير أي build step أو framework.

## الملفات

- `index.html` — الصفحة الرئيسية
- `style.css`, `script.js`, `dots.js`, `gallery.js`, `data.js` — التصميم والمنطق والمكتبة (Cinematic + Product Builder)
- `admin/` — لوحة تحكم مبنية على Supabase (اختيارية، لإدارة مكتبة المنتجات لايف)
- `images/`, `fonts/` — الأصول

## النشر على Cloudflare Pages عن طريق GitHub

1. ارفع المشروع على ريبو جديد في GitHub:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```

2. روح [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**

3. اختار الريبو، وحط الإعدادات دي:
   - **Framework preset:** None
   - **Build command:** (سيبه فاضي)
   - **Build output directory:** `/`

4. اضغط **Save and Deploy** — الموقع هيشتغل على `PROJECT_NAME.pages.dev` خلال دقيقة، وأي push جديد على `main` هيعمل deploy تلقائي.

5. (اختياري) لو عايز دومين مخصص: Pages project → **Custom domains** → أضف الدومين وربطه بـ DNS بتاعك في Cloudflare.

## تفعيل لوحة الـ Admin (اختياري)

اللوحة تحت `/admin/` بتحتاج مشروع Supabase حقيقي. اقرأ `admin/README.md` لخطوات الإعداد كاملة (5 دقايق)، وحط بياناتك في `admin/supabase-config.js` قبل الـ push، أو بعده وتعمل commit تاني.
