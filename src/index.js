import ReactDOM from 'react-dom/client';
import Header from "../src/Components/Layout/Header"
import AddContact from "../src/Components/ContactPages/AddContact"
import ContactIndex from "../src/Components/ContactPages/ContactIndex"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <ContactIndex />
  </div>

);

