import { useCallback, useEffect, useMemo, useState } from 'react';
import PrimaryBtn from './ui/PrimaryBtn';

const ResumeForm = () => {




// retrive the form data from localStorage
  const data  = JSON.parse(localStorage.getItem('formData'))

  // defin the initial data for the form
const initialFormData = {
    fullName: '',
    techrole:'',
     email: '',
    phone: '',
    address: '',
    location: '',

 summaries: [
      {
        summaryText: '',
      },
      {
        summaryText: '',
      },
    ],

    education: [
      {
        university: '',
        startDate: '',
        endDate: '',
        marks: '',
        stream: '',
        description: '',
      },
    ],
    experience: [
      {
        companyName: '',
        startDate: '',
        endDate: '',
        position: '',
        technologies: '',
        description: '',
      },
    ],
    skills: ['Skill 1'], // Default skill
    profilePicture: null,
     languages: [
      {
        language: '',
        proficiency: '',
      },
    ],
    projects: [
      {
        title: '',
        startDate: '',
        endDate: '',
        role: '',
        companyName: '',
        descriptions: [''],
      },
    ],
  }

// state for collection the form data
  const [formData, setFormData] = useState(data ||  initialFormData);


  // whenever the form data changes add the form data into the localStorage
useEffect(() => {


localStorage.setItem("formData", JSON.stringify(formData))

},[formData])









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
          summaryText: '',
        },
      ],
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
          language: '',
          proficiency: '',
        },
      ],
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
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
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
          title: '',
          startDate: '',
          endDate: '',
          role: '',
          companyName: '',
          descriptions: [''],
        },
      ],
    }));
  };

  const addProjectDescription = (projIndex) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[projIndex].descriptions.push('');
    setFormData((prevData) => ({
      ...prevData,
      projects: updatedProjects,
    }));
  };


  const addSkill = () => {
    setFormData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, ''],
    }));
  };

  const addEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        {
          university: '',
          startDate: '',
          endDate: '',
          marks: '',
          stream: '',
          description: '',
        },
      ],
    }));
  };



  const addExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        {
          companyName: '',
          startDate: '',
          endDate: '',
          position: '',
          technologies: '',
          description: '',
        },
      ],
    }));
  };

// submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.clear() // clear the localStorage after submit the form
    setFormData(initialFormData)
    console.log(formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 border rounded shadow">

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
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

{/* summary  */}
<div className="mb-4">
          <label>Summaries</label>
          <div className='border rounded mb-2'>
          {formData.summaries.map((summary, index) => (
            <div key={index} className=" p-2 ">
              <textarea
                id={`summary${index}`}
                name={`summary${index}`}
                value={summary.summaryText}
                onChange={(e) => handleSummaryChange(index, e.target.value)}
                rows="2"
                className="w-full border rounded p-2"
              />
            </div>
          ))}
          </div>
          {formData.summaries.length < 5 && (
            <button
              type="button"
              onClick={addSummary}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              Add Summary
            </button>
          )}
        </div>


        {/* profile picture  */}
        <div className="mb-4">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border rounded p-2"
          />
        </div>
        {/* experience */}

        <div className="mb-4">
          <label>Experience</label>
          {formData.experience.map((exp, index) => (
            <div key={index} className="border rounded p-2 mb-2">
              <div className="mb-2">
                <label htmlFor={`companyName${index}`}>Company Name</label>
                <input
                  type="text"
                  id={`companyName${index}`}
                  name={`companyName${index}`}
                  value={exp.companyName}
                  onChange={(e) =>
                    handleExperienceChange(index, 'companyName', e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="flex justify-between">
                <div className="w-1/3 mr-2">
                  <label htmlFor={`startDate${index}`}>Start Date</label>
                  <input
                    type="text"
                    id={`startDate${index}`}
                    name={`startDate${index}`}
                    value={exp.startDate}
                    onChange={(e) =>
                      handleExperienceChange(index, 'startDate', e.target.value)
                    }
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="w-1/3 mr-2">
                  <label htmlFor={`endDate${index}`}>End Date</label>
                  <input
                    type="text"
                    id={`endDate${index}`}
                    name={`endDate${index}`}
                    value={exp.endDate}
                    onChange={(e) =>
                      handleExperienceChange(index, 'endDate', e.target.value)
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
                    handleExperienceChange(index, 'position', e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
              </div>
              </div>
              <div className="mb-2">
                <label htmlFor={`technologies${index}`}>Technologies Used</label>
                <input
                  type="text"
                  id={`technologies${index}`}
                  name={`technologies${index}`}
                  value={exp.technologies}
                  onChange={(e) =>
                    handleExperienceChange(index, 'technologies', e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-2">
                <label htmlFor={`description${index}`}>Description</label>
                <textarea
                  id={`description${index}`}
                  name={`description${index}`}
                  value={exp.description}
                  onChange={(e) =>
                    handleExperienceChange(index, 'description', e.target.value)
                  }
                  rows="2"
                  className="w-full border rounded p-2"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addExperience}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Add Experience
          </button>
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
                    handleEducationChange(index, 'university', e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="flex justify-between">
                <div className="w-1/3 mr-2">
                  <label htmlFor={`startDate${index}`}>Start Date</label>
                  <input
                    type="text"
                    id={`startDate${index}`}
                    name={`startDate${index}`}
                    value={edu.startDate}
                    onChange={(e) =>
                      handleEducationChange(index, 'startDate', e.target.value)
                    }
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="w-1/3 mr-2">
                  <label htmlFor={`endDate${index}`}>End Date</label>
                  <input
                    type="text"
                    id={`endDate${index}`}
                    name={`endDate${index}`}
                    value={edu.endDate}
                    onChange={(e) =>
                      handleEducationChange(index, 'endDate', e.target.value)
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
                      handleEducationChange(index, 'marks', e.target.value)
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
                    handleEducationChange(index, 'stream', e.target.value)
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
                    handleEducationChange(index, 'description', e.target.value)
                  }
                  rows="2"
                  className="w-full border rounded p-2"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addEducation}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Add Education
          </button>
        </div>


        {/* skills  */}
        <div className="mb-4">
          <label htmlFor="skills">Skills</label>
          {formData.skills.map((skill, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                name="skills"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                className="w-full border rounded p-2"
              />
              {index === formData.skills.length - 1 && (
                <button
                  type="button"
                  onClick={addSkill}
                  className="ml-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  +
                </button>
              )}
            </div>
          ))}
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
                  value={language.language}
                  onChange={(e) =>
                    handleLanguageChange(index, 'language', e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-2">
                <label htmlFor={`proficiency${index}`}>Proficiency</label>
                <select
                  id={`proficiency${index}`}
                  name={`proficiency${index}`}
                  value={language.proficiency}
                  onChange={(e) =>
                    handleLanguageChange(index, 'proficiency', e.target.value)
                  }
                  className="w-full border rounded p-2"
                >
                  <option value="">Select Proficiency</option>
                  <option value="Native">Native</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Medium">Medium</option>
                </select>
              </div>
            </div>
          ))}
          {formData.languages.length < 5 && (
            <button
              type="button"
              onClick={addLanguage}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              Add Language
            </button>
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
                    handleProjectChange(projIndex, 'title', e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="flex justify-between mb-2">
                <div className="w-1/3 mr-2">
                  <label htmlFor={`startDate${projIndex}`}>Start Date</label>
                  <input
                    type="text"
                    id={`startDate${projIndex}`}
                    name={`startDate${projIndex}`}
                    value={project.startDate}
                    onChange={(e) =>
                      handleProjectChange(projIndex, 'startDate', e.target.value)
                    }
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="w-1/3 mr-2">
                  <label htmlFor={`endDate${projIndex}`}>End Date</label>
                  <input
                    type="text"
                    id={`endDate${projIndex}`}
                    name={`endDate${projIndex}`}
                    value={project.endDate}
                    onChange={(e) =>
                      handleProjectChange(projIndex, 'endDate', e.target.value)
                    }
                    className="w-full border rounded p-2"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor={`role${projIndex}`}>Role</label>
                <input
                  type="text"
                  id={`role${projIndex}`}
                  name={`role${projIndex}`}
                  value={project.role}
                  onChange={(e) =>
                    handleProjectChange(projIndex, 'role', e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-2">
                <label htmlFor={`companyName${projIndex}`}>Company Name</label>
                <input
                  type="text"
                  id={`companyName${projIndex}`}
                  name={`companyName${projIndex}`}
                  value={project.companyName}
                  onChange={(e) =>
                    handleProjectChange(projIndex, 'companyName', e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-2">
                <label>Project Descriptions</label>
                {project.descriptions.map((description, descIndex) => (
                  <div key={descIndex} className="mb-2">
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
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addProjectDescription(projIndex)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Add Description
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addProject}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Add Project
          </button>
        </div>


        {/* submit button  */}
       <PrimaryBtn type='submit' title={'Create Resume'}/>
      </form>
    </div>
  );
};

export default ResumeForm;
