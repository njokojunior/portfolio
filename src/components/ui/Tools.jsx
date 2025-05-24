import Tag from "../Tag";

function Tools() {
  return (
    <>
      <h3 className="headingPrimary">Development Tools</h3>
      <p className="subTitle">Tool and utilities I use in my workflow</p>

      <div className="grid grid-2">
        {/* CLOUD PLATEFORMS */}
        <div>
          <h4>Version Control</h4>

          <div className="tags">
            <Tag color="blue" bgColor="white">
              Git
            </Tag>
            <Tag color="blue" bgColor="white">
              GitHub
            </Tag>
            <Tag color="blue" bgColor="white">
              GitLab
            </Tag>
            <Tag color="blue" bgColor="white">
              Bitbucket
            </Tag>
          </div>
        </div>

        {/* INFRASTRUCTURE PLATEFORMS */}
        <div>
          <h4>IDEs & Editors</h4>
          <div className="tags">
            <Tag color="blue" bgColor="white">
              VS Code
            </Tag>
            <Tag color="blue" bgColor="white">
              IntelliJ IDEA
            </Tag>
            <Tag color="blue" bgColor="white">
              Codeblocks
            </Tag>
            <Tag color="blue" bgColor="white">
              Android Studio
            </Tag>
          </div>
        </div>

        {/* CI/CD */}
        <div>
          <h4>Project Management</h4>

          <div className="tags">
            <Tag color="blue" bgColor="white">
              Jira
            </Tag>
            <Tag color="blue" bgColor="white">
              Confluence
            </Tag>
            <Tag color="blue" bgColor="white">
              Trello
            </Tag>
          </div>
        </div>

        {/* CONTAINERIZATION */}
        <div>
          <h4>Containerization</h4>

          <div className="tags">
            <Tag color="blue" bgColor="white">
              Docker
            </Tag>
            <Tag color="blue" bgColor="white">
              Kubernetes
            </Tag>
          </div>
        </div>

        {/* Monitoring */}
        <div>
          <h4>Monitoring</h4>

          <div className="tags">
            <Tag color="blue" bgColor="white">
              Prometheus
            </Tag>
            <Tag color="blue" bgColor="white">
              Grafana
            </Tag>

            <Tag color="blue" bgColor="white">
              New Relic
            </Tag>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tools;
