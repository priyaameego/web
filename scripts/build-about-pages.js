const fs = require('fs');
const path = require('path');

const layoutHtml = fs.readFileSync(path.join(__dirname, '../src/layout.html'), 'utf8');

function getHero(title, desc) {
  return `
    <section class="relative h-[550px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
             alt="Campus" 
             class="w-full h-full object-cover animate-ken-burns opacity-70">
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-[#081C3A]/95 via-[#081C3A]/80 to-[#081C3A] z-10 mix-blend-multiply"></div>
      <div class="absolute inset-0 z-10 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>

      <div class="container mx-auto px-6 relative z-20 text-center animate-fade-up mt-10">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-6 shadow-premium">
          About InstituteHub
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 drop-shadow-2xl">${title}</h1>
        <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-light">${desc}</p>
      </div>
    </section>
  `;
}

// 1. Director Message
const directorContent = getHero("Director & CEO Message", "A message from our visionary leadership shaping the future of education.") + `
    <section class="py-24 bg-gray-50 relative">
      <div class="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div class="bg-white rounded-[32px] shadow-2xl p-8 md:p-16 border border-gray-100 flex flex-col lg:flex-row gap-12 animate-fade-up">
          <div class="lg:w-1/3 flex flex-col items-center text-center">
            <div class="w-64 h-64 rounded-full overflow-hidden border-8 border-gray-50 shadow-xl mb-6 relative">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Dr. Rahul Sharma</h3>
            <p class="text-primary font-bold text-sm uppercase tracking-wider mb-4">Founder & CEO</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Signature_of_John_Hancock.svg" class="h-12 opacity-60 filter grayscale">
          </div>
          <div class="lg:w-2/3">
            <div class="text-6xl text-gray-200 mb-4 leading-none font-serif">"</div>
            <p class="text-xl text-gray-600 font-light leading-relaxed mb-6 italic">
              "Education is not just about acquiring knowledge, but about shaping a mindset that embraces continuous learning and innovation. At InstituteHub, our vision is to bridge the gap between academic learning and industry demands, empowering the youth of today to become the leaders of tomorrow."
            </p>
            <p class="text-gray-600 leading-relaxed mb-6">
              We started InstituteHub with a simple yet powerful mission: to provide high-quality, accessible, and industry-relevant computer education. Over the years, we have grown from a small training center to a widespread network of educational hubs, touching thousands of lives.
            </p>
            <p class="text-gray-600 leading-relaxed">
              As we look to the future, we remain committed to our core values of excellence, integrity, and student success. I welcome you to join us on this transformative journey.
            </p>
          </div>
        </div>
      </div>
    </section>
`;

// 2. Who We Are
const whoWeAreContent = getHero("Who We Are", "Discover the story, mission, and values driving InstituteHub.") + `
    <section class="py-24 bg-white relative">
      <div class="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="animate-fade-up">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Empowering Students <span class="text-primary">Since 2015</span></h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-6">
              InstituteHub is a premier educational institution dedicated to providing top-tier training in computer applications, programming, and digital skills. With a strong network of authorized study centers across the nation, we aim to deliver standardized, high-quality education to students from all walks of life.
            </p>
            <p class="text-gray-600 text-lg leading-relaxed mb-8">
              We are an ISO 9001:2015 certified organization, recognized for our commitment to quality management systems and educational excellence. Our curriculum is constantly updated to align with the latest industry trends, ensuring our students are always job-ready.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div class="text-3xl font-bold text-primary mb-2">50+</div>
                <div class="text-sm font-bold text-gray-600">Authorized Centers</div>
              </div>
              <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div class="text-3xl font-bold text-primary mb-2">10k+</div>
                <div class="text-sm font-bold text-gray-600">Students Trained</div>
              </div>
            </div>
          </div>
          <div class="relative animate-fade-up" style="animation-delay: 0.2s;">
            <div class="absolute -inset-4 bg-primary/10 rounded-[40px] transform rotate-3"></div>
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop" class="relative rounded-[32px] shadow-2xl object-cover h-[500px] w-full">
            <div class="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-bounce">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl"><i class="ri-award-fill"></i></div>
                <div>
                  <div class="font-bold text-gray-900">ISO Certified</div>
                  <div class="text-xs text-gray-500">9001:2015</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
`;

// 3. Our Campus & Approach
const campusContent = getHero("Our Campus & Approach", "Experience world-class infrastructure designed for practical, hands-on learning.") + `
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Infrastructure & Learning</h2>
          <p class="text-gray-600 leading-relaxed">Our campuses are equipped with state-of-the-art computer labs, smart classrooms, and high-speed internet to provide an immersive learning environment.</p>
        </div>
        
        <!-- Masonry Gallery -->
        <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 animate-fade-up">
          
          <div class="relative group rounded-3xl overflow-hidden shadow-md break-inside-avoid">
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop" class="w-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h4 class="text-white font-bold text-lg">Smart Classrooms</h4>
            </div>
          </div>
          
          <div class="relative group rounded-3xl overflow-hidden shadow-md break-inside-avoid">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" class="w-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h4 class="text-white font-bold text-lg">High-Tech Labs</h4>
            </div>
          </div>
          
          <div class="relative group rounded-3xl overflow-hidden shadow-md break-inside-avoid">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" class="w-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h4 class="text-white font-bold text-lg">Student Library</h4>
            </div>
          </div>
          
          <div class="relative group rounded-3xl overflow-hidden shadow-md break-inside-avoid">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" class="w-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h4 class="text-white font-bold text-lg">Collaborative Spaces</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
`;

// 4. Our Team
const teamContent = getHero("Our Team", "Meet the dedicated professionals committed to your success.") + `
    <section class="py-24 bg-white relative">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-10"></div>
      <div class="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-cols-4 gap-8">
          
          <!-- Team Card -->
          <div class="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fade-up">
            <div class="relative h-72 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-[#081C3A] via-transparent to-transparent opacity-80"></div>
              <div class="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <a href="#" class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors"><i class="ri-linkedin-fill"></i></a>
                <a href="#" class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors"><i class="ri-twitter-fill"></i></a>
              </div>
            </div>
            <div class="p-6 text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Dr. Rahul Sharma</h3>
              <p class="text-primary font-bold text-sm">Director & CEO</p>
            </div>
          </div>

          <!-- Team Card 2 -->
          <div class="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fade-up" style="animation-delay: 0.1s;">
            <div class="relative h-72 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-[#081C3A] via-transparent to-transparent opacity-80"></div>
              <div class="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <a href="#" class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors"><i class="ri-linkedin-fill"></i></a>
              </div>
            </div>
            <div class="p-6 text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Ananya Patel</h3>
              <p class="text-primary font-bold text-sm">Academic Head</p>
            </div>
          </div>

          <!-- Team Card 3 -->
          <div class="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fade-up" style="animation-delay: 0.2s;">
            <div class="relative h-72 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-[#081C3A] via-transparent to-transparent opacity-80"></div>
              <div class="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <a href="#" class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors"><i class="ri-linkedin-fill"></i></a>
              </div>
            </div>
            <div class="p-6 text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Vikram Singh</h3>
              <p class="text-primary font-bold text-sm">IT Administrator</p>
            </div>
          </div>

        </div>
      </div>
    </section>
`;

// 5. Vision & Mission
const missionContent = getHero("Vision & Mission", "Our core purpose and aspirations for the future.") + `
    <section class="py-24 bg-gray-50 relative overflow-hidden">
      <div class="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div class="grid lg:grid-cols-2 gap-12 mb-20">
          
          <!-- Mission -->
          <div class="bg-white rounded-[32px] p-10 md:p-14 shadow-xl border border-gray-100 relative group overflow-hidden animate-fade-up">
            <div class="absolute -right-10 -top-10 text-[200px] text-gray-50 opacity-50 group-hover:scale-110 transition-transform duration-700"><i class="ri-focus-3-line"></i></div>
            <div class="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center text-3xl mb-8 relative z-10">
              <i class="ri-focus-3-line"></i>
            </div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 relative z-10">Our Mission</h2>
            <p class="text-gray-600 text-lg leading-relaxed relative z-10">
              To deliver accessible, high-quality, and industry-relevant computer education that empowers individuals with the skills necessary to excel in the digital age. We strive to create a learning environment that fosters innovation, practical application, and continuous growth.
            </p>
          </div>

          <!-- Vision -->
          <div class="bg-white rounded-[32px] p-10 md:p-14 shadow-xl border border-gray-100 relative group overflow-hidden animate-fade-up" style="animation-delay: 0.2s;">
            <div class="absolute -right-10 -top-10 text-[200px] text-gray-50 opacity-50 group-hover:scale-110 transition-transform duration-700"><i class="ri-eye-line"></i></div>
            <div class="w-16 h-16 rounded-2xl bg-yellow-50 text-accent flex items-center justify-center text-3xl mb-8 relative z-10">
              <i class="ri-eye-line"></i>
            </div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 relative z-10">Our Vision</h2>
            <p class="text-gray-600 text-lg leading-relaxed relative z-10">
              To be the most trusted and widely recognized educational network in the nation, bridging the digital divide and equipping every student with the technical proficiency to shape their own future and contribute meaningfully to society.
            </p>
          </div>

        </div>

        <h3 class="text-2xl font-bold text-center text-gray-900 mb-10 animate-fade-up">Our Core Values</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up" style="animation-delay: 0.3s;">
          <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div class="text-4xl text-primary mb-4"><i class="ri-star-smile-line"></i></div>
            <h4 class="text-xl font-bold text-gray-900 mb-2">Excellence</h4>
            <p class="text-gray-500 text-sm">Commitment to the highest standards in teaching.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div class="text-4xl text-primary mb-4"><i class="ri-shield-check-line"></i></div>
            <h4 class="text-xl font-bold text-gray-900 mb-2">Integrity</h4>
            <p class="text-gray-500 text-sm">Honesty and transparency in all our operations.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div class="text-4xl text-primary mb-4"><i class="ri-lightbulb-flash-line"></i></div>
            <h4 class="text-xl font-bold text-gray-900 mb-2">Innovation</h4>
            <p class="text-gray-500 text-sm">Continuously evolving our curriculum and methods.</p>
          </div>
        </div>
      </div>
    </section>
`;

// 6. Linkage & Authorization
const linkageContent = getHero("Linkage & Authorization", "Our affiliations, certifications, and government recognitions ensuring quality education.") + `
    <section class="py-24 bg-white">
      <div class="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div class="bg-gray-50 rounded-[32px] p-8 border border-gray-100 hover:shadow-xl transition-shadow group animate-fade-up">
            <div class="h-40 flex items-center justify-center bg-white rounded-2xl mb-6 p-4">
              <i class="ri-award-fill text-6xl text-primary group-hover:scale-110 transition-transform duration-500"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">ISO 9001:2015</h3>
            <p class="text-gray-500 text-sm mb-6 leading-relaxed">Certified for Quality Management Systems in Educational Services.</p>
            <button class="text-primary font-bold text-sm flex items-center gap-1 hover:text-primary-light">View Certificate <i class="ri-arrow-right-line"></i></button>
          </div>

          <div class="bg-gray-50 rounded-[32px] p-8 border border-gray-100 hover:shadow-xl transition-shadow group animate-fade-up" style="animation-delay: 0.1s;">
            <div class="h-40 flex items-center justify-center bg-white rounded-2xl mb-6 p-4">
              <i class="ri-government-line text-6xl text-primary group-hover:scale-110 transition-transform duration-500"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Govt. Registered</h3>
            <p class="text-gray-500 text-sm mb-6 leading-relaxed">Registered under Ministry of Corporate Affairs, Govt. of India.</p>
            <button class="text-primary font-bold text-sm flex items-center gap-1 hover:text-primary-light">View Details <i class="ri-arrow-right-line"></i></button>
          </div>

          <div class="bg-gray-50 rounded-[32px] p-8 border border-gray-100 hover:shadow-xl transition-shadow group animate-fade-up" style="animation-delay: 0.2s;">
            <div class="h-40 flex items-center justify-center bg-white rounded-2xl mb-6 p-4">
              <i class="ri-global-line text-6xl text-primary group-hover:scale-110 transition-transform duration-500"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Global Affiliations</h3>
            <p class="text-gray-500 text-sm mb-6 leading-relaxed">Partnered with leading IT and software organizations for curriculum development.</p>
          </div>

        </div>
      </div>
    </section>
`;

// 7. Testimonial
const testimonialContent = getHero("Student Testimonials", "Hear from our successful alumni and students about their InstituteHub experience.") + `
    <section class="py-24 bg-gray-50 relative overflow-hidden">
      <div class="absolute -left-20 top-20 text-[300px] text-gray-200 opacity-50"><i class="ri-double-quotes-l"></i></div>
      <div class="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">
        
        <div class="relative bg-white rounded-[40px] shadow-2xl p-10 md:p-16 border border-gray-100">
          <!-- Slider Container -->
          <div class="overflow-hidden relative min-h-[300px]" id="testimonialSlider">
            
            <!-- Slide 1 -->
            <div class="absolute inset-0 transition-opacity duration-1000 opacity-100 testimonial-slide">
              <div class="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" class="w-32 h-32 rounded-full object-cover border-4 border-gray-50 shadow-lg shrink-0">
                <div>
                  <div class="flex text-accent mb-4 text-xl">
                    <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>
                  </div>
                  <p class="text-xl text-gray-600 italic leading-relaxed mb-6">"The ADCA course at InstituteHub completely changed my career trajectory. The practical labs and supportive faculty made learning complex concepts easy. I got a job immediately after completing the course!"</p>
                  <h4 class="text-lg font-bold text-gray-900">Amit Kumar</h4>
                  <p class="text-primary font-bold text-sm">ADCA Student</p>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="absolute inset-0 transition-opacity duration-1000 opacity-0 pointer-events-none testimonial-slide">
              <div class="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" class="w-32 h-32 rounded-full object-cover border-4 border-gray-50 shadow-lg shrink-0">
                <div>
                  <div class="flex text-accent mb-4 text-xl">
                    <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i>
                  </div>
                  <p class="text-xl text-gray-600 italic leading-relaxed mb-6">"Excellent infrastructure and very helpful teachers. The Tally & GST training was completely hands-on, which gave me the confidence to handle real-world accounting tasks."</p>
                  <h4 class="text-lg font-bold text-gray-900">Priya Singh</h4>
                  <p class="text-primary font-bold text-sm">Tally & Accounts</p>
                </div>
              </div>
            </div>

          </div>

          <!-- Controls -->
          <div class="flex justify-center gap-4 mt-10">
            <button onclick="changeSlide(-1)" class="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-primary hover:text-white transition-colors flex items-center justify-center shadow-sm">
              <i class="ri-arrow-left-line"></i>
            </button>
            <button onclick="changeSlide(1)" class="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-primary hover:text-white transition-colors flex items-center justify-center shadow-sm">
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>

      </div>
    </section>

    <script>
      let currentSlide = 0;
      const slides = document.querySelectorAll('.testimonial-slide');
      
      function showSlide(index) {
        slides.forEach(s => {
          s.classList.remove('opacity-100');
          s.classList.add('opacity-0', 'pointer-events-none');
        });
        slides[index].classList.remove('opacity-0', 'pointer-events-none');
        slides[index].classList.add('opacity-100');
      }

      function changeSlide(direction) {
        currentSlide += direction;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showSlide(currentSlide);
      }

      // Auto play
      setInterval(() => changeSlide(1), 5000);
    </script>
`;

const pages = [
  { file: 'about/director-ceo-message.html', content: directorContent, folder: true },
  { file: 'about/who-we-are.html', content: whoWeAreContent, folder: true },
  { file: 'about/our-campus-and-approach.html', content: campusContent, folder: true },
  { file: 'our-team.html', content: teamContent, folder: false },
  { file: 'mission.html', content: missionContent, folder: false },
  { file: 'linkage-authorization.html', content: linkageContent, folder: false },
  { file: 'testimonial.html', content: testimonialContent, folder: false }
];

function buildPages() {
  pages.forEach(page => {
    let finalHtml = layoutHtml.replace('{{CONTENT}}', page.content);

    const prefix = page.folder ? '../' : './';

    // Fix relative links
    finalHtml = finalHtml.replace(/href="([a-zA-Z0-9\-\/]+\.html)"/g, (match, p1) => {
      if (p1.startsWith('http') || p1.startsWith('#') || p1.startsWith('./') || p1.startsWith('../')) return match;
      return `href="${prefix}${p1}"`;
    });
    finalHtml = finalHtml.replace(/src="\.\/src\/main\.js"/g, `src="${prefix}src/main.js"`);
    finalHtml = finalHtml.replace(/href="\.\/dist\/output\.css"/g, `href="${prefix}dist/output.css"`);

    const fullPath = path.join(__dirname, '..', page.file);
    const dirname = path.dirname(fullPath);
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname, { recursive: true });
    }

    fs.writeFileSync(fullPath, finalHtml);
    console.log(`${page.file} successfully created!`);
  });
}

buildPages();
