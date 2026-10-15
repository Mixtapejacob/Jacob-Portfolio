
import { useState, type FormEvent } from "react";
import PageHeader from "../components/PageHeader";
import {
  Mail,
  GitBranch,
  Users,
  Send,
} from "lucide-react";

const CONTACT_EMAIL = "Atakoraj@ymail.com";

const githubUrl =
  "https://github.com/Mixtapejacob/MixtapeJacob";

const linkedinUrl =
  "https://www.linkedin.com/in/jacob-atakora-6b93851a2/";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="container inner-page">
      <PageHeader
        eyebrow="LET'S CONNECT"
        title="Get In Touch."
        description="Have an opportunity, project, or question? I'd love to hear from you."
      />

      <div className="contact-layout">
        <section className="contact-info">
          <span className="eyebrow">
            LET'S TALK
          </span>

          <h2>
            Let's build something{" "}
            <span>meaningful.</span>
          </h2>

          <p>
            I'm interested in software development
            opportunities, collaborative projects,
            and connecting with other developers.
          </p>

          <div className="contact-methods">
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Mail size={21} />
              <span>Email Me</span>
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch size={21} />
              <span>GitHub</span>
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Users size={21} />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>

        <form
          className="contact-form glass-card"
          onSubmit={handleSubmit}
        >
          <h2>Send a Message</h2>

          <label htmlFor="contact-name">
            Your Name
          </label>

          <input
            id="contact-name"
            type="text"
            placeholder="John Smith"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            required
          />

          <label htmlFor="contact-email">
            Email Address
          </label>

          <input
            id="contact-email"
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
          />

          <label htmlFor="contact-message">
            Your Message
          </label>

          <textarea
            id="contact-message"
            rows={6}
            placeholder="Tell me about your opportunity..."
            value={message}
            onChange={(event) =>
              setMessage(event.target.value)
            }
            required
          />

          <button
            type="submit"
            className="btn btn-primary"
          >
            Compose Email
            <Send size={17} />
          </button>
        </form>
      </div>
    </main>
  );
}

