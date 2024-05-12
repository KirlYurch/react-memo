

export async function getLeaders() {
  try {
    const response = await fetch("https://wedev-api.sky.pro/api/v2/leaderboard");
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Невозможно получить список лидеров");
      } else {
        throw new Error(`Ошибка! Статус: ${response.status}`);
      }
    }
    const data = await response.json();
    return data.leaders;
  } catch (error) {
    console.warn(error);
    throw error;
  }
}

export async function addLeaders({ name, time, achievements }) {
  try {
    const response = await fetch("https://wedev-api.sky.pro/api/v2/leaderboard", {
      method: "POST",
      body: JSON.stringify({
        name,
        time,
        achievements,
      }),
    });
    if (!response.ok) {
      if (response.status === 400) {
        throw new Error("Не удалось загрузить список лидеров, попробуйте снова");
      } else {
        throw new Error(`Ошибка! Статус: ${response.status}`);
      }
    }
    return response.json();
  } catch (error) {
    alert("Ошибка сети, попробуйте снова");
    console.warn(error);
    throw error;
  }
}