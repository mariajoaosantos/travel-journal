import Header from './components/Header';
import Log from './components/Logs';
import data from './data';

function App() {
  const logs = data.map((item) => {
    return (
      <Log 
      key={item.id}
      {...item}
      />
    )
  })
  return (
    <div>
    <Header />
    {logs}
    </div>
  );
}

export default App;
