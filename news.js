const generalBtn = document.getElementById("general");
const technologyBtn = document.getElementById("technology");
const businessBtn = document.getElementById("business");
const entertainmentBtn = document.getElementById("entertainment");
const sportsBtn = document.getElementById("sport");
const searchBtn = document.getElementById("searchBtn");

const news = document.getElementById("news");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");


var newsDataArr = [];


const API_KEY = "d5681860479443b7acf841b28468e34f";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
// const FASHION_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=electronics&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function() {                       // By opening(or onload the page) webpage first news headline would be headline by default
    fetchHeadlines();
    newsType.innerHTML="<h3>Today's HeadLines</h3>";
};


generalBtn.addEventListener("click",function(){
    fetchGeneralNews();
    newsType.innerHTML="<h3>General News</h3>";
});

businessBtn.addEventListener("click",function(){
    fetchBusinessNews();
    newsType.innerHTML="<h3>Business News</h3>";
});

sportsBtn.addEventListener("click",function(){
    fetchSportsNews();
    newsType.innerHTML="<h3>Sports News</h3>";
});

entertainmentBtn.addEventListener("click",function(){
    fetchEntertainmentNews();
    newsType.innerHTML="<h3>Entertainment News</h3>";
});

technologyBtn.addEventListener("click",function(){
    fetchTechnologyNews();
    newsType.innerHTML="<h3>Technology News</h3>";
});

searchBtn.addEventListener("click",function(){
    fetchQueryNews(); 
    newsType.innerHTML="<h3>Searched for "+news.value+"</h3>";
});

const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;                      // articles section contains the list of news data(or arrays of news)
    } else {

        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h4>Sorry, No data found</h3>"
        return;
    }

    displayNews();
}


const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h4>Sorry,No data found.</h4>"
        return;
    }

    displayNews();
}

const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h4>Sorry,No data found.</h4>"
        return;
    }

    displayNews();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h4>Sorry,No data found.</h4>"
        return;
    }

    displayNews();
}

const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h4>Sorry,No data found.</h4>"
        return;
    }

    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h4>Sorry,No data found.</h4>"
        return;
    }

    displayNews();
}

const fetchFashionNews = async () => {
    const response = await fetch(FASHION_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h4>Sorry,No data found.</h4>"
        return;
    }

    displayNews();
}

const fetchQueryNews = async () => {

    if(news.value == null)
        return;

    const response = await fetch(SEARCH_NEWS+encodeURIComponent(news.value)+"&apiKey="+API_KEY);  // encodeURIComponent - if space is present it treat as URL
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h4>Sorry,No data found.</h4>"
        return;
    }

    displayNews();
}

function displayNews() {

    newsdetails.innerHTML = "";

    newsDataArr.forEach(news => {
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });

}
