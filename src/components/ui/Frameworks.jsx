import Tag from "../Tag";

function Frameworks() {
  return (
    <>
      <h3 className="headingPrimary">Frameworks & Libraries</h3>
      <p className="subTitle">
        Development frameworks and libraries I work with
      </p>

      <div className="grid">
        {/* CLOUD PLATEFORMS */}
        <div>
          <h4>Frontend</h4>

          <div className="tags">
            <Tag color="blue" bgColor="white">
              React.js
            </Tag>
            <Tag color="blue" bgColor="white">
              Next.js
            </Tag>

            <Tag color="blue" bgColor="white">
              Sass
            </Tag>
            <Tag color="blue" bgColor="white">
              Tailwind CSS
            </Tag>
          </div>
        </div>

        {/* INFRASTRUCTURE PLATEFORMS */}
        <div>
          <h4>Backend</h4>
          <div className="tags">
            <Tag color="blue" bgColor="white">
              Nest.js
            </Tag>
            <Tag color="blue" bgColor="white">
              Node.js
            </Tag>
            <Tag color="blue" bgColor="white">
              Express.js
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

export default Frameworks;
