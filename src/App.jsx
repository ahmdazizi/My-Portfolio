import DataImage from "./data"
import {listTools,listProyek,certificates}  from "./data"
import { TypeAnimation } from 'react-type-animation';
import { GraduationCap,ChartColumnIncreasing,ArrowRight, MapPin, BriefcaseBusiness} from "lucide-react";
import { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  useEffect(() => {
    if (selectedProject) {
      setActiveImage(0);
    }
  }, [selectedProject]);
  return (
    <>
    <div
  className="hero mx-2 my-3 md:mx-10 grid md:grid-cols-2 items-center md:my-8 xl:gap-0 gap-6 grid-cols-1 max-w-screen min-h-screen"
>
  {/* Kolom kiri */}
  <div className="animate__animated animate__fadeInUp animate__delay-3s">
  <div className=" mb-16 mt-4">
  <div>
            <span
              className="
              inline-flex items-center gap-3
              px-5 py-3 mb-3
              rounded-2xl
              bg-black
              text-white
              dark:bg-white
              dark:text-black
              shadow-2xl text-sm md:text-base font-medium
            "
            >
              <span className="w-3 h-3 bg-white dark:bg-black rounded-full "></span>
              Digital Creative Developer
            </span>
          </div>
    <h1 className="text-2xl md:text-5xl text-black dark:text-white font-bold mb-2">
      Halo, Saya
    </h1>
    <h1
        className="text-4xl
        md:text-8xl font-bold
        inline-block
        bg-gradient-to-r
        from-black
        via-zinc-600
        to-zinc-300
        dark:from-white
        dark:via-zinc-300
        dark:to-zinc-500
        bg-clip-text
        text-transparent mb-2
        tracking-widest
      "
      >
      Ahmad Azizi
    </h1>
     <div className="flex items-center gap-3 mt-4 mb-6">
        <div className="w-34 h-[5px] bg-black dark:bg-white rounded-full"></div>
        <div className="w-2 h-2 rounded-full bg-black dark:bg-white"></div>
      </div>
    <h2 className="text-2xl md:text-4xl mb-2 text-zinc-950 dark:text-white">
      <TypeAnimation
        sequence={[
          "Frontend Developer",
          2000,
          "Web Developer",
          2000,
          "UI/UX Designer",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        cursor={true}
        className="text-zinc-950 font-semibold dark:text-white"
      />
    </h2>
    <p className="text-sm md:text-md text-black dark:text-white opacity-80  md:max-w-2xl text-justify mb-6">
      Saya seorang pengembang web yang berfokus pada pembuatan website interaktif,
      fungsional, dan responsif. Dengan latar belakang di bidang Frontend,
      Backend, dan UI/UX, saya berkomitmen menghadirkan solusi digital yang tidak
      hanya terlihat menarik, tetapi juga memberikan pengalaman pengguna yang
      optimal.
    </p>
    <div className="flex items-center gap-2 sm:gap-4">
      <a
        href="https://drive.google.com/file/d/1-m8ci7NSm96qir1MzSKUAxK_1DeuAYx5/view?usp=sharing"
        className="bg-black md:p-4 p-3 text-sm md:text-base rounded-md text-white font-semibold hover:shadow-lg hover:shadow-zinc-950 hover:scale-100 transition duration-300 ease-in-out dark:bg-white dark:text-black dark:hover:shadow-md dark:hover:shadow-white"
        target="_blank"
      >
        Download CV <i class="ri-download-2-line ri-lg font-semibold"></i>
      </a>
      <a
        href="#proyek"
        className="border-3 border-zinc-950 md:p-4 p-3 rounded-xl text-sm md:text-base text-zinc-950 font-semibold hover:shadow-lg hover:shadow-zinc-950 hover:scale-100 transition duration-300 ease-in-out dark:border-white dark:text-white dark:hover:shadow-md dark:hover:shadow-white"
      >
        Lihat Proyek <i class="ri-arrow-down-fill ri-lg font-semibold"></i>
      </a>
    </div>
  </div>
  </div>

  {/* Kolom kanan */}
    <div className="animate__animated animate__fadeInDown animate__delay-4s">
    <div className="relative mx-auto flex justify-center items-center">

      {/* DOT PATTERN */}
      <div className="absolute top-0 right-5 md:right-10 lg:right-25 grid grid-cols-4 gap-3 opacity-40">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-white dark:opacity-100"
          />
        ))}
      </div>

      {/* CARD */}
      <div
        className="
          relative
          w-[280px]
          sm:w-[320px]
          md:w-[360px]
          lg:w-[400px]

          h-[360px]
          sm:h-[420px]
          md:h-[460px]
          lg:h-[500px]

          rounded-[35px]
          md:rounded-[45px]
          lg:rounded-[50px]

          bg-gradient-to-b
          from-zinc-100
          to-zinc-200

          overflow-hidden
          flex
          justify-center
          items-end

          shadow-xl
          lg:shadow-2xl
          shadow-zinc-950
          dark:shadow-white
        "
      >

        {/* ICON */}
        <div
          className="
            absolute
            top-4
            right-4

            md:right-0

            w-12 h-12
            md:w-16 md:h-16

            rounded-full
            bg-white
            dark:bg-black
            flex
            justify-center
            items-center
            shadow-xl
            z-20
          "
        >
          <div
            className="
              w-10 h-10
              md:w-14 md:h-14

              rounded-full
              bg-black
              dark:bg-white
              text-white
              dark:text-black

              flex
              justify-center
              items-center
            "
          >
            <i className="ri-code-s-slash-line text-xl md:text-3xl"></i>
          </div>
        </div>

        {/* DASHED LINE */}
        <div
          className="
            absolute
            top-24
            md:top-36

            right-12
            md:right-28

            w-[120px]
            md:w-[180px]

            h-[120px]
            md:h-[180px]

            border-r-2
            border-dashed
            border-zinc-300
            rounded-br-full
          "
        />

        {/* IMAGE */}
        <img
          src={DataImage.HeroImage}
          alt="hero"
          className="
            relative
            z-10
            h-full
            object-cover
            object-top
            scale-105
            md:scale-110
          "
        />

        {/* GRADIENT */}
        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-28
            md:h-40
            bg-gradient-to-t
            from-black
            dark:from-white
            to-transparent
            z-20
          "
        />

        {/* CIRCLE */}
        <div
          className="
            absolute
            bottom-1
            md:bottom-10

            -right-6
            md:-right-10

            w-[320px]
            sm:w-[360px]
            md:w-[450px]

            h-[160px]
            md:h-[220px]

            border-t-[3px]
            border-black
            dark:border-white
            rounded-t-full
            z-20
          "
        />

        {/* EXPERIENCE */}
        <div
          className="
            absolute
            bottom-6
            right-4
            md:right-5

            bg-white/90
            dark:bg-black/90
            backdrop-blur-xl

            rounded-2xl
            md:rounded-3xl

            px-3 py-2
            md:px-4 md:py-3

            shadow-xl
            z-30
          "
        >
          <h1 className="text-2xl md:text-3xl font-black text-black dark:text-white">
            2+
          </h1>

          <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-200">
            Tahun Pengalaman
          </p>
        </div>

      </div>
    </div>
  </div>
</div>

    {/* tentang */}
    <div className="tentang py-5 scroll-mt-10" id="tentang">
      <div className="md:mx-4 md:p-7 text-black dark:text-white" data-aos="fade-up" data-aos-duration="1000">
           <h1
            className="
            text-3xl font-bold
            text-black 
            dark:text-white
            mb-2
            mt-10
          "
          >
          Tentang Saya
        </h1>
          <div className="flex items-center gap-3 mb-6">
          <div className="w-34 h-[5px] bg-black dark:bg-white rounded-full"></div>
          <div className="w-2 h-2 rounded-full bg-black dark:bg-white"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-1/2 ">    
        <div className="text-black dark:text-white text-justify">
        Hi, saya Ahmad Azizi, seorang Full Stack Web Developer yang berfokus pada pengembangan aplikasi web yang fungsional, efisien, dan mudah digunakan.
        <br/>
        <br/>
        Saya memiliki pengalaman menggunakan Laravel, JavaScript, React, WordPress, dan MySQL untuk membangun, mengembangkan, serta memelihara aplikasi web.
        <br/>
        <br/>
        Saya adalah pribadi yang jujur, bertanggung jawab, cepat beradaptasi, dan memiliki semangat belajar yang tinggi. Saya percaya bahwa teknologi yang baik tidak hanya menyelesaikan masalah, tetapi juga mampu memberikan pengalaman terbaik bagi penggunanya.
        </div>
        </div>
        <div className="md:w-1/2 mx-2">
        <div className="rounded-3xl border border-gray-200 bg-white dark:bg-black dark:border-white">
  <div className="grid grid-cols-1 md:grid-cols-2">

    <div className="flex gap-5 p-8 border-b md:border-r border-gray-200 dark:border-white">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-black dark:border dark:border-white dark:text-white">
        <GraduationCap size={24} strokeWidth={2} />
      </div>
      <div>
        <h3 className="text-xl font-semibold">Pendidikan </h3>
        <p className="mt-2 text-gray-500 leading-relaxed dark:text-white">
          D3 Teknologi Informasi
          <br />
          Universitas Brawijaya
        </p>
      </div>
    </div>
    <div className="flex gap-5 p-8 border-b  border-gray-200 dark:border-white">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-black dark:border dark:border-white dark:text-white">
        <ChartColumnIncreasing size={24} strokeWidth={2} />
      </div>

      <div>
        <h3 className="text-xl font-semibold">IPK</h3>
        <p className="mt-2 text-gray-500 leading-relaxed dark:text-white">
          3.95/4.00
        </p>
      </div>
    </div>

    <div className="flex gap-5 p-8 md:border-r border-gray-200 dark:border-white">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-black dark:border dark:border-white dark:text-white">
        <MapPin size={24} strokeWidth={2} />
      </div>

      <div>
        <h3 className="text-xl font-semibold">Domisili</h3>
        <p className="mt-2 text-gray-500 leading-relaxed dark:text-white">
          Jakarta Selatan, DKI Jakarta
        </p>
      </div>
    </div>
    <div className="flex gap-5 p-8 border-gray-200 dark:border-white">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-black dark:border dark:border-white dark:text-white">
        <BriefcaseBusiness size={24} strokeWidth={2} />
      </div>

      <div>
        <h3 className="text-xl font-semibold">Status</h3>
        <p className="mt-2 text-gray-500 leading-relaxed dark:text-white">
          Open To Work
        </p>
      </div>
    </div>

  </div>
        </div>
        </div>
        </div>
      
      </div>
      <div className="tools mt-2 mx-2 md:mx-10">
        <h1 className="md:text-3xl/snug text-2xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000"> Tech Stack</h1>
        {/* <p className="xl:w-2/5 lg:w-2/4 sm:w-3/4 w-full text-base/loose oppacity-50 text-justify" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"> Tools dan teknologi yang mendukung proses desain serta pengembangan proyek.</p> */}
        <div className="tools-box mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool)=>(
            <div className="flex items-center gap-2 p-3 border border-black rounded-md hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-white p-1 group-hover:bg-black dark:bg-black dark:group-hover:bg-white" />
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
            <div key={proyek.id} className="p-4 bg-white border border-zinc-600 rounded-md flex flex-col dark:bg-zinc-900 dark:text-white dark:border-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
              <img src={proyek.thumbnail} alt="Proyek Image" loading="lazy"/>
              <div className="flex flex-col flex-grow">
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4 text-justify line-clamp-3">{proyek.desk}</p>
                <div className="mt-auto flex items-center gap-2 flex-wrap">
                  {proyek.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium border border-black rounded-md bg-black text-white"
                    >
                      {tool}
                    </span>
                  ))}
                  <button 
                  onClick={()=> {setSelectedProject(proyek);
                  setActiveImage(proyek.gambar[0]);
                  }}
                  className="group ml-auto flex items-center gap-2 px-4 py-2 text-sm font-medium border border-black rounded-lg transition-all duration-300 hover:bg-black hover:text-white dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white">
                    <span>Lihat Detail</span>
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                  {selectedProject && (
                    <div className="fixed inset-0 z-50 bg-transparent backdrop-blur-sm flex justify-center items-center">

                    <div className="relative w-[90%] max-w-6xl h-[90vh] overflow-y-auto rounded-xl bg-white border-2 border-black dark:border-white">
                        <div className="sticky top-0 z-20 flex justify-between items-center px-8 py-5 bg-black border-b-2 border-black dark:border-white">
                
                            <h1 className="text-2xl md:text-4xl font-bold text-white">
                                {selectedProject.nama}
                            </h1>
                
                            <button 
                            onClick={() => setSelectedProject(null)} className="text-4xl text-white hover:bg-black ">
                                ×
                            </button>
                
                        </div>
                
                        <div className="p-8">
                            <img
                              src={selectedProject.gambar[activeImage]}
                              className="rounded-md w-full object-cover"
                            />
                           <div className="grid grid-cols-2 gap-3 mt-4 md:flex md:flex-wrap">
                              {selectedProject.gambar.map((gambar, index) => {
                                if (index === activeImage) return null;
                                return (
                                  <img
                                    key={index}
                                    src={gambar}
                                    onClick={() => setActiveImage(index)}
                                    className="w-36 h-20 object-cover rounded-sm cursor-pointer border"
                                  />
                                );
                              })}
                            </div>
                
                            <div className="mt-10">
                
                                <h2 className="text-3xl font-bold text-black mb-4">
                                    Tentang Project Ini
                                </h2>
                
                                <p className="text-black leading-8 text-lg text-justify">
                                  {selectedProject.desk}
                                </p>
                
                            </div>
                            <div className="mt-10">
                
                                <h2 className="text-3xl font-bold text-black mb-4">
                                    Fitur Utama
                                </h2>
                
                                <ul className="space-y-1 text-black">
                                  {selectedProject.fitur.map((fitur, index) => (
                                    <li key={index}>- {fitur}</li>
                                  ))}
                                </ul>
                
                            </div>
                            <div className="mt-10">
                
                                <h2 className="text-3xl font-bold text-black mb-5">
                                    Tech Stack
                                </h2>
                
                                <div className="flex flex-wrap gap-3">
                                  {selectedProject.tools.map((tool, index) => (
                                    <span
                                      key={index}
                                      className="px-4 py-2 rounded-md bg-black text-white"
                                    >
                                      {tool}
                                    </span>
                                  ))}
                
                                </div>
                
                            </div>
                
                            <div className="mt-12 flex gap-4">
                
                            <div className="flex gap-3">
                              {selectedProject.gdrive && (
                                <a
                                  href={selectedProject.gdrive}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-6 py-3 rounded-md bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black"
                                >
                                  Link Demo
                                </a>
                              )}

                              {selectedProject.github && (
                                <a
                                  href={selectedProject.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-6 py-3 rounded-md border-2 border-black text-black hover:bg-black hover:text-white"
                                >
                                  GitHub
                                </a>
                              )}
                            </div>
                            </div>
                
                        </div>
                
                    </div>
                
                </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    {/* end proyek */}
    {/* Sertifikat */}
    <section className="md:mt-20 px-6">

      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-r from-zinc-200 via-white to-zinc-300 p-6 dark:bg-gradient-to-br dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-700">

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-64 shrink-0">

            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-black"></span>

              <span className="text-xs font-semibold dark:text-black">
                SERTIFIKAT
              </span>
            </div>

            <h2 className="mt-3 text-3xl font-bold">
              Sertifikat
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-300">
              Sertifikat yang saya peroleh sebagai bukti kompetensi dan
              pencapaian dalam pengembangan web.
            </p>

          </div>

            <div className="flex-1 md:max-w-[1100px]">

                  <Swiper
              modules={[Navigation]}
              navigation
              loop={true}
              spaceBetween={10}
              slidesPerView='auto'
            >
                    {certificates.map((item, index) => (
                      <SwiperSlide key={index} className="md:!w-[320px] ">

                      <div className="rounded-xl bg-white p-2 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    
                        <div className="relative">
                    
                          <img
                            src={item.image}
                            alt={item.title}
                            className="md:h-40 h-30 w-full rounded-lg object-cover"
                          />
                    
                          <span className="absolute right-2 top-2 rounded-full bg-emerald-100 px-2 py-1 text-[10px] text-emerald-700">
                            {item.date}
                          </span>
                    
                        </div>
                    
                        <div className="px-1 pb-2 pt-3">
                          <h3 className="text-sm font-semibold dark:text-black">{item.title}</h3>
                          <p className="mt-1 text-xs text-gray-500">{item.issuer}</p>
                        </div>
                    
                      </div>
                    
                    </SwiperSlide>
                    ))}
                  </Swiper>

        </div>

        </div>

      </div>

    </section>
    {/* end sertifikat */}

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
                    <div className=" text-white px-2 bg-zinc-800 rounded-md">
                    <i className="ri-github-fill ri-2x "></i>
                    </div>
                    <div>
                    <div className="ml-3 ">
                      <h2 className="text-base sm:text-lg font-semibold text-zinc-800">GitHub</h2>
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
                    <div className=" text-white px-2 bg-zinc-800 rounded-md">
                    <i className="ri-linkedin-fill ri-2x "></i>
                    </div>
                    <div>
                    <div className="ml-3 ">
                      <h2 className="text-base sm:text-lg font-semibold text-zinc-800">Linkedin</h2>
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
                    <div className=" text-white px-2 bg-zinc-800 rounded-md">
                    <i className="ri-instagram-fill ri-2x "></i>
                    </div>
                    <div>
                    <div className="ml-3 ">
                      <h2 className="text-base sm:text-lg font-semibold text-zinc-800">Instagram</h2>
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
              <p className="text-lg font-medium text-black"><i className="ri-mail-line mr-1"></i>Kirimkan pesan kepada saya.</p>
              
              {/* Nama */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="nama"
                  placeholder="Masukkan Nama ..."
                  className="border border-slate-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Masukkan Email ..."
                  className="border border-slate-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
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
                  className="border border-slate-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  required
                ></textarea>
              </div>

              {/* Tombol Kirim */}
              <button
                type="submit"
                className="p-2 bg-black hover:bg-zinc-800 text-white rounded-lg sm:w-full font-semibold transition"
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
