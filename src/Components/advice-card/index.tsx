import "./styles.css";

import desktok_divider from "./../../assets/pattern-divider-desktop.svg";
import icon_dice from "./../../assets/icon-dice.svg";
import { IAdviceFuncs } from "../../interfaces/advice-interface";

export function AdviceCard(data: IAdviceFuncs) {
  return (
    <div className="advice-card">
      <div className="card-head">advice #{data.adviceId}</div>
      <div className="card-body">"{data.advice}"</div>
      <div className="card-bottom"></div>
      <div className="generate-button">
        <button disabled={data.timeout} onClick={data.getNewAdvice}>
          <img src={icon_dice} alt="Generate New Advice" />
        </button>
      </div>
    </div>
  );
}
