import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../Elements/SectionTitle";
import {
  variantGridContanier,
  variantGridItem,
} from "../../utils/motionVariants";
import WorkCard from "../Elements/WorkCard";

const Work = () => {
  const [works, setWorks] = useState([
    {
      id: 1,
      title: "Netflix Clone",
      description:
        "This is a Netlix UI clone, it connects with the TMDB API and displays the movies and TV shows that are available in the database.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/imcamilomillan.appspot.com/o/netflix-clone-screenshot.PNG?alt=media&token=f6d64760-3c95-4417-ba09-80265f698a05",
      link: "https://netflixclone-a44e2.web.app/login",
      github: "https://github.com/CoGuisMod/NetflixClone",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Firebase",
        "Axios",
        "TMDB API",
      ],
    },
    {
      id: 2,
      title: "To-Do App",
      description:
        "This is a To-Do App, it allows you to drag and drop the tasks to change their order, i'll add soon the function to add and store tasks.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/imcamilomillan.appspot.com/o/to-do-app-screenshot.PNG?alt=media&token=b22a4fe0-3395-418f-9d1b-1cf1be20153f",
      link: "https://todoapp-d0363.web.app/",
      github: "https://github.com/CoGuisMod/ToDoApp",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Beautiful DnD"],
    },
    {
      id: 3,
      title: "Rick And Morty Wiki",
      description:
        "This is a Rick And Morty Wiki, it allows you to search for a character and get the information about him/her, aswell as the locations and episodes.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/imcamilomillan.appspot.com/o/rick-and-morty-wiki-screenshot.PNG?alt=media&token=ce4ca388-c74e-4576-a45a-5a41bf726e88",
      link: "https://rickandmortywiki-f8dc1.web.app/",
      github: "https://github.com/CoGuisMod/RickAndMorty-Wiki",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Axios",
        "React paginate",
      ],
    },
  ]);

  console.log(works, "works");

  return (
    <section className="max-w-7xl mx-auto px-4 py-10" id="skills">
      <SectionTitle sectionTitle="My Work" />
      <div className="max-w-5xl mx-auto mt-8 md:mt-16">
        <motion.div
          variants={variantGridContanier}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-x-6 gap-y-5 sm:gap-y-6"
        >
          {works.map((work) => (
            <WorkCard work={work} cardVariant={variantGridItem} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
