import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, ShoppingCart, FileText, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import { useCart } from "@/store/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground mb-4">Product Not Found</h1>
          <Button asChild variant="outline"><Link to="/products">Back to Products</Link></Button>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center border border-border">
            <div className="text-center">
              <div className="w-32 h-32 rounded-2xl bg-accent/10 mx-auto flex items-center justify-center mb-4">
                <ShoppingCart className="w-16 h-16 text-accent/30" />
              </div>
              <p className="text-sm text-muted-foreground">Product Image</p>
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="text-sm font-mono text-accent mb-2">{product.partNumber}</p>
            <h1 className="text-3xl font-display font-bold text-foreground mb-2">{product.name}</h1>
            <p className="text-sm text-muted-foreground mb-6">by {product.manufacturer} · {product.category}</p>

            <div className="flex items-center gap-3 mb-6">
              {product.inStock ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                  <CheckCircle className="w-4 h-4" /> In Stock
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
                  <Clock className="w-4 h-4" /> Lead Time Required
                </span>
              )}
            </div>

            <p className="text-foreground/80 leading-relaxed mb-8">{product.description}</p>

            <div className="text-3xl font-display font-bold text-foreground mb-8">${product.price.toFixed(2)}<span className="text-sm font-normal text-muted-foreground ml-1">/unit</span></div>

            <div className="flex gap-3 mb-10">
              <Button onClick={handleAddToCart} size="lg" className="bg-gradient-accent text-accent-foreground font-semibold flex-1">
                <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <FileText className="w-4 h-4 mr-2" /> Request Quote
              </Button>
            </div>

            {/* Specs */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="bg-muted px-5 py-3">
                <h3 className="font-display font-semibold text-foreground text-sm">Technical Specifications</h3>
              </div>
              <div className="divide-y divide-border">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between px-5 py-3 text-sm">
                    <span className="text-muted-foreground">{key}</span>
                    <span className="font-medium text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="ghost" className="mt-4 text-accent hover:text-accent">
              <Download className="w-4 h-4 mr-2" /> Download Datasheet (PDF)
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
