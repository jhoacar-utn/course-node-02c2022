import ToDosComponent from '../../molecules/ToDos';
import NavBar from '../../organisms/NavBar';

function ToDos() {
  return (
    <div>
      <NavBar />
      Lista De Tareas:
      <ToDosComponent />
    </div>
  );
}

export default ToDos;
