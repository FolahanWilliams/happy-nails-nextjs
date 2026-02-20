import Link from "next/link";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-accentrose/20 text-textdark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="font-serif text-3xl font-bold text-accentrose mb-4 drop-shadow-sm">Happy Nails</h3>
                        <p className="text-sm text-textdark/70 mb-6 max-w-xs leading-relaxed">
                            Knaphill's favourite nail salon offering premium manicures, pedicures, and bespoke nail art in a serene environment.
                        </p>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-mauve hover:text-accentrose transition-colors font-medium text-sm"
                        >
                            <Instagram className="h-5 w-5" />
                            <span>Follow us on Instagram</span>
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="font-serif text-xl font-semibold mb-6 text-textdark">Visit Us</h4>
                        <div className="space-y-4">
                            <a href="https://maps.google.com/?q=Northpoint+House+52+High+St+Knaphill+Woking+Surrey+GU21+2PY" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 text-sm text-textdark/80 hover:text-accentrose transition-colors">
                                <MapPin className="text-accentrose h-5 w-5 flex-shrink-0 mt-0.5" />
                                <span className="leading-relaxed">Northpoint House, 52 High St,<br />Knaphill, Woking, Surrey,<br />GU21 2PY</span>
                            </a>
                            <a href="tel:01483475320" className="flex items-center space-x-3 text-sm text-textdark/80 hover:text-accentrose transition-colors">
                                <Phone className="text-accentrose h-5 w-5 flex-shrink-0" />
                                <span className="font-medium">01483 475320</span>
                            </a>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="font-serif text-xl font-semibold mb-6 text-textdark">Opening Hours</h4>
                        <div className="flex items-start space-x-3 text-sm text-textdark/80">
                            <Clock className="text-accentrose h-5 w-5 flex-shrink-0 mt-0.5" />
                            <ul className="space-y-2 w-full max-w-[180px]">
                                <li className="flex justify-between items-center">
                                    <span className="font-medium">Mon - Sat</span>
                                    <span className="text-textdark/60">9am - 6pm</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="font-medium">Sunday</span>
                                    <span className="text-accentrose font-medium">Closed</span>
                                </li>
                            </ul>
                        </div>
                        <p className="text-xs text-textdark/50 mt-6 italic">*Please call to confirm holiday hours</p>
                    </div>

                </div>

                <Separator className="bg-accentrose/20 mb-6" />

                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-textdark/60">
                    <p>&copy; {new Date().getFullYear()} Happy Nails Knaphill. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 space-x-6 flex">
                        <Link href="/" className="hover:text-accentrose transition-colors">Privacy Policy</Link>
                        <Link href="/" className="hover:text-accentrose transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
