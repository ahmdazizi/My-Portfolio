import HeroImage from "/assets/hero-img.png";
import icon from "/assets/icon.png";

const DataImage = {
  HeroImage,
  icon,
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
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Jual Beli Barang",
    desk: "Proyek ini dibuat untuk memenuhi tugas mata kuliah Algoritma dan Pemrograman pada semester 2. Aplikasi ini saya kembangkan menggunakan Java GUI Swing",
    tools: ["Java", "Figma", "MySQL"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Landing Page Creanomic 2023",
    desk: "Proyek ini merupakan pengembangan website yang digunakan untuk mempublikasikan informasi seputar Creative Economy and Innovation Centre 2023. ",
    tools: ["HTML", "CSS", "Javascript", "TailwindCSS"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Pengaduan Fakultas",
    desk: "Proyek ini merupakan website pengaduan Fakultas Vokasi untuk memfasilitasi mahasiswa dalam menyampaikan aspirasi, saran, dan laporan secara terstruktur.",
    tools: ["HTML", "CSS", "Javascript", "TailwindCSS", "PHP", "MySQL"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Company Profile FKUB",
    desk: "Proyek ini berupa website company profile Fakultas Kedokteran Universitas Brawijaya yang bertujuan sebagai media informasi dan publikasi fakultas.",
    tools: ["Wordpress", "Figma"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Website Pemesanan Online",
    desk: "Proyek ini berupa website pemesanan online untuk Baking With Amanda yang memudahkan pelanggan dalam memesan berbagai produk cake secara praktis.",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap","Laravel", "MySQL"],
    dad: "600",
  },
  
];
