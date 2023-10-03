import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../components/ui/PrimaryBtn";
import resumeApi from "../api/resumeApi";
import DangerBtn from "../components/ui/DangerBtn";
import { AiFillDelete, AiOutlineDownload, AiFillEdit } from "react-icons/ai";
import html2PDF from "html2pdf.js";

const ResumeOne = () => {
  const [resumes, setResumes] = useState([]);

  // download resume

  const downloadResume = async (id) => {
    const content = document.getElementById("resume" + id);
    const options = {
      jsPDF: {
        format: "a4",
      },
      html2canvas: { letterRendering: true, useCORS: true, logging: true },
      margin: 1,
      image: { type: "jpeg", quality: 1 },
      filename: "myfile.pdf",
    };
    html2PDF(content, options);
  };

  // delete resume
  const deleteResume = async (id) => {
    const res = await resumeApi("DELETE", id);
    console.log("delete", res);
    if (res.data) setResumes(res.data);
  };

  const getResumes = async () => {
    const resumeData = await resumeApi("GET", "");
    console.log(resumeData);

    if (!resumeData.message) setResumes(resumeData);
  };

  useEffect(() => {
    getResumes();
  }, []);

  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 max-w-screen-2xl mx-auto gap-4">
      {resumes?.length == 0 ? (
        <div>
          <h2>No Resume Found!</h2>
        </div>
      ) : (
        resumes?.map(({ id, USER_DATA }, index) => (
          <div
            key={id}
            id={"resume" + index}
            className="!flex w-full max-w-5xl mx-auto relative group border"
          >
            <div className="flex-1 p-8 rounded-lg space-y-4">
              {/* name */}
              <div className="flex items-center gap-4">
                <div>
                  <img
                    src={USER_DATA.profilePicture}
                    alt="profile"
                    className="w-20 rounded-full aspect-square object-cover"
                  />
                </div>
                <div>
                  <h1 className=" mb-1">{USER_DATA.fullName}</h1>
                  <h3 className="text-gray-600 capitalize">
                    {USER_DATA.techrole}
                  </h3>
                </div>
              </div>

              {/* profile/Summary  */}

              <div>
                <h2>Profile</h2>

                <ul className="space-y-2">
                  {USER_DATA.summaries.map(({ summaryText }, index) => (
                    <li key={index}>
                      <p>{summaryText}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* education */}
              <div>
                <h2>Education</h2>

                <ul className="space-y-2">
                  {USER_DATA.education.map(
                    (
                      {
                        description,
                        marks,
                        stream,
                        endDate,
                        startDate,
                        university,
                      },
                      index
                    ) => (
                      <li key={index}>
                        <h3>
                          {stream} ({marks && marks}), {university}
                        </h3>
                        <h5 className="uppercase">
                          {startDate} - {endDate}
                        </h5>
                        <p>{description}</p>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* projects */}
              <div>
                <h2>Projects</h2>

                <ul className="space-y-2">
                  {USER_DATA.projects.map(
                    (
                      {
                        companyName,
                        descriptions,
                        endDate,
                        startDate,
                        role,
                        title,
                      },
                      index
                    ) => (
                      <li key={index}>
                        <h3>
                          {title}, {companyName}
                        </h3>
                        <h5 className="uppercase">
                          <b>{role}</b> ({startDate} - {endDate})
                        </h5>
                        <ul className="list-disc pl-8">
                          {descriptions.map((description, i) => (
                            <li key={i}>
                              <p>{description}</p>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* certificates */}
              <div>
                <h2>Certificates</h2>

                <section className="space-y-2">
                  <div>
                    <h3>BookMyShow, MERN Stack Project</h3>
                    <h5>AUGUST 2023</h5>
                  </div>
                </section>
              </div>
            </div>

            {/* right side bar */}
            <div className="min-w-max bg-green-900 text-white p-8  space-y-2">
              {/* Right Side: Personal Info */}
              <div>
                <h2 className="border-b">Details</h2>
                <ul className="text-sm space-y-2">
                  <li className="capitalize">{USER_DATA.address}</li>
                  <li>{USER_DATA.phone}</li>
                  <li className="lowercase">
                    <Link to={`mailto:${USER_DATA.email}`}>
                      {USER_DATA.email}
                    </Link>
                  </li>
                </ul>
              </div>
              {/* skills */}
              <div>
                <h2 className="border-b">Skills</h2>

                <ul className="space-y-2 text-sm list-disc pl-6">
                  {USER_DATA.skills?.map((skill, index) => (
                    <li key={index} className="capitalize">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* languages */}
              <div>
                <h2 className="border-b">Languages</h2>
                <ul className="space-y-2 text-sm list-disc pl-6">
                  {USER_DATA.languages?.map(
                    ({ language, proficiency }, index) => (
                      <li key={index} className="capitalize">
                        {language} ({proficiency})
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* download button  */}
            <div className="absolute top-5 right-5 group-hover:block hidden transition space-x-4">
              <div className="flex flex-col gap-2">
                <PrimaryBtn
                  title={<AiOutlineDownload />}
                  type="button"
                  onClick={() => downloadResume(index)}
                />
                <PrimaryBtn title={<AiFillEdit />} type="button" />
                <DangerBtn
                  title={<AiFillDelete />}
                  type="button"
                  onClick={() => deleteResume(id)}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default ResumeOne;
