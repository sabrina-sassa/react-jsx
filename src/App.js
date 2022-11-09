import './App.css';
import { Address } from './component/profile/address';
import { FullName } from './component/profile/fullName';
import { ProfilPhoto } from './component/profile/profilePhoto';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App" class='position-absolute top-50 start-50 translate-middle shadow-lg p-3 mb-5 bg-body rounded'>
      <ProfilPhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
