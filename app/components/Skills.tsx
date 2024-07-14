import React from 'react';
import SkillCard from "./SkillCard";

type Skill = {
  skillName: string;
  skillIcon: {
    alt: string;
    classname: string;
    src: string;
  };
};

type SkillsProps = {
  skills: Skill[];
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap align-center justify-center max-w-2xl mx-auto mt-8">
      {skills.map((skill, index) => {
        return (
          <SkillCard
            skillName={skill.skillName}
            skillIcon={skill.skillIcon}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Skills;
