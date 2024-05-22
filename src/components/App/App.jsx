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
//       <div>
//         <h1>Latest articles</h1>
//         {articles.length > 0 && <ArticlesList items={articles}/>}
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from 'react';
import axios from "axios";
import ArticlesList from '../ArticlesList/ArticlesList';
import GridLoader from "react-spinners/GridLoader";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const response = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react");      
      setArticles(response.data.hits);
      } catch (error) {
        
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {loading && <GridLoader color="#36d7b7" />}
        {articles.length > 0 && <ArticlesList items={articles}/>}      
    </div>
  );
}