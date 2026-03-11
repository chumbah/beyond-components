export interface Product {
  id: string;
  name: string;
  partNumber: string;
  category: string;
  manufacturer: string;
  price: number;
  image: string;
  inStock: boolean;
  description: string;
  specs: Record<string, string>;
}

export const categories = [
  { name: "Electronic Components", icon: "Cpu", count: 1250 },
  { name: "Electro-Mechanical Parts", icon: "Cog", count: 840 },
  { name: "Connectors", icon: "Cable", count: 620 },
  { name: "Switches & Relays", icon: "ToggleRight", count: 430 },
  { name: "Power Components", icon: "Zap", count: 380 },
  { name: "Sensors", icon: "Radio", count: 290 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "High-Performance Microcontroller",
    partNumber: "MCU-ARM-3200",
    category: "Electronic Components",
    manufacturer: "TechCore",
    price: 12.50,
    image: "",
    inStock: true,
    description: "32-bit ARM Cortex-M4 microcontroller with integrated DSP and floating-point unit.",
    specs: { "Core": "ARM Cortex-M4", "Clock Speed": "200 MHz", "Flash": "1 MB", "RAM": "256 KB", "Package": "LQFP-100" },
  },
  {
    id: "2",
    name: "Precision Power Relay",
    partNumber: "RLY-PWR-240",
    category: "Switches & Relays",
    manufacturer: "SwitchPro",
    price: 8.75,
    image: "",
    inStock: true,
    description: "High-reliability power relay rated for 240VAC/30A with gold-plated contacts.",
    specs: { "Coil Voltage": "12V DC", "Contact Rating": "30A / 240VAC", "Life": "100,000 cycles", "Type": "SPDT" },
  },
  {
    id: "3",
    name: "Industrial D-Sub Connector",
    partNumber: "CON-DSUB-25M",
    category: "Connectors",
    manufacturer: "ConnectAll",
    price: 3.20,
    image: "",
    inStock: true,
    description: "25-pin D-Sub male connector with gold-plated contacts for industrial applications.",
    specs: { "Pins": "25", "Gender": "Male", "Plating": "Gold", "Rating": "IP67" },
  },
  {
    id: "4",
    name: "Brushless DC Motor",
    partNumber: "MOT-BLDC-4800",
    category: "Electro-Mechanical Parts",
    manufacturer: "MotionTech",
    price: 45.00,
    image: "",
    inStock: false,
    description: "High-efficiency brushless DC motor for precision motion control applications.",
    specs: { "Voltage": "24V DC", "Speed": "4800 RPM", "Torque": "0.5 Nm", "Efficiency": "92%" },
  },
  {
    id: "5",
    name: "Switching Power Supply Module",
    partNumber: "PSU-SW-500W",
    category: "Power Components",
    manufacturer: "PowerMax",
    price: 28.90,
    image: "",
    inStock: true,
    description: "500W enclosed switching power supply with universal AC input and multi-output DC.",
    specs: { "Input": "85-264VAC", "Output": "5V/12V/24V", "Power": "500W", "Efficiency": "90%" },
  },
  {
    id: "6",
    name: "SMD Ceramic Capacitor Kit",
    partNumber: "CAP-SMD-KIT",
    category: "Electronic Components",
    manufacturer: "CapTech",
    price: 15.99,
    image: "",
    inStock: true,
    description: "Assorted kit of 1000 SMD ceramic capacitors in popular values from 10pF to 100µF.",
    specs: { "Quantity": "1000 pcs", "Values": "10pF - 100µF", "Package": "0402/0603/0805", "Voltage": "16V-50V" },
  },
  {
    id: "7",
    name: "Industrial Temperature Sensor",
    partNumber: "SEN-TEMP-PT100",
    category: "Sensors",
    manufacturer: "SenseLogic",
    price: 22.50,
    image: "",
    inStock: true,
    description: "PT100 RTD temperature sensor with stainless steel probe for industrial environments.",
    specs: { "Type": "PT100 RTD", "Range": "-200°C to +600°C", "Accuracy": "±0.1°C", "Probe": "6mm SS316" },
  },
  {
    id: "8",
    name: "Heavy-Duty Toggle Switch",
    partNumber: "SW-TOG-HD20",
    category: "Switches & Relays",
    manufacturer: "SwitchPro",
    price: 6.40,
    image: "",
    inStock: true,
    description: "MIL-spec heavy-duty toggle switch rated for 20A at 250VAC.",
    specs: { "Rating": "20A / 250VAC", "Action": "ON-OFF-ON", "Terminal": "Screw", "Spec": "MIL-PRF-8805" },
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "Procurement Manager",
    company: "NexaTech Manufacturing",
    quote: "Beyond Components has been our go-to supplier for over 5 years. Their reliability and technical support are unmatched in the industry.",
  },
  {
    name: "Michael Torres",
    role: "Lead Engineer",
    company: "Industrial Dynamics Corp",
    quote: "The quality of components we receive is consistently excellent. Their datasheets and technical resources save us hours of research.",
  },
  {
    name: "David Kim",
    role: "VP of Operations",
    company: "GridPower Systems",
    quote: "Fast delivery, competitive pricing, and a team that truly understands our technical requirements. A real partner, not just a vendor.",
  },
];
