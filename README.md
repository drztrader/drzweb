# DRZ Web - Portfolio Website

محفظة ويب حديثة وقابلة للتخصيص مع تصميم مستقبلي وميزات تفاعلية.

## ✨ الميزات المضافة

### 📱 تحسينات الأداء والـ SEO
- ✅ Meta tags محسّنة (Open Graph, Twitter Card)
- ✅ Keywords و description محدثة
- ✅ robots.txt و sitemap.xml
- ✅ Preconnect و Preload optimization
- ✅ Lazy loading للصور
- ✅ Cache headers عبر .htaccess

### ♿ تحسينات الوصولية (Accessibility)
- ✅ alt text للصور
- ✅ aria-labels للأزرار والروابط
- ✅ Focus states واضحة
- ✅ Keyboard navigation support
- ✅ Skip to main content link
- ✅ Semantic HTML

### 🎨 تحسينات التصميم والـ UX
- ✅ نموذج اتصال (Contact Form)
- ✅ Copy-to-clipboard للبريد الإلكتروني
- ✅ Sound toggle button
- ✅ LocalStorage للتذكر (Sound preference)
- ✅ Scroll animations
- ✅ Loader محسّن (من 2s إلى 1s)
- ✅ Cursor customization
- ✅ Focus state styling

### 💾 تحسينات الملفات
- ✅ CSS منفصل (css/style.css)
- ✅ JavaScript منفصل (js/script.js)
- ✅ Assets منفصلة (assets/)
- ✅ .htaccess لتحسينات الأمان والأداء

## 📂 هيكل المشروع

```
drzweb/
├── index.html                 # ملف HTML الرئيسي
├── robots.txt                 # ملف SEO لمحركات البحث
├── sitemap.xml               # خريطة الموقع
├── .htaccess                 # إعدادات Apache (اختياري)
├── SETUP_INSTRUCTIONS.txt    # تعليمات الإعداد
├── README.md                 # هذا الملف
├── css/
│   └── style.css             # أنماط CSS
├── js/
│   └── script.js             # كود JavaScript
└── assets/
    ├── drz.jpg               # صورة الملف الشخصي
    ├── logo.png              # الشعار
    └── hover-sound.mp3       # صوت التأثير
```

## 🚀 البدء السريع

### 1. إعداد الملفات
```bash
# انتقل إلى مجلد المشروع
cd /home/drz/drzweb

# تأكد من وجود جميع الملفات
ls -la
```

### 2. نقل الملفات (إذا لم تكن موجودة)
```bash
# تحريك الصور إلى مجلد assets
mv drz.jpg assets/
mv logo.png assets/

# تحميل صوت التأثير (اختياري)
cd assets
wget https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3 -O hover-sound.mp3
cd ..
```

### 3. اختبار الموقع محلياً
```bash
# استخدام Python
python3 -m http.server 8000

# أو باستخدام Node.js
npx http-server

# ثم افتح المتصفح على: http://localhost:8000
```

## 🔧 الإعدادات والتخصيص

### تغيير الـ Domain
1. افتح `index.html`
2. استبدل `https://drz-web.example.com` بـ URL الفعلي

### تعديل الألوان
1. افتح `css/style.css`
2. ابحث عن `rgba` و `color` وعدّل القيم

### إضافة وسائط اجتماعية جديدة
1. افتح `index.html`
2. أضف زر جديد في قسم `<div class="buttons">`

## 📊 الإحصائيات والأداء

| المقياس | القيمة |
|---------|--------|
| Loader Time | 1 ثانية |
| CSS File Size | ~15 KB |
| JS File Size | ~12 KB |
| Mobile Responsive | ✅ |
| Accessibility | WCAG 2.1 AA |

## 🔐 الأمان

- ✅ X-Content-Type-Options headers
- ✅ X-XSS-Protection
- ✅ X-Frame-Options (SAMEORIGIN)
- ✅ Permissions-Policy
- ✅ Secure form handling
- ✅ HTTPS redirect (في .htaccess)

## 📱 التوافقية

- ✅ Chrome/Edge (أحدث)
- ✅ Firefox (أحدث)
- ✅ Safari (أحدث)
- ✅ Mobile browsers
- ✅ Tablets

## 🎯 الخطوات التالية

1. **SEO متقدم**: إضافة schema.json للـ structured data
2. **Performance**: Minify CSS و JS
3. **Analytics**: إضافة Google Analytics
4. **Forms**: دمج خدمة إرسال البريد (Formspree, EmailJS)
5. **Blog**: إضافة قسم مدونة
6. **Dark/Light Mode**: Toggle للثيمات

## 📞 الدعم والمساعدة

- 📧 Email: drzbusinesss@gmail.com
- 💬 Telegram: @drztrader
- 🐦 Twitter: @drztrader

---

تم التحديث: **10 مايو 2026**
© 2026 DRZ Web. جميع الحقوق محفوظة.
