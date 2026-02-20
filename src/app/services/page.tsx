import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hand, Scissors, Sparkle, Layers, Paintbrush, Heart } from "lucide-react";

const services = [
    {
        category: "Manicures",
        icon: Hand,
        description: "Classic nail care for beautiful, healthy hands.",
        items: [
            { name: "Classic Manicure", price: "Price on request" },
            { name: "File & Polish", price: "Price on request" },
            { name: "Luxury Spa Manicure", price: "Price on request" },
        ]
    },
    {
        category: "Pedicures",
        icon: Heart,
        description: "Relaxing treatments for tired soles and toes.",
        items: [
            { name: "Classic Pedicure", price: "Price on request" },
            { name: "Luxury Spa Pedicure", price: "Price on request" },
            { name: "File & Polish Toes", price: "Price on request" },
        ]
    },
    {
        category: "Gel Polish",
        icon: Sparkle,
        description: "Long-lasting, chip-resistant vibrant colour.",
        items: [
            { name: "Gel Colour Hands", price: "Price on request" },
            { name: "Gel Colour Toes", price: "Price on request" },
            { name: "Gel Removal & Redo", price: "Price on request" },
            { name: "Safe Gel Removal", price: "Price on request" },
        ]
    },
    {
        category: "SNS Nails",
        icon: Layers,
        description: "Dipping powder for durable, natural-looking nails.",
        items: [
            { name: "SNS Full Set (Extensions)", price: "Price on request" },
            { name: "SNS Overlay (Natural Nails)", price: "Price on request" },
            { name: "SNS Infill", price: "Price on request" },
        ]
    },
    {
        category: "Acrylic Nails",
        icon: Scissors,
        description: "Classic enhancement for dramatic length and ultimate strength.",
        items: [
            { name: "Acrylic Full Set", price: "Price on request" },
            { name: "Acrylic Infill", price: "Price on request" },
            { name: "Ombré Full Set", price: "Price on request" },
            { name: "Acrylic Removal", price: "Price on request" },
        ]
    },
    {
        category: "Nail Art",
        icon: Paintbrush,
        description: "Customise your look with bespoke designs.",
        items: [
            { name: "Simple Design (per nail)", price: "Price on request" },
            { name: "Complex Design / Chrome", price: "Price on request" },
            { name: "French Tip Add-on", price: "Price on request" },
            { name: "Nail Repair", price: "Price on request" },
        ]
    }
];

export default function Services() {
    return (
        <div className="flex flex-col flex-grow bg-white">

            {/* Header */}
            <section className="bg-blush py-20 text-center px-4">
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-textdark mb-6 tracking-tight">Our Services</h1>
                <p className="text-lg text-textdark/70 max-w-2xl mx-auto font-medium">
                    Explore our extensive range of premium nail treatments. From elegant classics to intricate modern art, we perfect every detail.
                </p>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((category, index) => (
                            <Card key={index} className="bg-[#FFF5F7]/30 border-accentrose/20 shadow-sm hover:shadow-md transition-all duration-300">
                                <CardHeader>
                                    <div className="flex items-center space-x-3 mb-2">
                                        <div className="p-2 bg-white rounded-lg shadow-sm border border-accentrose/10">
                                            <category.icon className="h-6 w-6 text-accentrose" />
                                        </div>
                                        <CardTitle className="font-serif text-2xl text-textdark">{category.category}</CardTitle>
                                    </div>
                                    <CardDescription className="text-base text-textdark/70">{category.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4 pt-2">
                                        {category.items.map((item, idx) => (
                                            <li key={idx} className="flex justify-between items-center group">
                                                <span className="text-textdark font-medium group-hover:text-accentrose transition-colors">{item.name}</span>
                                                <div className="flex-grow border-b border-dotted border-textdark/20 mx-4 mt-2"></div>
                                                <Badge variant="secondary" className="bg-white text-accentrose border border-accentrose/20 font-semibold group-hover:bg-accentrose group-hover:text-white transition-colors">
                                                    {item.price}
                                                </Badge>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
}
