import { Button } from "../../components/Button/Button";
import styles from "./LeaderboardPage.module.css";
import { getLeaders } from "../../utils/api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function LeaderboardPage() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    getLeaders()
      .then(data => {
        if (data.leaders) {
          let leader = data.leaders;
          leader = leader.sort((a, b) => a.time - b.time); // Сортировка по возрастанию времени
          const bestLeaders = leader.slice(0, 10); // Выбор лучших 10 лидеров
          setLeaders(bestLeaders);
        } else {
          console.error("Данные лидеров не были получены.");
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.text}>Лидерборд</p>
          <Link to="/">
            <Button>Начать игру</Button>
          </Link>
        </div>
        <table>
          <thead className={styles.thead}>
            <tr className={styles.leaderboard}>
              <th className={styles.position}>Позиция</th>
              <th className={styles.user}>Пользователь</th>
              {/* <th className={styles.achievements}>Достижения</th> */}
              <th className={styles.time}>Время</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {leaders.map((leader, index) => (
              <tr className={styles.leader} key={leader.id}>
                <td className={styles.position}>#{index + 1}</td>
                <td className={styles.user}>{leader.name}</td>
                {/* <td className={styles.time}>{leader.time}</td> */}
                <td className={styles.time}>
                  {Math.floor(leader.time / 60)
                    .toString()
                    .padStart(2, "0")}
                  :{(leader.time % 60).toString().padStart(2, "0")}
                </td>
              </tr>
            ))}
          </tbody>
        
        </table>
        <p className={styles.textDescription}>Топ 10-ти лучших результатов</p>
      </div>
    </>
  );
}
