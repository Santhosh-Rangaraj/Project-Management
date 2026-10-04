/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} status
 * @property {string | Date | undefined} [dueDate]
 * @property {string[]} members
 * @property {string} [progress]
 */

/**
 * @typedef {{
 *   projects: Project[];
 *   setProjects: (value: Project[] | ((previous: Project[]) => Project[])) => void;
 * }} ProjectContextType
 */

import { createContext, useState } from "react";

/** @type {ProjectContextType} */
const defaultProjectContext = {
  projects: /** @type {Project[]} */ ([]),
  setProjects: () => undefined,
};

export const ProjectContext = createContext(defaultProjectContext);

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(/** @type {Project[]} */ ([]));

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};
