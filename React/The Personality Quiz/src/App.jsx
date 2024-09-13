const questions = [
  {
    question: "What's your favorite color?",
    options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
  },
];
const keywords = {
  Fire: "fire",
  Water: "water",
  Earth: "earth",
  Air: "air",
};
const elements = {
    "Red 🔴": "Fire",
    "Blue 🔵": "Water",
    "Green 🟢": "Earth",
    "Yellow 🟡": "Air",
};
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [answers, setAnswers] = useState([]);
const [userName, setUserName] = useState("");
const [element, setElement] = useState("");
const [artwork, setArtwork] = useState(null);

function handleAnswer(answer) {
  setAnswers([...answers, answer]);
  setCurrentQuestionIndex(currentQuestionIndex + 1);
}

function handleUserFormSubmit(name) {
  setUserName(name);
}

function determineElement(answers) {
  const counts = {};
  answers.forEach((answer) => {
    const element = elements[answer];
    counts[element] = (counts[element] || 0) + 1;
  });
  return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
}

useEffect(() => {
  if (currentQuestionIndex === questions.length) {
    const selectedElement = determineElement(answers);
    setElement(selectedElement);
    fetchArtwork(keywords[selectedElement]);
  }
}, [currentQuestionIndex]);