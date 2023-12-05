// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Apa singkatan dari CSS?",
    answer: "Cascading Style Sheets",
    options: [
      "Cascading Style Sheets",
      "Cascading System Sheets",
      "Cascading Sheet Style",
      "Conversion Sheet Style",
    ],
  },
  {
    numb: 2,
    question: "Apa peran utama CSS dalam pengembangan web?",
    answer: "Mengatur tampilan dan tata letak elemen HTML",
    options: [
      "Menyusun struktur HTML",
      "Mengatur tampilan dan tata letak elemen HTML",
      "Memberikan interaktivitas pada halaman web",
      "Mengelola server backend",
    ],
  },
  {
    numb: 3,
    question:
      "Bagaimana cara menambahkan warna latar belakang pada elemen menggunakan CSS?",
    answer: "Menggunakan properti 'background-color'",
    options: [
      "Menggunakan properti 'text-color'",
      "Menggunakan properti 'bg'",
      "Menggunakan properti 'color-background'",
      "Menggunakan properti 'background-color'",
    ],
  },
  {
    numb: 4,
    question: "Apa fungsi dari selector 'class' dalam CSS?",
    answer: "Memilih elemen-elemen dengan class tertentu untuk diberikan gaya",
    options: [
      "Memilih elemen-elemen berdasarkan tag HTML",
      "Memilih elemen-elemen berdasarkan ID",
      "Memilih elemen-elemen dengan class tertentu untuk diberikan gaya",
      "Memilih elemen-elemen berdasarkan nama atribut",
    ],
  },
  {
    numb: 5,
    question:
      "Bagaimana cara memberikan efek hover pada suatu elemen menggunakan CSS?",
    answer: "Menggunakan selector ':hover'",
    options: [
      "Menggunakan properti 'hover'",
      "Menggunakan selector ':active'",
      "Menggunakan selector ':focus'",
      "Menggunakan selector ':hover'",
    ],
  },
  {
    numb: 6,
    question: "Apa yang dimaksud dengan 'box model' dalam CSS?",
    answer: "Model yang mendefinisikan tata letak dan dimensi elemen",
    options: [
      "Model yang mendefinisikan animasi dalam elemen",
      "Model yang mendefinisikan tata letak elemen secara vertikal",
      "Model yang mendefinisikan tata letak dan dimensi elemen",
      "Model yang mendefinisikan tata letak elemen secara horizontal",
    ],
  },
  {
    numb: 7,
    question: "Bagaimana cara mengatur margin elemen menggunakan CSS?",
    answer: "Menggunakan properti 'margin'",
    options: [
      "Menggunakan properti 'spacing'",
      "Menggunakan properti 'margin'",
      "Menggunakan properti 'padding'",
      "Menggunakan properti 'border'",
    ],
  },
  {
    numb: 8,
    question: "Apa yang dimaksud dengan 'media query' dalam CSS?",
    answer: "Memungkinkan penyesuaian gaya berdasarkan ukuran layar perangkat",
    options: [
      "Sebuah query untuk mengakses data media",
      "Sebuah query untuk mencari elemen dalam HTML",
      "Memungkinkan penyesuaian gaya berdasarkan ukuran layar perangkat",
      "Memungkinkan pengaturan warna berdasarkan waktu",
    ],
  },
  {
    numb: 9,
    question: "Apa keuntungan penggunaan 'flexbox' dalam CSS?",
    answer: "Memudahkan pengaturan tata letak elemen secara fleksibel",
    options: [
      "Memudahkan pengaturan animasi elemen",
      "Memudahkan pengaturan tata letak elemen secara fleksibel",
      "Memudahkan pengaturan warna latar belakang elemen",
      "Memudahkan pengaturan ukuran font elemen",
    ],
  },
  {
    numb: 10,
    question:
      "Bagaimana cara menyembunyikan elemen dari tampilan menggunakan CSS?",
    answer: "Menggunakan properti 'display' dengan nilai 'none'",
    options: [
      "Menggunakan properti 'visibility' dengan nilai 'hidden'",
      "Menggunakan properti 'display' dengan nilai 'block'",
      "Menggunakan properti 'position' dengan nilai 'absolute'",
      "Menggunakan properti 'display' dengan nilai 'none'",
    ],
  },
  {
    numb: 11,
    question:
      "Apa yang dilakukan oleh properti 'position: relative;' dalam CSS?",
    answer: "Menggeser elemen berdasarkan posisinya yang normal",
    options: [
      "Mengubah elemen menjadi absolut",
      "Menggeser elemen berdasarkan posisinya yang normal",
      "Mengubah tata letak elemen menjadi relatif",
      "Menggeser elemen ke lapisan paling atas",
    ],
  },
  {
    numb: 12,
    question: "Apa yang dimaksud dengan 'pseudo-element' dalam CSS?",
    answer: "Elemen virtual yang dapat dipilih dan diubah gayanya",
    options: [
      "Elemen yang memiliki dua atribut",
      "Elemen yang dapat menempati dua posisi sekaligus",
      "Elemen yang hanya dapat dipilih dengan ID",
      "Elemen virtual yang dapat dipilih dan diubah gayanya",
    ],
  },
  {
    numb: 13,
    question: "Apa peran dari properti 'z-index' dalam CSS?",
    answer: "Menentukan urutan tumpukan (stacking order) elemen",
    options: [
      "Menentukan warna latar belakang elemen",
      "Menentukan tinggi elemen",
      "Menentukan urutan tumpukan (stacking order) elemen",
      "Menentukan efek animasi elemen",
    ],
  },
  {
    numb: 14,
    question:
      "Bagaimana cara membuat elemen memiliki efek transisi menggunakan CSS?",
    answer: "Menggunakan properti 'transition'",
    options: [
      "Menggunakan properti 'animation'",
      "Menggunakan properti 'transform'",
      "Menggunakan properti 'transition'",
      "Menggunakan properti 'hover'",
    ],
  },
  {
    numb: 15,
    question: "Apa yang dimaksud dengan 'float' dalam CSS?",
    answer:
      "Mengubah posisi elemen menjadi mengapung di sekitar elemen lainnya",
    options: [
      "Mengubah warna elemen menjadi mengapung",
      "Mengubah tata letak elemen menjadi absolut",
      "Mengubah posisi elemen menjadi mengapung di sekitar elemen lainnya",
      "Mengubah ukuran elemen menjadi mengapung",
    ],
  },
];
