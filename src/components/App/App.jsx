/**Products*/

// import { useEffect, useState } from 'react';
// import Product from '../Product/Product';
// import axios from "axios";
// import ArticlesList from '../ArticlesList/ArticlesList';

// export default function App() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     async function fetchArticles() {
//       const response = await axios.get(
//         "https://hn.algolia.com/api/v1/search?query=react");
//       setArticles(response.data.hits);
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <div>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         price={10.99}
//       />
//       <Product
//         name="Tacos"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={11.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//         />
//       </div>
//    </div>
//   );
// }

/**ArticlesList */

// import { useEffect, useState } from 'react';
// import axios from "axios";
// import ArticlesList from '../ArticlesList/ArticlesList';
// import GridLoader from "react-spinners/GridLoader";

// export default function App() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//         "https://hn.algolia.com/api/v1/search?query=react");
//       setArticles(response.data.hits);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {loading && <GridLoader color="#36d7b7" />}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//         {articles.length > 0 && <ArticlesList items={articles}/>}
//     </div>
//   );
// }


/**Search Form */

// import { useState } from 'react';
// import axios from "axios";
// import ArticlesList from '../ArticlesList/ArticlesList';
// import GridLoader from "react-spinners/GridLoader";
// import { fetchArticlesWithTopic } from "../../articles-api";
// import SearchForm from '../SearchForm/SearchForm';

// export default function App() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleSearch = async (topic) => {
//     try {
//       setArticles([]);
//       setError(false);
//       setLoading(true);
//       const data = await fetchArticlesWithTopic(topic);
//       setArticles(data);
      
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <SearchForm onSearch={handleSearch} />
//       {loading && <GridLoader color="#36d7b7" />}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//         {articles.length > 0 && <ArticlesList items={articles}/>}
//     </div>
//   );
// }

/**filtered Planets*/

// import { useState, useMemo } from "react";

// export default function App (){
//   const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
//   const [query, setQuery] = useState("");
//   const [clicks, setClicks] = useState(0);
//   const [newPlanet, setNewPlanet] = useState(""); // Добавлено новое состояние для хранения новой планеты

//   const filteredPlanets = useMemo(
//     () => planets.filter(planet => planet.toLowerCase().includes(query.toLowerCase())),
//     [planets, query]
//   );

//  const handleAddPlanet = () => {
//     if (newPlanet) {
//       setPlanets([...planets, newPlanet]);
//       setNewPlanet(""); // Очистка поля ввода после добавления планеты
//     }
//   };

//   // Функция для обновления строки запроса
//   const handleSetQuery = (event) => {
//     setQuery(event.target.value);
//   };

//    return (
//     <>
//       <input
//         type="text"
//         placeholder="Add a planet"
//         value={newPlanet}
//         onChange={(event) => setNewPlanet(event.target.value)}
//       />
//       <button onClick={handleAddPlanet}>Добавить</button>
//       <input
//         type="text"
//         placeholder="Search for a planet"
//         value={query}
//         onChange={handleSetQuery}
//       />
//       <button onClick={() => setClicks(clicks + 1)}>
//         Number of clicks: {clicks}
//       </button>
//       <ul>
//         {filteredPlanets.map(planet => (
//           <li key={planet}>{planet}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

/**Player*/
import { useRef } from "react";

const Player = ({ source }) => {
  const playerRef = useRef();

  const play = () => playerRef.current.play();

  const pause = () => playerRef.current.pause();

  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  );
};

export default function App(){
  return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
}



