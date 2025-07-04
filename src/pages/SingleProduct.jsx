import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function SingleProduct() {
  const { id } = useParams();
  const { data: product, isPending } = useFetch(
    "https://dummyjson.com/product" + id
  );

  if (isPending) {
    <h1>Loading ...</h1>;
  }

  return (
    <>
      {product && (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
