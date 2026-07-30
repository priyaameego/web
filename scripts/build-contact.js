const fs = require('fs');
const path = require('path');

// Read layout properly using {{CONTENT}} placeholder pattern
const layoutHtml = fs.readFileSync(path.join(__dirname, '../src/layout.html'), 'utf8');

const contactContent = `
  <main id="page-content" class="min-h-screen">
    <!-- Cinematic Hero Section -->
    <section class="relative h-[300px] flex items-center justify-center overflow-hidden">
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

        <!-- Breadcrumb -->
        <div class="flex items-center justify-center gap-2 text-sm font-medium text-gray-400">
          <a href="index.html" class="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span class="text-accent">Contact</span>
        </div>
      </div>
    </section>

    <!-- Two-Column Contact Section -->
    <section class="py-24 bg-gray-50 relative">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <!-- Left Side (40%) -->
          <div class="lg:w-2/5 animate-fade-up">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Card 1: Phone -->
              <div class="bg-white rounded-3xl p-8 shadow-premium border border-slate-100/80 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                <div class="w-14 h-14 rounded-full bg-blue-50/50 text-primary-light flex items-center justify-center text-2xl mb-5 group-hover:bg-primary-light group-hover:text-white transition-colors duration-300">
                  <i class="ri-phone-fill"></i>
                </div>
                <h4 class="font-bold text-gray-900 text-lg mb-2">Call Us On</h4>
                <a href="tel:9794412732" class="text-base font-semibold text-primary hover:text-primary-light transition-colors">9794412732</a>
                <p class="text-xs text-gray-400 mt-3 leading-relaxed">Mon - Sat<br>9:00 AM - 6:00 PM</p>
              </div>

              <!-- Card 2: Email -->
              <div class="bg-white rounded-3xl p-8 shadow-premium border border-slate-100/80 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                <div class="w-14 h-14 rounded-full bg-blue-50/50 text-primary-light flex items-center justify-center text-2xl mb-5 group-hover:bg-primary-light group-hover:text-white transition-colors duration-300">
                  <i class="ri-mail-send-fill"></i>
                </div>
                <h4 class="font-bold text-gray-900 text-lg mb-2">Email Us</h4>
                <a href="mailto:webcodian.institute@gmail.com" class="text-xs font-semibold text-primary hover:text-primary-light transition-colors break-all leading-normal">webcodian.institute<br>@gmail.com</a>
                <p class="text-xs text-gray-400 mt-3 leading-relaxed">24/7 Support</p>
              </div>

              <!-- Card 3: WhatsApp -->
              <div class="bg-white rounded-3xl p-8 shadow-premium border border-slate-100/80 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                <div class="w-14 h-14 rounded-full bg-amber-50 text-accent flex items-center justify-center text-2xl mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <i class="ri-whatsapp-fill"></i>
                </div>
                <h4 class="font-bold text-gray-900 text-lg mb-2">WhatsApp</h4>
                <a href="https://wa.me/919794412733" target="_blank" class="text-base font-semibold text-accent hover:text-amber-600 transition-colors">9794412733</a>
                <p class="text-xs text-gray-400 mt-3 leading-relaxed">Counselor Chat</p>
              </div>

              <!-- Card 4: Location -->
              <div class="bg-white rounded-3xl p-8 shadow-premium border border-slate-100/80 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                <div class="w-14 h-14 rounded-full bg-blue-50/50 text-primary-light flex items-center justify-center text-2xl mb-5 group-hover:bg-primary-light group-hover:text-white transition-colors duration-300">
                  <i class="ri-map-pin-user-fill"></i>
                </div>
                <h4 class="font-bold text-gray-900 text-lg mb-2">Our Location</h4>
                <p class="text-xs text-gray-600 font-medium leading-relaxed">Nagwa Lanka,<br>Varanasi, Pin 221005</p>
                <a href="#map" class="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-accent transition-colors mt-3">
                  Directions <i class="ri-arrow-right-line"></i>
                </a>
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
                    <input type="text" name="name" id="name" required class="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder-transparent peer" placeholder="Enter Your Name">
                    <label for="name" class="absolute left-5 -top-2.5 bg-white px-1.5 text-xs font-semibold text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary">Enter Your Name</label>
                  </div>

                  <!-- Email -->
                  <div class="relative group">
                    <input type="email" name="email" id="email" required class="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder-transparent peer" placeholder="Enter Your Email">
                    <label for="email" class="absolute left-5 -top-2.5 bg-white px-1.5 text-xs font-semibold text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary">Enter Your Email</label>
                  </div>

                  <!-- Mobile -->
                  <div class="relative group">
                    <input type="tel" name="mobile" id="mobile" required class="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder-transparent peer" placeholder="Enter Your Mobile">
                    <label for="mobile" class="absolute left-5 -top-2.5 bg-white px-1.5 text-xs font-semibold text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary">Enter Your Mobile</label>
                  </div>

                  <!-- Address -->
                  <div class="relative group">
                    <input type="text" name="address" id="address" required class="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder-transparent peer" placeholder="Enter Your Address">
                    <label for="address" class="absolute left-5 -top-2.5 bg-white px-1.5 text-xs font-semibold text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary">Enter Your Address</label>
                  </div>
                </div>

                <!-- Message -->
                <div class="relative group">
                  <textarea name="message" id="message" rows="5" required class="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder-transparent peer resize-none" placeholder="Write a Message"></textarea>
                  <label for="message" class="absolute left-5 -top-2.5 bg-white px-1.5 text-xs font-semibold text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary">Write a Message</label>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-2 group/btn relative overflow-hidden">
                  <span class="relative z-10">Submit Now</span>
                  <i class="ri-arrow-right-line relative z-10 group-hover/btn:translate-x-1 transition-transform"></i>
                  <div class="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                </button>
              </form>
            </div>
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
  </main>
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
`;

let finalHtml = layoutHtml.replace('{{CONTENT}}', contactContent);
// Fix relative links
finalHtml = finalHtml.replace(/href="([a-zA-Z0-9\-\/]+\.html)"/g, (match, p1) => {
  if (p1.startsWith('http') || p1.startsWith('#') || p1.startsWith('./')) return match;
  return `href="./${p1}"`;
});
finalHtml = finalHtml.replace(/src="\.\/(src\/main\.js)"/g, 'src="./src/main.js"');
finalHtml = finalHtml.replace(/href="\.\/(dist\/output\.css)"/g, 'href="./dist/output.css"');

fs.writeFileSync(path.join(__dirname, '..', 'contact.html'), finalHtml);
console.log('contact.html successfully created!');
