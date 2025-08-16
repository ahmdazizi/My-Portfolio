import DataImage from "./data"
import {listTools,listProyek}  from "./data"

function App() {
  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div>
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
          <q>Selamat pagi dunia tipu-tipu</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Ahmad Azizi</h1>
        <p className="text-base mb-6 opacity-50 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, vitae molestiae! Nesciunt harum est voluptatibus? Perspiciatis quis eaque aperiam quisquam illum dolores, non enim voluptas, nesciunt similique voluptate, vel accusantium?</p>
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i className="ri-download-line ri-lg"></i></a>
          <a href=""  className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek <i class="ri-arrow-down-line ri-lg"></i></a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" />
    </div>

    {/* tentang */}
    <div className="tentang mt-32 py-10">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
        <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" />
        <p className="text-base/loose text-justify mb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla illo necessitatibus id exercitationem officia labore a consequatur aut perferendis impedit distinctio, adipisci laudantium vitae magnam, qui ducimus consequuntur, saepe error. Eius neque omnis vero. Enim eligendi neque odio magnam! Consequatur.</p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden"/>
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                45 <span className="text-violet-500">+</span>
              </h1>
              <p>Proyek Selesai</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                4 <span className="text-violet-500">+</span>
              </h1>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4"> Tools yang dipakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 sm:w-3/4 w-full text-base/loose oppacity-50 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quis dolore pariatur et? Nihil, delectus?</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool)=>(
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id}>
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
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
    <div className="proyek mt-32 py-10 w-full">
      <h1 className="text-center text-4xl/snug font-bold mb-2">Proyek</h1>
      <p className="text-center text-base/loose oppacity-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, quidem</p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
          {listProyek.map((proyek)=>(
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md flex flex-col">
              <img src={proyek.gambar} alt="Proyek Image" />
              <div className="flex flex-col flex-grow">
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proyek.tools.map((tool,index)=>(
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href="" target="_blank" className="p-3 bg-violet-700 hover:bg-violet-600 rounded-lg block border border-zinc-600 font-semibold">Lihat Proyek</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    {/* end proyek */}
    </>
  )
}

export default App
