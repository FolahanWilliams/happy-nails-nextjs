"use client";

import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
    return (
        <div className="flex flex-col flex-grow bg-white">

            {/* Header */}
            <section className="bg-blush py-20 text-center px-4">
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-textdark mb-6 tracking-tight">Contact Us</h1>
                <p className="text-lg text-textdark/70 max-w-2xl mx-auto font-medium">
                    Ready to book an appointment or have a question? We'd love to hear from you.
                </p>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div className="flex flex-col space-y-20 items-center text-center">

                        {/* Contact Info */}
                        <div className="w-full">
                            <h2 className="font-serif text-3xl font-bold text-textdark mb-12">Salon Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">

                                <div className="flex flex-col items-center p-8 rounded-2xl bg-blush/30 border border-accentrose/10 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-accentrose mb-6 shadow-sm">
                                        <Phone className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold text-textdark mb-4">Phone</h3>
                                    <a href="tel:01483475320" className="text-lg text-textdark/80 hover:text-accentrose transition-colors font-medium">
                                        01483 475320
                                    </a>
                                </div>

                                <div className="flex flex-col items-center p-8 rounded-2xl bg-blush/30 border border-accentrose/10 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-accentrose mb-6 shadow-sm">
                                        <MapPin className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold text-textdark mb-4">Address</h3>
                                    <p className="text-lg text-textdark/80 font-medium leading-relaxed">
                                        Northpoint House, 52 High St,<br />
                                        Knaphill, Woking, GU21 2PY
                                    </p>
                                </div>

                                <div className="flex flex-col items-center p-8 rounded-2xl bg-blush/30 border border-accentrose/10 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-accentrose mb-6 shadow-sm">
                                        <Clock className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold text-textdark mb-4">Hours</h3>
                                    <div className="text-lg text-textdark/80 font-medium space-y-2">
                                        <div>Mon - Sat: 9am - 6pm</div>
                                        <div className="text-accentrose font-bold">Sunday: Closed</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Map */}
                        <div className="w-full">
                            <h2 className="font-serif text-3xl font-bold text-textdark mb-8">Find Us</h2>
                            <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                                <iframe
                                    src="https://maps.google.com/maps?q=Northpoint%20House,%2052%20High%20St,%20Knaphill,%20Woking%20GU21%202PY&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
