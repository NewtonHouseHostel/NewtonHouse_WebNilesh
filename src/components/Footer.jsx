import { Link } from "react-router-dom";

function Footer() {
    const my_Email='codemate18@gmail.com';
  return (
    <>
      <div className="bg-gradient-to-r from-red-800 via-red-600 to-red-800 w-full h-56 flex justify-between px-10 font-mons py-5 ">
        <div>
          <p className="font-medium">Copyright© Newton House 2024-2025</p>
          <a href="#" target="_blank"> Visitors:
              <img src="https://hitwebcounter.com/counter/counter.php?page=19459800&style=0024&nbdigits=5&type=page&initCount=0"      title="Counter Widget" Alt="Visit counter For Websites"   border="0" /></a>    
        </div>

        <div>
            
          <div>   
            <p className="font-medium"> Important Links</p>
          </div>
          <div className="grid py-2 underline font-normal gap-2">
            <Link to="https://patnasciencecollege.ac.in/" className="flex">
              Patna Science College 
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
                </span>

            </Link>
            <Link to="https://pup.ac.in/#" className="flex">
              Patna University
              <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
                </span>
            </Link>
            <Link to="https://www.ugc.gov.in/" className="flex">
              University Grants Commision
              <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
                </span>
            </Link>
            <Link to="https://pup.ac.in/PUAct.aspx"className="flex">
              Patna University Act
              <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
                </span>
            </Link>
          </div>
        </div>
        <div>
          <p className="font-medium">Author: Nilesh Kumar</p>
          <Link onClick={()=>window.location = `mailto:${my_Email}`}>
          {my_Email}
          
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
