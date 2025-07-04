import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://dummyjson.com/products");

  if (loading) return <p className="text-center mt-10">Yuklanmoqda...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-10">Xatolik: {error}</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
