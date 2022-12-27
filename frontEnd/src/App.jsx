import logo from './logo.svg';
import './App.css';
import RecipeReviewCard from './Card';
import axios from 'axios';
function App() {
  const posts = axios.get('http://localhost:8000/posts').then((data) => {
    console.log(data);
  })

  return (
    <div className="App">
      <RecipeReviewCard />
    </div>
  );
}

export default App;
