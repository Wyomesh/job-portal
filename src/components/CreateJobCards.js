const CreateJobCards = ({ Role, Type, Location }) => {
  return (
    <div className="jobCard">
      <div className="role">{Role}</div>
      <div>
        <div className="type">{Type}</div>
        <div className="location">{Location}</div>
      </div>
    </div>
  );
};
