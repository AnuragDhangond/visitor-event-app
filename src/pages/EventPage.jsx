import { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';
import { Link } from 'react-router-dom';

function EventPage() {
  const { eventInfo, setEventInfo } = useContext(EventContext);
  const [eventName, setEventName] = useState('');
  const [organizerName, setOrganizerName] = useState('');

  //-----------------------------------------------------------------
  
  const handleSave = () => {
    setEventInfo({ eventName, organizerName });
  };

  //-----------------------------------------------------------------

  return (
    <div className="container">
      <h2>Event Info </h2>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Organizer Name"
        value={organizerName}
        onChange={(e) => setOrganizerName(e.target.value)}
      />
      <button onClick={handleSave}>Save Event Info</button>

      <h4>Current Event: {eventInfo.eventName}</h4>
      <h4>Organizer: {eventInfo.organizerName}</h4>

      <Link to="/">Back to Check-In</Link>
    </div>
  );
}

export default EventPage;
