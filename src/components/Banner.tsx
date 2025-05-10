import logo from './../assets/icon.png'
import logo_svg from './../assets/logo_svg.svg'

function Banner() {
  return (
    <div>
      <div className="flex justify-between items-center py-3 w-full ">
        <div className='flex flex-row items-center gap-1'>
          <img src={logo} className='w-10 h-10 border border-black'/>
          <img src={logo_svg} className='w-full h-9'/>
        </div>
        <nav className='text-white text-[15px] gap-10 justify-between flex font-medium'>
          <a href='#' className='text-[#32B582]'>Home</a>
          <a href='#'>Downloads</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
        </nav>
        <button className='flex flex-row items-center gap-1 bg-[#32B582] justify-center px-8 py-2 rounded-full'>
          <span className='text-1xl text-white font-medium'>+ Join our waitlist</span>
        </button>
      </div>
    </div>
  )
}

export default Banner