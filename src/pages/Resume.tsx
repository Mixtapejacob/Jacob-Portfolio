
import PageHeader from "../components/PageHeader";
import {
  Download,
  ExternalLink,
  FileText,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
} from "lucide-react";


const resumeUrl = "/Jacob_Atakora_React_Nextjs_Resume_With_Project_Links.pdf";


export default function Resume() {
  return (
    <main className="container inner-page">
      <PageHeader
        eyebrow="MY RESUME"
        title="Experience & Qualifications."
        description="Explore my professional experience, technical skills, projects, and education."
      />

      <section className="resume-intro glass-card">
        <div className="resume-intro-heading">
          <FileText size={34} />
          <div>
            <h2>Jacob Atakora</h2>
            <p>Full-Stack Software Engineer</p>
          </div>
        </div>

        <p>
          I build full-stack web applications using
          React, Next.js, TypeScript, Node.js,
          Python, and PostgreSQL, with experience
          delivering production features and
          collaborating on development teams.
        </p>

        <div className="resume-actions">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <ExternalLink size={18} />
            View Resume
          </a>

          <a
            href={resumeUrl}
            download="Jacob_Atakora_Resume.pdf"
            className="btn btn-outline"
          >
            <Download size={18} />
            Download PDF
          </a>
        </div>
      </section>

      <div className="resume-highlights">
        <article className="glass-card resume-highlight">
          <BriefcaseBusiness size={25} />
          <h3>Professional Experience</h3>
          <p>
            Full-Stack Web Developer at
            Candidate Experience
          </p>
          <span>2025 – Present</span>
        </article>

        <article className="glass-card resume-highlight">
          <Code2 size={25} />
          <h3>Technical Skills</h3>
          <p>
            React, Next.js, TypeScript,
            Node.js, Python, FastAPI,
            PostgreSQL, and Supabase
          </p>
        </article>

        <article className="glass-card resume-highlight">
          <GraduationCap size={25} />
          <h3>Education</h3>
          <p>
            Associate of Science,
            Mountain View College
          </p>
          <span>2016 – 2018</span>
        </article>
      </div>

      <section className="resume-preview">
        <div className="resume-preview-heading">
          <h2>Resume Preview</h2>
          <span>2-page PDF</span>
        </div>

        <iframe
          src={resumeUrl}
          title="Jacob Atakora Resume"
          className="resume-pdf-frame"
        >
          Your browser does not support
          embedded PDFs.
        </iframe>

        <p className="resume-preview-note">
          If the preview doesn't appear,
          use the View Resume button above.
        </p>
      </section>
    </main>
  );
}

