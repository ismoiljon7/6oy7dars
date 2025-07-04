import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ProductDetail = () => {
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://dummyjson.com/products/${id}`);

  if (loading) return <p className="text-center mt-10">Yuklanmoqda...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-10">Xatolik: {error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-80 object-cover rounded-xl mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg font-semibold text-orange-600 mb-2">
        ${product.price}
      </p>
      <p className="text-sm text-gray-500">Brend: {product.brand}</p>
      <p className="text-sm text-gray-500">Kategoriya: {product.category}</p>
    </div>
  );
};

export default ProductDetail;
