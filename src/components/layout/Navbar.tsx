"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-accentrose/20 bg-blush/80 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <Link href="/" className="font-serif text-3xl font-bold tracking-tight text-textdark drop-shadow-sm hover:text-accentrose transition-colors">
                    Happy Nails
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-semibold tracking-wide transition-colors hover:text-accentrose relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-accentrose after:transition-transform after:duration-300 ${pathname === link.href ? "text-accentrose after:scale-x-100" : "text-textdark/80 after:scale-x-0"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Button asChild className="bg-accentrose hover:bg-mauve text-white rounded-full px-6 shadow-md transition-all duration-300 hover:shadow-lg">
                        <Link href="tel:01483475320">
                            <Phone className="mr-2 h-4 w-4" /> 01483 475320
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-textdark hover:bg-white/50 hover:text-accentrose">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-blush border-l-accentrose/20 pt-16">
                            <div className="flex flex-col space-y-6">
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={`text-xl font-serif transition-colors ${pathname === link.href ? "text-accentrose font-bold" : "text-textdark hover:text-accentrose"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <div className="pt-6 border-t border-accentrose/20 text-center">
                                    <Button asChild className="w-full bg-accentrose hover:bg-mauve text-white rounded-full py-6 mt-4 shadow-md">
                                        <Link href="tel:01483475320">
                                            <Phone className="mr-2 h-5 w-5" /> Call to Book
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
