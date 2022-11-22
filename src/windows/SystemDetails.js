import Window from "./Window";
import Card from "../Card";
import { TeachIcon, ScriptIcon, CardTextIcon } from "../Icons";

export default function SystemDetails({ zIndex, removeWindow, onDrag }) {
  return (
    <Window
      zIndex={zIndex}
      window="about"
      removeWindow={removeWindow}
      onDrag={onDrag}
      title="SYSTEM DETAILS"
    >
      <div className="about">
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <Card
              title="ABOUT ME"
              icon={<TeachIcon />}
              details={[
                { field: "Name", value: "Juan Torres" },
                {
                  field: "Date of Birth",
                  value: "06/17/2022 (22 years old)",
                },
                {
                  field: "Occupation",
                  value: "Full Stack Web Engineer",
                },
              ]}
            />
          </div>
          <div style={{ width: "50%" }}>
            <Card
              title="EDUCATION"
              icon={<ScriptIcon />}
              details={[
                {
                  field: "School",
                  value: "University of Central Florida",
                },
                { field: "Degree", value: "B.S. in Computer Science" },
                { field: "Date", value: "Aug 2018 - Aug 2022" },
              ]}
            />
          </div>
        </div>
        <div style={{ height: "50%" }}>
          <Card
            title="SUMMARY"
            icon={<CardTextIcon />}
            summary={`I was recently working as a software engineer for Meta for around 2 months before being laid off. I have around 3 years of experience working with modern web development technologies like React, Node.js, and GraphQL to name a few. I have also done full stack work for both Amazon and Meta as an intern. I am actively searching for full stack, frontend, and backend engineering roles, feel free to reach out!`}
          />
        </div>
      </div>
    </Window>
  );
}