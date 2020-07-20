import React, { useEffect, useState} from 'react';
import './App.css';
import Container from "@material-ui/core/Container";
import NewsList from "./NewsList";

function App() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us',
            { headers: { 'X-Api-Key': '49a6266846aa4dd396a3e798d58dd4ad' } })
            .then(response => response.json())
            .then(json => setNews(json.articles));
    }, []);

  return (
    <div className="App">
      <Container maxWidth="lg">
          <NewsList newsList={news}/>
      </Container>
    </div>
  );
}

export default App;
