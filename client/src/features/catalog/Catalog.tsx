import { Product } from "../../app/models/product"
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";

function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Catalog.list().then(data => setProducts(data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <LoadingComponent message="Loading products..." />
    return (
        <>
            <ProductList products={products} />
        </>
    )
}

export default Catalog