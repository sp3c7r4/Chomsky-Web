import logo from './../assets/icon.png'
import logo_svg from './../assets/logo_svg.svg'

function Banner() {
  return (
    <div className="w-full bg-[#10110C]">
      <div className="flex px-2 justify-between items-center py-3 w-full max-w-screen-xl mx-auto relative z-20">
        <div className='flex flex-row items-center gap-1'>
          <img src={logo} className='w-8 h-8 md:w-10 md:h-10 border-black'/>
          <img src={logo_svg} className='w-24 md:w-32 h-6 md:h-9'/>
        </div> 
        <nav className='text-white hidden text-[15px] gap-10 justify-between md:flex font-medium'>
          <a href='#' className='text-[#32B582]'>Home</a>
          <a href='#'>Downloads</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
        </nav>
        <button className='flex flex-row items-center gap-1 bg-[#32B582] justify-center px-3 md:px-8 py-2 rounded-full'>
          <span className='text-sm md:text-base text-white font-medium'>+ Join waitlist</span>
        </button>
      </div>
    </div>
  )
}

export default Banner