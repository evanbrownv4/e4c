import "../styling/Layout.css"
import "../styling/Components.css"
import { projects } from "../consts/SocietyProjects";
import PageContainer from "../styling/PageContainer";

type Project = {
    name: string;
    catchphrase: string;
    description: string;
    photo: string;
};

function ProjectCards({ projects } : {projects: Array<Project> }) {
    return (
        <div className="grid grid-auto-medium">
            {projects.map((project) => (
                <div key={project.name} className="card">
                    <img src={project.photo} alt={project.name} className="card-img" />
                    <h2 className="title">{project.name}</h2>
                    <p className="subtitle">{project.catchphrase}</p>
                    <p className="text">{project.description}</p>
                </div>
            ))}
      </div>
    )
}

export default function Projects() {
    return (
        <PageContainer>
            <h2 className="text-5xl font-bold text-center mb-4">See our supported projects</h2>
            <p className="text-xl text-left">
                We are proud to run eight diverse, student-led projects, each one tackling a different aspect of sustainability and global development. From aquaponics farming that explores innovative ways to grow food sustainably, to wind turbine construction that champions renewable energy, to water sanitation initiatives that address one of the world’s most urgent needs, our projects cover a wide spectrum of challenges.
                <br/>Every project is designed and led by students, giving members the chance to take ownership, apply their skills, and learn by doing. Whether your passion lies in mechanical design, environmental science, policy, or community engagement, there’s space for you to get involved.
                <br/>No matter your background or level of experience, E4C has something for everyone - an opportunity not only to contribute to meaningful work, but also to gain practical skills, collaborate across disciplines, and be part of solutions with real-world impact.
            </p>
            <ProjectCards projects={projects}/>
        </PageContainer>
    );
}