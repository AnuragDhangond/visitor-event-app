import { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [eventInfo, setEventInfo] = useState({
    eventName: '',organizerName: ''}
);

  return (
    <EventContext.Provider value={{ eventInfo ,setEventInfo}}>
      {children}
    </EventContext.Provider>
  );
};
