import HeroImage from "/assets/hero.jpg";
import icon from "/assets/icon.png";
import image from "/assets/hero-img.png";

const DataImage = {
  HeroImage,
  icon,
  image
};

export default DataImage;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/laravel.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/wordpress.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/php.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Laravel",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Wordpress",
    ket: "CMS",
    dad: "700",
  },

  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 8,
    gambar: Tools9,
    nama: "PHP",
    ket: "Language",
    dad: "900",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1000",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek1_1 from "/assets/proyek/proyek1_1.png";
import Proyek1_2 from "/assets/proyek/proyek1_2.png";
import Proyek1_3 from "/assets/proyek/proyek1_3.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek2_1 from "/assets/proyek/proyek2_1.png";
import Proyek2_2 from "/assets/proyek/proyek2_2.png";
import Proyek2_3 from "/assets/proyek/proyek2_3.png";
import Proyek2_4 from "/assets/proyek/proyek2_4.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek3_1 from "/assets/proyek/proyek3_1.png";
import Proyek3_2 from "/assets/proyek/proyek3_2.png";
import Proyek3_3 from "/assets/proyek/proyek3_3.png";
import Proyek3_4 from "/assets/proyek/proyek3_4.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek4_1 from "/assets/proyek/proyek4_1.png";
import Proyek4_2 from "/assets/proyek/proyek4_2.png";
import Proyek4_3 from "/assets/proyek/proyek4_3.png";
import Proyek5 from "/assets/proyek/proyek5.png";
import Proyek5_1 from "/assets/proyek/proyek5_1.jpg";
import Proyek5_2 from "/assets/proyek/proyek5_2.jpg";
import Proyek5_3 from "/assets/proyek/proyek5_3.jpg";
import Proyek5_4 from "/assets/proyek/proyek5_4.png";
import Proyek5_5 from "/assets/proyek/proyek5_5.png";


export const listProyek = [
  {
    id: 1,
    thumbnail: Proyek1,
    gambar: [ Proyek1_1, Proyek1_2, Proyek1_3],
    nama: "Website Jual Beli Barang",
    desk: "Proyek aplikasi yang dibangun menggunakan Java GUI Swing untuk mengimplementasikan konsep algoritma, logika pemrograman, dan Object-Oriented Programming (OOP). Meskipun dikembangkan sebagai proyek perkuliahan, aplikasi ini menunjukkan kemampuan saya dalam merancang antarmuka pengguna, mengelola alur aplikasi, dan menerapkan struktur kode yang terorganisir.",
    tools: ["Java", "Figma", "MySQL"],
    fitur: [
      "Login Penjual dan Pembeli",
      "Manajemen Produk",
      "Pesan produk",
      "Riwayat Pesanan"
    ],
    github:"", 
    gdrive:"",
    dad: "200",
  },
  {
    id: 2,
    thumbnail: Proyek2,
    gambar:[ Proyek2_1, Proyek2_2, Proyek2_3, Proyek2_4],
    nama: "Landing Page Creanomic 2023",
    desk: "Proyek ini merupakan pengembangan website yang digunakan untuk mempublikasikan informasi seputar Creative Economy and Innovation Centre 2023. ",
    tools: ["HTML", "CSS", "Javascript", "TailwindCSS"],
    fitur: [
      "Informasi Acara",
      "Informasi Pendaftaran",
      "Informasi Guest Star",
      "Informasi Workshop",
      "Informasi Lomba",
      "Informasi Sponsor",
      "Informasi Merchandise"
    ],
    github: "https://github.com/ahmdazizi/Creanomic2023.git",
    gdrive:"",
    dad: "300",
  },
  {
    id: 3,
    thumbnail: Proyek3,
    gambar: [ Proyek3_1, Proyek3_2, Proyek3_3, Proyek3_4],
    nama: "Web Pengaduan Fakultas",
    desk: "Website pengaduan Fakultas Vokasi yang dikembangkan menggunakan Laravel untuk memfasilitasi mahasiswa dalam menyampaikan aspirasi, saran, dan laporan. Sistem dilengkapi dengan autentikasi pengguna, manajemen data pengaduan, serta dashboard administrasi untuk mempermudah pengelolaan laporan.",
    tools: ["HTML", "CSS", "Javascript", "TailwindCSS", "PHP", "MySQL"],
    fitur: [
      "Login Mahasiswa,Admin,Super Admin",
      "Manajemen Pengaduan",
      "Dashboard Super Admin",
      "Dashboard Admin",
    ],
    gdrive: "https://drive.google.com/file/d/1NkJRFV_rvbwgGLZTu9Hj_2C8py7KaPBg/view?usp=drive_link",
    github: "",
    dad: "400",
  },
  {
    id: 4,
    thumbnail: Proyek4,
    gambar: [Proyek4_1, Proyek4_2, Proyek4_3],
    nama: "Company Profile FKUB",
    desk: "Website company profile Fakultas Kedokteran Universitas Brawijaya yang dikembangkan menggunakan WordPress sebagai CMS. Website berfungsi sebagai media informasi dan publikasi resmi dengan desain responsif, navigasi yang intuitif, serta kemudahan dalam pengelolaan konten.",
    tools: ["Wordpress", "Figma"],
    fitur: [
      "Informasi Fakultas",
      "Informasi Jurusan",
      "Informasi Alumni",
      "Informasi Lowongan Kerja",
      "Informasi Akademik"
    ],
    gdrive: "https://fk.ub.ac.id/",
    github: "",
    dad: "500",
  },
  {
    id: 5,
    thumbnail: Proyek5,
    gambar: [ Proyek5_1, Proyek5_2, Proyek5_3, Proyek5_4, Proyek5_5],
    nama: "Website Pemesanan Online",
    desk: "Baking With Amanda – Pemesanan Online merupakan website berbasis Laravel dan Bootstrap yang dikembangkan untuk mempermudah proses pemesanan produk bakery secara online. Aplikasi ini dilengkapi dengan fitur katalog produk, keranjang belanja, pemesanan, dan manajemen pesanan admin, serta memiliki desain responsif sehingga dapat diakses dengan optimal di berbagai perangkat.",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap","Laravel", "MySQL","Midtrans"],
    fitur: [
      "Login Admin",
      "Manajemen Produk",
      "Keranjang Belanja",
      "Checkout menggunakan Midtrans",
      "Riwayat Pesanan"
    ],
    github: "https://github.com/ahmdazizi/Baking-With-Amanda.git",
    gdrive:"https://drive.google.com/file/d/1bGufz5lv8yjICl0yrI5p2Lpih4ZF_-_D/view?usp=sharing",
    dad: "600",
  },
  
];

import sertifikat_it from "/assets/sertifikat/Serifikasi_IT.jpg";
import sertifikat_bnsp from "/assets/sertifikat/Sertifikat_bnsp.png";
import sertifikat_maganghub from "/assets/sertifikat/Sertifikat_MagangHub.jpg";
import sertifikat_msib from "/assets/sertifikat/Sertifikat_msib.jpg";

export const certificates = [
  {
    title: "Sertifikasi IT",
    image: sertifikat_it,
    issuer: "Microsoft Office",
    date: "12 Des 2024",
  },
  {
    title: "Junior Web Developer",
    image: sertifikat_bnsp,
    issuer: "BNSP",
    date: "25 Jan 2025",
  },
  {
    title: "MSIB",
    image: sertifikat_msib,
    issuer: "Kampus Merdeka",
    date: "20 Apr 2024",
  },
  {
    title: "Magang Hub",
    image: sertifikat_maganghub,
    issuer: "Kemnaker",
    date: "24 Mei 2026",
  },
];
