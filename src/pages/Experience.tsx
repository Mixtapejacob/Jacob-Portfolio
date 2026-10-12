
import PageHeader from "../components/PageHeader";
import { motion } from "motion/react";
import { BriefcaseBusiness, Code2 } from "lucide-react";

const experiences = [
  {
    role: "Software Developer",
    company: "Candidate Experience",
    period: "2026",
    icon: Code2,
    description:
      "Contributed to a production web application using React, Next.js, TypeScript, Supabase, and REST APIs.",
    achievements: [
      "Developed employer dashboard interfaces and features.",
      "Built and integrated authenticated API endpoints.",
      "Implemented employer-facing reviews, notifications, and analytics interfaces.",
      "Worked with Supabase authentication and PostgreSQL data.",
      "Collaborated through Git branches, pull requests, and code reviews.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Supabase", "REST APIs"],
  },
  {
    role: "Sales & Business Development",
    company: "Professional Sales Experience",
    period: "Previous Experience",
    icon: BriefcaseBusiness,
    description:
      "Developed communication, discovery, customer engagement, and problem-solving skills in sales environments.",
    achievements: [
      "Identified customer needs through discovery conversations.",
      "Communicated solutions clearly to different audiences.",
      "Built resilience and adaptability in performance-driven roles.",
      "Developed a customer-first approach that now informs my software work.",
    ],
    stack: ["Communication", "Problem Solving", "Customer Discovery"],
  },
];

export default function Experience() {
  return (
    <main className="container inner-page">
      <PageHeader
        eyebrow="PROFESSIONAL BACKGROUND"
        title="My Experience."
        description="Hands-on software development experience supported by a strong background in communication and customer problem-solving."
      />

      <div className="experience-list">
        {experiences.map((job, index) => {
          const Icon = job.icon;

          return (
            <motion.article
              key={job.role}
              className="glass-card experience-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="experience-top">
                <div className="experience-title">
                  <div className="experience-icon">
                    <Icon size={25} />
                  </div>
                  <div>
                    <h2>{job.role}</h2>
                    <p>{job.company}</p>
                  </div>
                </div>
                <span className="date-pill">{job.period}</span>
              </div>

              <p>{job.description}</p>

              <ul className="achievement-list">
                {job.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>

              <div className="tags">
                {job.stack.map((skill) => (
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
