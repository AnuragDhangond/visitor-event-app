import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { EventContext } from '../context/EventContext';

function VisitorPage() {
  const inputRef = useRef(null); 
  const counterRef = useRef(0);
  const [visitorName, setVisitorName] = useState('');
  const [visitorList, setVisitorList] = useState([]);
  const [welcomeMsg, setWelcomeMsg] = useState('');
  const { eventInfo } = useContext(EventContext);

//   -------------------------------------------------------------------
  useEffect(() => {
    inputRef.current.focus();
  }, []);

//   -------------------------------------------------------------------

  useEffect(() => {
    const lastVisitor = visitorList.at(-1);
    if (lastVisitor) {
      setWelcomeMsg(`Welcome, ${lastVisitor}!`);
    }}, [visitorList]);
//   -------------------------------------------------------------------

  const handleCheckIn = () => {
    const name = visitorName.trim();
    if (name) {
      counterRef.current += 1;
      setVisitorList([...visitorList, name]);
      setVisitorName('');
  }
  };
//   -------------------------------------------------------------------

  return (
    <div className="container">
      <h2>Visitor Check-In</h2>

      <input
        ref={inputRef}
        value={visitorName}
        onChange={(e) => setVisitorName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleCheckIn}>Check In</button>

      {welcomeMsg && <p>{welcomeMsg}</p>}
      <p>Total Visitors: {counterRef.current}</p>

      <ul>
        {visitorList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <p><strong>Event:</strong> {eventInfo.eventName}</p>
      <p><strong>Organizer:</strong> {eventInfo.organizerName}</p>

      <Link to="/event">Go to Event Manager</Link>
    </div>
  );
}

export default VisitorPage;
