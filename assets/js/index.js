import $ from "jquery";
import axios from "axios";
import '../css/style.css';

const socialNewsURL =
  "https://newsapi.org/v2/everything?q=social&pageSize=6&apiKey=";
const entertainmentNewsURL =
  "https://newsapi.org/v2/everything?q=entertainment&pageSize=6&apiKey=";
const sportNewsURL =
  "https://newsapi.org/v2/everything?q=sport&pageSize=6&apiKey=";
const taiwanNewsURL =
  "https://newsapi.org/v2/everything?q=taiwan&pageSize=6";
const apiKey = "a490ea4d42a542f08ed0e12df752bba4";


let newsTemplate = news =>`
   <li class="list-group-item">
      <img src="${news.urlToImage}" alt="newsImage">
   </li>
`;

const getSocialNews = async () => {
  try {
    let resp = await axios.get(socialNewsURL + apiKey);
    let newsList = resp.data.articles.map(news => newsTemplate(news));
    $("#socialNews").html(newsList);
  } catch (error) {
    console.log(error);
  }
};

const getEntertainmentNews = async () => {
  try {
    let resp = await axios.get(entertainmentNewsURL + apiKey);
    let newsList = resp.data.articles.map(news => newsTemplate(news));
    $("#entertainmentNews").html(newsList);
  } catch (error) {
    console.log(error);
  }
};

const getTaiwanNews = async () => {
  try {
    let resp = await axios.get(taiwanNewsURL, {
      headers: {
        Authorization: apiKey
      }
    });
    let newsList = resp.data.articles.map(news => newsTemplate(news));
    $("#taiwanNews").html(newsList);
  } catch (error) {
    console.log(error);
  }
};

const getSportNews = async () => {
  try {
    let resp = await axios.get(sportNewsURL + apiKey);
    let newsList = resp.data.articles.map(news => newsTemplate(news));
    $("#sportNews").html(newsList);
  } catch (error) {
    console.log(error);
  }
};


getSocialNews();
getEntertainmentNews();
getSportNews();
getTaiwanNews();