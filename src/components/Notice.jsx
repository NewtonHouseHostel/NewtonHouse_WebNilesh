
import notice2 from '../assets/Notice/notice2.jpg'
import notice3 from '../assets/Notice/notice3.jpg'
import newgif from '../assets/new.webp'

export default function Notice() {
  return (
    <>
      <div className="w-4/5 m-auto p-8 flex ">
        <div className=" p-4 leading-10 ">
          <h1 className="h1fonter">Latest Notices...</h1>

          <div className="underline">
            <a href={notice3} >
              {" "}
              <h4>
                16.09.2025 HOSTEL FORM & DOCUMENTS SUBMISSION NOTICE <img src={newgif} alt="" srcset="" className='inline-block'/> 
              </h4>
            </a>
          </div>
        

          <div class="notice underline">
            <a href={notice2}>
              {" "}
              <h4>
                29.05.2024 NOTICE TO VACATE ALL BOY'S HOSTEL BY 31-MAY-24
                <img src={newgif} alt="" srcset="" className='inline-block' />
              </h4>
            </a>
          </div>

          

          
        </div>
      </div>
    </>
  );
}
