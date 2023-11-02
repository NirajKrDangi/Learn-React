import './style.css'
import webSeriesList from './webSeriesList'

function App() {
  return (
    <div className="web-series-container">
      {webSeriesList.map((series, index) => (
        <div key={index} className="web-series-item">
          <div className="card">
            <img src={series.imgsrc} alt={series.name} />
            <h3>{series.name}</h3>
            <p>{series.title}</p>
            <a href={series.watchLink} target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App