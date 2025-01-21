import notice1 from '../assets/Notice/notice1.jpg'
import notice2 from '../assets/Notice/notice2.jpg'
import newgif from '../assets/new.webp'

export default function Notice() {
  return (
    <>
      <div className="w-4/5 m-auto p-8 flex ">
        <div className=" p-4 leading-10 ">
          <h1 className="h1fonter">Latest Notices...</h1>

          <div className="underline">
            <a href={notice1} >
              {" "}
              <h4>
                U.G. VOCATIONAL COURSES SEMESTER-2 EXAMINATION DATESHEET SESSION
                (2023-26) <img src={newgif} alt="" srcset="" className='inline-block'/> 
              </h4>
            </a>
          </div>
          <div className="underline">
            <a href={notice1} >
              {" "}
              <h4>
                U.G. VOCATIONAL COURSES SEMESTER-2 EXAMINATION DATESHEET SESSION
                (2023-26) <img src={newgif} alt="" srcset="" className='inline-block'/> 
              </h4>
            </a>
          </div>

          <div class="notice underline">
            <a href={notice2}>
              {" "}
              <h4>
                NOTICE TO VACATE ALL BOY'S HOSTEL BY 31-MAY-24
                <img src={newgif} alt="" srcset="" className='inline-block' />
              </h4>
            </a>
          </div>

          <div class="notice underline">
            <a href="">
              {" "}
              <h4>
                U.G. VOCATIONAL COURSES SEMESTER-2 EXAMINATION DATESHEET SESSION
                (2023-26) <img src={newgif} alt="" srcset="" className='inline-block' />
              </h4>
            </a>
          </div>

          <div class="notice underline">
            <a href="">
              {" "}
              <h4>
                U.G. VOCATIONAL COURSES SEMESTER-2 EXAMINATION DATESHEET SESSION
                (2023-26) <img src={newgif} alt="" srcset="" className='inline-block' />
              </h4>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
