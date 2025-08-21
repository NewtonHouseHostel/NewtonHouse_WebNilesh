import React from "react";
import { Link } from "react-router-dom";
import NH_Pic from '../assets/Homepage/NH_Pic.jpg'
import profbhavuk from '../assets/Homepage/profbhavuk.jpg'
import principal from '../assets/Homepage/principal.png'

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center w-4/5  items-center m-auto py-4 font-mons">
        <div className="text-center">
          <img src={NH_Pic} alt="hostel pic" />
          <p>Image of Newton House Hostel</p>
        </div>
        

        <div className="border-2 border-red-800 w-full p-10 ">
          <h1 className="h1fonter">Mission . . .</h1> <br />
          <p className="pl-24">
            <strong>•</strong> Safe and secure living{" "}
          </p>{" "}
          <br />
          <p className="pl-24">
            <strong>•</strong> Academic support like study room, internet
            access, and academic activities.
          </p>{" "}
          <br />
          <p className="pl-24">
            <strong>•</strong> Health and well–being by offering good health
            services, and counseling.
          </p>{" "}
          <br />
        </div>

        <div className="border-2 border-red-800 border-y-0 w-full p-10">
          <h1 className="h1fonter">Vision . . .</h1> <br />
          <p className="pl-24">
            <strong>•</strong> Providing a sustainable and clean environment to
            students.
          </p>{" "}
          <br />
          <p className="pl-24">
            <strong>•</strong> To establish Newton House as a powerhouse of
            athletes, researchers, and future leaders of India.
          </p>{" "}
          <br />
        </div>

        <div className="container border-2 border-red-800 p-10">
          <div className="">
            <h1 className="h1fonter">About</h1>
            <br />
            <p>
              {" "}
              <strong> Patna Science College</strong>, a constituent unit of{" "}
              <strong>Patna University</strong> , was established in 1927.
              Initially it was opened as the Science Department of Patna
              University. It began functioning independently from 1928 when its
              foundation stone was laid by Lord Irwin on 15 November 1928. Since
              then, Patna Science College has been recognized as a Premier
              Institution of higher learning in science stream in India. The
              College is centrally located in Patna, the capital of Bihar,
              occupying an area of approximately 28.32 acres of land containing
              separate blocks for different science departments. <br />
              <br />
              <strong>Newton House Hostel</strong> is situated within the campus
              of the college. Rooms are allotted to the students of B.Sc. Hons.
              of various subjects of the college based on their merit. Several
              sports and cultural activities are organized in which the borders
              of the hostel participate actively. Newton House Hostel feels
              proud for producing various Bureaucrats, Academicians, and
              Politicians of the State and Country.
            </p>
          </div>

          <div className="flex justify-center text-center p-4  ">
            <div>
              <img src={principal} alt="" width="375px" />
              <p>Prof. Dr. Alka </p>
              <h3>Principal</h3>
            </div>

            <div>
              <img
                id="profbhavuk"
                src={profbhavuk}
                alt=""
                width="375"
              />
              <p>Prof. Dr. Bhavuk Sharma </p>
              <h3>Superintendent</h3>
            </div>
          </div>
        </div>

        <div className="border-2 border-red-800 border-y-0 p-10">
          <h1 className="h1fonter flex flex-row  gap-1 ">
           
            Admission  
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#9a3333"
              >
              <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
             
            </svg> 
        
             
          </h1>
          <br />
          <p>
            Newton House Hostel is allotted strictly based on merit and as per
            the rules and regulations framed by Patna University. Admission
            Notice for the hostel allotment is notified in mid-July every year
            for the students of the First Semester of the Patna Science College.
            Admission is made based on marks secured in their Senior
            Secondary(12th) Examination or marks secured in the admission
            test/entrance conducted by Patna University. Admission Notice for
            the hostel allotment for the students of the College of Third/
            Fifth/ Seventh Semesters is notified after the declaration of their
            end-semester examination result and the merit list is made based on
            marks secured in their end-semester exam.
          </p>
        </div>

        <div className="border-2 border-red-800 p-10" >
          <h1 className="h1fonter flex flex-row gap-1">
            Infrastructure{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#9A3333"
            >
              <path d="M80-120v-720h400v160h400v560H80Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h320v-400H480v80h80v80h-80v80h80v80h-80v80Zm160-240v-80h80v80h-80Zm0 160v-80h80v80h-80Z" />
            </svg>
          </h1>{" "}
          <br />
          <p >
            Newton House Hostel has 21 rooms with a capacity of forty-eight
            students. The hostel has 14 washrooms and ten bathrooms. The hostel
            has four gardens, two playgrounds, one common study room, one
            office, one common room, and a mess. Hostel Gardens has various
            flowering plants and air-purifying plants to have a green and
            positive campus. Among the two playgrounds, one is used for playing
            Volleyball and other is used for playing badminton. There is one
            common study room where at least six students can do group studies
            at the same time. This allows them to share their knowledge and
            experience with their friends.
          </p>
        </div>
      </div>
    </>
  );
}
