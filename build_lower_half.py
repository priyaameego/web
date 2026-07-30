import re

# Read the current index.html
with open('d:/webcodian/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Split the content at the Notice Board section
split_marker = "<!-- 5. Interactive Section: Notice Board & Recent Students -->"
parts = content.split(split_marker)

top_half = parts[0]

# Define the new premium lower half
new_lower_half = """
    <!-- 5. Notice Board & Recent Students -->
    <section class="py-24 relative overflow-hidden bg-gray-50">
      <div class="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div class="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 relative z-10">
        
        <!-- Luxury Notice Panel -->
        <div class="bg-white/70 backdrop-blur-2xl rounded-[40px] p-10 md:p-14 border border-white shadow-2xl animate-on-scroll hover:-translate-y-2 transition-transform duration-500">
          <div class="flex items-center justify-between mb-10">
            <h3 class="text-3xl font-bold text-gray-900 flex items-center gap-4">
              <span class="w-12 h-12 rounded-full bg-blue-100 text-primary flex items-center justify-center shadow-inner"><i class="ri-pushpin-2-fill text-xl"></i></span>
              Notice Board
            </h3>
            <a href="news.html" class="text-primary font-bold hover:text-blue-700 transition-colors flex items-center gap-1">View All <i class="ri-arrow-right-line"></i></a>
          </div>
          
          <div class="space-y-5">
            <div class="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 group flex items-start gap-6 cursor-pointer border border-gray-50">
              <div class="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shrink-0 font-bold flex-col leading-none shadow-sm">
                <span class="text-lg">24</span>
                <span class="text-[10px] uppercase tracking-wider">Oct</span>
              </div>
              <div>
                <span class="inline-block px-3 py-1 bg-red-100 text-red-600 text-[10px] font-bold rounded-full mb-3 uppercase tracking-wider">Important</span>
                <h4 class="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 text-lg">Admit Cards for November 2026 Examination Released.</h4>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 group flex items-start gap-6 cursor-pointer border border-gray-50">
              <div class="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center shrink-0 font-bold flex-col leading-none shadow-sm">
                <span class="text-lg">15</span>
                <span class="text-[10px] uppercase tracking-wider">Oct</span>
              </div>
              <div>
                <span class="inline-block px-3 py-1 bg-blue-100 text-primary text-[10px] font-bold rounded-full mb-3 uppercase tracking-wider">Event</span>
                <h4 class="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 text-lg">Mega Placement Drive - 50+ IT Companies visiting campus.</h4>
              </div>
            </div>

            <div class="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 group flex items-start gap-6 cursor-pointer border border-gray-50">
              <div class="w-14 h-14 bg-gray-100 text-gray-500 rounded-2xl flex items-center justify-center shrink-0 font-bold flex-col leading-none shadow-sm">
                <span class="text-lg">02</span>
                <span class="text-[10px] uppercase tracking-wider">Oct</span>
              </div>
              <div>
                <span class="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-[10px] font-bold rounded-full mb-3 uppercase tracking-wider">Holiday</span>
                <h4 class="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 text-lg">Holiday Notice: Gandhi Jayanti. All centers remain closed.</h4>
              </div>
            </div>
          </div>
        </div>

        <!-- Luxury Timeline Cards (Recent Students) -->
        <div class="bg-gradient-to-br from-[#081C3A] to-[#1a365d] rounded-[40px] p-10 md:p-14 border border-blue-900/50 shadow-2xl animate-on-scroll relative overflow-hidden">
          <div class="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
          
          <div class="flex items-center justify-between mb-10 relative z-10">
            <h3 class="text-3xl font-bold text-white flex items-center gap-4">
              <span class="w-12 h-12 rounded-full bg-white/10 backdrop-blur text-accent flex items-center justify-center border border-white/10"><i class="ri-user-star-fill text-xl"></i></span>
              Recently Joined
            </h3>
          </div>
          
          <div class="overflow-hidden h-[380px] relative z-10 rounded-2xl">
            <div class="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#081C3A] to-transparent z-10"></div>
            <div class="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#1a365d] to-transparent z-10"></div>
            
            <div class="animate-[slideUp_20s_linear_infinite] space-y-4 pt-12">
              
              <div class="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl flex items-center gap-5 hover:bg-white/20 transition-colors">
                <img src="https://ui-avatars.com/api/?name=Rahul+Verma&background=0D8ABC&color=fff" class="w-14 h-14 rounded-full shadow-lg border-2 border-white/20">
                <div class="flex-grow">
                  <h4 class="font-bold text-white text-lg">Rahul Verma</h4>
                  <p class="text-sm text-gray-300">ADCA</p>
                </div>
                <span class="px-4 py-1.5 bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold rounded-full backdrop-blur-sm">Active</span>
              </div>
              
              <div class="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl flex items-center gap-5 hover:bg-white/20 transition-colors">
                <img src="https://ui-avatars.com/api/?name=Sneha+Singh&background=F59E0B&color=fff" class="w-14 h-14 rounded-full shadow-lg border-2 border-white/20">
                <div class="flex-grow">
                  <h4 class="font-bold text-white text-lg">Sneha Singh</h4>
                  <p class="text-sm text-gray-300">Python</p>
                </div>
                <span class="px-4 py-1.5 bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold rounded-full backdrop-blur-sm">Active</span>
              </div>
              
              <div class="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl flex items-center gap-5 hover:bg-white/20 transition-colors">
                <img src="https://ui-avatars.com/api/?name=Vikash+Kumar&background=3B82F6&color=fff" class="w-14 h-14 rounded-full shadow-lg border-2 border-white/20">
                <div class="flex-grow">
                  <h4 class="font-bold text-white text-lg">Vikash Kumar</h4>
                  <p class="text-sm text-gray-300">Tally ERP</p>
                </div>
                <span class="px-4 py-1.5 bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold rounded-full backdrop-blur-sm">Active</span>
              </div>

              <div class="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl flex items-center gap-5 hover:bg-white/20 transition-colors">
                <img src="https://ui-avatars.com/api/?name=Priya+Sharma&background=8B5CF6&color=fff" class="w-14 h-14 rounded-full shadow-lg border-2 border-white/20">
                <div class="flex-grow">
                  <h4 class="font-bold text-white text-lg">Priya Sharma</h4>
                  <p class="text-sm text-gray-300">DCA</p>
                </div>
                <span class="px-4 py-1.5 bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold rounded-full backdrop-blur-sm">Active</span>
              </div>

              <div class="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl flex items-center gap-5 hover:bg-white/20 transition-colors">
                <img src="https://ui-avatars.com/api/?name=Amit+Pandey&background=10B981&color=fff" class="w-14 h-14 rounded-full shadow-lg border-2 border-white/20">
                <div class="flex-grow">
                  <h4 class="font-bold text-white text-lg">Amit Pandey</h4>
                  <p class="text-sm text-gray-300">Web Design</p>
                </div>
                <span class="px-4 py-1.5 bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold rounded-full backdrop-blur-sm">Active</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 6. Authorization Premium Showcase -->
    <section class="py-20 bg-white relative overflow-hidden border-y border-gray-100">
      <div class="container mx-auto px-6 lg:px-12 mb-12 text-center animate-on-scroll">
        <h4 class="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Recognized & Authorized By</h4>
        <div class="w-16 h-1 bg-gradient-to-r from-primary to-blue-300 mx-auto rounded-full"></div>
      </div>
      
      <div class="w-full relative flex items-center group py-8">
        <div class="animate-marquee gap-24 items-center px-12 flex">
          <!-- Glass Logo Cards -->
          <div class="flex items-center gap-4 bg-gray-50/50 backdrop-blur-md px-8 py-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/ISO_9001-2015_Certified.png" class="h-14 object-contain">
            <div class="text-lg font-bold text-gray-800 font-serif">ISO 9001:2015</div>
          </div>
          <div class="flex items-center gap-4 bg-gray-50/50 backdrop-blur-md px-8 py-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer">
            <div class="text-xl font-bold text-gray-800 font-serif whitespace-nowrap">MSME Govt. of India</div>
          </div>
          <div class="flex items-center gap-4 bg-gray-50/50 backdrop-blur-md px-8 py-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer">
            <div class="text-xl font-bold text-gray-800 font-serif whitespace-nowrap">Skill India</div>
          </div>
          <div class="flex items-center gap-4 bg-gray-50/50 backdrop-blur-md px-8 py-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer">
            <div class="text-xl font-bold text-gray-800 font-serif whitespace-nowrap">Digital India</div>
          </div>
          <div class="flex items-center gap-4 bg-gray-50/50 backdrop-blur-md px-8 py-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer">
            <div class="text-xl font-bold text-gray-800 font-serif whitespace-nowrap">Ministry of Corporate Affairs</div>
          </div>

          <!-- Duplicate for infinite marquee -->
          <div class="flex items-center gap-4 bg-gray-50/50 backdrop-blur-md px-8 py-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/ISO_9001-2015_Certified.png" class="h-14 object-contain">
            <div class="text-lg font-bold text-gray-800 font-serif">ISO 9001:2015</div>
          </div>
          <div class="flex items-center gap-4 bg-gray-50/50 backdrop-blur-md px-8 py-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer">
            <div class="text-xl font-bold text-gray-800 font-serif whitespace-nowrap">MSME Govt. of India</div>
          </div>
          <div class="flex items-center gap-4 bg-gray-50/50 backdrop-blur-md px-8 py-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer">
            <div class="text-xl font-bold text-gray-800 font-serif whitespace-nowrap">Skill India</div>
          </div>
          <div class="flex items-center gap-4 bg-gray-50/50 backdrop-blur-md px-8 py-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer">
            <div class="text-xl font-bold text-gray-800 font-serif whitespace-nowrap">Digital India</div>
          </div>
          <div class="flex items-center gap-4 bg-gray-50/50 backdrop-blur-md px-8 py-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer">
            <div class="text-xl font-bold text-gray-800 font-serif whitespace-nowrap">Ministry of Corporate Affairs</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Achievement Statistics -->
    <section class="py-24 relative overflow-hidden bg-[#0A0F1C]">
      <!-- Animated Mesh Gradient Background -->
      <div class="absolute inset-0 opacity-40">
        <div class="absolute top-0 -left-1/4 w-1/2 h-full bg-blue-900/30 rounded-full blur-[120px] mix-blend-screen animate-[pulse_8s_infinite]"></div>
        <div class="absolute bottom-0 -right-1/4 w-1/2 h-full bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-[pulse_10s_infinite_reverse]"></div>
      </div>

      <div class="container mx-auto px-6 lg:px-12 relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          
          <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 group animate-on-scroll">
            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
              <i class="ri-user-add-line"></i>
            </div>
            <h3 class="text-4xl lg:text-5xl font-bold text-white mb-2"><span class="counter" data-target="25000">0</span>+</h3>
            <p class="text-blue-200/80 font-medium tracking-wide uppercase text-xs">Total Registered</p>
          </div>

          <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 group animate-on-scroll" style="animation-delay: 100ms;">
            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
              <i class="ri-macbook-line"></i>
            </div>
            <h3 class="text-4xl lg:text-5xl font-bold text-white mb-2"><span class="counter" data-target="20000">0</span>+</h3>
            <p class="text-purple-200/80 font-medium tracking-wide uppercase text-xs">Trained Candidates</p>
          </div>

          <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 group animate-on-scroll" style="animation-delay: 200ms;">
            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
              <i class="ri-medal-line"></i>
            </div>
            <h3 class="text-4xl lg:text-5xl font-bold text-white mb-2"><span class="counter" data-target="18000">0</span>+</h3>
            <p class="text-green-200/80 font-medium tracking-wide uppercase text-xs">Certified Students</p>
          </div>

          <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 group animate-on-scroll" style="animation-delay: 300ms;">
            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
              <i class="ri-trophy-line"></i>
            </div>
            <h3 class="text-4xl lg:text-5xl font-bold text-white mb-2"><span class="counter" data-target="50">0</span>+</h3>
            <p class="text-yellow-200/80 font-medium tracking-wide uppercase text-xs">Winning Awards</p>
          </div>

        </div>
      </div>
    </section>

    <!-- 8. Testimonials & Why Choose Us (Combined Editorial Layout) -->
    <section class="py-24 bg-gray-50 relative overflow-hidden">
      <div class="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
        
        <!-- Why Choose Us -->
        <div class="animate-on-scroll">
          <h2 class="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-3">
            <span class="w-8 h-[2px] bg-primary inline-block"></span> Why Choose Us
          </h2>
          <h3 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">Elevating Careers Through <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Excellence.</span></h3>
          <p class="text-gray-500 text-lg leading-relaxed mb-12">We are committed to providing top-tier computer education, empowering students with industry-relevant skills, practical knowledge, and career placement assistance.</p>
          
          <div class="space-y-6">
            <div class="flex items-start gap-6 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div class="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-inner">
                <i class="ri-shield-star-line"></i>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-2">Trusted By Thousands</h4>
                <p class="text-gray-500 leading-relaxed">Join a legacy of excellence. Over 20,000 students have successfully shaped their careers through our certified training programs.</p>
              </div>
            </div>

            <div class="flex items-start gap-6 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div class="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-inner">
                <i class="ri-book-open-line"></i>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-2">Unlimited Resources</h4>
                <p class="text-gray-500 leading-relaxed">Gain access to comprehensive study materials, modern computer labs, and continuous practical assessments.</p>
              </div>
            </div>

            <div class="flex items-start gap-6 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div class="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-inner">
                <i class="ri-customer-service-2-line"></i>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-2">Strong Support</h4>
                <p class="text-gray-500 leading-relaxed">Dedicated faculty, personalized mentorship, and 100% placement assistance to ensure you reach your goals.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Cinematic Testimonial Carousel -->
        <div class="relative animate-on-scroll">
          <div class="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-[40px] transform rotate-3 scale-105"></div>
          
          <div class="bg-[#081C3A] rounded-[40px] p-10 lg:p-14 relative z-10 shadow-2xl border border-gray-800 overflow-hidden min-h-[500px] flex flex-col justify-center">
            <!-- Large Quote Icon -->
            <div class="absolute top-10 right-10 text-8xl text-white/5 font-serif leading-none">"</div>
            
            <div id="homeTestimonials" class="relative z-10">
              <!-- Testimonial 1 -->
              <div class="testimonial-item opacity-100 transition-opacity duration-1000 absolute inset-0 flex flex-col justify-center px-10">
                <div class="flex text-accent mb-8 text-xl gap-1">
                  <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>
                </div>
                <p class="text-2xl lg:text-3xl text-white font-light italic mb-10 leading-snug">"InstituteHub gave me the perfect platform to launch my career in software development. The faculties are extremely knowledgeable and supportive."</p>
                <div class="flex items-center gap-5 mt-auto">
                  <img src="https://ui-avatars.com/api/?name=Rohan+Das&background=fff&color=081C3A" class="w-16 h-16 rounded-full border-2 border-white/20">
                  <div>
                    <h4 class="font-bold text-white text-lg">Rohan Das</h4>
                    <p class="text-sm text-blue-300">Software Developer</p>
                  </div>
                </div>
              </div>

              <!-- Testimonial 2 -->
              <div class="testimonial-item opacity-0 pointer-events-none transition-opacity duration-1000 absolute inset-0 flex flex-col justify-center px-10">
                <div class="flex text-accent mb-8 text-xl gap-1">
                  <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i>
                </div>
                <p class="text-2xl lg:text-3xl text-white font-light italic mb-10 leading-snug">"The practical approach to learning Tally made accounting so much easier to understand. I secured a job in a reputed firm within a month of completion."</p>
                <div class="flex items-center gap-5 mt-auto">
                  <img src="https://ui-avatars.com/api/?name=Anjali+Gupta&background=fff&color=081C3A" class="w-16 h-16 rounded-full border-2 border-white/20">
                  <div>
                    <h4 class="font-bold text-white text-lg">Anjali Gupta</h4>
                    <p class="text-sm text-blue-300">Accountant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 9. Career Success Timeline (New Section) -->
    <section class="py-24 bg-white relative">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          <h2 class="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">Your Journey</h2>
          <h3 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">From Student to <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Professional</span></h3>
        </div>

        <div class="relative max-w-5xl mx-auto">
          <!-- Connecting Line -->
          <div class="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-primary to-blue-100 -translate-y-1/2 rounded-full"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            <!-- Step 1 -->
            <div class="text-center group animate-on-scroll">
              <div class="w-20 h-20 mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center text-3xl text-gray-400 group-hover:text-primary group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 mb-6 relative">
                <i class="ri-user-add-line relative z-10"></i>
                <div class="absolute inset-0 bg-blue-50 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
              <h4 class="font-bold text-gray-900 mb-2">Admission</h4>
              <p class="text-sm text-gray-500">Counseling & Reg.</p>
            </div>
            
            <!-- Step 2 -->
            <div class="text-center group animate-on-scroll" style="animation-delay: 100ms;">
              <div class="w-20 h-20 mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center text-3xl text-gray-400 group-hover:text-primary group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 mb-6 relative">
                <i class="ri-book-read-line relative z-10"></i>
                <div class="absolute inset-0 bg-blue-50 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
              <h4 class="font-bold text-gray-900 mb-2">Training</h4>
              <p class="text-sm text-gray-500">Expert Lectures</p>
            </div>

            <!-- Step 3 -->
            <div class="text-center group animate-on-scroll" style="animation-delay: 200ms;">
              <div class="w-20 h-20 mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center text-3xl text-gray-400 group-hover:text-primary group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 mb-6 relative">
                <i class="ri-macbook-line relative z-10"></i>
                <div class="absolute inset-0 bg-blue-50 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
              <h4 class="font-bold text-gray-900 mb-2">Practical Labs</h4>
              <p class="text-sm text-gray-500">Hands-on Projects</p>
            </div>

            <!-- Step 4 -->
            <div class="text-center group animate-on-scroll" style="animation-delay: 300ms;">
              <div class="w-20 h-20 mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center text-3xl text-gray-400 group-hover:text-primary group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 mb-6 relative">
                <i class="ri-medal-line relative z-10"></i>
                <div class="absolute inset-0 bg-blue-50 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
              <h4 class="font-bold text-gray-900 mb-2">Certification</h4>
              <p class="text-sm text-gray-500">ISO 9001:2015</p>
            </div>

            <!-- Step 5 -->
            <div class="text-center group animate-on-scroll" style="animation-delay: 400ms;">
              <div class="w-20 h-20 mx-auto bg-primary rounded-2xl shadow-xl shadow-blue-500/30 border border-primary-light flex items-center justify-center text-3xl text-white group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 mb-6 relative">
                <i class="ri-briefcase-4-line relative z-10"></i>
              </div>
              <h4 class="font-bold text-gray-900 mb-2">Placement</h4>
              <p class="text-sm text-gray-500">Job Assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. Course Guidance CTA -->
    <section class="py-32 relative overflow-hidden flex items-center justify-center">
      <!-- Cinematic Background -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover animate-[kenburns_30s_ease-in-out_infinite_alternate]" alt="Modern Classroom">
        <div class="absolute inset-0 bg-[#081C3A]/80 backdrop-blur-sm"></div>
      </div>
      
      <div class="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-4xl">
        <h2 class="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-on-scroll">Finding Your <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-accent">Right Course?</span></h2>
        <p class="text-xl text-blue-100/80 font-light mb-12 animate-on-scroll">Not sure which path to choose? Our expert counselors are here to guide you based on your background and career aspirations.</p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 animate-on-scroll">
          <a href="tel:9794412732" class="magnetic-btn w-full sm:w-auto px-10 py-5 bg-accent text-[#081C3A] font-bold text-lg rounded-full hover:bg-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,0.4)] transition-all duration-300 flex items-center justify-center gap-3">
            <i class="ri-phone-fill"></i> Call 9794412732
          </a>
          <a href="online-enquiry.html" class="magnetic-btn w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3">
            <i class="ri-mail-send-line"></i> Admission Enquiry
          </a>
        </div>
      </div>
    </section>

    <!-- 11. Editorial Blog Section -->
    <section class="py-24 bg-gray-50 relative">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 animate-on-scroll">
          <div class="max-w-2xl">
            <h2 class="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-3">
              <span class="w-8 h-[2px] bg-primary inline-block"></span> Insights & Updates
            </h2>
            <h3 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Latest <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Articles.</span></h3>
          </div>
          <a href="blog.html" class="hidden md:inline-flex px-8 py-4 border border-gray-200 bg-white text-gray-900 font-bold rounded-full hover:border-primary hover:text-primary hover:shadow-lg transition-all duration-300 mt-6 md:mt-0 magnetic-btn">
            View All News
          </a>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <!-- Featured Article (Span 8) -->
          <article class="lg:col-span-8 bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100 group animate-on-scroll cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div class="relative h-80 lg:h-[400px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-8 left-8 flex items-center gap-4 text-xs font-bold text-white uppercase tracking-wider">
                <span class="px-4 py-1.5 bg-primary rounded-full">Technology</span>
                <span>Oct 24, 2026</span>
                <span class="w-1 h-1 bg-white/50 rounded-full"></span>
                <span>5 Min Read</span>
              </div>
            </div>
            <div class="p-10 lg:p-12">
              <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors leading-tight">The Future of AI in Education and Skill Development</h3>
              <p class="text-gray-500 mb-8 text-lg leading-relaxed">Discover how artificial intelligence is transforming the way students learn, interact, and prepare for their future careers in the rapidly evolving tech industry.</p>
              <a href="blog.html" class="inline-flex items-center gap-2 text-gray-900 font-bold group-hover:text-primary transition-colors uppercase tracking-widest text-sm border-b-2 border-transparent group-hover:border-primary pb-1">Read Article <i class="ri-arrow-right-line"></i></a>
            </div>
          </article>

          <!-- Side Articles (Span 4) -->
          <div class="lg:col-span-4 flex flex-col gap-8">
            
            <article class="bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100 group animate-on-scroll flex-1 flex flex-col cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div class="relative h-48 overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000">
                <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">Careers</div>
              </div>
              <div class="p-8 flex flex-col flex-1">
                <div class="flex items-center gap-3 text-[10px] font-bold text-gray-400 mb-4 uppercase tracking-wider">
                  <span>Oct 18, 2026</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-snug">How to Ace Your First Tech Interview</h3>
                <a href="blog.html" class="mt-auto inline-flex items-center gap-2 text-gray-900 font-bold group-hover:text-primary transition-colors text-sm"><i class="ri-arrow-right-circle-line text-2xl"></i></a>
              </div>
            </article>

            <article class="bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100 group animate-on-scroll flex-1 flex flex-col cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div class="p-8 flex flex-col flex-1 bg-gradient-to-br from-blue-50 to-white">
                <div class="inline-block px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-wider self-start mb-6">Updates</div>
                <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-snug">InstituteHub Opens 5 New Centers Across Uttar Pradesh</h3>
                <div class="flex items-center justify-between mt-auto">
                  <span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Oct 10, 2026</span>
                  <a href="blog.html" class="inline-flex items-center gap-2 text-gray-900 font-bold group-hover:text-primary transition-colors"><i class="ri-arrow-right-circle-line text-2xl"></i></a>
                </div>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- 12. Premium Footer -->
  <footer class="bg-[#051124] text-gray-400 pt-24 pb-10 relative overflow-hidden text-sm border-t border-gray-800 font-sans">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-accent"></div>
    
    <!-- Premium Background Effects -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Footer Top Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
        
        <!-- Brand Column (Span 4) -->
        <div class="lg:col-span-4 pr-0 lg:pr-10">
          <div class="mb-8 bg-white/5 backdrop-blur inline-block p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <img src="https://www.institutehub.in/storage/dashboard/branding/brand-strip/JasdHk2McXjAjd2NRBl1qeCzFAR4QWGHuJWiC7Dz.jpg" alt="Logo" class="h-12 w-auto object-contain brightness-0 invert">
          </div>
          <p class="leading-loose text-gray-400 mb-8 text-base font-light">An ISO 9001:2015 certified premium education institute offering cutting-edge computer courses, modern lab training, and global certifications.</p>
          
          <div class="flex items-center gap-4">
            <a href="#" class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"><i class="ri-facebook-fill text-lg"></i></a>
            <a href="#" class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"><i class="ri-twitter-x-line text-lg"></i></a>
            <a href="#" class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"><i class="ri-instagram-line text-lg"></i></a>
            <a href="#" class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"><i class="ri-linkedin-fill text-lg"></i></a>
          </div>
        </div>

        <!-- Links Columns (Span 2 each) -->
        <div class="lg:col-span-2">
          <h3 class="text-white font-bold text-lg mb-8 tracking-wide">Explore</h3>
          <ul class="space-y-4">
            <li><a href="blog.html" class="hover:text-primary transition-colors flex items-center gap-2 group"><span class="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-primary transition-colors"></span> Blog</a></li>
            <li><a href="events.html" class="hover:text-primary transition-colors flex items-center gap-2 group"><span class="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-primary transition-colors"></span> Events</a></li>
            <li><a href="news.html" class="hover:text-primary transition-colors flex items-center gap-2 group"><span class="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-primary transition-colors"></span> News</a></li>
            <li><a href="download.html" class="hover:text-primary transition-colors flex items-center gap-2 group"><span class="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-primary transition-colors"></span> Download</a></li>
            <li><a href="courses.html" class="hover:text-primary transition-colors flex items-center gap-2 group"><span class="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-primary transition-colors"></span> All Courses</a></li>
          </ul>
        </div>
        
        <div class="lg:col-span-2">
          <h3 class="text-white font-bold text-lg mb-8 tracking-wide">Legal</h3>
          <ul class="space-y-4">
            <li><a href="#" class="hover:text-primary transition-colors flex items-center gap-2 group"><span class="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-primary transition-colors"></span> Terms & Conditions</a></li>
            <li><a href="#" class="hover:text-primary transition-colors flex items-center gap-2 group"><span class="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-primary transition-colors"></span> Privacy Policy</a></li>
            <li><a href="#" class="hover:text-primary transition-colors flex items-center gap-2 group"><span class="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-primary transition-colors"></span> Refund Policy</a></li>
            <li><a href="#" class="hover:text-primary transition-colors flex items-center gap-2 group"><span class="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-primary transition-colors"></span> Cancellation</a></li>
          </ul>
        </div>

        <!-- Contact Column (Span 4) -->
        <div class="lg:col-span-4 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
          <h3 class="text-white font-bold text-lg mb-8 tracking-wide">Contact Us</h3>
          <ul class="space-y-6">
            <li class="flex items-start gap-4 group">
              <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <i class="ri-map-pin-2-fill"></i>
              </div>
              <span class="mt-2 text-gray-300 leading-relaxed">123 Education Street, Tech Hub, Varanasi, Pin 221005</span>
            </li>
            <li class="flex items-center gap-4 group">
              <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <i class="ri-phone-fill"></i>
              </div>
              <a href="tel:+919794412732" class="text-gray-300 hover:text-white transition-colors text-lg">+91 97944 12732</a>
            </li>
            <li class="flex items-center gap-4 group">
              <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <i class="ri-mail-send-fill"></i>
              </div>
              <a href="mailto:info@institutehub.in" class="text-gray-300 hover:text-white transition-colors text-lg">info@institutehub.in</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-gray-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-wider">
        <p>&copy; 2026 InstituteHub. Designed with <i class="ri-heart-fill text-red-500 mx-1"></i> for Excellence.</p>
        <div class="flex items-center gap-6">
          <a href="#" class="hover:text-white transition-colors">Help Center</a>
          <a href="#" class="hover:text-white transition-colors">Careers</a>
          <a href="#" class="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Floating Action Buttons -->
  <a href="https://wa.me/919794412733" target="_blank" class="fixed bottom-6 left-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl shadow-[0_10px_20px_rgba(34,197,94,0.3)] hover:bg-green-600 hover:scale-110 transition-all z-50">
    <i class="ri-whatsapp-line"></i>
  </a>
  <a href="#" class="fixed bottom-6 right-6 w-12 h-12 bg-gray-900/80 backdrop-blur border border-gray-700 text-white rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-primary hover:border-primary transition-all z-50 focus:outline-none hover:-translate-y-2">
    <i class="ri-arrow-up-s-line"></i>
  </a>

  <!-- Scripts -->
  <script src="./src/main.js"></script>
  <script>
    // Premium Animations & Scripts
    document.addEventListener('DOMContentLoaded', () => {
      
      // Intersection Observer for Scroll Reveals
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            entry.target.classList.remove('opacity-0', 'translate-y-12', 'scale-95');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-12', 'transition-all', 'duration-1000', 'ease-out');
        observer.observe(el);
      });

      // Testimonial Auto Slider
      let currentTesti = 0;
      const testiItems = document.querySelectorAll('.testimonial-item');
      if (testiItems.length > 0) {
        setInterval(() => {
          testiItems.forEach(i => {
            i.classList.remove('opacity-100', 'z-10');
            i.classList.add('opacity-0', 'pointer-events-none', 'z-0');
          });
          currentTesti = (currentTesti + 1) % testiItems.length;
          testiItems[currentTesti].classList.remove('opacity-0', 'pointer-events-none', 'z-0');
          testiItems[currentTesti].classList.add('opacity-100', 'z-10');
        }, 6000);
      }
      
      // Count up animation for stats (trigger only when in view)
      const counters = document.querySelectorAll('.counter');
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 60fps
            
            const updateCount = () => {
              count += increment;
              if (count < target) {
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCount);
              } else {
                counter.innerText = target;
              }
            };
            updateCount();
            counterObserver.unobserve(counter);
          }
        });
      }, { threshold: 0.5 });

      counters.forEach(c => counterObserver.observe(c));

      // Magnetic Buttons
      const magneticBtns = document.querySelectorAll('.magnetic-btn');
      magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
          btn.style.transform = `translate(${x}px, ${y}px)`;
        });
        btn.addEventListener('mouseleave', () => {
          btn.style.transform = `translate(0px, 0px)`;
        });
      });
    });
  </script>
</body>
</html>
"""

# Stitch together
final_html = top_half + new_lower_half

with open('d:/webcodian/index.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print("Redesigned lower half written successfully.")
