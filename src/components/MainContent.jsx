import { SCPS } from "../data/scp";

function MainContent(props) {
  // Get the title from props
  const { title } = props;

  // Find the SCP that matches the title
  const scp = SCPS.find((s) => s.Title === title);

  return (
    <div>
      {/* Display the SCP title */}
      <h1 className="text-light pe-5 rounded mb-5 ">
        <strong className="text-danger">Item #:</strong> {scp .Title}
      </h1>
      {/* Display the SCP class */}
      <h2 className=" mb-5 ">
        <strong className="text-danger">Class: </strong> {scp.Class}
      </h2>
      {/* Display the SCP description */}
      <p>
        <strong className="text-danger fs-3">Description: </strong> {scp.Description}
      </p>
      {/* Display the SCP containment procedures */}
      <p>
        <strong className="text-danger fs-3">Containment: </strong> {scp.Containment}
      </p> 
      {/* Display the SCP image */}
      <div className="text-center mb-4">
        <img className="images rounded" src={"/assets/" + scp.Image} alt="SCP image" />
      </div>
    </div>
  );
}

export default MainContent;
