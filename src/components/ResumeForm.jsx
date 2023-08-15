import { useEffect, useState } from "react";
import PrimaryBtn from "./ui/PrimaryBtn";
import SecondryBtn from "./ui/SecondryBtn";
import DangerBtn from "./ui/DangerBtn";

const ResumeForm = () => {
  // retrive the form data from localStorage
  const data = JSON.parse(localStorage.getItem("formData"));

  // defin the initial data for the form
  const initialFormData = {
    fullName: "",
    techrole: "",
    email: "",
    phone: "",
    address: "",
    location: "",

    summaries: [
      {
        summaryText: "",
      },
    ],

    education: [
      {
        university: "",
        startDate: "",
        endDate: "",
        marks: "",
        stream: "",
        description: "",
      },
    ],
    experience: [
      {
        companyName: "",
        startDate: "",
        endDate: "",
        position: "",
        technologies: "",
        description: "",
      },
    ],
    skills: ["Skill 1"], // Default skill
    profilePicture: null,
    languages: [
      {
        language: "",
        proficiency: "",
      },
    ],
    projects: [
      {
        title: "",
        startDate: "",
        endDate: "",
        role: "",
        companyName: "",
        descriptions: [""],
      },
    ],
  };

  // state for collection the form data
  const [formData, setFormData] = useState(data || initialFormData);

  // state for handeling image errors
  const [imageError, setImageError] = useState('');

  // whenever the form data changes add the form data into the localStorage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSummaryChange = (index, value) => {
    const updatedSummaries = [...formData.summaries];
    updatedSummaries[index].summaryText = value;
    setFormData((prevData) => ({
      ...prevData,
      summaries: updatedSummaries,
    }));
  };

  const addSummary = () => {
    setFormData((prevData) => ({
      ...prevData,
      summaries: [
        ...prevData.summaries,
        {
          summaryText: "",
        },
      ],
    }));
  };

  const deleteSummary = (index) => {
    const updatedSummaries = [...formData.summaries];
    updatedSummaries.splice(index, 1);
    setFormData((prevData) => ({
      ...prevData,
      summaries: updatedSummaries,
    }));
  };

  const handleLanguageChange = (index, field, value) => {
    const updatedLanguages = [...formData.languages];
    updatedLanguages[index][field] = value;
    setFormData((prevData) => ({
      ...prevData,
      languages: updatedLanguages,
    }));
  };

  const addLanguage = () => {
    setFormData((prevData) => ({
      ...prevData,
      languages: [
        ...prevData.languages,
        {
          language: "",
          proficiency: "",
        },
      ],
    }));
  };

  const deleteLanguage = (index) => {
    const updatedLanguages = [...formData.languages];
    updatedLanguages.splice(index, 1);
    setFormData((prevData) => ({
      ...prevData,
      languages: updatedLanguages,
    }));
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...formData.education];
    updatedEducation[index][field] = value;
    setFormData((prevData) => ({
      ...prevData,
      education: updatedEducation,
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[index][field] = value;
    setFormData((prevData) => ({
      ...prevData,
      experience: updatedExperience,
    }));
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      skills: updatedSkills,
    }));
  };



  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        if (
          file.type === 'image/jpeg' ||
          file.type === 'image/png' ||
          file.type === 'image/jpg'
        ) {
          if (
            img.width === 500 &&
            img.height === 500 &&
            file.size <= 20 * 1024 * 1024 &&
            file.size >= 500 * 1024
          ) {
            setFormData((prevData) => ({
              ...prevData,
              profilePicture: file,
            }));
          } else {
            setImageError('Image does not meet size requirements');
          }
        } else {
          setImageError('Invalid image format');
        }
      };
    }
  };


  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index][field] = value;
    setFormData((prevData) => ({
      ...prevData,
      projects: updatedProjects,
    }));
  };

  const handleProjectDescriptionChange = (projIndex, descIndex, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[projIndex].descriptions[descIndex] = value;
    setFormData((prevData) => ({
      ...prevData,
      projects: updatedProjects,
    }));
  };

  const addProject = () => {
    setFormData((prevData) => ({
      ...prevData,
      projects: [
        ...prevData.projects,
        {
          title: "",
          startDate: "",
          endDate: "",
          role: "",
          companyName: "",
          descriptions: [""],
        },
      ],
    }));
  };

  const addProjectDescription = (projIndex) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[projIndex].descriptions.push("");
    setFormData((prevData) => ({
      ...prevData,
      projects: updatedProjects,
    }));
  };

  const deleteProjectDescription = (projIndex, descIndex) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[projIndex].descriptions.splice(descIndex, 1);
    setFormData((prevData) => ({
      ...prevData,
      projects: updatedProjects,
    }));
  };

  const addSkill = () => {
    setFormData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, ""],
    }));
  };

  const deleteSkill = (index) => {
    const updatedSkills = [...formData.skills];
    updatedSkills.splice(index, 1);
    setFormData((prevData) => ({
      ...prevData,
      skills: updatedSkills,
    }));
  };

  const addEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        {
          university: "",
          startDate: "",
          endDate: "",
          marks: "",
          stream: "",
          description: "",
        },
      ],
    }));
  };

  const deleteEducation = (index) => {
    const updatedEducation = [...formData.education];
    updatedEducation.splice(index, 1);
    setFormData((prevData) => ({
      ...prevData,
      education: updatedEducation,
    }));
  };

  const addExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        {
          companyName: "",
          startDate: "",
          endDate: "",
          position: "",
          technologies: "",
          description: "",
        },
      ],
    }));
  };

  const deleteExperience = (index) => {
    const updatedExperience = [...formData.experience];
    updatedExperience.splice(index, 1);
    setFormData((prevData) => ({
      ...prevData,
      experience: updatedExperience,
    }));
  };

  // submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.clear(); // clear the localStorage after submit the form
    setFormData(initialFormData);
    console.log(formData);
  };

  return (
    <section className="max-w-3xl mx-auto p-6 border rounded shadow">
      {/* title  */}
      <h2 className="text-2xl font-bold mb-4">Resume Builder</h2>

      {/* form start  */}
      <form onSubmit={handleSubmit}>
        {/* full name  */}
        <div className="mb-4">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        {/* tech role  */}
        <div className="mb-4">
          <label htmlFor="techrole">Tech Role</label>
          <input
            type="text"
            id="techrole"
            name="techrole"
            required
            value={formData.techrole}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        {/* email  */}
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        {/* mobile number  */}
        <div className="mb-4">
          <label htmlFor="phone">Mobile Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        {/* address  */}
        <div className="mb-4">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            className="w-full border rounded p-2"
          />
        </div>

        {/* location  */}
        <div className="mb-4">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        {/* summary  */}
        <div className="mb-4">
          <label htmlFor="summaries">Summaries</label>
          {formData.summaries.map((summary, index) => (
            <div key={index} className="flex mb-2">
              <textarea
                value={summary.summaryText}
                onChange={(e) => handleSummaryChange(index, e.target.value)}
                className="w-full border rounded p-2 mr-2"
              />

              {formData.summaries.length > 1 && (
                <DangerBtn
                  type="button"
                  onClick={() => deleteSummary(index)}
                  title="Delete"
                />
              )}
            </div>
          ))}

          <SecondryBtn type="button" onClick={addSummary} title="Add Summary" />
        </div>

        {/* profile picture  */}
        <div className="mb-4">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            required
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border rounded p-2"
          />
          <p className= "text-xs opacity-80 font-medium mt-1">&#9888; Optimal UI Imagery: 500&#10005;500 pixels, jpg/jpeg/png format, 500KB - 20MB size range.</p>
{imageError && (
            <p className="text-red-500 text-sm mt-1">{imageError}</p>
          )}
        </div>


        {/* experience */}

        <div className="mb-4">
          <label htmlFor="experience">Experience</label>
          {formData.experience.map((exp, index) => (
            <div key={index} className="border rounded p-4 mb-4">
              <div className="mb-2">
                <label htmlFor={`companyName${index}`}>Company Name</label>
                <input
                  type="text"
                  id={`companyName${index}`}
                  name={`companyName${index}`}
                  value={exp.companyName}
                  onChange={(e) =>
                    handleExperienceChange(index, "companyName", e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="flex justify-between mb-2">
                <div className="w-1/3 mr-2">
                  <label htmlFor={`startDate${index}`}>Start Date</label>
                  <input
                    type="month"
                    id={`startDate${index}`}
                    name={`startDate${index}`}
                    value={exp.startDate}
                    onChange={(e) =>
                      handleExperienceChange(index, "startDate", e.target.value)
                    }
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="w-1/3 mr-2">
                  <label htmlFor={`endDate${index}`}>End Date</label>
                  <input
                    type="month"
                    id={`endDate${index}`}
                    name={`endDate${index}`}
                    value={exp.endDate}
                    onChange={(e) =>
                      handleExperienceChange(index, "endDate", e.target.value)
                    }
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor={`position${index}`}>Position</label>
                  <input
                    type="text"
                    id={`position${index}`}
                    name={`position${index}`}
                    value={exp.position}
                    onChange={(e) =>
                      handleExperienceChange(index, "position", e.target.value)
                    }
                    className="w-full border rounded p-2"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor={`technologies${index}`}>Technologies</label>
                <input
                  type="text"
                  id={`technologies${index}`}
                  name={`technologies${index}`}
                  value={exp.technologies}
                  onChange={(e) =>
                    handleExperienceChange(
                      index,
                      "technologies",
                      e.target.value
                    )
                  }
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-2">
                <label>Experience Description</label>
                <textarea
                  id={`description${index}`}
                  name={`description${index}`}
                  value={exp.description}
                  onChange={(e) =>
                    handleExperienceChange(index, "description", e.target.value)
                  }
                  rows="3"
                  className="w-full border rounded p-2"
                />
              </div>
              {formData.experience.length > 1 && (
                <DangerBtn
                  type="button"
                  onClick={() => deleteExperience(index)}
                  title="Delete Experience"
                />
              )}
            </div>
          ))}

          <SecondryBtn
            type="button"
            onClick={addExperience}
            title="Add Experience"
          />
        </div>

        {/* education  */}
        <div className="mb-4">
          <label>Education</label>
          {formData.education.map((edu, index) => (
            <div key={index} className="border rounded p-2 mb-2">
              <div className="mb-2">
                <label htmlFor={`university${index}`}>University Name</label>
                <input
                  type="text"
                  id={`university${index}`}
                  name={`university${index}`}
                  value={edu.university}
                  onChange={(e) =>
                    handleEducationChange(index, "university", e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="flex justify-between">
                <div className="w-1/3 mr-2">
                  <label htmlFor={`startDate${index}`}>Start Date</label>
                  <input
                    type="month"
                    id={`startDate${index}`}
                    name={`startDate${index}`}
                    value={edu.startDate}
                    onChange={(e) =>
                      handleEducationChange(index, "startDate", e.target.value)
                    }
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="w-1/3 mr-2">
                  <label htmlFor={`endDate${index}`}>End Date</label>
                  <input
                    type="month"
                    id={`endDate${index}`}
                    name={`endDate${index}`}
                    value={edu.endDate}
                    onChange={(e) =>
                      handleEducationChange(index, "endDate", e.target.value)
                    }
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="w-1/3">
                  <label htmlFor={`marks${index}`}>Marks</label>
                  <input
                    type="text"
                    id={`marks${index}`}
                    name={`marks${index}`}
                    value={edu.marks}
                    onChange={(e) =>
                      handleEducationChange(index, "marks", e.target.value)
                    }
                    className="w-full border rounded p-2"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor={`stream${index}`}>Stream</label>
                <input
                  type="text"
                  id={`stream${index}`}
                  name={`stream${index}`}
                  value={edu.stream}
                  onChange={(e) =>
                    handleEducationChange(index, "stream", e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-2">
                <label htmlFor={`description${index}`}>Description</label>
                <textarea
                  id={`description${index}`}
                  name={`description${index}`}
                  value={edu.description}
                  onChange={(e) =>
                    handleEducationChange(index, "description", e.target.value)
                  }
                  rows="2"
                  className="w-full border rounded p-2"
                />
              </div>

              {formData.education.length > 1 && (
                <DangerBtn
                  type="button"
                  onClick={() => deleteEducation(index)}
                  title="Delete Education"
                />
              )}
            </div>
          ))}

          <SecondryBtn
            type="button"
            onClick={addEducation}
            title="Add Education"
          />
        </div>

        {/* skills  */}
        <div className="mb-4">
          <label htmlFor="skills">Skills</label>
          {formData.skills.map((skill, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                className="w-full border rounded p-2 mr-2"
              />

              {formData.skills.length > 1 && (
                <DangerBtn
                  type="button"
                  onClick={() => deleteSkill(index)}
                  title="Delete"
                />
              )}
            </div>
          ))}

          <SecondryBtn type="button" onClick={addSkill} title="Add Skill" />
        </div>

        {/* languages  */}
        <div className="mb-4">
          <label>Languages</label>
          {formData.languages.map((language, index) => (
            <div key={index} className="border rounded p-2 mb-2">
              <div className="mb-2">
                <label htmlFor={`language${index}`}>Language</label>
                <input
                  type="text"
                  id={`language${index}`}
                  name={`language${index}`}
                  required
                  value={language.language}
                  onChange={(e) =>
                    handleLanguageChange(index, "language", e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-2">
                <label htmlFor={`proficiency${index}`}>Proficiency</label>
                <select
                  id={`proficiency${index}`}
                  name={`proficiency${index}`}
                  required
                  value={language.proficiency}
                  onChange={(e) =>
                    handleLanguageChange(index, "proficiency", e.target.value)
                  }
                  className="w-full border rounded p-2"
                >
                  <option value="">Select Proficiency</option>
                  <option value="Native">Native</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Medium">Medium</option>
                </select>
              </div>

              {formData.languages.length > 1 && (
                <DangerBtn
                  type="button"
                  onClick={() => deleteLanguage(index)}
                  title="Delete Language"
                />
              )}
            </div>
          ))}
          {formData.languages.length < 5 && (
            <SecondryBtn
              type="button"
              onClick={addLanguage}
              title="Add Language"
            />
          )}
        </div>

        {/* projects  */}
        <div className="mb-4">
          <label>Projects</label>
          {formData.projects.map((project, projIndex) => (
            <div key={projIndex} className="border rounded p-4 mb-4">
              <div className="mb-2">
                <label htmlFor={`title${projIndex}`}>Title</label>
                <input
                  type="text"
                  id={`title${projIndex}`}
                  name={`title${projIndex}`}
                  value={project.title}
                  onChange={(e) =>
                    handleProjectChange(projIndex, "title", e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="flex justify-between mb-2">
                <div className="w-1/3 mr-2">
                  <label htmlFor={`startDate${projIndex}`}>Start Date</label>
                  <input
                    type="month"
                    id={`startDate${projIndex}`}
                    name={`startDate${projIndex}`}
                    value={project.startDate}
                    onChange={(e) =>
                      handleProjectChange(
                        projIndex,
                        "startDate",
                        e.target.value
                      )
                    }
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="w-1/3 mr-2">
                  <label htmlFor={`endDate${projIndex}`}>End Date</label>
                  <input
                    type="month"
                    id={`endDate${projIndex}`}
                    name={`endDate${projIndex}`}
                    value={project.endDate}
                    onChange={(e) =>
                      handleProjectChange(projIndex, "endDate", e.target.value)
                    }
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor={`role${projIndex}`}>Role</label>
                  <input
                    type="text"
                    id={`role${projIndex}`}
                    name={`role${projIndex}`}
                    value={project.role}
                    onChange={(e) =>
                      handleProjectChange(projIndex, "role", e.target.value)
                    }
                    className="w-full border rounded p-2"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor={`companyName${projIndex}`}>Company Name</label>
                <input
                  type="text"
                  id={`companyName${projIndex}`}
                  name={`companyName${projIndex}`}
                  value={project.companyName}
                  onChange={(e) =>
                    handleProjectChange(
                      projIndex,
                      "companyName",
                      e.target.value
                    )
                  }
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-2">
                <label>Project Descriptions</label>
                {project.descriptions.map((description, descIndex) => (
                  <div key={descIndex} className="mb-2 flex gap-2">
                    <textarea
                      id={`description${projIndex}-${descIndex}`}
                      name={`description${projIndex}-${descIndex}`}
                      value={description}
                      onChange={(e) =>
                        handleProjectDescriptionChange(
                          projIndex,
                          descIndex,
                          e.target.value
                        )
                      }
                      rows="2"
                      className="w-full border rounded p-2"
                    />

                    {project.descriptions.length > 1 && (
                      <DangerBtn
                        type="button"
                        onClick={() =>
                          deleteProjectDescription(projIndex, descIndex)
                        }
                        title="Delete"
                      />
                    )}
                  </div>
                ))}

                <SecondryBtn
                  type="button"
                  onClick={() => addProjectDescription(projIndex)}
                  title="Add Description"
                />
              </div>
            </div>
          ))}

          <SecondryBtn type="button" onClick={addProject} title="Add Project" />
        </div>

        {/* submit button  */}
        <PrimaryBtn type="submit" title={"Create Resume"} />
      </form>
    </section>
  );
};

export default ResumeForm;
