import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CheckCircle2, CreditCard, Box, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { useCart } from "@/store/CartContext";
import { useAuth } from "@/store/AuthContext";
import { toast } from "sonner";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isProcessing, setIsProcessing] = useState(false);

  // Form states
  const [shippingDetails, setShippingDetails] = useState({
    fullName: user?.name || "",
    address: "",
    city: "",
    zipCode: "",
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  useEffect(() => {
    if (items.length === 0 && step !== 3) {
      navigate("/cart");
      toast.error("Your cart is empty. Add items before checking out.");
    }
  }, [items, navigate, step]);

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Mock payment processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    clearCart();
    setStep(3);
    toast.success("Payment successful! Order placed.");
  };

  if (items.length === 0 && step !== 3) {
    return null; // The useEffect will redirect
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Progress Indication */}
          <div className="flex items-center justify-between mb-12 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted -z-10 rounded-full"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-accent -z-10 rounded-full transition-all duration-300" style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
            
            {[
              { num: 1, label: "Shipping", icon: Truck },
              { num: 2, label: "Payment", icon: CreditCard },
              { num: 3, label: "Success", icon: CheckCircle2 }
            ].map((s) => (
              <div key={s.num} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold relative z-10 transition-colors ${step >= s.num ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground border-2 border-border"}`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <span className={`mt-2 text-sm font-medium ${step >= s.num ? "text-foreground" : "text-muted-foreground"}`}>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {step === 1 && (
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-accent" /> Shipping Information
                  </h2>
                  <form onSubmit={handleShippingSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        value={shippingDetails.fullName}
                        onChange={(e) => setShippingDetails({ ...shippingDetails, fullName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={shippingDetails.address}
                        onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={shippingDetails.city}
                          onChange={(e) => setShippingDetails({ ...shippingDetails, city: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          value={shippingDetails.zipCode}
                          onChange={(e) => setShippingDetails({ ...shippingDetails, zipCode: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full mt-6 bg-gradient-accent text-accent-foreground font-semibold">
                      Continue to Payment
                    </Button>
                  </form>
                </div>
              )}

              {step === 2 && (
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-accent" /> Payment Details
                  </h2>
                  <div className="mb-6 p-4 bg-muted/50 rounded-lg text-sm text-foreground/80 flex gap-3">
                    <Box className="w-5 h-5 text-accent shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Mock Checkout</p>
                      <p>This is a simulated payment flow. You can enter any mock details below.</p>
                    </div>
                  </div>
                  <form onSubmit={handlePaymentSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        value={paymentDetails.cardNumber}
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                        required
                        maxLength={19}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          value={paymentDetails.expiry}
                          onChange={(e) => setPaymentDetails({ ...paymentDetails, expiry: e.target.value })}
                          required
                          maxLength={5}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          value={paymentDetails.cvv}
                          onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                          required
                          maxLength={4}
                        />
                      </div>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1" disabled={isProcessing}>
                        Back
                      </Button>
                      <Button type="submit" className="flex-1 bg-gradient-accent text-accent-foreground font-semibold" disabled={isProcessing}>
                        {isProcessing ? "Processing..." : `Pay $${totalPrice.toFixed(2)}`}
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {step === 3 && (
                <div className="bg-card border border-border rounded-xl p-10 shadow-sm text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">Order Confirmed!</h2>
                  <p className="text-muted-foreground mb-8">
                    Your order has been successfully placed. We've sent a confirmation email to your address.
                  </p>
                  <Button asChild className="bg-gradient-accent text-accent-foreground font-semibold px-8">
                    <Link to="/products">Continue Shopping</Link>
                  </Button>
                </div>
              )}
            </div>

            {step !== 3 && (
              <div className="md:col-span-1">
                <div className="bg-muted border border-border rounded-xl p-6 shadow-sm sticky top-24">
                  <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
                  <div className="space-y-4 mb-4 max-h-[300px] overflow-y-auto pr-2">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3 text-sm">
                        <span className="font-semibold">{item.quantity}x</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate text-foreground">{item.name}</p>
                          <p className="text-muted-foreground text-xs">{item.partNumber}</p>
                        </div>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-emerald-600 font-medium">Free</span>
                    </div>
                    <div className="border-t border-border mt-2 pt-2 flex justify-between font-bold text-base text-foreground">
                      <span>Total</span>
                      <span className="text-accent">${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
