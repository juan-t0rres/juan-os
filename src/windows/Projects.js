import Window from "./Window";
import Card from "../Card";

function LinkIcon({ href }) {
  return (
    <a target="_blank" rel="noreferrer" href={href} style={{ width: 32, height: 32 }}>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {" "}
        <path
          d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4h2zM11 5H3v16h16v-8h-2v6H5V7h6V5z"
          fill="currentColor"
        />{" "}
      </svg>
    </a>
  );
}

function CodeIcon({ href }) {
  return (
    <a target="_blank" rel="noreferrer" href={href} style={{ width: 32, height: 32 }}>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {" "}
        <path
          d="M8 5h2v2H8V5zM6 7h2v2H6V7zM4 9h2v2H4V9zm-2 2h2v2H2v-2zm2 2h2v2H4v-2zm2 2h2v2H6v-2zm2 2h2v2H8v-2zm8-12h-2v2h2V5zm2 2h-2v2h2V7zm2 2h-2v2h2V9zm2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2z"
          fill="currentColor"
        />{" "}
      </svg>
    </a>
  );
}

function Project({ title, summary, link, codeLink }) {
  return (
    <Card
      icon={
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {link && <LinkIcon href={link} />}
          {codeLink && <CodeIcon href={codeLink} />}
        </div>
      }
      title={title}
      summary={summary}
      link={link}
    />
  );
}

export default function Projects({ zIndex, removeWindow, onDrag }) {
  return (
    <Window zIndex={zIndex} window="projects" onDrag={onDrag} removeWindow={removeWindow} title="PROJECTS">
      <div className="projects">
        <Project
          link="https://pixel-chess.glitch.me/"
          codeLink="https://github.com/juan-t0rres/pixelchess"
          title="PIXEL CHESS"
          summary="Website to play chess 1v1 against your friends. Create a room and play chess in real time with the use of websockets. Created with Socket.io, Express.js, and Node.js."
        />
        <Project
          link="https://status.juantorr.es/"
          title="PI STATUS"
          summary="I setup a Raspberry Pi as my home server with a variety of services. It hosts many of my projects (like this website!), it serves as a VPN, hosts game servers and gives me 1TB of cloud storage. I needed a website to monitor my Pi and its services so I created this admin console style website."
        />
        <Project
          codeLink="https://github.com/juan-t0rres/restaurant-app-client"
          title="GRUB UP"
          summary="Proof of concept restaurant pickup ordering system. Created for coursework at my university. Uses an authentication system built from scratch using JSON web tokens and simple cryptography. Created with React, Node.js, and Express.js."
        />
      </div>
    </Window>
  );
}
