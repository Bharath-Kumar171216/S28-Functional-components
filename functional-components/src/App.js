// import logo from './logo.svg';
import './App.css';
import CricketPlayer from './components/CricketPlayer';

function App() {
  return (  
    <div className="App">
      <hr></hr>
      <h1>Props</h1>
      <CricketPlayer imgURL="./images/dhoni.webp" name="Dhoni" team="CSK" role="Batting"></CricketPlayer>
      <CricketPlayer imgURL="./images/Arjun tendulkar.webp" name="Arjun " team="MI" role="Bowler"></CricketPlayer>
      <CricketPlayer imgURL="./images/Dinesh.webp" name="Dinesh" team="RCB" role="Batting"></CricketPlayer>
      <CricketPlayer imgURL="./images/Hardik pandya.webp" name="Hardik " team="MI" role="All Rounder"></CricketPlayer>
      <CricketPlayer imgURL="./images/Jadeja.webp" name="Jadeja" team="CSK" role="All Rounder"></CricketPlayer>
      <CricketPlayer imgURL="./images/Karn sharma.webp" name="Karn Sharma" team="RCB" role="Bowler"></CricketPlayer>
      <CricketPlayer imgURL="./images/Rahane.webp" name="Rahane" team="CSK" role="Batting"></CricketPlayer>
      <CricketPlayer imgURL="./images/Rohith.webp" name="Rohith" team="MI" role="Batting"></CricketPlayer>
      <CricketPlayer imgURL="./images/Siraj.webp" name="Siraj" team="RCB" role="Bowler"></CricketPlayer>
      <CricketPlayer imgURL="./images/Virat.webp" name="Virat" team="RCB" role="Batting"></CricketPlayer>
    </div>
  );
}

export default App;
