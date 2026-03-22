import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, CheckCircle2, Star, Menu, X, ChevronDown,
  Leaf, Sprout, TreePine, Droplets, Hammer, Shovel, ArrowRight,
  ShieldCheck, ThumbsUp, Clock, Award
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <TreePine className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold tracking-tight text-emerald-950">GreenScape<span className="text-emerald-600">.</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('services')} className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">Services</button>
            <button onClick={() => scrollTo('gallery')} className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">Gallery</button>
            <button onClick={() => scrollTo('reviews')} className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">Reviews</button>
            <button onClick={() => scrollTo('faq')} className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">FAQ</button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-emerald-950 font-bold hover:text-emerald-600 transition-colors">
              <Phone className="h-5 w-5" />
              (555) 123-4567
            </a>
            <button onClick={() => scrollTo('contact')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5">
              Get Free Quote
            </button>
          </div>

          <button className="md:hidden text-stone-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-stone-100 py-4 px-4 flex flex-col gap-4">
            <button onClick={() => scrollTo('services')} className="text-left py-2 text-stone-600 font-medium">Services</button>
            <button onClick={() => scrollTo('gallery')} className="text-left py-2 text-stone-600 font-medium">Gallery</button>
            <button onClick={() => scrollTo('reviews')} className="text-left py-2 text-stone-600 font-medium">Reviews</button>
            <button onClick={() => scrollTo('faq')} className="text-left py-2 text-stone-600 font-medium">FAQ</button>
            <div className="h-px bg-stone-100 my-2"></div>
            <a href="tel:+1234567890" className="flex items-center justify-center gap-2 bg-stone-100 text-emerald-950 font-bold py-3 rounded-xl">
              <Phone className="h-5 w-5" />
              Call (555) 123-4567
            </a>
            <button onClick={() => scrollTo('contact')} className="bg-emerald-600 text-white py-3 rounded-xl font-bold">
              Get Free Quote
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&q=80" 
            alt="Beautiful landscaping" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-emerald-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-100 border border-emerald-400/30 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-md">
              <Star className="h-4 w-4 fill-emerald-400 text-emerald-400" />
              #1 Rated Landscaping in Your City
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Transform Your Yard Into a <span className="text-emerald-400">Masterpiece.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-2xl mx-auto lg:mx-0">
              Expert landscaping, design, and maintenance for homeowners and businesses. Get the beautiful outdoor space you deserve without the hassle.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button onClick={() => scrollTo('contact')} className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-emerald-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                Get a Free Quote <ArrowRight className="h-5 w-5" />
              </button>
              <a href="tel:+1234567890" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-medium text-stone-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400" /> Licensed & Insured</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400" /> 5-Star Rated</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400" /> Free Quotes</div>
            </div>
          </div>
          
          {/* Hero Form Card */}
          <div className="hidden lg:block w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-stone-100">
            <h3 className="text-2xl font-bold text-emerald-950 mb-2">Request a Quote</h3>
            <p className="text-stone-500 text-sm mb-6">Limited spots available this month. Claim yours now!</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" required />
              </div>
              <div>
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" required />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-stone-600" required>
                  <option value="">Select Service...</option>
                  <option value="mowing">Lawn Mowing & Maintenance</option>
                  <option value="design">Garden Design</option>
                  <option value="install">Landscaping Installation</option>
                  <option value="turf">Artificial / Natural Turf</option>
                  <option value="walls">Retaining Walls</option>
                  <option value="irrigation">Irrigation Systems</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5">
                Get My Free Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-950 mb-4">Everything You Need for a Perfect Yard</h3>
            <p className="text-stone-600 text-lg">From regular maintenance to complete transformations, our expert team delivers premium results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Lawn Mowing & Maintenance", desc: "Keep your lawn lush, green, and perfectly manicured all year round." },
              { icon: Sprout, title: "Garden Design", desc: "Custom garden layouts that complement your home's architecture and style." },
              { icon: TreePine, title: "Landscaping Installation", desc: "Full-scale planting, mulching, and hardscaping to transform your space." },
              { icon: Shovel, title: "Artificial & Natural Turf", desc: "Premium sod installation or low-maintenance artificial grass solutions." },
              { icon: Hammer, title: "Retaining Walls", desc: "Structural and decorative walls built to last using premium materials." },
              { icon: Droplets, title: "Irrigation Systems", desc: "Smart watering solutions to keep your landscape healthy while saving water." }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-xl hover:border-emerald-100 transition-all group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <service.icon className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-emerald-950 mb-3">{service.title}</h4>
                <p className="text-stone-600 mb-6 line-clamp-2">{service.desc}</p>
                <button onClick={() => scrollTo('contact')} className="text-emerald-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Get Quote <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-3">Our Work</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-950 mb-4">Before & After Transformations</h3>
            <p className="text-stone-600 text-lg">See the difference our expert team can make to your property.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative rounded-3xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" alt="After Landscaping" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent flex items-end p-8">
                <div>
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">After</span>
                  <h4 className="text-white text-xl font-bold">Complete Backyard Renovation</h4>
                </div>
              </div>
            </div>
            <div className="group relative rounded-3xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&q=80" alt="After Landscaping" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent flex items-end p-8">
                <div>
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">After</span>
                  <h4 className="text-white text-xl font-bold">Modern Garden Design & Turf</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6">The Trusted Choice for Premium Landscaping</h3>
              <p className="text-stone-300 text-lg mb-8">We don't just mow lawns; we create outdoor living spaces that you'll love spending time in. Here's why hundreds of homeowners trust us.</p>
              
              <div className="space-y-6">
                {[
                  { icon: Award, title: "Experienced Team", desc: "Decades of combined experience in horticulture and landscape design." },
                  { icon: ShieldCheck, title: "Fully Insured", desc: "Complete peace of mind with comprehensive liability coverage." },
                  { icon: Clock, title: "Fast & Reliable", desc: "We show up on time, every time, and complete projects on schedule." },
                  { icon: ThumbsUp, title: "Satisfaction Guarantee", desc: "We aren't finished until you are 100% thrilled with the results." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-stone-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" alt="Landscaping work" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white text-emerald-950 p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-2 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="font-bold">"They completely transformed our backyard in just 3 days. Highly recommended!"</p>
                <p className="text-sm text-stone-500 mt-2">- Sarah J.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-3">How It Works</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-950 mb-4">Simple 3-Step Process</h3>
            <p className="text-stone-600 text-lg">Getting your dream yard is easier than you think.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-stone-200 z-0"></div>
            
            {[
              { step: "01", title: "Request a Quote", desc: "Fill out our simple form or give us a call to schedule a free consultation." },
              { step: "02", title: "We Plan & Design", desc: "We assess your space and provide a detailed plan and transparent pricing." },
              { step: "03", title: "We Build & Transform", desc: "Our expert team gets to work, delivering premium results on time." }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white border-4 border-emerald-100 rounded-full flex items-center justify-center text-3xl font-extrabold text-emerald-600 mb-6 shadow-lg">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-emerald-950 mb-3">{item.title}</h4>
                <p className="text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button onClick={() => scrollTo('contact')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-1">
              Start Step 1 Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-950 mb-4">Loved by Homeowners</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Michael T.", area: "Northside", text: "Incredible attention to detail. They installed a new retaining wall and sod, and it looks like a completely different house. The crew was polite and cleaned up perfectly." },
              { name: "Jessica R.", area: "West End", text: "We've used them for weekly maintenance for a year now. Always reliable, and our lawn has never looked greener. Highly recommend their services!" },
              { name: "David L.", area: "South Park", text: "From the initial quote to the final walkthrough, the communication was excellent. The new patio and garden design exceeded our expectations." }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-stone-700 mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-bold text-emerald-950">{review.name}</p>
                  <p className="text-sm text-stone-500">{review.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 mb-4">Get Your Free Landscaping Quote Today</h2>
              <p className="text-emerald-600 font-semibold bg-emerald-50 inline-block px-4 py-1 rounded-full">🔥 Limited bookings available this week</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-stone-700" required>
                    <option value="">Select Service...</option>
                    <option value="mowing">Lawn Mowing & Maintenance</option>
                    <option value="design">Garden Design</option>
                    <option value="install">Landscaping Installation</option>
                    <option value="turf">Artificial / Natural Turf</option>
                    <option value="walls">Retaining Walls</option>
                    <option value="irrigation">Irrigation Systems</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Project Details (Optional)</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"></textarea>
              </div>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-xl shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5">
                Send Request & Get Quote
              </button>
              <p className="text-center text-sm text-stone-500 mt-4 flex items-center justify-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Your information is 100% secure and private.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-3">FAQ</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-950">Common Questions</h3>
          </div>

          <div className="space-y-4">
            {[
              { q: "How much does a landscaping project cost?", a: "Pricing varies greatly depending on the scope of work, materials, and size of your yard. We provide free, no-obligation quotes so you know exactly what to expect before we start." },
              { q: "What areas do you service?", a: "We service the entire metropolitan area and surrounding suburbs within a 30-mile radius. Contact us to confirm if we cover your specific location." },
              { q: "How long does a typical installation take?", a: "Small projects like sod installation might take 1-2 days, while complete backyard transformations can take 1-3 weeks. We provide a clear timeline during the quoting process." },
              { q: "Do you offer ongoing maintenance?", a: "Yes! We offer weekly, bi-weekly, and monthly maintenance packages to keep your new or existing landscape looking pristine year-round." },
              { q: "Are you licensed and insured?", a: "Absolutely. We carry full liability insurance and all necessary local licenses to protect you and your property during our work." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl border border-stone-200 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-emerald-950">
                  {faq.q}
                  <ChevronDown className="h-5 w-5 text-emerald-600 transition-transform group-open:-rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-stone-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-stone-300 py-16 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <TreePine className="h-8 w-8 text-emerald-500" />
                <span className="text-2xl font-bold tracking-tight text-white">GreenScape<span className="text-emerald-500">.</span></span>
              </div>
              <p className="text-stone-400 max-w-sm mb-6">
                Premium landscaping services designed to transform your outdoor spaces into beautiful, functional, and relaxing environments.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollTo('services')} className="hover:text-emerald-400 transition-colors">Services</button></li>
                <li><button onClick={() => scrollTo('reviews')} className="hover:text-emerald-400 transition-colors">Testimonials</button></li>
                <li><button onClick={() => scrollTo('faq')} className="hover:text-emerald-400 transition-colors">FAQ</button></li>
                <li><button onClick={() => scrollTo('contact')} className="hover:text-emerald-400 transition-colors">Get a Quote</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <a href="tel:+1234567890" className="hover:text-emerald-400 transition-colors">(555) 123-4567</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <a href="mailto:hello@greenscape.com" className="hover:text-emerald-400 transition-colors">hello@greenscape.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>123 Landscape Blvd,<br/>Cityville, ST 12345</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
            <p>&copy; {new Date().getFullYear()} GreenScape Landscaping. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-stone-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Action Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a href="tel:+1234567890" className="flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-600/40 hover:bg-emerald-700 transition-colors animate-bounce">
          <Phone className="h-7 w-7" />
        </a>
      </div>
    </div>
  );
}
