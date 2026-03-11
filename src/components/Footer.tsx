import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () =>
<footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-md bg-gradient-accent flex items-center justify-center">
              <span className="font-display font-bold text-accent-foreground text-sm">BC</span>
            </div>
            <span className="font-display font-bold text-lg">Beyond Components</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Your trusted nationwide distributor of high-quality electronic and electro-mechanical components.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {["Products", "About", "Contact", "Request a Quote"].map((item) =>
          <li key={item}>
                <Link to={`/${item.toLowerCase().replace(/ /g, "-")}`} className="hover:text-electric transition-colors">
                  {item}
                </Link>
              </li>
          )}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Product Categories</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {["Electronic Components", "Electro-Mechanical Parts", "Connectors", "Switches & Relays", "Power Components"].map((item) =>
          <li key={item}>
                <Link to="/products" className="hover:text-electric transition-colors">{item}</Link>
              </li>
          )}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-electric" />
              <span>+1(931)339-5424</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-electric" />
              <span>beyondc@beckersbestshoes.ink</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-electric mt-0.5" />
              <span>1040 LOG CABIN<br/>
              LENHARTSVILLE, PA 19534-9168</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
        <p>© Beyond Components. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>;

export default Footer;