import './App.css';

function App() {
  return (
    <div className='App'>
      <form>
        <input name='firstName' type='text' value id='firstname' />
        <input name='email' type='text' value id='email' />
        <button type='submit'>Add People</button>
      </form>
      <h2>People's List</h2>
    </div>
  )
}

export default App;
