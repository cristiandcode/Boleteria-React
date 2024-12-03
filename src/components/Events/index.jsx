import  EventItem from './components/EventItem';
import eventsJSON from '../../data/events.json';
import { useState } from 'react';

const Events = ({ searchTerm }) => {
    const [data] = useState(eventsJSON)
    const events = data._embedded.events;

    const handleEventItemClick = (id) =>{
        console.log('El evento fue clickeado', id);
    }
    const renderEvents = () =>{
      let eventsFiltered = events;

      if (searchTerm.length > 0){
        eventsFiltered = eventsFiltered.filter((item) => item.name.toLocaleLowerCase().includes(searchTerm));
      }

      return eventsFiltered.map((eventItem) =>(
        <EventItem 
        key={`event-item${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images [0].url}
        onEventClick={handleEventItemClick}
        id={eventItem.id}
    />
    ))
    }
  return (
    <div>
        Eventos
        {renderEvents()};
    </div>
    
  )
}
export default Events;