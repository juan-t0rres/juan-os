import Window from "./Window";
import { useState, useRef, useEffect } from "react";

const options = [
  {
    text: "How can I contact you?",
    answer: [
      "The best way to reach me is via my personal email",
      "juanditb@gmail.com",
      "Click to copy the address to your clipboard",
    ],
  },
  {
    text: "Can I get your resume?",
    answer: [
      "I don't place my resume on this site because it holds personal information like my phone number",
      "If you email me I'll be happy to send it over",
      "juanditb@gmail.com",
      "Click to copy the address to your clipboard",
    ],
  },
  {
    text: "How did you make this website?",
    answer: [
      "This website was created entirely with React.",
      "It's hosted on my Raspberry Pi, you can learn a little more about that in the projects section.",
    ],
  },
  {
    text: "How long have you been programming?",
    answer: [
      "I have been interested in computers ever since I was a kid.",
      "I remember watching HTML notepad tutorials on YouTube at a young age.",
      "I started taking programming more seriously when I got to high school.",
      "Since then I have learned a variety of programming languages and technologies.",
    ],
  },
];

function AvatarIcon() {
  return (
    <div style={{ width: 32, height: 32, marginTop: 5 }}>
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

function ReceivedMessage({ text }) {
  return (
    <div className="msg">
      <AvatarIcon />
      <div
        className="received-msg pixel-font"
        style={{ fontSize: 10, lineHeight: 2, cursor: "pointer" }}
        onClick={() => {
          navigator.clipboard.writeText(text);
        }}
      >
        {text}
      </div>
    </div>
  );
}

function Option({ option, addAnswer }) {
  return (
    <div className="msg">
      <div
        className="option pixel-font"
        style={{ fontSize: 10, lineHeight: 2 }}
        onClick={() => addAnswer(option)}
      >
        {option.text}
      </div>
    </div>
  );
}

export default function Chat({ zIndex, onDrag, removeWindow }) {
  const [currentOption, setOption] = useState();
  const [answers, setAnswers] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [displayingAnswer, setDisplayingAnswer] = useState(false);
  const bottomRef = useRef(null);

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [answers, showOptions]);

  async function addAnswer(option) {
    setShowOptions(false);
    setDisplayingAnswer(true);
    setOption(option);
    const { answer } = option;
    let index = 1;
    for (const str of answer) {
      setAnswers([...answer.slice(0, index++)]);
      await timeout(1800);
    }
    setAnswers([...answer, "Can I help you with anything else?"]);
    setShowOptions(true);
  }

  return (
    <Window
      zIndex={zIndex}
      onDrag={onDrag}
      removeWindow={removeWindow}
      windowString="chat"
      key="chat"
      title="CHAT BOT"
    >
      <div className="chat">
        {displayingAnswer ? (
          <>
            <Option option={currentOption} addAnswer={addAnswer} />
            {answers.map((answer) => (
              <ReceivedMessage key={answer} text={answer} />
            ))}
            {showOptions &&
              options
                .filter((option) => option.text !== currentOption.text)
                .map((option) => (
                  <Option key={option.text} option={option} addAnswer={addAnswer} />
                ))}
          </>
        ) : (
          <>
            <ReceivedMessage text="Hello! I'm JUAN-B0T, a smarter version of Juan!" />
            <ReceivedMessage text="Go ahead and ask me a question." />
            {options.map((option) => (
              <Option
                key={option.text}
                option={option}
                setAnswers={setAnswers}
                addAnswer={addAnswer}
              />
            ))}
          </>
        )}
        <div ref={bottomRef} />
      </div>
    </Window>
  );
}
