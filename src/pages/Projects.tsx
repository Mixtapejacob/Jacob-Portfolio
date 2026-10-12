
import PageHeader from "../components/PageHeader";
import {
  ExternalLink,
  Code2,
  ArrowUpRight,
} from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Ministry Website",
    category: "FULL-STACK WEB DEVELOPMENT",
    description:
      "A modern ministry website designed to connect with visitors, share meaningful content, and create an engaging digital experience. Built with a responsive interface and a scalable application architecture.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
    ],
    liveUrl:
      "https://ministry-website-eta.vercel.app/",
    githubUrl:
      "https://github.com/Mixtapejacob/ministry-website",
    featured: true,
  },
  {
    id: 2,
    title: "Playmaker Xpress",
    category: "WEB APPLICATION DEVELOPMENT",
    description:
      "A responsive fitness and athletic training website showcasing personal training, speed development, movement training, and other fitness services. Designed to provide a clean and accessible experience across devices.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Vercel",
    ],
    liveUrl:
      "https://playmaker-xpress.vercel.app/",
    githubUrl:
      "https://github.com/Mixtapejacob/playmaker-xpress",
    featured: true,
  },
];

export default function Projects() {
  return (
    <main className="container inner-page">
      <PageHeader
        eyebrow="MY WORK"
        title="Featured Projects."
        description="A selection of applications and websites I've developed, focusing on functionality, performance, and user experience."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card glass-card"
          >
            <div className="project-top">
              <span className="eyebrow">
                {project.category}
              </span>

              <ArrowUpRight
                size={22}
                className="project-arrow"
              />
            </div>

            <div className="project-visual">
              <Code2 size={52} strokeWidth={1.3} />
              <span>
                {project.title}
              </span>
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}
              </div>

              <div className="project-actions">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                  <ExternalLink size={17} />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Code
                  <Code2 size={17} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
