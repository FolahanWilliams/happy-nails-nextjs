import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hand, Scissors, Sparkle, Layers, Paintbrush, Heart } from "lucide-react";

const services = [
    {
        category: "Manicures",
        icon: Hand,
        description: "Classic nail care for beautiful, healthy hands.",
        items: [
            { name: "Classic Manicure", price: "From £20" },
            { name: "File & Polish", price: "From £15" },
            { name: "Luxury Spa Manicure", price: "From £35" },
        ]
    },
    {
        category: "Pedicures",
        icon: Heart,
        description: "Relaxing treatments for tired soles and toes.",
        items: [
            { name: "Classic Pedicure", price: "From £25" },
            { name: "Luxury Spa Pedicure", price: "From £40" },
            { name: "File & Polish Toes", price: "From £15" },
        ]
    },
    {
        category: "Gel Polish",
        icon: Sparkle,
        description: "Long-lasting, chip-resistant vibrant colour.",
        items: [
            { name: "Gel Colour Hands", price: "From £28" },
            { name: "Gel Colour Toes", price: "From £28" },
            { name: "Gel Removal & Redo", price: "From £32" },
            { name: "Safe Gel Removal", price: "From £10" },
        ]
    },
    {
        category: "SNS Nails",
        icon: Layers,
        description: "Dipping powder for durable, natural-looking nails.",
        items: [
            { name: "SNS Full Set (Extensions)", price: "From £40" },
            { name: "SNS Overlay (Natural Nails)", price: "From £35" },
            { name: "SNS Infill", price: "From £30" },
        ]
    },
    {
        category: "Acrylic Nails",
        icon: Scissors,
        description: "Classic enhancement for dramatic length and ultimate strength.",
        items: [
            { name: "Acrylic Full Set", price: "From £38" },
            { name: "Acrylic Infill", price: "From £28" },
            { name: "Ombré Full Set", price: "From £45" },
            { name: "Acrylic Removal", price: "From £15" },
        ]
    },
    {
        category: "Nail Art",
        icon: Paintbrush,
        description: "Customise your look with bespoke designs.",
        items: [
            { name: "Simple Design (per nail)", price: "From £3" },
            { name: "Complex Design / Chrome", price: "Price on request" },
            { name: "French Tip Add-on", price: "From £5" },
            { name: "Nail Repair", price: "From £3" },
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

                    <div className="mt-16 text-center text-sm text-textdark/60 italic border-t border-accentrose/20 pt-8">
                        * All prices are starting prices and may vary based on nail length, condition, and specific design requests. Please consult your technician before your service begins.
                    </div>
                </div>
            </section>

        </div>
    );
}
