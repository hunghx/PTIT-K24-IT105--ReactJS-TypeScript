import React, { useState, useEffect } from "react";

type Question = {
  question: string;
  options: string[];
  answer: number;
};

const optionLabels = ["A", "B", "C", "D"];

const questionsData: Question[] = [
  {
    question: "Chọn đáp án đúng: She ___ to school every day.",
    options: ["go", "goes", "going", "gone"],
    answer: 1,
  },
  {
    question: "Chọn đáp án đúng: I ___ English now.",
    options: ["study", "studies", "am studying", "studied"],
    answer: 2,
  },
  {
    question: "Chọn đáp án đúng: They ___ in Hanoi last year.",
    options: ["live", "lived", "living", "lives"],
    answer: 1,
  },
  {
    question: "Chọn đáp án đúng: He ___ football every Sunday.",
    options: ["play", "plays", "playing", "played"],
    answer: 1,
  },
  {
    question: "Chọn đáp án đúng: We ___ dinner when she arrived.",
    options: ["have", "had", "were having", "has"],
    answer: 2,
  },
  {
    question: "Chọn đáp án đúng: The book ___ by John.",
    options: ["was written", "wrote", "written", "is writing"],
    answer: 0,
  },
  {
    question: "Chọn đáp án đúng: If I ___ money, I would travel.",
    options: ["have", "had", "has", "having"],
    answer: 1,
  },
  {
    question: "Chọn đáp án đúng: She ___ TV when I called.",
    options: ["watch", "watched", "was watching", "watches"],
    answer: 2,
  },
  {
    question: "Chọn đáp án đúng: He ___ to the party yet.",
    options: ["didn't come", "hasn't come", "doesn't come", "isn't coming"],
    answer: 1,
  },
  {
    question: "Chọn đáp án đúng: I ___ my homework before dinner.",
    options: ["finish", "finished", "had finished", "finishing"],
    answer: 2,
  },
];

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

const QuizGame: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setQuestions(shuffleArray(questionsData));
  }, []);

  if (questions.length === 0) return null;

  const handleOptionClick = (idx: number) => {
    setSelected(idx);
    setShowAnswer(true);
    if (idx === questions[current].answer) setScore(s => s + 1);
  };

  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setQuestions(shuffleArray(questionsData));
    setCurrent(0);
    setSelected(null);
    setShowAnswer(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="quiz-card">
        <h2>Hoàn thành Quiz!</h2>
        <p>Điểm số: <b>{score} / {questions.length}</b></p>
        <button className="quiz-restart" onClick={handleRestart}>Làm lại</button>
      </div>
    );
  }

  return (
    <div className="quiz-card">
      <div className="quiz-header">
        <span className="quiz-number">Câu {current + 1} / {questions.length}</span>
      </div>
      <div className="quiz-question">{questions[current].question}</div>
      <div className="quiz-options-row">
        {questions[current].options.map((opt, idx) => {
          let btnClass = "quiz-btn";
          if (showAnswer) {
            if (idx === questions[current].answer) btnClass += " quiz-correct";
            else if (idx === selected) btnClass += " quiz-wrong";
          } else if (selected === idx) btnClass += " quiz-selected";
          return (
            <button
              key={idx}
              className={btnClass}
              onClick={() => !showAnswer && handleOptionClick(idx)}
              disabled={showAnswer}
            >
              <span className="quiz-label">{optionLabels[idx]}.</span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>
      {showAnswer && (
        <div className="quiz-feedback">
          {selected === questions[current].answer ? (
            <span className="quiz-feedback-correct">Chính xác!</span>
          ) : (
            <span className="quiz-feedback-wrong">
              Sai! Đáp án đúng là <b>{optionLabels[questions[current].answer]}. {questions[current].options[questions[current].answer]}</b>
            </span>
          )}
        </div>
      )}
      <button
        className="quiz-next"
        onClick={handleNext}
        disabled={!showAnswer}
      >
        {current + 1 === questions.length ? "Kết thúc" : "Tiếp theo"}
      </button>
    </div>
  );
};

export default QuizGame;
