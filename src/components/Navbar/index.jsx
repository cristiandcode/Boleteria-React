import { useState, useEffect } from "react";

const Navbar = ( { onSearch } ) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('1010 effect')
  }, [search, onSearch]);

  const handleInputChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleInputKeyDown = (evt) =>{
    if (evt.key === 'Enter'){
      onSearch(search)
    }
  }

  return (
    <div>
      <p>Mi boletera</p>
      <input
        placeholder="Busca tu evento favorito"
        onChange={handleInputChange}
        value={search}
        onKeyDown={handleInputKeyDown}
      />
    </div>
  );
};

export default Navbar;
