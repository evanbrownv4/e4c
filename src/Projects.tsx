import "./Projects.css"
import { projects } from "./society_projects";

function ProjectCards(props: {projects: Array<{
    name: string,
    catchphrase: string,
    description: string,
    photo: string
}> }) {
    return (
        <div className="projects_grid">
            {projects.map((project) => (
              <div key={project.name} className="project_card">
                <img
                  src={project.photo}
                  alt={project.name}
                  className="project_photo"
                />
                <h2 className="project_name">{project.name}</h2>
                <p className="project_catchphrase">{project.catchphrase}</p>
                <p className="project_description">{project.description}</p>
              </div>
            ))}
      </div>
    )
}

export default function Projects() {
  return (
    <div className="projects_container">
      <h2 className="projects_title">See our supported projects</h2>
      <p className="projects_intro">
        We are proud to run eight diverse, student-led projects, each one tackling a different aspect of sustainability and global development. From aquaponics farming that explores innovative ways to grow food sustainably, to wind turbine construction that champions renewable energy, to water sanitation initiatives that address one of the world’s most urgent needs, our projects cover a wide spectrum of challenges.
        <br/><br/>Every project is designed and led by students, giving members the chance to take ownership, apply their skills, and learn by doing. Whether your passion lies in mechanical design, environmental science, policy, or community engagement, there’s space for you to get involved.
        <br/><br/>No matter your background or level of experience, E4C has something for everyone - an opportunity not only to contribute to meaningful work, but also to gain practical skills, collaborate across disciplines, and be part of solutions with real-world impact.
      </p>
        <ProjectCards projects={projects} />
    </div>
  );
}