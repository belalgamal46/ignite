//Base URL
const baseUrl = "https://api.rawg.io/api/";

//Get Month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  }
  return month;
};
//Get Day
const getCurrentDay = () => {
  const day = new Date().getDate() + 1;
  if (day < 10) {
    return `0${day}`;
  }
  return day;
};

//Getting current day/mont/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

//Current Date
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
//Last Year
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
//Next Year
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//API KEY
const apiKey = "key=df3b9088500144db9871a673df72bb91";

//Popular Games URL
const popularGames = `games?${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${baseUrl}${popularGames}`;
export const upcomingGamesURL = () => `${baseUrl}${upcomingGames}`;
export const newGamesURL = () => `${baseUrl}${newGames}`;
//Game Details
export const gameDetailsURL = (gameId) => `${baseUrl}games/${gameId}?${apiKey}`;
//Game ScreenShots
export const gameScreenShotURL = (gameId) =>
  `${baseUrl}games/${gameId}/screenshots?${apiKey}`;

//Searched Game
export const searchGameURL = (gameName) =>
  `${baseUrl}games?${apiKey}&search=${gameName}&page_size=9`;
