# 🎨 BeautyBeet — Image Specs for Designer

Hi! Below are the exact image dimensions needed for the BeautyBeet website. Please follow these specs carefully.

---

## 📋 Master Image Spec Sheet

| # | Image Name | Where It Appears | Design Size (px) | Orientation | Qty Needed | Notes |
|---|---|---|---|---|---|---|
| 1 | **Hero Banner** | Homepage top slider | **2800 × 800** | Landscape (wide) | 3+ slides | Keep main subject on left side. Right 40% may be partially hidden by text overlay |
| 2 | **Our Services Card** | Homepage — below banner | **640 × 400** | Landscape | 4 cards | Dark gradient overlay at bottom — keep important details in upper-center |
| 3 | **Browse Category Card** | Shop page — category grid | **800 × 600** | Landscape (4:3) | Per category | Clean lifestyle/product shot centered in frame |
| 4 | **Video Testimonial Thumbnail** | Homepage — Video Reviews section | **640 × 800** | Portrait (4:5) | Per video | Reviewer's face photo. Play button + name overlaid at bottom |
| 5 | **Product Card (Homepage)** | Bestsellers section + shop grids | **800 × 800** | Square (1:1) | Per product | Product on clean/white background, centered |
| 5a | **Product Detail — Main** | Product page — main viewer | **1200 × 1200** | Square (1:1) | 1–4 per product | High-res product shot, shows when customer opens a product |
| 5b | **Product Detail — Thumbnail** | Product page — thumbnail strip | **160 × 160** | Square (1:1) | 1–4 per product | Small preview of each product angle |
| 6a | **Fix Your Hair Card** | Homepage — "Fix Your Hair First" | **800 × 700** | Nearly square | 5 cards | Hair concern imagery (e.g. hairfall, frizz). Title appears below image |
| 6b | **Fix Your Skin Card** | Homepage — "Fix Your Skin First" | **800 × 700** | Nearly square | 4 cards | Skin concern imagery (e.g. acne, dry skin). Title appears below image |
| 7a | **Salon Card** | Homepage — Salon Near You | **800 × 640** | Landscape (5:4) | Per salon | Salon interior/exterior photo. Info card below image |
| 7b | **Salon Detail Banner** | Individual salon page (top) | **2800 × 800** | Landscape (wide) | 1 per salon | Same style as Hero Banner (#1) |
| 7c | **Salon Service Card** | Individual salon page — services | **640 × 400** | Landscape | Per service | Same style as Our Services (#2). Salon uploads their own |
| 8a | **Dermatologist Card** | Homepage — Dermatologist section | **800 × 700** | Nearly square | Per doctor | Professional headshot/portrait of the doctor |
| 8b | **Dermatologist Banner** | Individual dermatologist page | **2800 × 800** | Landscape (wide) | 1 per doctor | Same style as Hero Banner (#1) |
| 8c | **Dermatologist Avatar** | Dermatologist listing page | **160 × 160** | Square (1:1) | Per doctor | Small circular avatar photo |

---

## ⚠️ Important Design Rules

| Rule | Details |
|---|---|
| **Safe Zone** | Keep all important content (faces, text, logos) within the **center 80%** of the image. The outer 10% on each side may get cropped on some screen sizes |
| **Centering** | All images are **auto-centered** on the website. The image fills the container and crops equally from all sides if needed |
| **Resolution** | All sizes above are **2× Retina ready**. Do NOT deliver smaller sizes — these are final export sizes |
| **File Format** | **WebP** preferred (smallest file size). **JPG** also accepted. Use **PNG** only if transparency is needed |
| **File Size** | Keep each image **under 200 KB** for banners, **under 100 KB** for cards. Compress using TinyPNG or Squoosh |
| **Color Mode** | **sRGB** color profile. Do not use CMYK |
| **Naming Convention** | `section-name_descriptor.webp` — Example: `hero_valentines-sale.webp`, `product_neem-face-wash.webp` |

---

## 🖼️ Visual Reference: Where Each Image Goes

```
┌─────────────────────────────────────────────────────────┐
│  HEADER / NAVIGATION                                     │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─────────────────────────────────────────────────┐    │
│  │          #1  HERO BANNER  (2800×800)             │    │
│  │          [Slides — 3 or more]                     │    │
│  └─────────────────────────────────────────────────┘    │
│                                                          │
│  #2  OUR SERVICES  (640×400 each)                       │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐           │
│  │Fix Hair│ │Fix Skin│ │ Salon  │ │ Derma  │           │
│  └────────┘ └────────┘ └────────┘ └────────┘           │
│                                                          │
│  #5  BESTSELLER PRODUCTS  (800×800 each)                │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐         │
│  │ □ 1:1│ │ □ 1:1│ │ □ 1:1│ │ □ 1:1│ │ □ 1:1│         │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘         │
│                                                          │
│  #6a  FIX YOUR HAIR CARDS  (800×700 each)               │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐           │
│  │Hairfall│ │Thinning│ │ Frizzy │ │Colored │           │
│  └────────┘ └────────┘ └────────┘ └────────┘           │
│                                                          │
│  #6b  FIX YOUR SKIN CARDS  (800×700 each)               │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐           │
│  │  Acne  │ │  Dry   │ │ Uneven │ │  Dull  │           │
│  └────────┘ └────────┘ └────────┘ └────────┘           │
│                                                          │
│  #4  VIDEO TESTIMONIALS  (640×800 each, portrait)       │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                   │
│  │ ▶ 4:5│ │ ▶ 4:5│ │ ▶ 4:5│ │ ▶ 4:5│                   │
│  └──────┘ └──────┘ └──────┘ └──────┘                   │
│                                                          │
│  #7a  SALON CARDS  (800×640 each)                       │
│  ┌────────┐ ┌────────┐ ┌────────┐                       │
│  │ Salon 1│ │ Salon 2│ │ Salon 3│                       │
│  └────────┘ └────────┘ └────────┘                       │
│                                                          │
│  #8a  DERMATOLOGIST CARDS  (800×700 each)               │
│  ┌────────┐ ┌────────┐ ┌────────┐                       │
│  │ Dr. 1  │ │ Dr. 2  │ │ Dr. 3  │                       │
│  └────────┘ └────────┘ └────────┘                       │
│                                                          │
│  FOOTER                                                  │
└─────────────────────────────────────────────────────────┘
```

---

> **Questions?** Reach out before starting. When in doubt, always **center the subject** and **leave breathing room** around edges.
