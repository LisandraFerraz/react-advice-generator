import { useEffect, useState } from "react";
import "./app.css";
import { AdviceCard } from "./Components/advice-card";

export function App() {
  const url = "https://api.adviceslip.com/advice";

  const [advices, setAdvices] = useState<any>([]);

  async function handleGenarateAdvice() {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const newAdvice = {
        advice: data.slip.advice,
        adviceId: data.slip.id,
      };
      setAdvices(() => [newAdvice]);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    handleGenarateAdvice();
  }, []);

  return (
    <div className="content-container">
      {advices.map((adviceMsg: any) => (
        <AdviceCard
          advice={adviceMsg.advice}
          adviceId={adviceMsg.adviceId}
          key={adviceMsg.adviceId}
          getNewAdvice={handleGenarateAdvice}
        />
      ))}

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/LisandraFerraz"
          target="_blank"
        >
          Lisandra Ferraz
        </a>
        .
      </div>
    </div>
  );
}
