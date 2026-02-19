import { useEffect, useState } from "react";
import type { SkillsProps } from "./skills.types";

export const Skills = (props: SkillsProps) => {
  const { skills = [] } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1500);
  }, []);
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {skills?.map((skill, index) => (
          <li key={index} className={skill.toLowerCase()}>
            {skill}
          </li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
