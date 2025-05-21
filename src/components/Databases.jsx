import Tag from './Tag';

function Databases() {
    return (
      <>
        <h3 className="headingPrimary">Database Technologies</h3>
        <p className="subTitle">Database systems and data storage solutions</p>

        <div className="grid">
          {/* CLOUD PLATEFORMS */}
          <div>
            <h4>Relational</h4>
            <div className="tags">
              <Tag color="blue" bgColor="white">
                PostgreSQL
              </Tag>
              <Tag color="blue" bgColor="white">
                MySQL
              </Tag>
              <Tag color="blue" bgColor="white">
                SQL Server
              </Tag>
            </div>
          </div>

          {/* INFRASTRUCTURE PLATEFORMS */}
          <div>
            <h4>NoSQL</h4>
            <div className="tags">
              <Tag color="blue" bgColor="white">
                MongoDB
              </Tag>
              <Tag color="blue" bgColor="white">
                Firebase
              </Tag>
            </div>
          </div>

          {/* CI/CD */}
          <div>
            <h4>Testing Tools</h4>

            <div className="tags">
              <Tag color="blue" bgColor="white">
                jest
              </Tag>
              <Tag color="blue" bgColor="white">
                React Testing Library
              </Tag>
              <Tag color="blue" bgColor="white">
                Cypress
              </Tag>
            </div>
          </div>
        </div>
      </>
    );
}

export default Databases;