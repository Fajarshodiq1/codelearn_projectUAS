// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Apa itu Tailwind CSS?",
    answer: "Sebuah framework CSS",
    options: [
      "Sebuah framework JavaScript",
      "Sebuah bahasa pemrograman",
      "Sebuah framework CSS",
      "Sebuah editor teks",
    ],
  },
  {
    numb: 2,
    question: "Bagaimana cara menginstal Tailwind CSS dalam proyek Anda?",
    answer: "Menggunakan npm atau yarn",
    options: [
      "Menggunakan npm atau yarn",
      "Mengunduh file ZIP dan mengekstraknya",
      "Menggunakan pip untuk instalasi",
      "Menggunakan CDN langsung dalam HTML",
    ],
  },
  {
    numb: 3,
    question: "Apa tujuan utama dari Tailwind CSS?",
    answer: "Mempermudah desain tata letak halaman web",
    options: [
      "Memberikan efek animasi pada halaman web",
      "Mempermudah desain tata letak halaman web",
      "Membuat backend server untuk aplikasi web",
      "Menyediakan fungsi matematika kompleks dalam CSS",
    ],
  },
  {
    numb: 4,
    question:
      "Apa yang dimaksud dengan 'utility-first' dalam konteks Tailwind CSS?",
    answer: "Fokus pada penggunaan kelas utilitas langsung dalam HTML",
    options: [
      "Menggunakan utilitas JavaScript untuk desain web",
      "Menempatkan utilitas di lapisan belakang proyek",
      "Fokus pada penggunaan kelas utilitas langsung dalam HTML",
      "Membuat utilitas CSS khusus untuk setiap elemen HTML",
    ],
  },
  {
    numb: 5,
    question: "Bagaimana cara mengganti warna teks menggunakan Tailwind CSS?",
    answer: "Menambahkan kelas seperti text-red-500 pada elemen HTML",
    options: [
      "Menggunakan properti CSS seperti color: red;",
      "Menambahkan kelas seperti text-red-500 pada elemen HTML",
      "Menggunakan JavaScript untuk mengubah warna teks secara dinamis",
      "Menggunakan ID untuk setiap elemen dan menerapkan warna melalui CSS",
    ],
  },
  {
    numb: 6,
    question:
      "Apa perbedaan antara class 'mt-4' dan 'mb-4' dalam Tailwind CSS?",
    answer: "'mt-4' untuk margin atas dan 'mb-4' untuk margin bawah",
    options: [
      "'mt-4' untuk margin atas dan 'mb-4' untuk margin bawah",
      "Keduanya digunakan untuk margin atas",
      "Keduanya digunakan untuk margin bawah",
      "'mt-4' untuk margin bawah dan 'mb-4' untuk margin atas",
    ],
  },
  {
    numb: 7,
    question: "Bagaimana cara mengatur lebar elemen menggunakan Tailwind CSS?",
    answer: "Dengan menambahkan kelas seperti w-1/2 pada elemen HTML",
    options: [
      "Dengan menambahkan properti CSS seperti width: 300px;",
      "Dengan menambahkan kelas seperti w-1/2 pada elemen HTML",
      "Menggunakan JavaScript untuk mengatur lebar secara dinamis",
      "Dengan menambahkan kelas seperti width-300 pada elemen HTML",
    ],
  },
  {
    numb: 8,
    question:
      "Apa yang dimaksud dengan 'responsive design' dalam konteks Tailwind CSS?",
    answer: "Desain yang merespons perubahan ukuran layar dan perangkat",
    options: [
      "Desain yang merespons input pengguna",
      "Desain yang merespons perubahan ukuran layar dan perangkat",
      "Desain yang hanya dapat diakses oleh perangkat mobile",
      "Desain yang responsif terhadap kecepatan koneksi internet",
    ],
  },
  {
    numb: 9,
    question: "Apa itu 'hover' dalam Tailwind CSS?",
    answer:
      "Mengindikasikan efek yang muncul saat pengguna mengarahkan kursor ke atas elemen",
    options: [
      "Sebuah kelas untuk membuat elemen bergerak",
      "Mengindikasikan efek yang muncul saat pengguna mengarahkan kursor ke atas elemen",
      "Sebuah fitur untuk menyembunyikan elemen dari tampilan",
      "Sebuah properti untuk mengatur tinggi elemen",
    ],
  },
  {
    numb: 10,
    question:
      "Bagaimana cara mengubah warna latar belakang dengan Tailwind CSS?",
    answer: "Menambahkan kelas seperti bg-blue-500 pada elemen HTML",
    options: [
      "Menggunakan properti CSS seperti background-color: blue;",
      "Menambahkan kelas seperti bg-blue-500 pada elemen HTML",
      "Menggunakan JavaScript untuk mengubah warna latar belakang secara dinamis",
      "Menggunakan ID untuk setiap elemen dan menerapkan warna latar belakang melalui CSS",
    ],
  },
  {
    numb: 11,
    question: "Apa fungsi dari class 'flex' dalam Tailwind CSS?",
    answer: "Membuat kontainer dan elemen-elemen di dalamnya menjadi fleksibel",
    options: [
      "Mengubah tata letak menjadi absolut",
      "Membuat kontainer dan elemen-elemen di dalamnya menjadi fleksibel",
      "Mengatur tinggi elemen menjadi tetap",
      "Mengubah warna teks menjadi fleksibel",
    ],
  },
  {
    numb: 12,
    question:
      "Apa keuntungan menggunakan Tailwind CSS dibandingkan dengan menulis CSS biasa?",
    answer: "Mempercepat proses pengembangan dan memudahkan perubahan desain",
    options: [
      "Memungkinkan penulisan CSS yang lebih kompleks",
      "Mempercepat proses pengembangan dan memudahkan perubahan desain",
      "Menghasilkan desain yang lebih rumit",
      "Mengharuskan penggunaan JavaScript untuk setiap komponen desain",
    ],
  },
  {
    numb: 13,
    question: "Apa peran dari class 'rounded' dalam Tailwind CSS?",
    answer: "Memberikan sudut yang dibulatkan pada elemen",
    options: [
      "Mengatur tinggi elemen",
      "Memberikan sudut yang dibulatkan pada elemen",
      "Mengubah tata letak menjadi relatif",
      "Mengganti warna teks pada elemen",
    ],
  },
  {
    numb: 14,
    question:
      "Bagaimana cara membuat tata letak dua kolom dengan Tailwind CSS?",
    answer: "Menggunakan class 'flex' dan 'w-1/2' pada elemen-elemen tersebut",
    options: [
      "Menggunakan properti CSS seperti float: left; dan float: right;",
      "Menggunakan class 'flex' dan 'w-1/2' pada elemen-elemen tersebut",
      "Menggunakan kelas 'float-left' dan 'float-right'",
      "Menggunakan ID untuk setiap elemen dan mengatur lebar mereka secara langsung",
    ],
  },
  {
    numb: 15,
    question: "Apa itu 'purge' dalam Tailwind CSS?",
    answer: "Proses menghilangkan CSS yang tidak digunakan dalam produksi",
    options: [
      "Sebuah kelas untuk membersihkan elemen dari tampilan",
      "Proses mengganti warna teks menjadi putih",
      "Proses menghilangkan CSS yang tidak digunakan dalam produksi",
      "Sebuah fitur untuk membersihkan cache browser",
    ],
  },
];
