import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/project/Annotation 2025-09-07 200544.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Image Search Engine</h3>
          <p>
           A simple, responsive web app that allows users to search for images in real time using the Unsplash API. Built with HTML, CSS, and JavaScript .
          </p>
          <div className="project-tech">
            <span>JavaScript</span>
            <span>Html</span>
            <span>Css</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/project/Annotation 2025-09-08 082518.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Blog website</h3>
          <p>
            A simple and interactive Blog Application built with React and Firebase. Users can create, read, and manage blog posts in real time.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>Firebase</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/project/home.PNG')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Pizza website</h3>
          <p>
           A modern and responsive React.js website showcasing reusable components, clean UI, and a contact form powered by EmailJS.
Built with ❤️ using React, CSS, and JavaScript.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>EmailJS</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};