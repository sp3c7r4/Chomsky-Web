import mail from './../assets/mail.svg'
import phone from './../assets/phone.jpg'
import grad from './../assets/grad.png'

function Waitlist() {
  return (
      <div className='flex flex-1 relative min-h-screen px-[150px]'>
        {/* Phone image positioned with lower z-index, below other content */}
        <div className='hidden fixed w-full md:flex z-0 p-0 top-0 right-0 h-[1000px] overflow-hidden'>
          <img src={phone} className='self-end absolute right-0 w-auto h-full object-contain'/>
        </div>
        <div className='md:fixed w-full flex z-0 p-0 bottom-0 left-0 h-[800px] overflow-hidden'>
          <img src={grad} className='self-end absolute left-0 w-auto h-full object-contain'/>
        </div>
        
        {/* Main content with higher z-index to appear above the phone image */}
        <div className='z-10 grid grid-cols-2 flex-1 relative w-full'>
          <div className='z-10 h-full w-full flex justify-center pb-30 flex-col gap-4'>
            <div className='py-2 bg-[rgba(50,181,130,0.2)] px-4 rounded-full inline-block w-fit'>
              <p className='text-[13px] font-medium text-[#32B582]'>Be the first to experience Chomsky 😊</p>
            </div>
            <div className='text-[60px] max-w-150 font-semibold leading-[1.1]'>
              Our app is almost
              here. join <span className="italic font-[Helvetica] font-semibold text-[#32B582]">the waitlist</span><br/>
              <p>to get early access</p>
            </div>
            <div className='flex-row flex gap-2'>
              <div className='py-5 px-3 pl-5 bg-[rgba(255,255,255,0.13)] w-[400px] flex-row flex gap-2'>
                <img src={mail} className=''/>
                <input placeholder='Enter your active mail 😊' className='bg-transparent outline-none w-full text-white' />
              </div>
              <button onClick={() => alert(1)} className='py-5 px-10 bg-[rgba(50,181,130,0.2)] w-fit hover:bg-[rgba(50,181,130,0.3)] transition-colors'>Submit</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Waitlist