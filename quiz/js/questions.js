// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Apa singkatan dari HTML?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
  },
  {
    numb: 2,
    question: "Apa peran tag <p> dalam HTML?",
    answer: "Membuat paragraf",
    options: [
      "Membuat heading",
      "Membuat link",
      "Membuat gambar",
      "Membuat paragraf",
    ],
  },
  {
    numb: 3,
    question: "Apa kepanjangan dari CSS?",
    answer: "Cascading Style Sheets",
    options: [
      "Counter Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
    ],
  },
  {
    numb: 4,
    question: "Apa yang dimaksud dengan atribut 'src' pada tag <img>?",
    answer: "Menentukan URL sumber gambar",
    options: [
      "Menentukan lebar gambar",
      "Menentukan URL sumber gambar",
      "Menentukan teks alternatif",
      "Menentukan tinggi gambar",
    ],
  },
  {
    numb: 5,
    question: "Apa fungsi dari tag <a> dalam HTML?",
    answer: "Membuat hyperlink",
    options: [
      "Membuat tabel",
      "Membuat paragraf",
      "Membuat gambar",
      "Membuat hyperlink",
    ],
  },
  {
    numb: 6,
    question: "Apa yang dimaksud dengan 'DOCTYPE' dalam HTML?",
    answer: "Dokumen type declaration",
    options: [
      "Dokumen text encoding",
      "Dokumen title element",
      "Dokumen table element",
      "Dokumen type declaration",
    ],
  },
  {
    numb: 7,
    question: "Apa yang dimaksud dengan elemen <footer>?",
    answer: "Menyimpan informasi penutup halaman",
    options: [
      "Menampilkan teks utama halaman",
      "Menyimpan informasi penutup halaman",
      "Menyimpan konten utama halaman",
      "Mengandung informasi meta dan link terkait halaman",
    ],
  },
  {
    numb: 8,
    question: "Apa kegunaan dari tag <head> dalam HTML?",
    answer: "Mengandung informasi meta dan link terkait halaman",
    options: [
      "Menampilkan judul halaman",
      "Menyimpan konten utama halaman",
      "Menyimpan informasi penutup halaman",
      "Mengandung informasi meta dan link terkait halaman",
    ],
  },
  {
    numb: 9,
    question: "Apa fungsi dari atribut 'colspan' pada tag <td>?",
    answer: "Menentukan jumlah sel yang digabung",
    options: [
      "Menentukan warna background",
      "Menentukan teks bold",
      "Menentukan jumlah sel yang digabung",
      "Menentukan tinggi sel",
    ],
  },
  {
    numb: 10,
    question: "Apa yang dimaksud dengan 'HTML entities'?",
    answer: "Simbol khusus dalam HTML",
    options: [
      "Bahasa pemrograman HTML",
      "Elemen HTML untuk menyimpan data",
      "Simbol khusus dalam HTML",
      "Atribut khusus dalam HTML",
    ],
  },
  {
    numb: 11,
    question: "Apa perbedaan antara tag <article> dan <section>?",
    answer:
      "Tag <article> digunakan untuk konten yang mandiri, sedangkan <section> digunakan untuk mengelompokkan konten",
    options: [
      "Tag <article> digunakan untuk mengelompokkan konten, sedangkan <section> digunakan untuk konten yang mandiri",
      "Tag <article> digunakan untuk membuat heading, sedangkan <section> untuk paragraf",
      "Tidak ada perbedaan",
      "Tag <article> digunakan untuk konten yang mandiri, sedangkan <section> digunakan untuk mengelompokkan konten",
    ],
  },
  {
    numb: 12,
    question: "Apa fungsi dari atribut 'alt' pada tag <img>?",
    answer: "Memberikan teks alternatif untuk gambar",
    options: [
      "Menentukan lebar gambar",
      "Menentukan tinggi gambar",
      "Menentukan teks alternatif untuk gambar",
      "Menentukan URL sumber gambar",
    ],
  },
  {
    numb: 13,
    question: "Apa itu HTML5?",
    answer: "Versi kelima dari Hyper Text Markup Language",
    options: [
      "Hyper Text Markup Language generasi kelima",
      "Hypertext Markup Language versi 5",
      "Hypertext and Text Markup Language",
      "Versi kelima dari Hyper Text Markup Language",
    ],
  },
  {
    numb: 14,
    question: "Apa fungsi dari tag <nav> dalam HTML?",
    answer: "Mengandung link navigasi",
    options: [
      "Menampilkan judul halaman",
      "Mengandung informasi penutup halaman",
      "Mengandung link navigasi",
      "Menyimpan informasi meta dan link terkait halaman",
    ],
  },
  {
    numb: 15,
    question: "Apa yang dimaksud dengan 'self-closing' tag?",
    answer: "Tag yang tidak memerlukan tag penutup dan ditutup sendiri",
    options: [
      "Tag yang tidak memerlukan tag penutup dan ditutup sendiri",
      "Tag yang harus memiliki tag penutup",
      "Tag yang digunakan untuk menutup halaman",
      "Tag yang hanya dapat digunakan pada akhir dokumen",
    ],
  },
];
