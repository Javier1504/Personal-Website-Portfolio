# Javier CV Portfolio — Structured Static Version

Project ini sudah dibuat **data-driven** agar isi CV dan portfolio tidak hardcoded di `index.html`.

## Struktur penting

```txt
Cv-Portfolio-Structured/
├── index.html
├── data/
│   └── portfolio-data.js   # edit isi CV, pengalaman, project, organisasi, skill di sini
├── css/
│   └── styles.css          # edit tampilan/layout di sini
├── js/
│   └── app.js              # logic render/filter/search/modal/pagination
├── assets/
│   ├── CV.pdf
│   ├── profile.jpg
│   └── projects/
└── vercel.json
```

## Cara menambah project baru

Buka:

```txt
data/portfolio-data.js
```

Tambahkan object baru ke array `projects`:

```js
{
  title: "Nama Project Baru",
  tag: "Fullstack",
  year: 2026,
  desc: "Deskripsi project baru.",
  tech: ["Laravel", "Filament", "MySQL"],
  img: "./assets/projects/NamaFileGambar.png",
  links: { demo: "#", repo: "#" }
}
```

Pastikan nama file gambar sesuai huruf besar/kecilnya. Vercel/Linux bersifat case-sensitive.

## Cara menambah pengalaman kerja baru

Tambahkan object baru ke array `experiences`:

```js
{
  title: "Role - Company",
  period: "Jun 2026 — Now",
  category: "Work",
  featured: true,
  descriptions: [
    "Deskripsi pertama.",
    "Deskripsi kedua."
  ]
}
```

`featured: true` membuat card melebar satu baris penuh di desktop.

## Deploy ke Vercel

Cara paling aman:

```bash
git add .
git commit -m "Refactor portfolio to structured data-driven static site"
git push
```

Jika repo sudah tersambung ke Vercel, deploy akan otomatis berjalan setelah push.
