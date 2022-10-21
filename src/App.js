import "./assets/styles.css";

function App() {
  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">124</div>
          <div className="current-operand">121</div>
        </div>
        <button>C</button>
        <button>DEL</button>
        <button>%</button>
        <button>/</button>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>

        <button>Sc</button>
        <button>0</button>
        <button>.</button>
        <button>=</button>
      </div>
    </>
  );
}

export default App;
