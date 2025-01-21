import se1 from '../assets/Activities/se1.jpg'
import se2 from '../assets/Activities/se2.jpg'
import se3 from '../assets/Activities/se3.jpg'
import se4 from '../assets/Activities/se4.jpg'
import sb1 from '../assets/Activities/sb1.jpg'
import sb2 from '../assets/Activities/sb2.jpg'
import sb3 from '../assets/Activities/sb3.jpg'
import sb4 from '../assets/Activities/sb4.jpg'
import sb5 from '../assets/Activities/sb5.jpg'
import sb6 from '../assets/Activities/sb6.jpg'
import sb7 from '../assets/Activities/sb7.jpg'
import comp1 from '../assets/Activities/comp1.jpg'
import comp2 from '../assets/Activities/comp2.jpg'
import comp3 from '../assets/Activities/comp3.jpg'
import comp4 from '../assets/Activities/comp4.jpg'
import comp5 from '../assets/Activities/comp5.jpg'
import comp6 from '../assets/Activities/comp6.jpg'
import comp7 from '../assets/Activities/comp7.jpg'
import comp8 from '../assets/Activities/comp8.jpg'
import one from '../assets/Activities/1.jpg'
import jjh1 from '../assets/Activities/jjh.jpg'


export default function Activities() {
  return (
    <>
      <div className="flex justify-center w-4/5 m-auto">
        <div className="matter">
          <div className="swachhbharat pt-4 pb-4 border-b-black ">
            <span>
              <h1 className="h1fonter">Swachh Bharat Mission:</h1>{" "}
            </span>
            <p>
              The borders of the hostel along with the staff carry out Swachhta
              Abhiyan once a month to make hostel premises cleaner and
              immaculate. This activity encourages borders to spread awareness
              about the importance of cleanliness among the masses.{" "}
            </p>

            <div className="hariyali-images">
              <img src={sb1} alt="img" srcset="" width="220" />
              <img
                src={sb2}
                alt="img"
                srcset=""
                height="180"
                width="220"
              />
              <img src={sb3} alt="img" srcset="" width="220" />
              <img
                src={sb4}
                alt="img"
                srcset=""
                width="220"
                height="180"
              />
              <img
                src={sb5}
                alt="img"
                srcset=""
                height="180"
                width="220"
              />
              <img src={sb6} alt="img" srcset="" width="220" />
              <img src={sb7} alt="img" srcset="" width="220" />
              <img src="Gallery/sbm8.jpg" alt="img" srcset="" width="220" />
            </div>
          </div>{" "}
          <hr />
          <div className="hariyali">
            <h1 className="h1fonter"> Jal-Jeevan-Hariyali Mission:</h1>
            <p>
              {" "}
              The borders of the hostel along with the staff plant trees and
              study the process of plantation on the first Tuesday of every
              month. This activity encourages students to understand the
              importance of afforestation. This activity has also lead to
              increase in the number of birds arriving in the hostel premises.{" "}
            </p>

            <div className="hariyali-images">
              <img src={jjh1} alt="" srcset="" width="220" />
              <img src={one} alt="" srcset="" width="220" />
              <img src={one} alt="" srcset="" width="220" />
              <img src={one} alt="" srcset="" width="220" />
              <img src={one} alt="" srcset="" width="220" />
              <img src={one} alt="" srcset="" width="220" />
              <img src={one} alt="" srcset="" width="220" />
              <img src={one} alt="" srcset="" width="220" />
            </div>
          </div>{" "}
          <hr />
          <div className="competition">
            <h1 className="h1fonter">Competition:</h1>
            <p>
              {" "}
              Various competitions is being organized in the hostel for the
              hostel borders. Speech, Poster making, Poster Presentation, Essay
              Writing, Quiz, Sports, etc. competitions have been organized on
              various important National and International days like
              International Mother Tongue Day, World Earth Day, National Youth
              Day, etc. Winners and Participants of these competitions are also
              awarded for their performance in the competitions. Such activities
              provide a platform to the borders of the hostel for their overall
              personality development.
            </p>

            <div className="hariyali-images">
              <img
                src={comp1}
                alt=""
                srcset=""
                width="220"
                height="175"
              />
              <img src={comp2} alt="" srcset="" width="220" />
              <img src={comp3} alt="" srcset="" width="220" />
              <img src={comp4} alt="" srcset="" width="220" />
              <img src={comp5} alt="" srcset="" width="220" />
              <img
                src={comp6}
                alt=""
                srcset=""
                width="220"
                height="175"
              />
              <img
                src={comp7}
                alt=""
                srcset=""
                width="220"
                height="175"
              />
              <img
                src={comp8}
                alt=""
                srcset=""
                width="220"
                height="175"
              />
            </div>
          </div>{" "}
          <hr />
          <div className="exhibition">
            <h1 className="h1fonter">Science Exhibition:</h1>
            <p className=''>
              {" "}
              The borders of the hostel follow the path of their seniors and
              celebrate Saraswati Pooja every year on Basant Panchami by
              organizing a Science Exhibition. The borders make several science
              working models based on various themes( Earth, Climate Change,
              Food, Water, Agriculture, Space, Green Energy, Disaster
              Management, etc.).
            </p>

            <div className="hariyali-images">
              <img src={se1} alt="" srcset="" width="220" />
              <img src={se2} alt="" srcset="" width="220" />
              <img src={se3} alt="" srcset="" width="220" />
              <img src={se4} alt="" srcset="" width="220" />
              <img src={one} alt="" srcset="" width="220" />
              <img src={one} alt="" srcset="" width="220" />
              <img src={one} alt="" srcset="" width="220" />
              <img src={one} alt="" srcset="" width="220" />
            </div>
          </div>{" "}
          <hr />
        </div>
      </div>
    </>
  );
}
