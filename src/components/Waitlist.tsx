import mail from "./../assets/mail.svg";
import phone from "./../assets/phone.jpg";
import grad from "./../assets/grad.png";
import spectra from './../assets/spectra_2.png'
import { useState } from "react";

function Waitlist() {
  const [email, setEmail] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      alert("Error: Please enter an email address");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Error: Invalid email address");
      return;
    }
    // Success case - replace with your waitlist submit logic
    alert("Thank you for joining our waitlist!");
    // Reset email field after successful submission
    setEmail("");
  };
  return (
    <div className="flex flex-1 relative min-h-screen md:px-[150px]">
      {/* Phone image positioned with lower z-index, below other content */}
      <div className="hidden fixed w-full md:flex z-0 p-0 top-0 right-0 h-[1000px] overflow-hidden">
        <img
          src={phone}
          className="self-end absolute right-0 w-auto h-full object-contain"
        />
      </div>
      <div className="hidden md:fixed w-full md:flex z-0 p-0 bottom-0 left-0 h-[800px] overflow-hidden">
        <img
          src={grad}
          className="self-end absolute left-0 w-auto h-full object-contain"
        />
      </div>

      {/* Main content with higher z-index to appear above the phone image */}
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 px-6 flex-1 relative w-full items-center justify-center">
        <div className="z-10 h-full w-full flex justify-center pb-30 flex-col gap-4 items-center text-center md:items-start md:text-left">
          <div className="flex items-center py-2 bg-[rgba(50,181,130,0.2)] px-4 rounded-full w-fit whitespace-nowrap">
            <p className="text-[13px] font-medium inline-flex w-fit mx-0 max-w-none px-1 text-[#32B582]">
              Be the first to experience Chomsky 😊
            </p>
          </div>
          <div className="text-[40px] w-full md:text-[60px] md:max-w-150 font-semibold leading-[1.1]">
            Our app is almost here. join{" "}
            <span 
              className="italic font-semibold text-transparent bg-clip-text" 
              style={{ backgroundImage: "linear-gradient(to right, #4EB283, #1edd94)" }}
            >
              the waitlist
            </span>
            <br />
            <p>to get early access</p>
          </div>
          <div className="flex flex-row gap-2 w-full md:w-auto">
            <div className="py-3 pl-5 px-2 bg-[rgba(255,255,255,0.13)] w-full md:w-[400px] flex-row flex gap-2 items-center">
              <img src={mail} className="w-5 h-5 md:w-auto md:h-auto" />
              <input
                placeholder="Enter your active mail 😊"
                className="bg-transparent outline-none w-full text-white text-sm md:text-base"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && validateEmail()}
              />
            </div>
            <button
              onClick={validateEmail}
              className="py-5 px-7 md:px-10 bg-[rgba(50,181,130,0.2)] w-fit hover:bg-[rgba(50,181,130,0.3)] transition-colors"
            >
              Submit
            </button>
          </div>
          <div className="absolute bottom-40 flex flex-row items-center gap-1 mt-4">
  <p className="text-[10px] text-gray-400">Powered by</p>
  <img 
    src={spectra} 
    className="h-2 w-auto object-contain" 
    alt="Spectra logo"
  />
</div>
        </div>
      </div>
    </div>
  );
}

export default Waitlist;
