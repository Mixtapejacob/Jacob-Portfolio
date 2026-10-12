
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Database,
  Layers3,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="hero container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="status-pill">
            <span className="status-dot" />
            Software Developer
          </div>

          <p className="eyebrow">HEY, I'M JACOB ATAKORA</p>

          <h1>
            Building modern,
            <br />
            scalable <span>digital</span>
            <br />
            <span>experiences.</span>
          </h1>

          <p className="hero-description">
            I'm a software developer specializing in React,
            Next.js, TypeScript, and backend development.
            I combine technical problem-solving with a
            background in sales to build applications
            centered around real people and real needs.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              Explore My Work <ArrowUpRight size={18} />
            </Link>

            <Link to="/about" className="btn btn-outline">
              My Story <ArrowRight size={18} />
            </Link>
          </div>

          <div className="hero-tech">
            <span>TECHNOLOGIES I WORK WITH</span>
            <div className="tech-list">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Python</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="visual-glow" />

          <motion.div
            className="orbit orbit-one"
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="orbit orbit-two"
            animate={{ rotate: -360 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="visual-core">
            <Code2 size={76} strokeWidth={1.4} />
          </div>

          <div className="floating-icon icon-one">
            <Layers3 size={24} />
          </div>

          <div className="floating-icon icon-two">
            <Database size={24} />
          </div>

          <div className="floating-icon icon-three">
            <Sparkles size={24} />
          </div>
        </motion.div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT I DO</span>
            <h2>
              Turning ideas into <span>working solutions.</span>
            </h2>
          </div>
          <Link to="/skills" className="text-link">
            Explore Skills <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="card-grid three">
          <div className="glass-card">
            <Code2 className="card-icon" />
            <h3>Frontend Development</h3>
            <p>
              Responsive, accessible interfaces built
              with React, Next.js, and TypeScript.
            </p>
          </div>

          <div className="glass-card">
            <Database className="card-icon" />
            <h3>Backend & APIs</h3>
            <p>
              Server-side functionality, authentication,
              REST APIs, and database integrations.
            </p>
          </div>

          <div className="glass-card">
            <Layers3 className="card-icon" />
            <h3>Full-Stack Applications</h3>
            <p>
              Connecting frontend experiences with
              reliable backend services and data.
            </p>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SELECTED WORK</span>
            <h2>Featured <span>projects.</span></h2>
          </div>
          <Link to="/projects" className="text-link">
            All Projects <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="card-grid two">
          <div className="project-card">
            <div className="project-art ministry-art">
              <Code2 size={60} />
            </div>
            <div className="project-content">
              <span className="eyebrow">FULL-STACK WEB</span>
              <h3>Ministry Website</h3>
              <p>
                A modern ministry platform built with
                React, Next.js, and a Python backend.
              </p>
              <div className="tags">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>FastAPI</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-art fitness-art">
              <Layers3 size={60} />
            </div>
            <div className="project-content">
              <span className="eyebrow">WEB APPLICATION</span>
              <h3>Playmaker Xpress</h3>
              <p>
                A responsive training and fitness website
                showcasing services and programs.
              </p>
              <div className="tags">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="cta-panel">
          <span className="eyebrow">LET'S BUILD SOMETHING</span>
          <h2>Have an opportunity in mind?</h2>
          <p>
            I'm interested in opportunities where I can
            contribute, grow, and solve meaningful problems.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get In Touch <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}


