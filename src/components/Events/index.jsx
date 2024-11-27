import  EventItem from './components/EventItem';
import eventsJSON from '../../data/events.json';
import { useState } from 'react';

const Events = () => {
    const [data] = useState(eventsJSON)
    const events = data._embedded.events;

    const handleEventItemClick = (id) =>{
        console.log('El evento fue clickeado', id);
    }
    
  return (
    <div>
        Eventos
        {events.map((eventItem) =>(
        <EventItem 
        key={`event-item${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images [0].url}
        onEventClick={handleEventItemClick}
        id={eventItem.id}

    />
    ))};
    </div>
    
  )
}
export default Events;