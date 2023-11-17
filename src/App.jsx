import { useState } from "react";
import Information from "./Components/InformationPlate";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    plate: "",
    date: "",
    timeInitial: "",
    timeFinal: "",
  });

  const [activo, setActivo] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setActivo(true);
  };

  return (
    <>
      <header className="title">
        <h1>Welcome to "Pico y Placa" Predictor</h1>
      </header>
      <section className="grid-container">
        <form onSubmit={handleSubmit} className="mainForm">
          <label htmlFor="plate">License plate number:</label>
          <input
            id="plate"
            type="text"
            name="plate"
            value={form.plate}
            onChange={handleChange}
            placeholder="EXM-1234"
            maxLength={8}
          />
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            max={`2023-12-31`}
            min={`2023-01-01`}
          />
          <section className="grid-time">
            <h3 className="title-section">Time</h3>

            <label htmlFor="timeInitial" className="initial">
              Initial
            </label>
            <input
              id="timeInitial"
              type="time"
              name="timeInitial"
              value={form.timeInitial}
              onChange={handleChange}
              className="initial-input"
            ></input>
            <label htmlFor="timeInitial" className="final">
              Final
            </label>
            <input
              id="timeFinal"
              type="time"
              name="timeFinal"
              value={form.timeFinal}
              onChange={handleChange}
              className="initial-final"
            ></input>
          </section>

          <input type="submit" value="Search" />
        </form>

        <footer className="answere">
          {activo && <Information form={form} />}
        </footer>
      </section>
    </>
  );
}

export default App;
