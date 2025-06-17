import ProductCard from "./product-card.tsx";

function App() {
  return (
      <div>
          <ProductCard
              title="Asus"
              origin="Китай"
              price={3000}
              currency="USD"
          />
      </div>
  )
}

export default App
