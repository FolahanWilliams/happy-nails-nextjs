import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Sparkles, Heart, Star, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blush py-24 sm:py-32 lg:pb-32 xl:pb-36 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-textdark mb-6 max-w-4xl mx-auto leading-[1.1]">
            Beautiful Nails. <br />
            <span className="text-accentrose italic">Happy You.</span>
          </h1>
          <p className="mt-6 text-lg tracking-wide text-textdark/80 max-w-2xl mx-auto font-medium">
            Knaphill's premier nail salon. Enter a world of relaxation, luxury, and flawless nail artistry designed just for you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-accentrose hover:bg-mauve text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="tel:01483475320">
                <Phone className="mr-2 h-5 w-5" /> Call to Book
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-accentrose text-accentrose hover:bg-accentrose/10 px-8 py-6 text-lg transition-all duration-300">
              <Link href="/services">
                Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 3-Col Value Props */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-textdark">Experience the Best</h2>
            <div className="w-24 h-1 bg-accentrose mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-blush/40 hover:bg-blush transition-colors duration-300 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-accentrose group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-textdark mb-3">Skilled Technicians</h3>
              <p className="text-textdark/70 leading-relaxed font-medium">
                Our highly trained professionals stay ahead of the latest trends to deliver flawless manicures, pedicures, and stunning nail art every time.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-blush/40 hover:bg-blush transition-colors duration-300 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-accentrose group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-textdark mb-3">Relaxing Atmosphere</h3>
              <p className="text-textdark/70 leading-relaxed font-medium">
                Escape the hustle and bustle. Our salon is a serene retreat where you can unwind, relax, and enjoy some well-deserved pampering.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-blush/40 hover:bg-blush transition-colors duration-300 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-accentrose group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-textdark mb-3">4.8 Stars on Google</h3>
              <p className="text-textdark/70 leading-relaxed font-medium">
                We pride ourselves on our loyal customer base. Join the 180+ happy clients who have experienced our exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Strip */}
      <section className="py-24 bg-accentrose/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-textdark">Hear From Our Clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Emma T.", text: "The SNS French manicures here are absolutely beautiful and look incredibly natural. The staff are so efficient and caring!" },
              { name: "Laura W.", text: "Such a bright, airy, and professional environment. Plus, the massage chairs and free drinks during a pedicure make it feel like luxury." },
              { name: "Sophie C.", text: "They have a huge variety of colors, very reasonable prices, and the quality is always high. My absolute go-to salon in Knaphill." }
            ].map((review, idx) => (
              <Card key={idx} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 px-6 pb-6 text-center">
                  <div className="flex justify-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-textdark/80 italic mb-6">"{review.text}"</p>
                  <p className="font-serif font-bold text-lg text-textdark">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Snapshot */}
      <section className="py-20 bg-white border-t border-accentrose/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Clock className="mx-auto h-12 w-12 text-accentrose mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-textdark mb-8">We're Open 6 Days a Week</h2>
          <div className="bg-blush/50 rounded-3xl p-8 max-w-md mx-auto shadow-sm">
            <div className="flex justify-between items-center py-3 border-b border-accentrose/20 text-lg font-medium text-textdark">
              <span>Monday - Saturday</span>
              <span>9am - 6pm</span>
            </div>
            <div className="flex justify-between items-center py-3 text-lg font-medium text-textdark/60">
              <span>Sunday</span>
              <span className="text-accentrose">Closed</span>
            </div>
          </div>
          <p className="mt-8 text-textdark/70">
            Appointments recommended, but walk-ins are always welcome. Let us pamper you!
          </p>
        </div>
      </section>

    </div>
  );
}
