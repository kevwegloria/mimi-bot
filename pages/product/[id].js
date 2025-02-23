import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
        <h1 className="font-bold text-3xl">{product.title}</h1>
        <p className="my-2">{product.description}</p>
        <p className="text-xl text-blue-500">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductPage;
