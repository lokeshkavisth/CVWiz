import React, { useRef } from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../components/ui/PrimaryBtn";
import { useReactToPrint } from "react-to-print";

const imgLink =
  "https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg";

const ResumeOne = () => {


// download resume 
const pdfRef = useRef();
const downloadResume =  useReactToPrint({
  content: () => pdfRef.current,
});



  return (
       <div ref={pdfRef} className="flex w-full max-w-5xl mx-auto border relative group">
      <div className="flex-1 p-8 rounded-lg space-y-10">
        {/* name */}
        <div className="flex items-center gap-4">
          <div>
            <img
              src={imgLink}
              alt="profile"
              className="w-20 rounded-full aspect-square object-cover"
            />
          </div>
          <div>
            <h1 className=" mb-1">Lokesh Sharma</h1>
            <h3 className="text-gray-600 capitalize">
              Full Stack Web Developer
            </h3>
          </div>
        </div>

        {/* profile  */}

        <div>
          <h2>Profile</h2>
          <p>
            As a recent graduate with a background in Geography and a strong
            passion for full-stack web development, I am eager to apply my
            skills in MERN stack development to create innovative and
            user-friendly web applications. I am a fast learner, dedicated to
            staying up-to-date with the latest tech trends through reading
            online tech articles.
          </p>
        </div>

        {/* education */}
        <div>
          <h2>Education</h2>
          <section className="space-y-6">
            <div>
              <h3>Full Stack Web Developer, Almabetter</h3>
              <h5>FEBUARY 2021 - AUGUST 2023</h5>
              <p>
                I enrolled in Almabetter's comprehensive full-stack web
                development program in February 2023. During this immersive
                learning experience, I gained proficiency in the MERN (MongoDB,
                Express.js, React.js, and Node.js) stack.
              </p>
            </div>
            <div>
              <h3>Full Stack Web Developer, Almabetter</h3>
              <h5>FEBUARY 2021 - AUGUST 2023</h5>
              <p>
                I enrolled in Almabetter's comprehensive full-stack web
                development program in February 2023. During this immersive
                learning experience, I gained proficiency in the MERN (MongoDB,
                Express.js, React.js, and Node.js) stack.
              </p>
            </div>
          </section>
        </div>

        {/* projects */}
        <div>
          <h2>Projects</h2>
          <section className="space-y-6">
            <div>
              <h3>BookMyShow, MERN Stack Project</h3>
              <h5>AUGUST 2023</h5>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  <p>
                    Collaborated on a team project to develop a web application
                    similar to BookMyShow&rsquo;s ticket booking system using
                    the MERN stack.
                  </p>
                </li>
                <li>
                  <p>
                    Focused on the backend development, with primary
                    responsibility for creating the post-booking API.
                  </p>
                </li>
                <li>
                  <p>
                    Utilized Node.js and Express.js for building the backend
                    infrastructure.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3>BookMyShow, MERN Stack Project</h3>
              <h5>AUGUST 2023</h5>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  <p>
                    Collaborated on a team project to develop a web application
                    similar to BookMyShow&rsquo;s ticket booking system using
                    the MERN stack.
                  </p>
                </li>
                <li>
                  <p>
                    Focused on the backend development, with primary
                    responsibility for creating the post-booking API.
                  </p>
                </li>
                <li>
                  <p>
                    Utilized Node.js and Express.js for building the backend
                    infrastructure.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* certificates */}
        <div>
          <h2>Certificates</h2>

          <section className="space-y-6">
            <div>
              <h3>BookMyShow, MERN Stack Project</h3>
              <h5>AUGUST 2023</h5>
            </div>
          </section>
        </div>
      </div>

      {/* right side bar */}
      <div className="min-w-max bg-green-900 text-white p-8 pt-36 space-y-6">
        {/* Right Side: Personal Info */}
        <div>
          <h2>Details</h2>
          <ul className="text-sm space-y-2">
            <li className="capitalize">Jaipur,India</li>
            <li>6377378450</li>
            <li className="lowercase">
              <Link to={"mailto:lokeshkavisth.dev@gmail.com"}>
                lokeshkavisth.dev@gmail.com
              </Link>
            </li>
          </ul>

          {/* skills */}
        </div>
        <div>
          <h2>Skills</h2>

          <ul className="space-y-2 text-sm">
            <li className="capitalize">MongoDB</li>
            <li className="capitalize">Express.js</li>
            <li className="capitalize">React.js</li>
            <li className="capitalize">Node.js</li>
            <li className="capitalize">JavaScript</li>
          </ul>
        </div>
      </div>



{/* download button  */}
<div className="absolute top-5 right-5 group-hover:block hidden transition">
  <PrimaryBtn title='Download' type='button' onClick={downloadResume}/>
</div>
    </div>

   

  );
};

export default ResumeOne;
