import DataImage from "./data"
import {listTools,listProyek}  from "./data"
import { TypeAnimation } from 'react-type-animation';
import Lanyard from "../app/component/Lanyard/Lanyard";

function App() {
  return (
    <>
    <div
  className="hero mx-2 md:mx-10 grid md:grid-cols-2 items-center md:my-auto xl:gap-0 gap-6 grid-cols-1"
>
  {/* Kolom kiri */}
  <div className="animate__animated animate__fadeInUp animate__delay-3s">
  <div className=" mb-16 ">
    <h1 className="text-4xl/tight text-zinc-900 font-bold mb-3">
      Halo, Saya <span className="text-blue-950">Ahmad Azizi</span>
    </h1>
    <h2 className="text-3xl mb-2 text-blue-950">
      <TypeAnimation
        sequence={[
          "Frontend Developer",
          2000,
          "Backend Developer",
          2000,
          "UI/UX Designer",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        cursor={true}
        className="text-blue-950 font-semibold"
      />
    </h2>
    <p className="text-md text-blue-950 opacity-80  max-w-2xl text-justify mb-6">
      Saya seorang pengembang web yang berfokus pada pembuatan website interaktif,
      fungsional, dan responsif. Dengan latar belakang di bidang Frontend,
      Backend, dan UI/UX, saya berkomitmen menghadirkan solusi digital yang tidak
      hanya terlihat menarik, tetapi juga memberikan pengalaman pengguna yang
      optimal.
    </p>
    <div className="flex items-center gap-2 sm:gap-4">
      <a
        href="https://drive.google.com/file/d/1-m8ci7NSm96qir1MzSKUAxK_1DeuAYx5/view?usp=sharing"
        className="bg-blue-950 p-4 rounded-xl text-white hover:bg-blue-900"
        target="_blank"
      >
        Download CV <i className="ri-download-line ri-lg"></i>
      </a>
      <a
        href="#proyek"
        className="bg-zinc-950 p-4 rounded-xl text-white hover:bg-zinc-700"
      >
        Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
      </a>
    </div>
  </div>
  </div>

  {/* Kolom kanan */}
  <div className="animate__animated animate__fadeInDown animate__delay-4s">
  <Lanyard position={[0, -5, 15]} gravity={[0, -40, 0]} scale={[1, 1.5, 1]} />
  </div>
</div>

    {/* tentang */}
    <div className="tentang py-10 scroll-mt-30" id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-blue-950 rounded-lg text-white" data-aos="fade-up" data-aos-duration="1000">
        <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
        <p className="text-base/loose text-justify mb-10">Hi, perkenalkan saya Ahmad Azizi, seorang Fullstack Web Development. Saya percaya bahwa kejujuran, tanggung jawab, dan semangat belajar adalah kunci dalam setiap proyek, sehingga apa yang saya kembangkan tidak hanya berfungsi dengan baik tetapi juga memberikan pengalaman pengguna yang optimal. </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden"/>
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                5 <span className="text-White">+</span>
              </h1>
              <p>Proyek Selesai</p>
            </div>
            {/* <div>
              <h1 className="text-4xl mb-1">
                4 <span className="text-white">+</span>
              </h1>
              <p>Tahun Pengalaman</p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="tools mt-32 mx-2 md:mx-10">
        <h1 className="md:text-4xl/snug text-3xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000"> Tools yang dipakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 sm:w-3/4 w-full text-base/loose oppacity-50 text-justify" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"> Tools dan teknologi yang mendukung proses desain serta pengembangan proyek.</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool)=>(
            <div className="flex items-center gap-2 p-3 border border-zinc-800 rounded-md hover:bg-blue-950 hover:text-white  group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-white" />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="oppacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* end tentang */}
    {/* proyek */}
    <div className="proyek md:mt-32 mt-20 py-10 md:mx-10 scroll-mt-20"id="proyek">
      <h1 className="text-center md:text-4xl/snug text-3xl/snug font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Proyek</h1>
      <p className="md:text-center text-justify text-base/loose oppacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Beberapa proyek yang telah saya kembangkan sebagai bagian dari perjalanan
      belajar dan pengalaman di bidang teknologi.</p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
          {listProyek.map((proyek)=>(
            <div key={proyek.id} className="p-4 bg-white border border-zinc-600 rounded-md flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy"/>
              <div className="flex flex-col flex-grow">
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4 text-justify">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proyek.tools.map((tool,index)=>(
                    <p className="py-1 px-3 border border-blue-950 bg-blue-950 text-white rounded-md font-semibold" key={index}>{tool}</p>
                  ))}
                </div>
             
              </div>
            </div>
          ))}
      </div>
    </div>
    {/* end proyek */}

    {/* Kontak */}
    <div className="kontak mt-32 px-4 sm:px-10 scroll-mt-20" id="kontak">
  <h1 className="md:text-4xl text-3xl font-bold text-center mb-2" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
  <p className="text-sm sm:text-base text-center opacity-60 mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    Mari terhubung dengan saya
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:mx-auto xl:max-w-5xl">
          <div className="flex flex-col w-full gap-5">
            <div className="flex items-center justify-between bg-white px-4 py-5 rounded-lg shadow-lg transition w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <div className="flex items-center">
                    <div className=" text-white px-2 bg-blue-950 rounded-md">
                    <i className="ri-github-fill ri-2x "></i>
                    </div>
                    <div>
                    <div className="ml-3 ">
                      <h2 className="text-base sm:text-lg font-semibold text-blue-950">GitHub</h2>
                      <p className="text-xs sm:text-sm font-medium text-zinc-800 break-words">Jelajahi kode dan proyek saya</p>
                    </div>
                    </div>
                </div>
                <div className="">
                <a href="https://github.com/ahmdazizi" target="_blank" rel="noopener noreferrer">
                  <i className="ri-arrow-right-s-line text-zinc-800 sm:text-xl text-lg"></i>
                </a>
                </div>
            </div>
            <div className="flex items-center justify-between bg-white px-4 py-5 rounded-lg shadow-lg transition w-full"
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                <div className="flex items-center">
                    <div className=" text-white px-2 bg-blue-950 rounded-md">
                    <i className="ri-linkedin-fill ri-2x "></i>
                    </div>
                    <div>
                    <div className="ml-3 ">
                      <h2 className="text-base sm:text-lg font-semibold text-blue-950">Linkedin</h2>
                      <p className="text-xs sm:text-sm font-medium text-zinc-800 break-words">Mari kita terhubung secara profesional</p>
                    </div>
                    </div>
                </div>
                <div className="">
                <a href="https://www.linkedin.com/in/ahmad-azizi-77290124b/" target="_blank" rel="noopener noreferrer">
                  <i className="ri-arrow-right-s-line text-zinc-800 sm:text-xl text-lg"></i>
                </a>
                </div>
            </div>
            <div className="flex items-center justify-between bg-white px-4 py-5 rounded-lg shadow-lg transition w-full"
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                <div className="flex items-center">
                    <div className=" text-white px-2 bg-blue-950 rounded-md">
                    <i className="ri-instagram-fill ri-2x "></i>
                    </div>
                    <div>
                    <div className="ml-3 ">
                      <h2 className="text-base sm:text-lg font-semibold text-blue-950">Instagram</h2>
                      <p className="text-xs sm:text-sm font-medium text-zinc-800 break-words">Perjalanan visual saya & update keseharian</p>
                    </div>
                    </div>
                </div>
                <div className="">
                <a href="https://www.instagram.com/ahmadazizii_/" target="_blank" rel="noopener noreferrer">
                  <i className="ri-arrow-right-s-line text-zinc-800 sm:text-xl text-lg"></i>
                </a>
                </div>
            </div>
          </div>
          <div className="w-full">
            <form
            action="https://formsubmit.co/azizi153.97@gmail.com"
            method="POST"
            autoComplete="off"
            className="bg-white shadow-lg p-6 sm:p-8 rounded-xl w-full" 
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700"
          >
            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium text-blue-950"><i className="ri-mail-line mr-1"></i>Kirimkan pesan kepada saya.</p>
              
              {/* Nama */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="nama"
                  placeholder="Masukkan Nama ..."
                  className="border border-slate-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-950"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Masukkan Email ..."
                  className="border border-slate-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-950"
                  required
                />
              </div>

              {/* Pesan */}
              <div className="flex flex-col gap-2">
                <textarea
                  name="pesan"
                  rows="3"
                  cols="50"
                  placeholder="Masukkan Pesan ..."
                  className="border border-slate-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-950 resize-none"
                  required
                ></textarea>
              </div>

              {/* Tombol Kirim */}
              <button
                type="submit"
                className="p-2 bg-blue-950 hover:bg-blue-900 text-white rounded-lg sm:w-full font-semibold transition"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
          </div>
  </div>


</div>

    {/* end Kontak */}
    </>
  )
}

export default App
