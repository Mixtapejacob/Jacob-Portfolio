
import { motion } from "motion/react";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Layers3,
} from "lucide-react";
import PageHeader from "../components/PageHeader";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Building modern and responsive interfaces.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "CSS Modules",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Developing APIs and server-side functionality.",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Working with application data and persistence.",
    skills: [
      "PostgreSQL",
      "SQL",
      "Supabase",
      "Neon",
      "SQLAlchemy",
    ],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    description: "Tools used in development and deployment.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "AWS Amplify",
      "Postman",
    ],
  },
  {
    title: "Engineering Practices",
    icon: Layers3,
    description: "Building maintainable applications.",
    skills: [
      "Component Architecture",
      "Responsive Design",
      "API Integration",
      "Code Reviews",
      "Git Branching",
      "Debugging",
    ],
  },
];

export default function Skills() {
  return (
    <main className="container inner-page">
      <PageHeader
        eyebrow="MY TOOLKIT"
        title="Technical Skills."
        description="The technologies, tools, and practices I use to turn ideas into functional applications."
      />

      <div className="card-grid two">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.article
              key={group.title}
              className="glass-card skill-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Icon className="card-icon" size={30} />
              <h2>{group.title}</h2>
              <p>{group.description}</p>

              <div className="tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </main>
  );
}
