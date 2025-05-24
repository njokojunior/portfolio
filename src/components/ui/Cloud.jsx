import Tag from "../Tag";
function Cloud() {
  return (
    <>
      <h3 className="headingPrimary">Cloud & DevOps</h3>
      <p className="subTitle">
        Cloud platforms, CI/CD, and infrastructure tools
      </p>

      <div className="grid grid-2">
        {/* CLOUD PLATEFORMS */}
        <div>
          <h4>Cloud Platforms</h4>

          <div className="tags">
            <Tag color="blue" bgColor="white">
              AWS
            </Tag>
            <Tag color="blue" bgColor="white">
              Azure
            </Tag>
          </div>
        </div>

        {/* INFRASTRUCTURE PLATEFORMS */}
        <div>
          <h4>Infrastructure as Code</h4>
          <div className="tags">
            <Tag color="blue" bgColor="white">
              Terraform
            </Tag>
            <Tag color="blue" bgColor="white">
              Ansible
            </Tag>
          </div>
        </div>

        {/* CI/CD */}
        <div>
          <h4>CI/CD</h4>

          <div className="tags">
            <Tag color="blue" bgColor="white">
              jenkins
            </Tag>
            <Tag color="blue" bgColor="white">
              Github Actions
            </Tag>
            <Tag color="blue" bgColor="white">
              GitLab CI
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

export default Cloud;
