/**
 * Copyright © 2022 PaperMC and Contributors
 * Copyright © 2022 SpongePowered and Contributors (changes only)
 *
 * This file is a modified copy of
 * https://github.com/PaperMC/docs/blob/9b37f1d1cdbf275c78d0701e343687cfd718cb68/src/components/Projects.tsx
 * which is licensed under the Creative Commons Attribution Share Alike 4.0 International license
 * (https://creativecommons.org/licenses/by-sa/4.0/). This file is published under the same license.
 * A copy of the license including the warranty disclaimer can also be found in this directory.
 * The original author is e-im (evan) and only minimal changes were made:
 * - Ported from typescript to javascript (removed typings)
 * - Changed the project list (removed paper projects and added spongepowered projects)
 */

import Link from "@docusaurus/Link";
import React from "react";
import styles from "./index.module.css";
import clsx from "clsx";

const projects = [
    {
        title: "Sponge",
        description: "A community-driven open source Minecraft: Java Edition modding platform.",
        repo: "SpongePowered/Sponge",
        link: "/sponge",
    },
    {
        title: "Ore",
        description: "A Minecraft package repository.",
        repo: "SpongePowered/Ore",
        link: "/ore",
    },
    {
        title: "Miscellaneous",
        description: "Documentation that does not apply to any specific project.",
        repo: "SpongePowered",
        link: "/misc",
    }
];

function Project(project) {
    return (
        <div className={styles.project}>
            <div className={styles.flex}>
                <Link className={styles.projectGitHub} to={`https://github.com/${project.repo}`}>
                    {project.title}
                </Link>
                <p>{project.description}</p>
            </div>
            <div>
                <Link className="button button--primary" to={project.link}>
                    Go
                </Link>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section className={styles.projects}>
            <div className={clsx(styles.projectsContainer, 'indexContainer')}>
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
