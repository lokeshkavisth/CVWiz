const resumeApi = async (method, endpoint, data) => {
  const URL = `http://localhost:8000/api/resume/${endpoint}`;

  const options = {
    method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(URL, options);
  const resumes = await response.json();
  // console.log("resume", resumes);
  return resumes;
};

export default resumeApi;
