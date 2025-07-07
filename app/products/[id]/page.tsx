import { stripe } from "@/lib/stripe";
import { ProductDetails } from "@/components/ProductDetails";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });
  const plainProduct = JSON.parse(JSON.stringify(product));
  return <ProductDetails product={plainProduct} />;
}
