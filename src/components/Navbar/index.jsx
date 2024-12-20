import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";

const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState("");

  useImperativeHandle(ref, () => ({
    search,
  }));

  const handleInputChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleInputKeyDown = (evt) => {
    if (evt.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <div
      ref={ref}
      style={{
        marginBottom: 14,
        width: "100%",
        display: "flex",
      }}
    >
      <div style={{ flex: 1, display: "flex" }}>
        <p
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Mi boletera
        </p>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <input
          placeholder="Busca tu evento favorito"
          onChange={handleInputChange}
          value={search}
          onKeyDown={handleInputKeyDown}
          style={{
            fontSize: 16,
            padding: "6px 12px",
            borderRadius: 4,
            border: "none",
            width: 200,
          }}
        />
        <Link
          to="/profile/my-info"
          style={{
            marginLeft: 24,
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Mi Profile
        </Link>
      </div>
    </div>
  );
});
Navbar.displayName = "Navbar";

export default Navbar;
