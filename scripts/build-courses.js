const fs = require('fs');
const path = require('path');

const layoutHtml = fs.readFileSync(path.join(__dirname, '../src/layout.html'), 'utf8');

const coursesContent = `
    <!-- Cinematic Hero Section -->
    <section class="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
             alt="Computer Lab" 
             class="w-full h-full object-cover animate-ken-burns opacity-60">
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-[#081C3A]/95 via-[#081C3A]/80 to-[#081C3A] z-10 mix-blend-multiply"></div>
      
      <!-- Floating Particles -->
      <div class="absolute inset-0 z-10 opacity-40 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>

      <div class="container mx-auto px-6 relative z-20 text-center animate-fade-up mt-10">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-6 shadow-premium">
          🎓 Professional Courses
        </div>
        
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 drop-shadow-2xl">
          Learn <span class="text-accent">Future-Ready Skills</span>
        </h1>
        
        <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
          Explore industry-focused computer courses, programming, digital skills, accounting, hardware, networking, design, communication, and professional certifications to build a successful career.
        </p>

        <div class="flex items-center justify-center gap-2 text-sm font-medium text-gray-400">
          <a href="index.html" class="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span class="text-accent">Courses</span>
        </div>
      </div>
    </section>

    <section class="py-12 bg-gray-50 relative min-h-screen">
      <div class="container mx-auto px-6 lg:px-12">
        
        <!-- Sticky Filter Panel -->
        <div class="sticky top-24 z-30 mb-12 animate-fade-up">
          <div class="bg-white/80 backdrop-blur-xl border border-white rounded-[24px] shadow-xl p-6">
            <div class="flex flex-col lg:flex-row gap-6">
              
              <!-- Search -->
              <div class="flex-grow relative group">
                <i class="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-primary transition-colors"></i>
                <input type="text" id="courseSearch" placeholder="Search courses..." class="w-full bg-gray-50 border border-gray-200 rounded-full pl-12 pr-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-gray-900 placeholder-gray-400">
              </div>

              <!-- Filters -->
              <div class="flex flex-wrap lg:flex-nowrap gap-4">
                <select class="bg-gray-50 border border-gray-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-primary text-gray-600 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                  <option value="all">Price: All</option>
                  <option value="free">Free</option>
                  <option value="paid">Paid</option>
                </select>
                <select class="bg-gray-50 border border-gray-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-primary text-gray-600 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                  <option value="all">Level: All</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                <select class="bg-gray-50 border border-gray-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-primary text-gray-600 font-medium cursor-pointer hover:bg-gray-100 transition-colors hidden md:block">
                  <option value="all">Certificate: All</option>
                  <option value="yes">Included</option>
                </select>
              </div>

            </div>
          </div>
        </div>

        <!-- Horizontal Category Chips -->
        <div class="mb-12 overflow-x-auto pb-4 hide-scrollbar animate-fade-up" style="animation-delay: 0.1s;">
          <div class="flex gap-4 min-w-max">
            <button class="px-6 py-3 rounded-full bg-primary text-white font-bold text-sm shadow-md transition-all hover:bg-primary-light flex items-center gap-2">
              <i class="ri-apps-2-line"></i> All Courses
            </button>
            <button class="px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-600 font-bold text-sm shadow-sm hover:border-primary hover:text-primary hover:shadow-md transition-all flex items-center gap-2 group">
              <i class="ri-code-line group-hover:text-primary"></i> Software Development
            </button>
            <button class="px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-600 font-bold text-sm shadow-sm hover:border-primary hover:text-primary hover:shadow-md transition-all flex items-center gap-2 group">
              <i class="ri-computer-line group-hover:text-primary"></i> Computer Applications
            </button>
            <button class="px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-600 font-bold text-sm shadow-sm hover:border-primary hover:text-primary hover:shadow-md transition-all flex items-center gap-2 group">
              <i class="ri-briefcase-4-line group-hover:text-primary"></i> Office Automation
            </button>
            <button class="px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-600 font-bold text-sm shadow-sm hover:border-primary hover:text-primary hover:shadow-md transition-all flex items-center gap-2 group">
              <i class="ri-calculator-line group-hover:text-primary"></i> Tally & Accounts
            </button>
            <button class="px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-600 font-bold text-sm shadow-sm hover:border-primary hover:text-primary hover:shadow-md transition-all flex items-center gap-2 group">
              <i class="ri-router-line group-hover:text-primary"></i> Hardware & Network
            </button>
          </div>
        </div>

        <!-- Course Grid -->
        <div id="courseGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Course Card 1 -->
          <div class="bg-white rounded-[28px] shadow-premium overflow-hidden border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full animate-fade-up" style="animation-delay: 0.2s;">
            <div class="relative h-56 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" alt="ADCA" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                Computer Applications
              </div>
              <div class="absolute top-4 right-4 bg-accent text-[#081C3A] px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                <i class="ri-medal-fill"></i> Certified
              </div>
            </div>
            <div class="p-6 md:p-8 flex-grow flex flex-col">
              <h3 class="text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">Advance Diploma in Computer Application (ADCA)</h3>
              <div class="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                <span class="flex items-center gap-1"><i class="ri-time-line text-primary"></i> 12 Months</span>
                <span class="flex items-center gap-1"><i class="ri-book-read-line text-primary"></i> 8 Subjects</span>
              </div>
              
              <div class="mt-auto">
                <div class="flex items-end gap-2 mb-6">
                  <span class="text-2xl font-bold text-gray-900">₹8,500</span>
                  <span class="text-sm text-gray-400 line-through mb-1">₹12,000</span>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <a href="#" class="px-4 py-2.5 bg-gray-50 border border-gray-200 text-gray-700 font-bold text-sm text-center rounded-xl hover:bg-gray-100 transition-colors">Details</a>
                  <button onclick="openEnquiryModal('ADCA')" class="px-4 py-2.5 bg-primary text-white font-bold text-sm text-center rounded-xl hover:bg-primary-light hover:shadow-lg transition-all magnetic-btn">Enquiry</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Course Card 2 -->
          <div class="bg-white rounded-[28px] shadow-premium overflow-hidden border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full animate-fade-up" style="animation-delay: 0.3s;">
            <div class="relative h-56 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" alt="C Programming" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                Software Development
              </div>
            </div>
            <div class="p-6 md:p-8 flex-grow flex flex-col">
              <h3 class="text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">C Programming Fundamentals</h3>
              <div class="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                <span class="flex items-center gap-1"><i class="ri-time-line text-primary"></i> 3 Months</span>
                <span class="flex items-center gap-1"><i class="ri-book-read-line text-primary"></i> 4 Subjects</span>
              </div>
              
              <div class="mt-auto">
                <div class="flex items-end gap-2 mb-6">
                  <span class="text-2xl font-bold text-gray-900">₹3,500</span>
                  <span class="text-sm text-gray-400 line-through mb-1">₹5,000</span>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <a href="#" class="px-4 py-2.5 bg-gray-50 border border-gray-200 text-gray-700 font-bold text-sm text-center rounded-xl hover:bg-gray-100 transition-colors">Details</a>
                  <button onclick="openEnquiryModal('C Programming')" class="px-4 py-2.5 bg-primary text-white font-bold text-sm text-center rounded-xl hover:bg-primary-light hover:shadow-lg transition-all magnetic-btn">Enquiry</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Course Card 3 -->
          <div class="bg-white rounded-[28px] shadow-premium overflow-hidden border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full animate-fade-up" style="animation-delay: 0.4s;">
            <div class="relative h-56 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop" alt="Tally" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                Tally & Accounts
              </div>
              <div class="absolute top-4 right-4 bg-accent text-[#081C3A] px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                <i class="ri-medal-fill"></i> Certified
              </div>
            </div>
            <div class="p-6 md:p-8 flex-grow flex flex-col">
              <h3 class="text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">Tally ERP 9 & GST Advanced Accounting</h3>
              <div class="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                <span class="flex items-center gap-1"><i class="ri-time-line text-primary"></i> 6 Months</span>
                <span class="flex items-center gap-1"><i class="ri-book-read-line text-primary"></i> 5 Subjects</span>
              </div>
              
              <div class="mt-auto">
                <div class="flex items-end gap-2 mb-6">
                  <span class="text-2xl font-bold text-gray-900">₹6,000</span>
                  <span class="text-sm text-gray-400 line-through mb-1">₹8,000</span>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <a href="#" class="px-4 py-2.5 bg-gray-50 border border-gray-200 text-gray-700 font-bold text-sm text-center rounded-xl hover:bg-gray-100 transition-colors">Details</a>
                  <button onclick="openEnquiryModal('Tally & GST')" class="px-4 py-2.5 bg-primary text-white font-bold text-sm text-center rounded-xl hover:bg-primary-light hover:shadow-lg transition-all magnetic-btn">Enquiry</button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Course Card 4 -->
          <div class="bg-white rounded-[28px] shadow-premium overflow-hidden border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full animate-fade-up">
            <div class="relative h-56 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" alt="DCA" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                Computer Applications
              </div>
            </div>
            <div class="p-6 md:p-8 flex-grow flex flex-col">
              <h3 class="text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">Diploma in Computer Application (DCA)</h3>
              <div class="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                <span class="flex items-center gap-1"><i class="ri-time-line text-primary"></i> 6 Months</span>
                <span class="flex items-center gap-1"><i class="ri-book-read-line text-primary"></i> 5 Subjects</span>
              </div>
              
              <div class="mt-auto">
                <div class="flex items-end gap-2 mb-6">
                  <span class="text-2xl font-bold text-gray-900">₹4,500</span>
                  <span class="text-sm text-gray-400 line-through mb-1">₹6,500</span>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <a href="#" class="px-4 py-2.5 bg-gray-50 border border-gray-200 text-gray-700 font-bold text-sm text-center rounded-xl hover:bg-gray-100 transition-colors">Details</a>
                  <button onclick="openEnquiryModal('DCA')" class="px-4 py-2.5 bg-primary text-white font-bold text-sm text-center rounded-xl hover:bg-primary-light hover:shadow-lg transition-all magnetic-btn">Enquiry</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Course Card 5 -->
          <div class="bg-white rounded-[28px] shadow-premium overflow-hidden border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full animate-fade-up">
            <div class="relative h-56 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542744094-24638ea0b3b5?q=80&w=800&auto=format&fit=crop" alt="Basic Data Entry" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                Data Entry
              </div>
            </div>
            <div class="p-6 md:p-8 flex-grow flex flex-col">
              <h3 class="text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">Basic Data Entry Operator (DEO) & Typing</h3>
              <div class="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                <span class="flex items-center gap-1"><i class="ri-time-line text-primary"></i> 3 Months</span>
                <span class="flex items-center gap-1"><i class="ri-book-read-line text-primary"></i> 2 Subjects</span>
              </div>
              
              <div class="mt-auto">
                <div class="flex items-end gap-2 mb-6">
                  <span class="text-2xl font-bold text-gray-900">₹2,500</span>
                  <span class="text-sm text-gray-400 line-through mb-1">₹3,500</span>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <a href="#" class="px-4 py-2.5 bg-gray-50 border border-gray-200 text-gray-700 font-bold text-sm text-center rounded-xl hover:bg-gray-100 transition-colors">Details</a>
                  <button onclick="openEnquiryModal('DEO')" class="px-4 py-2.5 bg-primary text-white font-bold text-sm text-center rounded-xl hover:bg-primary-light hover:shadow-lg transition-all magnetic-btn">Enquiry</button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Course Card 6 -->
          <div class="bg-white rounded-[28px] shadow-premium overflow-hidden border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full animate-fade-up">
            <div class="relative h-56 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1626785776985-7973c98864f4?q=80&w=800&auto=format&fit=crop" alt="CorelDRAW" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                DTP & Design
              </div>
            </div>
            <div class="p-6 md:p-8 flex-grow flex flex-col">
              <h3 class="text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">CorelDRAW & Page Layout Design</h3>
              <div class="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                <span class="flex items-center gap-1"><i class="ri-time-line text-primary"></i> 3 Months</span>
                <span class="flex items-center gap-1"><i class="ri-book-read-line text-primary"></i> 3 Subjects</span>
              </div>
              
              <div class="mt-auto">
                <div class="flex items-end gap-2 mb-6">
                  <span class="text-2xl font-bold text-gray-900">₹3,000</span>
                  <span class="text-sm text-gray-400 line-through mb-1">₹4,500</span>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <a href="#" class="px-4 py-2.5 bg-gray-50 border border-gray-200 text-gray-700 font-bold text-sm text-center rounded-xl hover:bg-gray-100 transition-colors">Details</a>
                  <button onclick="openEnquiryModal('CorelDRAW')" class="px-4 py-2.5 bg-primary text-white font-bold text-sm text-center rounded-xl hover:bg-primary-light hover:shadow-lg transition-all magnetic-btn">Enquiry</button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Empty State (Hidden) -->
        <div id="emptyState" class="hidden text-center py-24 animate-fade-up">
          <img src="https://cdn-icons-png.flaticon.com/512/7486/7486747.png" alt="Not Found" class="w-48 h-48 mx-auto mb-6 opacity-80">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">No Courses Found</h3>
          <p class="text-gray-500 max-w-md mx-auto mb-8">Try changing your search keywords or filters to find the course you're looking for.</p>
          <button onclick="clearSearch()" class="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-light transition-colors">Clear Filters</button>
        </div>

        <!-- Pagination -->
        <div class="mt-16 flex justify-center items-center gap-3 animate-fade-up">
          <button class="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-400 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-not-allowed">
            <i class="ri-arrow-left-s-line text-xl"></i>
          </button>
          <button class="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-lg hover:bg-primary-light transition-colors">1</button>
          <button class="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-blue-50 hover:text-primary hover:border-primary transition-colors">2</button>
          <button class="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-blue-50 hover:text-primary hover:border-primary transition-colors">3</button>
          <span class="text-gray-400 font-bold px-1">...</span>
          <button class="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-700 flex items-center justify-center hover:bg-blue-50 hover:text-primary hover:border-primary transition-colors">
            <i class="ri-arrow-right-s-line text-xl font-bold"></i>
          </button>
        </div>

      </div>
    </section>

    <!-- Enquiry Modal -->
    <div id="enquiryModal" class="fixed inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300">
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeEnquiryModal()"></div>
      <div class="bg-white w-full max-w-lg rounded-[32px] shadow-2xl relative z-10 m-4 transform scale-95 transition-transform duration-300 overflow-hidden" id="modalContent">
        <div class="bg-[#081C3A] text-white p-6 relative">
          <h3 class="text-xl font-bold">Course Enquiry</h3>
          <p class="text-sm text-gray-300 mt-1" id="enquiryCourseName">Requesting info for: ADCA</p>
          <button onclick="closeEnquiryModal()" class="absolute top-6 right-6 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <i class="ri-close-line text-xl"></i>
          </button>
        </div>
        <div class="p-8">
          <form onsubmit="event.preventDefault(); submitEnquiry();" class="space-y-5" id="enquiryForm">
            <div class="relative">
              <label class="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
              <input type="text" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white text-sm">
            </div>
            <div class="relative">
              <label class="block text-sm font-bold text-gray-700 mb-1">Mobile Number</label>
              <input type="tel" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white text-sm">
            </div>
            <div class="relative">
              <label class="block text-sm font-bold text-gray-700 mb-1">Message (Optional)</label>
              <textarea rows="2" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white text-sm"></textarea>
            </div>
            <button type="submit" class="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors mt-2 shadow-md">Submit Enquiry</button>
          </form>
          
          <div id="enquirySuccess" class="hidden text-center py-6">
            <div class="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 animate-bounce">
              <i class="ri-check-line"></i>
            </div>
            <h4 class="text-xl font-bold text-gray-900 mb-2">Enquiry Sent!</h4>
            <p class="text-gray-500 text-sm">Our counselor will contact you shortly.</p>
            <button onclick="closeEnquiryModal()" class="mt-6 px-6 py-2 bg-gray-100 text-gray-700 font-bold rounded-full hover:bg-gray-200 transition-colors">Close</button>
          </div>
        </div>
      </div>
    </div>

    <script>
      // Mock search logic
      document.getElementById('courseSearch').addEventListener('input', function(e) {
        const val = e.target.value.toLowerCase();
        const grid = document.getElementById('courseGrid');
        const emptyState = document.getElementById('emptyState');
        
        // Very basic mock logic just to show the empty state
        if (val.length > 3 && val !== 'adca' && val !== 'tally' && val !== 'dca') {
          grid.classList.add('hidden');
          emptyState.classList.remove('hidden');
        } else {
          grid.classList.remove('hidden');
          emptyState.classList.add('hidden');
        }
      });

      function clearSearch() {
        document.getElementById('courseSearch').value = '';
        document.getElementById('courseGrid').classList.remove('hidden');
        document.getElementById('emptyState').classList.add('hidden');
      }

      // Enquiry Modal
      function openEnquiryModal(courseName) {
        document.getElementById('enquiryCourseName').innerText = 'Requesting info for: ' + courseName;
        const modal = document.getElementById('enquiryModal');
        const content = document.getElementById('modalContent');
        
        // Reset form state
        document.getElementById('enquiryForm').classList.remove('hidden');
        document.getElementById('enquirySuccess').classList.add('hidden');
        document.getElementById('enquiryForm').reset();
        
        modal.classList.remove('opacity-0', 'pointer-events-none');
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
      }

      function closeEnquiryModal() {
        const modal = document.getElementById('enquiryModal');
        const content = document.getElementById('modalContent');
        
        modal.classList.add('opacity-0', 'pointer-events-none');
        content.classList.add('scale-95');
        content.classList.remove('scale-100');
      }

      function submitEnquiry() {
        document.getElementById('enquiryForm').classList.add('hidden');
        document.getElementById('enquirySuccess').classList.remove('hidden');
        document.getElementById('enquirySuccess').classList.add('animate-fade-up');
      }
    </script>
`;

function buildCoursePage() {
  const prefix = './';
  let finalHtml = layoutHtml.replace('{{CONTENT}}', coursesContent);

  finalHtml = finalHtml.replace(/href="([a-zA-Z0-9\-\/]+\.html)"/g, (match, p1) => {
    if (p1.startsWith('http') || p1.startsWith('#') || p1.startsWith('./')) return match;
    return `href="${prefix}${p1}"`;
  });
  finalHtml = finalHtml.replace(/src="\.\/src\/main\.js"/g, `src="${prefix}src/main.js"`);
  finalHtml = finalHtml.replace(/href="\.\/dist\/output\.css"/g, `href="${prefix}dist/output.css"`);

  fs.writeFileSync(path.join(__dirname, '../courses.html'), finalHtml);
  console.log(`courses.html successfully created!`);
}

buildCoursePage();
