export function LogoIcon() {
  return (
    <div className="icon primary">
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {" "}
        <path
          d="M6 4h14v2h2v6h-8v2h6v2h-4v2h-2v2H2V8h2V6h2V4zm2 6h2V8H8v2z"
          fill="currentColor"
        />{" "}
      </svg>
    </div>
  );
}

export function AboutIcon({ setWindow, border }) {
  return (
    <div
      className={`icon` + (border ? ' selected' : '')}
      onClick={() => setWindow("about")}
    >
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {" "}
        <path
          d="M6 2h8v2H6V2zM4 6V4h2v2H4zm0 8H2V6h2v8zm2 2H4v-2h2v2zm8 0v2H6v-2h8zm2-2h-2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm0-8h2v8h-2V6zm0 0V4h-2v2h2z"
          fill="currentColor"
        />{" "}
      </svg>
    </div>
  );
}

export function ProjectsIcon({ setWindow, border }) {
  return (
    <div className={`icon` + (border ? ' selected' : '')} onClick={() => setWindow("projects")}>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {" "}
        <path
          d="M10 2h6v2h4v18H4V4h4V2h2zm6 4v2H8V6H6v14h12V6h-2zm-2 0V4h-4v2h4z"
          fill="currentColor"
        />{" "}
      </svg>
    </div>
  );
}

export function WorkIcon({ setWindow, border }) {
  return (
    <div className={`icon` + (border ? ' selected' : '')} onClick={() => setWindow("work")}>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {" "}
        <path
          d="M8 3h8v4h6v14H2V7h6V3zm2 4h4V5h-4v2zM4 9v10h16V9H4zm4 2v6H6v-6h2zm10 0v6h-2v-6h2z"
          fill="currentColor"
        />{" "}
      </svg>
    </div>
  );
}

export function ChatIcon({ setWindow, border }) {
  return (
    <div className={`icon` + (border ? ' selected' : '')} onClick={() => setWindow("chat")}>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {" "}
        <path
          d="M20 2H2v20h2V4h16v12H6v2H4v2h2v-2h16V2h-2z"
          fill="currentColor"
        />{" "}
      </svg>
    </div>
  );
}

export function ScriptIcon() {
  return (
    <div className="card-icon">
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {" "}
        <path
          d="M6 3h14v2h2v6h-2v8h-2V5H6V3zm8 14v-2H6V5H4v10H2v4h2v2h14v-2h-2v-2h-2zm0 0v2H4v-2h10zM8 7h8v2H8V7zm8 4H8v2h8v-2z"
          fill="currentColor"
        />{" "}
      </svg>
    </div>
  );
}

export function TeachIcon() {
  return (
    <div className="card-icon">
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {" "}
        <path
          d="M9 2H5v4h4V2zm7 7V7H2v9h2v6h2v-6h2v6h2V9h6zm-5-7h11v14H11v-2h9V4h-9V2z"
          fill="currentColor"
        />{" "}
      </svg>
    </div>
  );
}

export function CardTextIcon() {
  return (
    <div className="card-icon">
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {" "}
        <path
          d="M4 4H2v16h20V4H4zm0 2h16v12H4V6zm2 2h12v2H6V8zm0 4h10v2H6v-2z"
          fill="currentColor"
        />{" "}
      </svg>
    </div>
  );
}
