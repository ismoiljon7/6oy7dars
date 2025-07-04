import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="border rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-40 object-cover rounded-md mb-2"
        />
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p className="text-sm text-gray-600 truncate">{product.description}</p>
        <p className="mt-2 font-semibold text-orange-600">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
