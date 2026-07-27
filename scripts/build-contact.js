const fs = require('fs');

// Read layout to extract exactly the header and head
const layout = fs.readFileSync('src/layout.html', 'utf8');
const headerMatch = layout.match(/([\s\S]*?)<main/);
const header = headerMatch ? headerMatch[1] : '';

const contactContent = `
  <main id="page-content" class="min-h-screen">
    <!-- Cinematic Hero Section -->
    <section class="relative h-[600px] flex items-center justify-center overflow-hidden">
      <!-- Background Image with Ken Burns -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop" 
             alt="Education Campus" 
             class="w-full h-full object-cover animate-ken-burns">
      </div>
      <!-- Dark Cinematic Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#081C3A]/90 via-[#081C3A]/70 to-[#081C3A] z-10 mix-blend-multiply"></div>
      
      <!-- Floating Particles -->
      <div class="absolute inset-0 z-10 opacity-30 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>

      <!-- Center Content -->
      <div class="container mx-auto px-6 relative z-20 text-center animate-fade-up">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-6 shadow-premium">
          <i class="ri-map-pin-2-fill text-accent"></i> Contact InstituteHub
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-2xl">
          Contact Us
        </h1>
        
        <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
          Have questions about admissions, professional courses, placements, franchise opportunities, or career guidance? Our expert counselors are here to help you every step of the way.
        </p>

        <!-- Breadcrumb -->
        <div class="flex items-center justify-center gap-2 text-sm font-medium text-gray-400">
          <a href="index.html" class="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span class="text-accent">Contact Us</span>
        </div>
      </div>

      <!-- Animated scroll indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div class="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <div class="w-1.5 h-3 bg-white rounded-full animate-float"></div>
        </div>
      </div>
    </section>

    <!-- Two-Column Contact Section -->
    <section class="py-24 bg-gray-50 relative">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <!-- Left Side (40%) -->
          <div class="lg:w-2/5 animate-fade-up">
            <div class="bg-white rounded-3xl p-10 shadow-premium border border-gray-100 h-full relative overflow-hidden group">
              <!-- Decorative blur -->
              <div class="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
              
              <h2 class="text-3xl font-bold text-primary mb-4 relative z-10">Get In Touch</h2>
              <p class="text-gray-600 mb-10 leading-relaxed relative z-10">We are always ready to assist you with admissions, courses, placements, certifications, franchise inquiries, and general support.</p>
              
              <div class="space-y-8 relative z-10">
                <!-- Phone -->
                <div class="flex gap-5 group/item">
                  <div class="w-12 h-12 rounded-2xl bg-blue-50 text-primary-light flex items-center justify-center text-xl shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                    <i class="ri-phone-fill"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Call Us On</h4>
                    <a href="tel:9794412732" class="text-lg font-bold text-primary hover:text-primary-light transition-colors block mb-1">9794412732</a>
                    <p class="text-sm text-gray-500">Office Hours:<br>Monday – Saturday<br>9:00 AM – 6:00 PM</p>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex gap-5 group/item">
                  <div class="w-12 h-12 rounded-2xl bg-blue-50 text-primary-light flex items-center justify-center text-xl shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                    <i class="ri-mail-send-fill"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <a href="mailto:webcodian.institute@gmail.com" class="text-base font-semibold text-primary hover:text-primary-light transition-colors block mb-1 break-all">webcodian.institute@gmail.com</a>
                    <p class="text-sm text-gray-500">For admissions, course information, student support, and business inquiries.</p>
                  </div>
                </div>

                <!-- WhatsApp -->
                <div class="flex gap-5 group/item">
                  <div class="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center text-2xl shrink-0 group-hover/item:bg-green-500 group-hover/item:text-white transition-colors duration-300">
                    <i class="ri-whatsapp-fill"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                    <a href="https://wa.me/919794412733" target="_blank" class="text-lg font-bold text-green-600 hover:text-green-700 transition-colors block mb-1">9794412733</a>
                    <p class="text-sm text-gray-500">Chat instantly with our admission counselors for quick assistance.</p>
                  </div>
                </div>

                <!-- Location -->
                <div class="flex gap-5 group/item">
                  <div class="w-12 h-12 rounded-2xl bg-blue-50 text-primary-light flex items-center justify-center text-xl shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                    <i class="ri-map-pin-user-fill"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Our Location</h4>
                    <p class="text-base text-gray-700 font-medium mb-3">Nagwa Lanka,<br>Varanasi,<br>Pin 221005</p>
                    <a href="#map" class="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors">
                      Get Directions <i class="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <!-- Social Media -->
              <div class="mt-12 pt-8 border-t border-gray-100 flex gap-4 relative z-10">
                <a href="#" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"><i class="ri-facebook-fill"></i></a>
                <a href="#" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"><i class="ri-instagram-line"></i></a>
                <a href="#" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"><i class="ri-twitter-x-line"></i></a>
                <a href="#" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"><i class="ri-youtube-fill"></i></a>
              </div>
            </div>
          </div>

          <!-- Right Side (60%) -->
          <div class="lg:w-3/5 animate-fade-up" style="animation-delay: 0.2s;">
            <div class="bg-white rounded-3xl p-10 lg:p-14 shadow-premium border border-gray-100 relative">
              <h3 class="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
              <p class="text-gray-500 mb-10">Fill out the form below and our admission team will get in touch with you shortly.</p>
              
              <form action="#" method="POST" class="space-y-6" id="contact-form">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Name -->
                  <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                      <i class="ri-user-3-line text-lg"></i>
                    </div>
                    <input type="text" name="name" id="name" required class="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-[20px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder-transparent peer" placeholder="Enter Your Name">
                    <label for="name" class="absolute left-12 -top-2.5 bg-white px-1 text-sm font-medium text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary">Enter Your Name</label>
                  </div>

                  <!-- Email -->
                  <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                      <i class="ri-mail-line text-lg"></i>
                    </div>
                    <input type="email" name="email" id="email" required class="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-[20px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder-transparent peer" placeholder="Enter Your Email">
                    <label for="email" class="absolute left-12 -top-2.5 bg-white px-1 text-sm font-medium text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary">Enter Your Email</label>
                  </div>

                  <!-- Mobile -->
                  <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                      <i class="ri-smartphone-line text-lg"></i>
                    </div>
                    <input type="tel" name="mobile" id="mobile" required class="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-[20px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder-transparent peer" placeholder="Enter Your Mobile">
                    <label for="mobile" class="absolute left-12 -top-2.5 bg-white px-1 text-sm font-medium text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary">Enter Your Mobile</label>
                  </div>

                  <!-- Address -->
                  <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                      <i class="ri-map-pin-line text-lg"></i>
                    </div>
                    <input type="text" name="address" id="address" required class="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-[20px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder-transparent peer" placeholder="Enter Your Address">
                    <label for="address" class="absolute left-12 -top-2.5 bg-white px-1 text-sm font-medium text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary">Enter Your Address</label>
                  </div>
                </div>

                <!-- Message -->
                <div class="relative group">
                  <div class="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                    <i class="ri-message-3-line text-lg"></i>
                  </div>
                  <textarea name="message" id="message" rows="5" required class="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-[20px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder-transparent peer resize-none" placeholder="Write a Message"></textarea>
                  <label for="message" class="absolute left-12 -top-2.5 bg-white px-1 text-sm font-medium text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary">Write a Message</label>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-[20px] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-2 group/btn relative overflow-hidden">
                  <span class="relative z-10">Submit Now</span>
                  <i class="ri-send-plane-fill relative z-10 group-hover/btn:translate-x-1 transition-transform"></i>
                  <div class="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Why Contact InstituteHub? -->
    <section class="py-24 bg-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>
      <div class="container mx-auto px-6 lg:px-12 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Contact <span class="text-primary">InstituteHub?</span></h2>
          <div class="h-1 w-20 bg-accent rounded-full mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Card 1 -->
          <div class="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-premium hover:bg-white hover:-translate-y-2 transition-all duration-500 group animate-on-scroll">
            <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <i class="ri-compass-3-line"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Admission Guidance</h3>
            <p class="text-gray-500 text-sm leading-relaxed">Receive personalized counseling to choose the right course.</p>
          </div>

          <!-- Card 2 -->
          <div class="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-premium hover:bg-white hover:-translate-y-2 transition-all duration-500 group animate-on-scroll" style="animation-delay: 0.1s;">
            <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <i class="ri-book-open-line"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Course Information</h3>
            <p class="text-gray-500 text-sm leading-relaxed">Explore professional computer education and certification programs.</p>
          </div>

          <!-- Card 3 -->
          <div class="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-premium hover:bg-white hover:-translate-y-2 transition-all duration-500 group animate-on-scroll" style="animation-delay: 0.2s;">
            <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <i class="ri-briefcase-line"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Placement Support</h3>
            <p class="text-gray-500 text-sm leading-relaxed">Learn about career guidance, interview preparation, and placement assistance.</p>
          </div>

          <!-- Card 4 -->
          <div class="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-premium hover:bg-white hover:-translate-y-2 transition-all duration-500 group animate-on-scroll" style="animation-delay: 0.3s;">
            <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <i class="ri-store-2-line"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Franchise Opportunities</h3>
            <p class="text-gray-500 text-sm leading-relaxed">Connect with our team to explore partnership opportunities.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Visit Our Campus (Map) -->
    <section id="map" class="py-24 bg-gray-50 border-y border-gray-200">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <div class="lg:w-1/2 animate-fade-up">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Visit Our <span class="text-primary">Campus</span></h2>
            <p class="text-lg text-gray-600 mb-8">Come see our state-of-the-art facilities, modern computer labs, and meet our expert faculty in person.</p>
            
            <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-8">
              <h3 class="font-bold text-xl text-gray-900 mb-4">Head Office</h3>
              <ul class="space-y-4">
                <li class="flex items-start gap-3 text-gray-600">
                  <i class="ri-map-pin-2-fill text-primary mt-1"></i>
                  <span>Nagwa Lanka, Varanasi, Uttar Pradesh - 221005</span>
                </li>
                <li class="flex items-center gap-3 text-gray-600">
                  <i class="ri-time-fill text-primary"></i>
                  <span>Mon - Sat: 9:00 AM – 6:00 PM</span>
                </li>
                <li class="flex items-center gap-3 text-gray-600">
                  <i class="ri-phone-fill text-primary"></i>
                  <a href="tel:9794412732" class="hover:text-primary transition-colors">9794412732</a>
                </li>
                <li class="flex items-center gap-3 text-gray-600">
                  <i class="ri-mail-fill text-primary"></i>
                  <a href="mailto:webcodian.institute@gmail.com" class="hover:text-primary transition-colors">webcodian.institute@gmail.com</a>
                </li>
              </ul>
            </div>
            
            <div class="flex flex-wrap gap-4">
              <a href="https://maps.google.com/?q=Nagwa+Lanka+Varanasi+221005" target="_blank" class="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-black transition-colors flex items-center gap-2">
                <i class="ri-direction-fill"></i> Get Directions
              </a>
              <a href="tel:9794412732" class="px-6 py-3 bg-white border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
                <i class="ri-phone-fill"></i> Call Now
              </a>
              <a href="https://wa.me/919794412733" target="_blank" class="px-6 py-3 bg-green-50 text-green-600 rounded-xl font-semibold hover:bg-green-500 hover:text-white transition-colors flex items-center gap-2">
                <i class="ri-whatsapp-fill"></i> WhatsApp
              </a>
            </div>
          </div>
          
          <div class="lg:w-1/2 w-full h-[500px] animate-fade-up" style="animation-delay: 0.2s;">
            <div class="w-full h-full rounded-3xl overflow-hidden shadow-premium border border-gray-200">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d14432.32766023769!2d83.00397755!3d25.2678619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31a19662705b%3A0xc3f58e1c39ab350e!2sLanka%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="100%" style="border:0; filter: contrast(1.1) saturate(1.2);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Accordion -->
    <section class="py-24 bg-white relative">
      <div class="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Frequently Asked <span class="text-primary">Questions</span></h2>
          <p class="text-gray-500">Find quick answers to common queries.</p>
        </div>
        
        <div class="space-y-4 animate-on-scroll" id="faq-accordion">
          <!-- FAQ 1 -->
          <div class="faq-item bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
            <button class="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none">
              <span class="font-semibold text-lg text-gray-900">What are your office hours?</span>
              <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 faq-icon">
                <i class="ri-add-line text-primary"></i>
              </div>
            </button>
            <div class="faq-content h-0 overflow-hidden transition-all duration-300 px-6">
              <p class="pb-5 text-gray-600">Our office is open from Monday to Saturday, between 9:00 AM and 6:00 PM. We are closed on Sundays and public holidays.</p>
            </div>
          </div>

          <!-- FAQ 2 -->
          <div class="faq-item bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
            <button class="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none">
              <span class="font-semibold text-lg text-gray-900">How can I apply for admission?</span>
              <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 faq-icon">
                <i class="ri-add-line text-primary"></i>
              </div>
            </button>
            <div class="faq-content h-0 overflow-hidden transition-all duration-300 px-6">
              <p class="pb-5 text-gray-600">You can apply online through our Student Zone by clicking on "Online Admission", or you can visit our campus directly at Nagwa Lanka, Varanasi to complete the registration process.</p>
            </div>
          </div>

          <!-- FAQ 3 -->
          <div class="faq-item bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
            <button class="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none">
              <span class="font-semibold text-lg text-gray-900">Can I contact through WhatsApp?</span>
              <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 faq-icon">
                <i class="ri-add-line text-primary"></i>
              </div>
            </button>
            <div class="faq-content h-0 overflow-hidden transition-all duration-300 px-6">
              <p class="pb-5 text-gray-600">Yes, you can reach our admission counselors instantly via WhatsApp at <strong>9794412733</strong>.</p>
            </div>
          </div>

          <!-- FAQ 4 -->
          <div class="faq-item bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
            <button class="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none">
              <span class="font-semibold text-lg text-gray-900">Do you provide placement support?</span>
              <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 faq-icon">
                <i class="ri-add-line text-primary"></i>
              </div>
            </button>
            <div class="faq-content h-0 overflow-hidden transition-all duration-300 px-6">
              <p class="pb-5 text-gray-600">Absolutely. We offer 100% placement support for professional courses, including resume building, interview preparation, and direct campus recruitment drives with our hiring partners.</p>
            </div>
          </div>

          <!-- FAQ 5 -->
          <div class="faq-item bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
            <button class="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none">
              <span class="font-semibold text-lg text-gray-900">How can I verify my certificate?</span>
              <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 faq-icon">
                <i class="ri-add-line text-primary"></i>
              </div>
            </button>
            <div class="faq-content h-0 overflow-hidden transition-all duration-300 px-6">
              <p class="pb-5 text-gray-600">You can verify your certificate by clicking the "Certificate Verification" button at the top right of our website and entering your enrollment details.</p>
            </div>
          </div>
          
          <!-- FAQ 6 -->
          <div class="faq-item bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
            <button class="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none">
              <span class="font-semibold text-lg text-gray-900">How can I contact for franchise inquiries?</span>
              <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 faq-icon">
                <i class="ri-add-line text-primary"></i>
              </div>
            </button>
            <div class="faq-content h-0 overflow-hidden transition-all duration-300 px-6">
              <p class="pb-5 text-gray-600">For franchise opportunities, please email us at <strong>webcodian.institute@gmail.com</strong> or call us directly at <strong>9794412732</strong>. You can also explore the Franchise section in our main menu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-20 relative overflow-hidden">
      <!-- Animated Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#081C3A] via-primary to-primary-light z-0"></div>
      
      <!-- Glowing Orbs -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-float"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px] animate-float" style="animation-delay: 2s;"></div>
      
      <div class="container mx-auto px-6 relative z-10 text-center animate-fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Learning Journey?</h2>
        <p class="text-xl text-white/80 max-w-2xl mx-auto mb-10">Whether you need admission guidance, course details, placement support, or franchise information, our expert team is just one click away.</p>
        
        <div class="flex flex-wrap justify-center gap-4">
          <a href="tel:9794412732" class="px-8 py-4 bg-accent text-white rounded-full font-bold shadow-lg hover:bg-yellow-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            <i class="ri-phone-fill text-xl"></i> Call Now
          </a>
          <a href="courses.html" class="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold shadow-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
            Explore Courses
          </a>
          <a href="https://wa.me/919794412733" target="_blank" class="px-8 py-4 bg-green-500 text-white rounded-full font-bold shadow-lg hover:bg-green-400 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            <i class="ri-whatsapp-fill text-xl"></i> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  </main>

  <!-- Premium Custom Footer for Contact Page -->
  <footer class="bg-[#040C1A] text-gray-300 pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
    <div class="container mx-auto px-6 lg:px-12 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        <!-- Brand -->
        <div>
          <a href="index.html" class="flex items-center gap-3 group mb-6">
            <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light text-white font-bold text-lg">IH</div>
            <div class="flex flex-col">
              <span class="font-bold text-2xl text-white tracking-tight leading-none">InstituteHub</span>
              <span class="text-[10px] font-semibold text-accent tracking-widest uppercase mt-0.5">Premium Education</span>
            </div>
          </a>
          <p class="text-sm text-gray-400 leading-relaxed mb-6">Transforming potential into success through world-class IT education, expert faculty, and 100% placement support.</p>
          
          <div class="flex gap-3">
            <a href="#" class="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"><i class="ri-facebook-fill"></i></a>
            <a href="#" class="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"><i class="ri-twitter-x-line"></i></a>
            <a href="#" class="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"><i class="ri-instagram-line"></i></a>
            <a href="#" class="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"><i class="ri-linkedin-fill"></i></a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-white font-bold text-lg mb-6 flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-accent"></div> Quick Links</h4>
          <ul class="space-y-3">
            <li><a href="about/who-we-are.html" class="hover:text-accent transition-colors flex items-center gap-2 group"><i class="ri-arrow-right-s-line text-primary group-hover:translate-x-1 transition-transform"></i> About Us</a></li>
            <li><a href="courses.html" class="hover:text-accent transition-colors flex items-center gap-2 group"><i class="ri-arrow-right-s-line text-primary group-hover:translate-x-1 transition-transform"></i> Popular Courses</a></li>
            <li><a href="franchise/registration.html" class="hover:text-accent transition-colors flex items-center gap-2 group"><i class="ri-arrow-right-s-line text-primary group-hover:translate-x-1 transition-transform"></i> Franchise Request</a></li>
            <li><a href="student-verification.html" class="hover:text-accent transition-colors flex items-center gap-2 group"><i class="ri-arrow-right-s-line text-primary group-hover:translate-x-1 transition-transform"></i> Student Zone</a></li>
            <li><a href="contact.html" class="text-accent transition-colors flex items-center gap-2"><i class="ri-arrow-right-s-line text-primary"></i> Contact Us</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-white font-bold text-lg mb-6 flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-accent"></div> Contact Info</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <i class="ri-map-pin-fill text-primary mt-1"></i>
              <span class="text-sm">Nagwa Lanka, Varanasi,<br>Pin 221005</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="ri-phone-fill text-primary"></i>
              <a href="tel:9794412732" class="text-sm hover:text-white transition-colors">9794412732</a>
            </li>
            <li class="flex items-center gap-3">
              <i class="ri-whatsapp-fill text-primary"></i>
              <a href="https://wa.me/919794412733" class="text-sm hover:text-white transition-colors">9794412733</a>
            </li>
            <li class="flex items-start gap-3">
              <i class="ri-mail-fill text-primary mt-1"></i>
              <a href="mailto:webcodian.institute@gmail.com" class="text-sm hover:text-white transition-colors break-all">webcodian.institute@gmail.com</a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-white font-bold text-lg mb-6 flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-accent"></div> Newsletter</h4>
          <p class="text-sm text-gray-400 mb-4">Subscribe to receive updates, access to exclusive courses, and more.</p>
          <form class="relative">
            <input type="email" placeholder="Enter your email address" required class="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-primary transition-colors">
            <button type="submit" class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-primary-light transition-colors">
              <i class="ri-send-plane-fill"></i>
            </button>
          </form>
        </div>
      </div>
      
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-xs text-gray-500">&copy; ${new Date().getFullYear()} InstituteHub. All Rights Reserved.</p>
        <div class="flex gap-4 text-xs text-gray-500">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
    
    <!-- Back to top -->
    <button id="back-to-top" class="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center opacity-0 invisible hover:-translate-y-1 hover:bg-primary-light transition-all duration-300 z-50">
      <i class="ri-arrow-up-line text-xl"></i>
    </button>
  </footer>
  
  <!-- Add custom JS logic for Accordion and Form directly here since this page is standalone -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // FAQ Accordion Logic
      const faqItems = document.querySelectorAll('.faq-item');
      
      faqItems.forEach(item => {
        const btn = item.querySelector('.faq-btn');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');
        
        btn.addEventListener('click', () => {
          const isOpen = item.classList.contains('active');
          
          // Close all
          faqItems.forEach(otherItem => {
            otherItem.classList.remove('active', 'border-primary');
            const otherContent = otherItem.querySelector('.faq-content');
            const otherIcon = otherItem.querySelector('.faq-icon');
            otherContent.style.height = '0px';
            otherIcon.classList.remove('rotate-45', 'bg-primary', 'text-white');
            otherIcon.classList.add('text-primary');
          });
          
          if (!isOpen) {
            item.classList.add('active', 'border-primary');
            content.style.height = content.scrollHeight + 'px';
            icon.classList.add('rotate-45', 'bg-primary', 'text-white');
            icon.classList.remove('text-primary');
          }
        });
      });

      // Form Submit Animation (Simulation)
      const form = document.getElementById('contact-form');
      const submitBtn = form.querySelector('button[type="submit"]');
      const btnText = submitBtn.querySelector('span');
      const btnIcon = submitBtn.querySelector('i');
      
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Loading state
        submitBtn.classList.add('pointer-events-none', 'opacity-90');
        btnText.textContent = 'Sending...';
        btnIcon.className = 'ri-loader-4-line animate-spin relative z-10';
        
        // Simulate network request
        setTimeout(() => {
          btnText.textContent = 'Message Sent Successfully!';
          btnIcon.className = 'ri-check-line relative z-10';
          submitBtn.classList.replace('bg-primary', 'bg-green-500');
          submitBtn.classList.replace('hover:bg-primary-light', 'hover:bg-green-400');
          form.reset();
          
          setTimeout(() => {
            submitBtn.classList.remove('pointer-events-none', 'opacity-90');
            btnText.textContent = 'Submit Now';
            btnIcon.className = 'ri-send-plane-fill relative z-10 group-hover/btn:translate-x-1 transition-transform';
            submitBtn.classList.replace('bg-green-500', 'bg-primary');
            submitBtn.classList.replace('hover:bg-green-400', 'hover:bg-primary-light');
          }, 3000);
        }, 1500);
      });

      // Back to Top Button
      const backToTopBtn = document.getElementById('back-to-top');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
          backToTopBtn.classList.remove('opacity-0', 'invisible');
          backToTopBtn.classList.add('opacity-100', 'visible');
        } else {
          backToTopBtn.classList.add('opacity-0', 'invisible');
          backToTopBtn.classList.remove('opacity-100', 'visible');
        }
      });
      
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  </script>
  <script src="./src/main.js"></script>
</body>
</html>
`;

fs.writeFileSync('contact.html', header + contactContent);
console.log('contact.html successfully created!');
