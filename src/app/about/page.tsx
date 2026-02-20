import { Star, CheckCircle } from "lucide-react";

export default function About() {
    return (
        <div className="flex flex-col flex-grow bg-white">

            {/* Header */}
            <section className="bg-blush py-20 text-center px-4">
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-textdark mb-6 tracking-tight">About Us</h1>
                <p className="text-lg text-textdark/70 max-w-2xl mx-auto font-medium">
                    Get to know the passionate team behind Knaphill's highest-rated nail salon.
                </p>
            </section>

            {/* Story Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Image Placeholder */}
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://picsum.photos/id/40/800/1000"
                                alt="Happy Nails salon interior"
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <div className="flex items-center space-x-2 mb-2">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="font-bold text-xl drop-shadow-md">4.8 Stars on Google</p>
                                <p className="text-white/80 text-sm">Based on 180+ authentic reviews</p>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col justify-center">
                            <h2 className="font-serif text-3xl md:text-5xl font-bold text-textdark mb-8 leading-tight">
                                Welcome to your new favourite <span className="text-accentrose italic">sanctuary.</span>
                            </h2>

                            <div className="space-y-6 text-lg text-textdark/70 leading-relaxed font-medium">
                                <p>
                                    At Happy Nails, we believe that looking good and feeling good go hand in hand. Located in the heart of Knaphill, Woking, our salon was founded on a simple principle: to provide unparalleled nail aesthetics in an environment where every client feels completely at home.
                                </p>
                                <p>
                                    We are incredibly proud of our <strong>4.8-star rating on Google</strong> from over 180 wonderful clients. This loyalty doesn't happen by accident. It's the result of our absolute dedication to hygiene, our use of premium products, and our team of talented technicians who treat every nail like a miniature canvas.
                                </p>
                                <p>
                                    Whether you're popping in for a quick polish change or a full set of intricate acrylics, you'll be greeted with a warm smile, a comfortable seat, and an experience designed to help you unwind from the stresses of daily life.
                                </p>
                            </div>

                            <div className="mt-12">
                                <h3 className="font-serif text-2xl font-bold text-textdark mb-6">Why Happy Nails?</h3>
                                <ul className="space-y-4">
                                    {[
                                        "4.8-star Google rating (180+ reviews)",
                                        "Expert, continuously-trained nail technicians",
                                        "A relaxing, welcoming, and pristine space"
                                    ].map((bullet, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckCircle className="h-6 w-6 text-accentrose mr-4 flex-shrink-0 mt-0.5" />
                                            <span className="text-textdark/80 text-lg font-medium">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-24 bg-blush">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-textdark mb-4">Find Us in Knaphill</h2>
                    <p className="text-textdark/70 mb-10 text-lg">Northpoint House, 52 High St, Knaphill, Woking, Surrey, GU21 2PY</p>

                    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                        {/* Generic Google Maps Embed for the given address */}
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
            </section>

        </div>
    );
}
