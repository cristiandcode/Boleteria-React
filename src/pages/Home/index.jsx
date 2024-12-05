import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventsData from '../../components/hooks/useEventsData'

  const Home = () => {
    const { events, isLoading, error,fetchEvents } = useEventsData();
    const [searchTerm, setSearchTerm] = useState("");
    const containerRef = useRef();


      useEffect(()=>{
        fetchEvents()
      },[])

    const handleNavbarSearch = (term) => {
      setSearchTerm(term);
      fetchEvents(`&keyword=${term}`);

    };

    return (
      <>
        <Navbar onSearch={handleNavbarSearch} ref={containerRef}></Navbar>
        {isLoading ? <div>Cargando resultados...</div> :  <Events searchTerm={searchTerm} events={events}></Events>}
        {!!error  && <div>Ha ocurrido un error</div>}
      </>
    );
  }
export default Home;
