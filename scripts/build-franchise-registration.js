const fs = require('fs');
const path = require('path');

const layoutHtml = fs.readFileSync(path.join(__dirname, '../src/layout.html'), 'utf8');

const franchiseRegContent = `
    <!-- Cinematic Hero Section -->
    <section class="relative h-[650px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
             alt="Business Meeting" 
             class="w-full h-full object-cover animate-ken-burns opacity-60">
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-[#081C3A]/95 via-[#081C3A]/80 to-[#081C3A] z-10 mix-blend-multiply"></div>
      
      <!-- Floating Particles & Light rays -->
      <div class="absolute inset-0 z-10 opacity-30 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>

      <div class="container mx-auto px-6 relative z-20 text-center animate-fade-up">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-6 shadow-premium">
          🤝 Become Our Franchise Partner
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-2xl">
          Start Your Own Institute With <span class="text-accent">InstituteHub</span>
        </h1>
        
        <p class="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
          Join our growing education network and build a successful computer training centre with complete academic support, branding, certification, marketing assistance, and operational guidance.
        </p>

        <div class="flex items-center justify-center gap-2 text-sm font-medium text-gray-400 mb-12">
          <a href="../index.html" class="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span class="text-accent">Franchise Registration</span>
        </div>
        
        <div class="animate-bounce inline-block text-white/50">
          <i class="ri-arrow-down-line text-2xl"></i>
        </div>
      </div>
    </section>

    <!-- Why Become a Franchise Partner -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
          <p class="text-gray-600 text-lg">We provide everything you need to establish and grow a highly profitable education centre.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${[
            {i: "ri-shield-check-line", t: "Trusted Education Brand", d: "Leverage a recognized brand name that students and parents trust."},
            {i: "ri-book-read-line", t: "Complete Academic Support", d: "Get access to standardized curriculum, syllabus, and teaching methodology."},
            {i: "ri-megaphone-line", t: "Marketing Assistance", d: "Digital marketing, local SEO, and promotional materials to drive admissions."},
            {i: "ri-medal-line", t: "Student Certification", d: "Provide recognized certificates with digital verification and QR codes."},
            {i: "ri-team-line", t: "Training & Staff Support", d: "Comprehensive training for your center directors, counselors, and faculties."},
            {i: "ri-line-chart-line", t: "Business Growth", d: "Proven business model with continuous guidance for maximizing revenue."}
          ].map((f, index) => 
            '<div class="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-premium hover:-translate-y-2 transition-all duration-300 group animate-fade-up" style="animation-delay: ' + (index*0.1) + 's;">' +
              '<div class="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">' +
                '<i class="' + f.i + '"></i>' +
              '</div>' +
              '<h3 class="text-xl font-bold text-gray-900 mb-3">' + f.t + '</h3>' +
              '<p class="text-gray-600">' + f.d + '</p>' +
            '</div>'
          ).join('')}
        </div>
      </div>
    </section>

    <!-- Franchise Benefits (Horizontal Luxury Section) -->
    <section class="py-24 bg-[#081C3A] text-white overflow-hidden relative">
      <div class="absolute inset-0 bg-gradient-to-r from-[#081C3A] to-primary/80 opacity-90"></div>
      <div class="container mx-auto px-6 lg:px-12 relative z-10">
        <div class="flex flex-col lg:flex-row gap-16 items-center">
          <div class="lg:w-1/3 animate-fade-up">
            <h2 class="text-4xl font-bold mb-6">Franchise <span class="text-accent">Benefits</span></h2>
            <p class="text-gray-400 text-lg mb-8 leading-relaxed">Starting an institute has never been easier. We offer a low-risk, high-return business model backed by decades of academic excellence.</p>
            <div class="flex gap-4">
              <div class="text-center">
                <div class="text-4xl font-bold text-accent mb-1">500+</div>
                <div class="text-xs text-gray-400 uppercase tracking-wider">Active Centers</div>
              </div>
              <div class="text-center border-l border-white/20 pl-4">
                <div class="text-4xl font-bold text-accent mb-1">20+</div>
                <div class="text-xs text-gray-400 uppercase tracking-wider">States Covered</div>
              </div>
            </div>
          </div>
          
          <div class="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up" style="animation-delay: 0.2s;">
            ${[
              {t: "Low Investment", i: "ri-wallet-3-line"},
              {t: "High Growth", i: "ri-rocket-line"},
              {t: "Marketing Support", i: "ri-megaphone-line"},
              {t: "Technical Asst.", i: "ri-customer-service-2-line"},
              {t: "Course Materials", i: "ri-book-open-line"},
              {t: "Digital Cert.", i: "ri-qr-code-line"},
              {t: "Placements", i: "ri-briefcase-4-line"},
              {t: "Dedicated RM", i: "ri-user-star-line"}
            ].map(b => 
              '<div class="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors group cursor-pointer">' +
                '<i class="' + b.i + ' text-3xl text-gray-300 group-hover:text-accent transition-colors block mb-4"></i>' +
                '<h4 class="font-bold text-sm text-white">' + b.t + '</h4>' +
              '</div>'
            ).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Registration Process Timeline -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div class="text-center mb-16 animate-fade-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Registration <span class="text-primary">Process</span></h2>
          <p class="text-gray-600 text-lg">6 Simple steps to launch your dream institute.</p>
        </div>
        
        <div class="relative animate-fade-up" style="animation-delay: 0.2s;">
          <div class="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden md:block"></div>
          <div class="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
            ${[
              {n: "1", t: "Fill Form", i: "ri-file-list-3-line"},
              {n: "2", t: "Verification", i: "ri-checkbox-circle-line"},
              {n: "3", t: "Discussion", i: "ri-chat-3-line"},
              {n: "4", t: "Approval", i: "ri-thumb-up-line"},
              {n: "5", t: "Agreement", i: "ri-pen-nib-line"},
              {n: "6", t: "Launch", i: "ri-rocket-2-line"}
            ].map(s => 
              '<div class="flex flex-col items-center text-center group">' +
                '<div class="w-16 h-16 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center text-2xl text-gray-400 group-hover:border-primary group-hover:text-primary group-hover:scale-110 transition-all duration-300 shadow-lg mb-4 relative">' +
                  '<i class="' + s.i + '"></i>' +
                  '<div class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-md">' + s.n + '</div>' +
                '</div>' +
                '<h4 class="font-bold text-sm text-gray-900">' + s.t + '</h4>' +
              '</div>'
            ).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Multi-Step Application Form -->
    <section class="py-24 bg-gray-50 relative overflow-hidden">
      <!-- Ambient Orbs -->
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div class="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
        
        <div class="bg-white/80 backdrop-blur-2xl border border-white rounded-[32px] shadow-2xl overflow-hidden animate-fade-up">
          
          <!-- Sticky Progress Indicator -->
          <div class="bg-white border-b border-gray-100 p-6 md:px-12 sticky top-0 z-50">
            <div class="flex justify-between items-center relative">
              <div class="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 -z-10"></div>
              
              <!-- Step Indicators -->
              <div class="flex flex-col items-center gap-2 bg-white px-2 cursor-default step-indicator active" data-step="1">
                <div class="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-md indicator-circle transition-all">1</div>
                <span class="text-xs font-bold text-primary indicator-text transition-all">Institute</span>
              </div>
              <div class="flex flex-col items-center gap-2 bg-white px-2 cursor-default step-indicator" data-step="2">
                <div class="w-10 h-10 rounded-full bg-gray-100 text-gray-400 font-bold flex items-center justify-center indicator-circle transition-all">2</div>
                <span class="text-xs font-bold text-gray-400 indicator-text transition-all">Director</span>
              </div>
              <div class="flex flex-col items-center gap-2 bg-white px-2 cursor-default step-indicator" data-step="3">
                <div class="w-10 h-10 rounded-full bg-gray-100 text-gray-400 font-bold flex items-center justify-center indicator-circle transition-all">3</div>
                <span class="text-xs font-bold text-gray-400 indicator-text transition-all">Documents</span>
              </div>
              <div class="flex flex-col items-center gap-2 bg-white px-2 cursor-default step-indicator" data-step="4">
                <div class="w-10 h-10 rounded-full bg-gray-100 text-gray-400 font-bold flex items-center justify-center indicator-circle transition-all">4</div>
                <span class="text-xs font-bold text-gray-400 indicator-text transition-all">Review</span>
              </div>
            </div>
          </div>

          <div class="p-6 md:p-12">
            <form id="franchiseForm" onsubmit="event.preventDefault(); showSuccess();">
              
              <!-- STEP 1: Institute Information -->
              <div class="form-step active" id="step-1">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Institute Information</h3>
                <p class="text-gray-500 mb-8">Provide the primary details of the proposed franchise centre.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-gray-700">Institute Name <span class="text-red-500">*</span></label>
                    <input type="text" required class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-gray-700">Institute Registration Date</label>
                    <input type="date" class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-gray-600">
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-gray-700">Email Address <span class="text-red-500">*</span></label>
                    <input type="email" required class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-gray-700">Institute Phone <span class="text-red-500">*</span></label>
                    <input type="tel" required class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-gray-700">WhatsApp Number</label>
                    <input type="tel" class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-gray-700">Google Map Link</label>
                    <input type="url" class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                  </div>
                  <div class="space-y-2 md:col-span-2">
                    <label class="text-sm font-bold text-gray-700">Address <span class="text-red-500">*</span></label>
                    <textarea required rows="2" class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"></textarea>
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-gray-700">PIN Code <span class="text-red-500">*</span></label>
                    <input type="text" required class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-gray-700">State <span class="text-red-500">*</span></label>
                    <select required class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-gray-600">
                      <option value="">Select State</option>
                      <option>Uttar Pradesh</option>
                      <option>Delhi</option>
                      <option>Maharashtra</option>
                    </select>
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-gray-700">District <span class="text-red-500">*</span></label>
                    <input type="text" required class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                  </div>
                </div>

                <div class="mt-10 flex justify-end">
                  <button type="button" onclick="nextStep(2)" class="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light transition-all duration-300 shadow-md flex items-center gap-2 group">
                    Continue <i class="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>

              <!-- STEP 2: Director Information -->
              <div class="form-step hidden" id="step-2">
                <div class="flex items-center justify-between mb-8">
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Director Information</h3>
                    <p class="text-gray-500">Provide details of the primary owner or center director.</p>
                  </div>
                  <div class="w-16 h-16 rounded-full bg-blue-50 text-primary flex items-center justify-center text-3xl shrink-0 border border-blue-100 shadow-sm">
                    <i class="ri-user-tie-fill"></i>
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2 md:col-span-2">
                    <label class="text-sm font-bold text-gray-700">Director Name <span class="text-red-500">*</span></label>
                    <input type="text" required class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-lg font-medium">
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-gray-700">Director Phone</label>
                    <input type="tel" class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-gray-700">Director WhatsApp</label>
                    <input type="tel" class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-gray-700">Email Address</label>
                    <input type="email" class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                  </div>
                  <div class="space-y-2 relative">
                    <label class="text-sm font-bold text-gray-700">Aadhaar Number (12 Digits) <span class="text-red-500">*</span></label>
                    <input type="text" required maxlength="12" pattern="\\d{12}" class="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-10 pr-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all tracking-widest font-mono">
                    <i class="ri-fingerprint-line absolute left-4 top-[38px] text-gray-400"></i>
                  </div>
                </div>

                <div class="mt-6 p-4 bg-green-50 border border-green-100 rounded-xl flex items-center gap-3">
                  <i class="ri-shield-keyhole-fill text-green-500 text-xl"></i>
                  <p class="text-xs text-green-800 font-medium">Your identity information is securely encrypted and used strictly for franchise verification purposes.</p>
                </div>

                <div class="mt-10 flex justify-between">
                  <button type="button" onclick="nextStep(1)" class="px-6 py-4 bg-gray-100 text-gray-700 font-bold rounded-2xl hover:bg-gray-200 transition-all duration-300">
                    Back
                  </button>
                  <button type="button" onclick="nextStep(3)" class="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light transition-all duration-300 shadow-md flex items-center gap-2 group">
                    Continue <i class="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>

              <!-- STEP 3: Upload Documents -->
              <div class="form-step hidden" id="step-3">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Upload Documents</h3>
                <p class="text-gray-500 mb-8">Please upload high-quality scans or photos of the requested documents (JPG, PNG, PDF).</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Upload Card 1 -->
                  <div class="border-2 border-dashed border-gray-300 rounded-3xl p-6 text-center hover:border-primary hover:bg-blue-50/50 transition-all cursor-pointer group">
                    <div class="w-12 h-12 rounded-full bg-blue-50 text-primary mx-auto mb-3 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      <i class="ri-building-line"></i>
                    </div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Institute Logo</h4>
                    <p class="text-xs text-gray-500 mb-4">Max size: 2MB</p>
                    <button type="button" class="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-700 hover:border-primary hover:text-primary transition-colors shadow-sm">Browse File</button>
                  </div>
                  
                  <!-- Upload Card 2 -->
                  <div class="border-2 border-dashed border-gray-300 rounded-3xl p-6 text-center hover:border-primary hover:bg-blue-50/50 transition-all cursor-pointer group">
                    <div class="w-12 h-12 rounded-full bg-blue-50 text-primary mx-auto mb-3 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      <i class="ri-image-2-line"></i>
                    </div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Institute Photo</h4>
                    <p class="text-xs text-gray-500 mb-4">Front view. Max size: 5MB</p>
                    <button type="button" class="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-700 hover:border-primary hover:text-primary transition-colors shadow-sm">Browse File</button>
                  </div>
                  
                  <!-- Upload Card 3 -->
                  <div class="border-2 border-dashed border-gray-300 rounded-3xl p-6 text-center hover:border-primary hover:bg-blue-50/50 transition-all cursor-pointer group">
                    <div class="w-12 h-12 rounded-full bg-blue-50 text-primary mx-auto mb-3 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      <i class="ri-user-smile-line"></i>
                    </div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Director Photo</h4>
                    <p class="text-xs text-gray-500 mb-4">Passport size. Max size: 2MB</p>
                    <button type="button" class="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-700 hover:border-primary hover:text-primary transition-colors shadow-sm">Browse File</button>
                  </div>
                  
                  <!-- Upload Card 4 -->
                  <div class="border-2 border-dashed border-gray-300 rounded-3xl p-6 text-center hover:border-primary hover:bg-blue-50/50 transition-all cursor-pointer group">
                    <div class="w-12 h-12 rounded-full bg-blue-50 text-primary mx-auto mb-3 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      <i class="ri-id-card-line"></i>
                    </div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Director Aadhaar Card</h4>
                    <p class="text-xs text-gray-500 mb-4">Front & Back (PDF/JPG). Max: 5MB</p>
                    <button type="button" class="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-700 hover:border-primary hover:text-primary transition-colors shadow-sm">Browse File</button>
                  </div>
                </div>

                <div class="mt-10 flex justify-between">
                  <button type="button" onclick="nextStep(2)" class="px-6 py-4 bg-gray-100 text-gray-700 font-bold rounded-2xl hover:bg-gray-200 transition-all duration-300">
                    Back
                  </button>
                  <button type="button" onclick="nextStep(4)" class="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light transition-all duration-300 shadow-md flex items-center gap-2 group">
                    Review Details <i class="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>

              <!-- STEP 4: Review & Submit -->
              <div class="form-step hidden" id="step-4">
                <div class="text-center mb-8">
                  <div class="w-20 h-20 rounded-full bg-blue-50 text-primary mx-auto mb-4 flex items-center justify-center text-4xl shadow-sm">
                    <i class="ri-file-search-line"></i>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">Review Your Application</h3>
                  <p class="text-gray-500">Please verify your details before final submission.</p>
                </div>
                
                <div class="bg-gray-50 rounded-3xl p-6 border border-gray-200 mb-8 space-y-6">
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3 flex items-center gap-2"><i class="ri-building-line text-primary"></i> Institute Details</h4>
                    <div class="grid grid-cols-2 gap-4 text-sm">
                      <div><span class="text-gray-500 block">Name:</span> <span class="font-bold text-gray-900">InstituteHub Preview</span></div>
                      <div><span class="text-gray-500 block">Phone:</span> <span class="font-bold text-gray-900">+91 9876543210</span></div>
                      <div><span class="text-gray-500 block">Email:</span> <span class="font-bold text-gray-900">contact@preview.com</span></div>
                      <div><span class="text-gray-500 block">Location:</span> <span class="font-bold text-gray-900">Varanasi, UP</span></div>
                    </div>
                  </div>
                  <div class="w-full h-px bg-gray-200"></div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3 flex items-center gap-2"><i class="ri-user-tie-line text-primary"></i> Director Details</h4>
                    <div class="grid grid-cols-2 gap-4 text-sm">
                      <div><span class="text-gray-500 block">Name:</span> <span class="font-bold text-gray-900">John Doe</span></div>
                      <div><span class="text-gray-500 block">Aadhaar:</span> <span class="font-bold text-gray-900">XXXX-XXXX-1234</span></div>
                    </div>
                  </div>
                  <div class="w-full h-px bg-gray-200"></div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3 flex items-center gap-2"><i class="ri-folder-open-line text-primary"></i> Documents Uploaded</h4>
                    <div class="flex gap-2">
                      <span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded flex items-center gap-1"><i class="ri-check-line"></i> Logo</span>
                      <span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded flex items-center gap-1"><i class="ri-check-line"></i> Inst. Photo</span>
                      <span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded flex items-center gap-1"><i class="ri-check-line"></i> Dir. Photo</span>
                      <span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded flex items-center gap-1"><i class="ri-check-line"></i> Aadhaar</span>
                    </div>
                  </div>
                </div>

                <label class="flex items-start gap-3 cursor-pointer group mb-10">
                  <input type="checkbox" required class="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer">
                  <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">I confirm that all information provided above is accurate to the best of my knowledge. I understand that providing false information will lead to rejection.</span>
                </label>

                <div class="flex flex-col sm:flex-row gap-4 justify-between" id="submitButtons">
                  <button type="button" onclick="nextStep(3)" class="px-6 py-4 bg-gray-100 text-gray-700 font-bold rounded-2xl hover:bg-gray-200 transition-all duration-300 order-2 sm:order-1">
                    Edit Details
                  </button>
                  <button type="submit" class="px-10 py-4 bg-accent text-[#081C3A] font-bold rounded-2xl hover:bg-yellow-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 order-1 sm:order-2 flex items-center justify-center gap-2 text-lg">
                    Submit Registration <i class="ri-send-plane-fill"></i>
                  </button>
                </div>
                
                <!-- Success State (Hidden initially) -->
                <div id="successState" class="hidden text-center py-10 animate-fade-up">
                  <div class="w-24 h-24 rounded-full bg-green-100 text-green-500 mx-auto mb-6 flex items-center justify-center text-5xl shadow-lg border-4 border-white">
                    <i class="ri-check-line"></i>
                  </div>
                  <h3 class="text-3xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                  <p class="text-gray-500 max-w-md mx-auto mb-8">Thank you for showing interest in joining InstituteHub. Our relationship manager will contact you within 24-48 working hours.</p>
                  <a href="../index.html" class="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-light transition-colors inline-block">Return to Homepage</a>
                </div>

              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>

    <script>
      // Multi-step form navigation logic
      function nextStep(stepNumber) {
        // Hide all steps
        document.querySelectorAll('.form-step').forEach(step => {
          step.classList.add('hidden');
          step.classList.remove('active');
        });
        
        // Show target step
        const targetStep = document.getElementById('step-' + stepNumber);
        targetStep.classList.remove('hidden');
        
        // Force reflow for fade-in animation
        void targetStep.offsetWidth; 
        targetStep.classList.add('active', 'animate-fade-up');

        // Update indicators
        document.querySelectorAll('.step-indicator').forEach(indicator => {
          const stepVal = parseInt(indicator.getAttribute('data-step'));
          const circle = indicator.querySelector('.indicator-circle');
          const text = indicator.querySelector('.indicator-text');
          
          if (stepVal < stepNumber) {
            // Completed
            circle.className = 'w-10 h-10 rounded-full bg-green-500 text-white font-bold flex items-center justify-center shadow-md indicator-circle transition-all';
            circle.innerHTML = '<i class="ri-check-line"></i>';
            text.className = 'text-xs font-bold text-green-500 indicator-text transition-all';
          } else if (stepVal === stepNumber) {
            // Current
            circle.className = 'w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-md indicator-circle transition-all';
            circle.innerHTML = stepVal;
            text.className = 'text-xs font-bold text-primary indicator-text transition-all';
          } else {
            // Future
            circle.className = 'w-10 h-10 rounded-full bg-gray-100 text-gray-400 font-bold flex items-center justify-center indicator-circle transition-all';
            circle.innerHTML = stepVal;
            text.className = 'text-xs font-bold text-gray-400 indicator-text transition-all';
          }
        });
        
        window.scrollTo({ top: document.querySelector('.sticky').offsetTop - 20, behavior: 'smooth' });
      }

      function showSuccess() {
        document.getElementById('submitButtons').classList.add('hidden');
        // Hide all review data, show success state
        document.querySelector('#step-4 .bg-gray-50').classList.add('hidden');
        document.querySelector('#step-4 label').classList.add('hidden');
        document.querySelector('#step-4 .text-center').classList.add('hidden');
        
        const successState = document.getElementById('successState');
        successState.classList.remove('hidden');
      }
    </script>
`;

// Calculate prefix correctly for /franchise/registration.html
const prefix = '../';
let finalHtml = layoutHtml.replace('{{CONTENT}}', franchiseRegContent);

// Fix relative links like layout does
finalHtml = finalHtml.replace(/href="([a-zA-Z0-9\-\/]+\.html)"/g, (match, p1) => {
  if (p1.startsWith('http') || p1.startsWith('#') || p1.startsWith('../')) return match;
  return `href="${prefix}${p1}"`;
});
finalHtml = finalHtml.replace(/src="\.\/src\/main\.js"/g, `src="${prefix}src/main.js"`);
finalHtml = finalHtml.replace(/href="\.\/dist\/output\.css"/g, `href="${prefix}dist/output.css"`);

fs.writeFileSync(path.join(__dirname, '../franchise/registration.html'), finalHtml);
console.log('franchise/registration.html successfully created!');
