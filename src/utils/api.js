export async function getLeaders() {
  const response = await fetch("https://wedev-api.sky.pro/api/leaderboard", {
    method: "GET",
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }
  const data = await response.json();
  return data;
}

export async function addLeaders({ name, time, achievements }) {
  const response = await fetch("https://wedev-api.sky.pro/api/leaderboard", {
    method: "POST",
    body: JSON.stringify({ name, time, achievements }),
  });
  if (response.status === 201) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Не удалось загрузить список лидеров, попробуйте снова");
  }
}
