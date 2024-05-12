import { Button } from "../../components/Button/Button";
import styles from "./LeaderboardPage.module.css";
import { getLeaders } from "../../utils/api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function LeaderboardPage() {
  const [leaders, setLeaders] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getLeaders()
      .then((data) => {
        const sortedLeaders = [...data];
        sortedLeaders.sort((a, b) => a.time - b.time);
        const topTenLeaders = sortedLeaders.slice(0, 10); // Выбираем только первые 10 результатов
      setLeaders(topTenLeaders);
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.text}>Лидерборд</h1>
        <Link to="/">
          <Button>Начать игру</Button>
        </Link>
      </div>
      {isLoaded ? (
        <>
          <div className={styles.thead}>
            <div className={styles.leaderboard_unit}>
              <div className={styles.leaderboard_ttl}>Позиция</div>
              <div className={styles.leaderboard_ttl}>Пользователь</div>
              <div className={styles.leaderboard_ttl}>Достижения</div>
              <div className={styles.leaderboard_ttl}>Время</div>
            </div>
          </div>
          {leaders.map((leader, index) => (
            <div key={leader.id} className={styles.leaderboard_unit}>
              <div className={styles.leaderboard_text}>#{index + 1}</div>
              <div className={styles.leaderboard_text}>{leader.name}</div>
              <div className={styles.leaderboard_achievements}>
                {leader.achievements && leader.achievements.includes(2) ? (
                  <div className={styles.leaderboard_achievements_item} title="Игра пройдена в сложном режимe">
                    <button className={styles.puzzle}></button>
                  </div>
                ) : (
                  <button className={styles.puzzleGray}></button>
                )}
                {leader.achievements && leader.achievements.includes(1) ? (
                  <div className={styles.leaderboard_achievements_item} title="Игра пройдена без супер-сил">
                    <button className={styles.vision}></button>
                  </div>
                ) : (
                  <button className={styles.visionGray}></button>
                )}
              </div>
              <div className={styles.time}>
                {Math.floor(leader.time / 60)
                  .toString()
                  .padStart(2, "0")}
                :{(leader.time % 60).toString().padStart(2, "0")}
              </div>
            </div>
          ))}
            <p className={styles.textDescription}>Топ 10-ти лучших результатов</p>
        </>
      ) : (
        <div>
          <p className={styles.leaderboard_ttl}>
            Данные загружаются, пожалуйста подождите...
          </p>
        </div>
      )}
    </div>
  );
}
