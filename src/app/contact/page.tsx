"use client";

import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Normally handled via Web3Forms or an API route
        alert("Thank you for your message! We will get back to you shortly.");
    };

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
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info & Map */}
                        <div className="flex flex-col space-y-12">
                            <div>
                                <h2 className="font-serif text-3xl font-bold text-textdark mb-8">Salon Information</h2>
                                <div className="space-y-6">

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center flex-shrink-0 text-accentrose">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-xl font-bold text-textdark mb-1">Phone</h3>
                                            <a href="tel:01483475320" className="text-lg text-textdark/70 hover:text-accentrose transition-colors font-medium">
                                                01483 475320
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center flex-shrink-0 text-accentrose">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-xl font-bold text-textdark mb-1">Address</h3>
                                            <p className="text-lg text-textdark/70 font-medium leading-relaxed">
                                                Northpoint House, 52 High St,<br />
                                                Knaphill, Woking,<br />
                                                Surrey, GU21 2PY
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center flex-shrink-0 text-accentrose">
                                            <Clock className="h-6 w-6" />
                                        </div>
                                        <div className="w-full">
                                            <h3 className="font-serif text-xl font-bold text-textdark mb-3">Hours</h3>
                                            <div className="bg-blush/30 rounded-xl p-4 w-full max-w-xs border border-accentrose/20 text-textdark/80 font-medium">
                                                <div className="flex justify-between mb-2">
                                                    <span>Mon - Sat</span>
                                                    <span>9am - 6pm</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Sunday</span>
                                                    <span className="text-accentrose">Closed</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Small Map */}
                            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-sm border border-accentrose/20">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d2516.488390779929!2d-0.612143023253!3d51.319747571790696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876024976451663%3A0xe54359d9c9e8bb3c!2sNorthpoint%20House%2C%2052%20High%20St%2C%20Knaphill%2C%20Woking%20GU21%202PY%2C%20UK!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <Card className="shadow-lg border-accentrose/20 h-full">
                                <CardContent className="p-8 md:p-12 h-full flex flex-col">
                                    <div className="mb-8">
                                        <h2 className="font-serif text-3xl font-bold text-textdark mb-4">Send us a Message</h2>
                                        <p className="text-textdark/70 font-medium hidden sm:block">
                                            Fill out the form below and we will get back to you to confirm your appointment or answer your questions.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold text-textdark">Full Name *</label>
                                            <Input id="name" required placeholder="Jane Doe" className="border-accentrose/30 focus-visible:ring-accentrose py-6 text-base" />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-bold text-textdark">Phone Number *</label>
                                            <Input id="phone" type="tel" required placeholder="07123 456789" className="border-accentrose/30 focus-visible:ring-accentrose py-6 text-base" />
                                        </div>

                                        <div className="space-y-2 flex-grow flex flex-col">
                                            <label htmlFor="message" className="text-sm font-bold text-textdark">How can we help? *</label>
                                            <Textarea
                                                id="message"
                                                required
                                                placeholder="I'd like to book a gel manicure for next Tuesday at 2pm..."
                                                className="border-accentrose/30 focus-visible:ring-accentrose flex-grow resize-none text-base p-4 min-h-[150px]"
                                            />
                                        </div>

                                        <Button type="submit" size="lg" className="w-full bg-accentrose hover:bg-mauve text-white rounded-full py-6 text-lg font-bold shadow-md transition-all duration-300">
                                            <Send className="mr-2 h-5 w-5" /> Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
