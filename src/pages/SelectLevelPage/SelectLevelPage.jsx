import { ModeContext } from "../../context/ModeContext.jsx";
import * as S from "./SelectLevelPage.module.js";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export function SelectLevelPage() {
  const { isEnabled, setIsEnabled } = useContext(ModeContext);
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
    setIsEnabled(!isEnabled);
  };

  // Логика выбора уровня
  const [selectedLevel, setSelectedLevel] = useState(""); // Состояние для хранения выбранного уровня
  const handleRadioChange = (e) => {
    setSelectedLevel(e.target.value);
    console.log(e.target.value); // Обновляем состояние выбранного уровня при изменении радиокнопки
  };
  const handleStartClick = () => {
    // Проверяем, выбран ли какой-либо уровень
    if (selectedLevel) {
      // Если выбран, переходим по ссылке, соответствующей выбранному уровню

      navigate(`/game/${selectedLevel}`);
    } else {
      // В противном случае выводим сообщение об ошибке или предпринимаем другие действия
      console.error("Выберите уровень!");
    }
  };
  // Логика выбора уровня

  return (
    <S.ContainerDiv>
      <S.ModalDiv>
        <S.MainContentForm>
          <S.TitleH1>Выберите сложность</S.TitleH1>
          <S.ChooseDifContainerDiv>
            <input
              value="3"
              name="choose_input"
              type="radio"
              id="choose_input_1"
              onChange={handleRadioChange}
            />
            <S.Label htmlFor="choose_input_1">1</S.Label>

            <input
              value="6"
              name="choose_input"
              type="radio"
              id="choose_input_2"
              onChange={handleRadioChange}
            />
            <S.Label htmlFor="choose_input_2">2</S.Label>

            <input
              value="9"
              name="choose_input"
              type="radio"
              id="choose_input_3"
              onChange={handleRadioChange}
            />
            <S.Label htmlFor="choose_input_3">3</S.Label>
          </S.ChooseDifContainerDiv>

          <S.MainContentGoButton type="button" onClick={handleStartClick}>
            Старт
          </S.MainContentGoButton>

          <div style={{ paddingTop: "80px" }}>
            <S.LabelEasy>
              <S.P1Easy>Режим "3 Жизни"</S.P1Easy>
              <S.InputEasy
                checked={isEnabled}
                type="checkbox"
                onChange={(e) => {
                  handleChange(e);
                  setIsEnabled(!isEnabled);
                }}
              />
              <S.SwitchEasy />
            </S.LabelEasy>
          </div>
        </S.MainContentForm>
      </S.ModalDiv>
    </S.ContainerDiv>
  );
}
