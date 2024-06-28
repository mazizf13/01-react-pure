import { useState } from "react";

const stepItems = ["Dream", "Believe", "Archieve"];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  function handlePrev() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        <p className="message">
          Step {step}: {stepItems[step - 1]}
        </p>
        <div className="buttons">
          <button
            style={{ backgroundColor: "#526D82", color: "#fff" }}
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            style={{ backgroundColor: "#526D82", color: "#fff" }}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
