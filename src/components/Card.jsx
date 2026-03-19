function Card() {
  return (
    <div style={{
      width: "200px",
      border: "2px solid gold",
      borderRadius: "10px",
      padding: "10px",
      textAlign: "center",
      background: "#111",
      color: "white"
    }}>
      <img 
        src="https://via.placeholder.com/150" 
        alt="card"
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>Gojo Satoru</h3>
      <p>SSR ⭐</p>
    </div>
  );
}

export default Card;