import './App.css'
import { ContactsScreen } from './assets/prueba';


// Mock de ciudades y estados
const cities = [
  { id: 1, name: 'New York' },
  { id: 2, name: 'Los Angeles' },
];

const states = [
  { id: 1, name: 'Washington' },
  { id: 2, name: 'California' },
];

// Mock de contactos
const contacts = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6X2lldt_gy2tcbXCKBbKWNVBpH-f1Mcjsw&s',
    company: 'Example Corp',
    details: 'Contact details for John Doe',
    email: 'john@example.com',
    phone: { area_code: '123', number: '4567890' },
    addresses: [
      {
        line_1: '123 Main St',
        line_2: 'Apt 4B',
        zip_code: '10001',
        city_id: 1,
        state_id: 1,
      },
    ],
  },
];

function App() {

  return (
    <>
      <ContactsScreen contacts={contacts} cities={cities} states={states}/>
    </>
  )
}

export default App
