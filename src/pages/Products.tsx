import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Filter, Cpu, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import { products, categories } from "@/data/products";

const manufacturers = [...new Set(products.map((p) => p.manufacturer))];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.partNumber.toLowerCase().includes(search.toLowerCase());
      const matchCat = !selectedCategory || p.category === selectedCategory;
      const matchMfr = !selectedManufacturer || p.manufacturer === selectedManufacturer;
      return matchSearch && matchCat && matchMfr;
    });
  }, [search, selectedCategory, selectedManufacturer]);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-3">Product Catalog</h1>
          <p className="text-primary-foreground/70 mb-8">Browse our extensive range of electronic and electro-mechanical components.</p>
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by product name or part number..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:bg-primary-foreground/15"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-24 space-y-6">
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Filter className="w-4 h-4" /> Categories
                  </h3>
                  <div className="space-y-1">
                    <button
                      onClick={() => { setSelectedCategory(""); setSearchParams({}); }}
                      className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${!selectedCategory ? "bg-accent/10 text-accent font-medium" : "text-muted-foreground hover:bg-muted"}`}
                    >
                      All Categories
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.name}
                        onClick={() => { setSelectedCategory(cat.name); setSearchParams({ category: cat.name }); }}
                        className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${selectedCategory === cat.name ? "bg-accent/10 text-accent font-medium" : "text-muted-foreground hover:bg-muted"}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-3">Manufacturer</h3>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSelectedManufacturer("")}
                      className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${!selectedManufacturer ? "bg-accent/10 text-accent font-medium" : "text-muted-foreground hover:bg-muted"}`}
                    >
                      All Manufacturers
                    </button>
                    {manufacturers.map((m) => (
                      <button
                        key={m}
                        onClick={() => setSelectedManufacturer(m)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${selectedManufacturer === m ? "bg-accent/10 text-accent font-medium" : "text-muted-foreground hover:bg-muted"}`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">{filtered.length} products found</p>
                <div className="flex gap-1">
                  <Button variant={viewMode === "grid" ? "default" : "ghost"} size="icon" onClick={() => setViewMode("grid")} className="w-8 h-8">
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button variant={viewMode === "list" ? "default" : "ghost"} size="icon" onClick={() => setViewMode("list")} className="w-8 h-8">
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map((product, i) => (
                    <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                      <Link
                        to={`/products/${product.id}`}
                        className="group block rounded-xl bg-card border border-border hover:border-accent/30 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden"
                      >
                        <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                          <Cpu className="w-14 h-14 text-muted-foreground/20 group-hover:text-accent/30 transition-colors" />
                        </div>
                        <div className="p-5">
                          <p className="text-xs font-mono text-muted-foreground mb-1">{product.partNumber}</p>
                          <h3 className="font-display font-semibold text-foreground text-sm mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
                          <p className="text-xs text-muted-foreground mb-3">{product.manufacturer}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-foreground">${product.price.toFixed(2)}</span>
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${product.inStock ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                              {product.inStock ? "In Stock" : "Lead Time"}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {filtered.map((product, i) => (
                    <motion.div key={product.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                      <Link
                        to={`/products/${product.id}`}
                        className="group flex items-center gap-6 p-4 rounded-xl bg-card border border-border hover:border-accent/30 shadow-card hover:shadow-elevated transition-all"
                      >
                        <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center shrink-0">
                          <Cpu className="w-8 h-8 text-muted-foreground/20" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-mono text-muted-foreground">{product.partNumber}</p>
                          <h3 className="font-display font-semibold text-foreground text-sm group-hover:text-accent transition-colors">{product.name}</h3>
                          <p className="text-xs text-muted-foreground">{product.manufacturer} · {product.category}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="font-semibold text-foreground">${product.price.toFixed(2)}</p>
                          <span className={`text-xs font-medium ${product.inStock ? "text-emerald-600" : "text-amber-600"}`}>
                            {product.inStock ? "In Stock" : "Lead Time"}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}

              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <Cpu className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-foreground mb-2">No products found</h3>
                  <p className="text-sm text-muted-foreground">Try adjusting your filters or search terms.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
