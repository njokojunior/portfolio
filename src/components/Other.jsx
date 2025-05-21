import Tag from "./Tag";

function Other() {
    return (
      <>
        <h3 className="headingPrimary">Other Skills</h3>
        <p className="subTitle">Additional technical and soft skills</p>

        <div className="grid grid-2">
          {/* CLOUD PLATEFORMS */}
          <div>
            <h4>Security</h4>

            <div className="tags">
              <Tag color="blue" bgColor="white">
                IAM 
              </Tag>
              <Tag color="blue" bgColor="white">
                Penetration Testing
              </Tag>
            </div>
          </div>

          {/* INFRASTRUCTURE PLATEFORMS */}
          <div>
            <h4>MethodoLogies</h4>
            <div className="tags">
              <Tag color="blue" bgColor="white">
                Agile
              </Tag>
              <Tag color="blue" bgColor="white">
                DevOps
              </Tag>
              <Tag color="blue" bgColor="white">
                Scrum
              </Tag>
              <Tag color="blue" bgColor="white">
                Kanban
              </Tag>
            </div>
          </div>

          {/* CI/CD */}
          <div>
            <h4>Soft Skills</h4>

            <div className="tags">
              <Tag color="blue" bgColor="white">
                Team Leadership
              </Tag>
              <Tag color="blue" bgColor="white">
                Problem Solving
              </Tag>
              <Tag color="blue" bgColor="white">
                Communication
              </Tag>
            </div>
          </div>
        </div>
      </>
    );
}

export default Other;