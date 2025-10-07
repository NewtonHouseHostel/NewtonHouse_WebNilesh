import cmvisit1 from '../assets/cmvisit1.jpg'
import cmvisit2 from '../assets/cmvisit2.jpg'
import cmvisit3 from '../assets/cmvisit3.jpg'
import cmvisit4 from '../assets/cmvisit4.jpg'
export default function Supt() {
  const link= "https://www.facebook.com/permalink.php?story_fbid=pfbid02BptrqUk541fkwehb8LKGqbi3meEywggqMo6ma9bKgFkGpz3oJu422A5Re9Arda3al&amp;id=100054738069406"
  return (
    <>
      <div className="main-body text-center">
        <h1 className="h1fonter">
          Latest from Superintendent <hr />{" "}
        </h1>
        <div className="supt-cornor w-4/5 m-auto grid grid-cols-2">
         

          

          <div>
            <img src={cmvisit1} alt="img" srcset="" width="" />
          </div>
          <div>
            <img src={cmvisit2} alt="img" srcset="" width="" />
          </div>
          <div>
            <img src={cmvisit3} alt="img" srcset="" width="" />
          </div>
          <div>
            <img src={cmvisit4} alt="img" srcset="" width="" />
          </div>

         
        </div>
      </div>
    </>
  );
}
