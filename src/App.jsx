import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VisitorPage from './pages/VisitorPage';
import EventPage from './pages/EventPage';
import { EventProvider } from './context/EventContext';
import './App.css';


function App() {
  return (
    <EventProvider>
      <BrowserRouter basename="/visitor-event-app">
        <Routes>
          <Route path="/" element={<VisitorPage />} />
          <Route path="/event" element={<EventPage />} />
        </Routes>
      </BrowserRouter>
    </EventProvider>
  );
}

export default App;
