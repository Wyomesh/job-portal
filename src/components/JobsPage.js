import "../componentStyles/JobsPage.css";
const JobsPage = () => {
  return (
    <div className="jobsPageContainer">
      <div className="jobFilter">
        <form className="role">
          <label for="Role">Role :</label>
          <select>
            <option>Select</option>
            <option>Full Stack Web Developer</option>
            <option>Front end Web Developer</option>
            <option>Back end Web Developer</option>
            <option>Software Developer</option>
          </select>
        </form>
        <form className="type">
          <label for="Type">Type :</label>
          <select>
            <option>Select</option>
            <option>Internship</option>
            <option>Part Time</option>
            <option>Full Time</option>
          </select>
        </form>
        <form className="location">
          <label for="Role">Location :</label>
          <select>
            <option>Select</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>on-site</option>
          </select>
        </form>
        <button className="applyBtn">Apply</button>
      </div>

      
    </div>
  );
};
export default JobsPage;
