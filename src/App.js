import "./styles.css";
import { LogoIcon, AboutIcon, ProjectsIcon, WorkIcon, ChatIcon } from "./Icons";
import { useEffect, useState } from "react";
import SystemDetails from "./windows/SystemDetails";
import Projects from "./windows/Projects";
import Loading from "./Loading";
import Work from "./windows/Work";
import Chat from "./windows/Chat";

const Windows = {
  About: "about",
  Projects: "projects",
  Work: "work",
  Chat: "chat",
};

function App() {
  const [windows, setWindows] = useState([Windows.About]);
  const [loading, setLoading] = useState(true);

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  useEffect(() => {
    setTimeout(() => setLoading(false), 2300);
  }, []);

  function removeWindow(deleteWindow) {
    setWindows(windows.filter((w) => w !== deleteWindow));
  }

  // On drag, put window to the front of array
  function onDrag(window) {
    const restOfWindows = windows.filter((w) => w !== window);
    setWindows([window, ...restOfWindows]);
  }

  function getWindows() {
    const windowContent = [];
    let zIndex = 100;
    for (const window of windows) {
      switch (window) {
        case Windows.About:
          windowContent.push(
            <SystemDetails
              isMobile={isMobile}
              zIndex={zIndex}
              onDrag={onDrag}
              key="about"
              removeWindow={() => removeWindow("about")}
            />
          );
          break;
        case Windows.Projects:
          windowContent.push(
            <Projects
              zIndex={zIndex}
              onDrag={onDrag}
              key="projects"
              removeWindow={() => removeWindow("projects")}
            />
          );
          break;
        case Windows.Work:
          windowContent.push(
            <Work
              zIndex={zIndex}
              onDrag={onDrag}
              key="work"
              removeWindow={() => removeWindow("work")}
            />
          );
          break;
        case Windows.Chat:
          windowContent.push(
            <Chat
              zIndex={zIndex}
              onDrag={onDrag}
              key="chat"
              removeWindow={() => removeWindow("chat")}
            />
          );
          break;
        default:
          return null;
      }
      zIndex--;
    }
    return windowContent;
  }

  function onWindowChange(nextWindow) {
    if (isMobile) {
      setWindows([nextWindow]);
    }
    else if (!windows.includes(nextWindow)) {
      setWindows([nextWindow, ...windows]);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <LogoIcon />
          <span className="pixel-font">JUAN-OS</span>
        </div>
        <div className="icons">
          <AboutIcon
            border={windows.includes("about")}
            setWindow={onWindowChange}
          />
          <ProjectsIcon
            border={windows.includes("projects")}
            setWindow={onWindowChange}
          />
          <WorkIcon
            border={windows.includes("work")}
            setWindow={onWindowChange}
          />
          <ChatIcon
            border={windows.includes("chat")}
            setWindow={onWindowChange}
          />
        </div>
      </div>
      <div className="app">{getWindows()}</div>
    </>
  );
}

export default App;
