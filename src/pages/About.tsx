
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Target,
} from "lucide-react";
import PageHeader from "../components/PageHeader";

const journey = [
  {
    icon: GraduationCap,
    title: "Building My Foundation",
    subtitle: "Computer Science & Technology",
    description:
      "Studied Computer Science and developed an interest in programming, technology, and solving problems through software.",
  },
  {
    icon: BriefcaseBusiness,
    title: "My Background in Sales",
    subtitle: "Communication & Customer Experience",
    description:
      "Built valuable skills in communication, understanding customer needs, problem-solving, and working toward measurable goals.",
  },
  {
    icon: Code2,
    title: "Transitioning Into Development",
    subtitle: "React, TypeScript & Backend Engineering",
    description:
      "Began building real-world applications, strengthening my frontend and backend skills, and contributing to collaborative software projects.",
  },
  {
    icon: Target,
    title: "My Next Chapter",
    subtitle: "Software Engineering",
    description:
      "Focused on joining an engineering team where I can contribute meaningful work, continue learning, and help build products people value.",
  },
];

export default function About() {
  return (
    <main className="container inner-page">
      <PageHeader
        eyebrow="GET TO KNOW ME"
        title="My Story."
        description="From understanding customers to engineering solutions."
      />

      <section className="about-intro">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">BEYOND THE CODE</span>
          <h2>
            A different background.
            <br />
            <span>A valuable perspective.</span>
          </h2>

          <p>
            I'm Jacob Atakora, a software developer with
            a background in sales and a passion for
            building meaningful digital experiences.
          </p>

          <p>
            My experience in sales taught me how to listen,
            communicate, understand problems, and deliver
            solutions that create value.
          </p>

          <p>
            Today, I bring that same customer-centered
            mindset to software engineering. I enjoy
            developing responsive interfaces, building
            APIs, working with databases, and turning
            complex ideas into practical applications.
          </p>

          <Link to="/projects" className="btn btn-primary">
            Explore My Work <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        <div className="about-visual">
          <Code2 size={95} strokeWidth={1} />
          <h3>People. Problems. Solutions.</h3>
          <p>Technology with purpose.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">MY JOURNEY</span>
            <h2>
              The path to <span>engineering.</span>
            </h2>
          </div>
        </div>

        <div className="timeline">
          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="timeline-icon">
                  <Icon size={24} />
                </div>

                <div>
                  <span className="eyebrow">{item.subtitle}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
