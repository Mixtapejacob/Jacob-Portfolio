
import { motion } from "motion/react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <motion.div
      className="page-header"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </motion.div>
  );
}
