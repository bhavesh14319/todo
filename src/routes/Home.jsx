
import Todo from '../components/Todo';

const Home = () => {
  return (
    // <div className="wrapper"> remove the div
    <div className="todos">

      <div className='header'>
        <h1>TODOS</h1>
        <p>Items will persist in the browser local storage</p>
      </div>
        <Todo />
    </div>
    // </div>
  );
};
export default Home;
