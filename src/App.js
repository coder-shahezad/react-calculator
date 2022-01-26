import './App.css';
import CalButton from './components/CalButton/CalButton';

function App() {
  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-row text-center">
        <div className="basis-1/2">
          <CalButton label="01" />
        </div>
        <div className="basis-1/2">
          <CalButton label="02" />
        </div>
        <div className="basis-1/2">
          <CalButton label="03" />
        </div>
        <div className="basis-1/2">
          <CalButton label="04" />
        </div>
        <div className="basis-1/2">
          <CalButton label="05" />
        </div>
        {/* <div className="basis-1/2">
          <CalButton label="06" />
        </div>
        <div className="basis-1/2">
          <CalButton label="07" />
        </div>
        <div className="basis-1/2">
          <CalButton label="08" />
        </div>
        <div className="basis-1/2">
          <CalButton label="09" />
        </div>
        <div className="basis-1/2">
          <CalButton label="00" />
        </div> */}
      </div>
    </div>
  );
}

export default App;
