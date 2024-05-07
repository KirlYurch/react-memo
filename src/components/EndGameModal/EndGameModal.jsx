import styles from "./EndGameModal.module.css";
import { Button } from "../Button/Button";
import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { ModeContext } from "../../context/ModeContext";
import { useContext, useState } from "react";
import { addLeaders } from "../../utils/api";
import { Link } from "react-router-dom";

export function EndGameModal({
  isWon,
  gameDurationSeconds,
  gameDurationMinutes,
  onClick,
}) {
  const { selectedLevel } = useContext(ModeContext);
  const [username, setUsername] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleScore = () => {
    if (username.trim() === "") {
      setUsername("Пользователь");
      return;
    }
    const totalTimeInSeconds = gameDurationMinutes * 60 + gameDurationSeconds;
    addLeaders({ name: username, time: totalTimeInSeconds })
      .then(() => {
        alert("Пользователь добавлен");
        onClick();
      })
      .catch((error) => {
        console.warn(error);
        alert("Не удалось добавить пользователя");
      });
  };

  const title = isWon
    ? selectedLevel === "9"
      ? "Вы попали на лидерборд!"
      : "Вы победили!"
    : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <div className={styles.title}>{title}</div>
      {isWon && selectedLevel === "9" && (
        <input
          className={styles.input_user}
          type="text"
          value={username}
          onChange={handleUsername}
          placeholder="Пользователь"
        />
      )}
      {isWon && selectedLevel === "9" && (
        <button
          className={styles.buttonmode_addscore}
          onClick={() => handleScore()}
        >
          Добавить
        </button>
      )}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.
        {gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <Button onClick={onClick}>Начать сначала</Button>

      {isWon && selectedLevel === "9" && (
        <Link className={styles.title_leaderboard} to="/leaderboard">
          Перейти к лидерборду
        </Link>
      )}
    </div>
  );
}
