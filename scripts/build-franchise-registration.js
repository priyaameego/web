const fs = require('fs');
const path = require('path');

const layoutHtml = fs.readFileSync(path.join(__dirname, '../src/layout.html'), 'utf8');

const franchiseRegContent = `
    <!-- Cinematic Hero Section -->
    <section class="relative h-[300px] flex items-center justify-center overflow-hidden">
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

        <div class="flex items-center justify-center gap-2 text-sm font-medium text-gray-400">
          <a href="../index.html" class="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span class="text-accent">Franchise Registration</span>
        </div>
      </div>
    </section>



    <!-- Franchise Registration Form Section -->
    <section class="py-24 bg-gray-50 relative overflow-hidden">
      <!-- Ambient Orbs -->
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[80px] pointer-events-none"></div>

      <div class="container mx-auto px-6 lg:px-12 max-w-5xl relative z-10 animate-fade-up">
        
        <div class="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
          
          <div class="py-6 border-b border-gray-100 text-center">
            <h2 class="text-[15px] font-bold tracking-[2px] text-gray-800 uppercase">Franchise Registration Form</h2>
          </div>

          <form id="franchiseForm" onsubmit="event.preventDefault(); showSuccess();" class="p-6 md:p-8">
            
            <!-- SECTION 1: Institute -->
            <div class="mb-8">
              <div class="flex items-center gap-3 bg-[#F4F4FB] px-4 py-3 rounded-lg mb-6">
                <div class="w-7 h-7 rounded-full bg-[#525CEB] text-white flex items-center justify-center text-sm font-bold shadow-sm">1</div>
                <h3 class="text-xl font-bold text-gray-900">Institute</h3>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Institute name *" required class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#525CEB] focus:ring-1 focus:ring-[#525CEB] transition-colors text-gray-700 placeholder-gray-500">
                <input type="tel" placeholder="Institute phone *" required class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#525CEB] focus:ring-1 focus:ring-[#525CEB] transition-colors text-gray-700 placeholder-gray-500">
                
                <input type="tel" placeholder="WhatsApp number" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#525CEB] focus:ring-1 focus:ring-[#525CEB] transition-colors text-gray-700 placeholder-gray-500">
                <input type="email" placeholder="Email address *" required class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#525CEB] focus:ring-1 focus:ring-[#525CEB] transition-colors text-gray-700 placeholder-gray-500">
                
                <input type="text" placeholder="Address *" required class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#525CEB] focus:ring-1 focus:ring-[#525CEB] transition-colors text-gray-700 placeholder-gray-500">
                <input type="text" placeholder="PIN code *" required class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#525CEB] focus:ring-1 focus:ring-[#525CEB] transition-colors text-gray-700 placeholder-gray-500">
                
                <input type="text" placeholder="Institute registration date" onfocus="(this.type='date')" onblur="if(!this.value) this.type='text'" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#525CEB] focus:ring-1 focus:ring-[#525CEB] transition-colors text-gray-700 placeholder-gray-500">
                <input type="url" placeholder="Google Map link" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#525CEB] focus:ring-1 focus:ring-[#525CEB] transition-colors text-gray-700 placeholder-gray-500">
                
                <input type="text" placeholder="District" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#525CEB] focus:ring-1 focus:ring-[#525CEB] transition-colors text-gray-700 placeholder-gray-500">
                <input type="text" placeholder="State" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#525CEB] focus:ring-1 focus:ring-[#525CEB] transition-colors text-gray-700 placeholder-gray-500">
              </div>
            </div>

            <!-- SECTION 2: Director -->
            <div class="mb-8">
              <div class="flex items-center gap-3 bg-[#F4F4FB] px-4 py-3 rounded-lg mb-6">
                <div class="w-7 h-7 rounded-full bg-[#525CEB] text-white flex items-center justify-center text-sm font-bold shadow-sm">2</div>
                <h3 class="text-xl font-bold text-gray-900">Director</h3>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Director name *" required class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#525CEB] focus:ring-1 focus:ring-[#525CEB] transition-colors text-gray-700 placeholder-gray-500">
                <input type="tel" placeholder="Director phone" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#525CEB] focus:ring-1 focus:ring-[#525CEB] transition-colors text-gray-700 placeholder-gray-500">
                
                <input type="tel" placeholder="Director WhatsApp" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#525CEB] focus:ring-1 focus:ring-[#525CEB] transition-colors text-gray-700 placeholder-gray-500">
                <input type="email" placeholder="Email address" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#525CEB] focus:ring-1 focus:ring-[#525CEB] transition-colors text-gray-700 placeholder-gray-500">
                
                <input type="text" placeholder="Aadhaar number (12 digits)" maxlength="12" pattern="\\d{12}" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#525CEB] focus:ring-1 focus:ring-[#525CEB] transition-colors text-gray-700 placeholder-gray-500">
              </div>
            </div>

            <!-- SECTION 3: Documents -->
            <div class="mb-8">
              <div class="flex items-center gap-3 bg-[#F4F4FB] px-4 py-3 rounded-lg mb-6">
                <div class="w-7 h-7 rounded-full bg-[#525CEB] text-white flex items-center justify-center text-sm font-bold shadow-sm">3</div>
                <h3 class="text-xl font-bold text-gray-900">Documents</h3>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <!-- Upload 1 -->
                <label class="border border-dashed border-gray-400 rounded-lg p-3 flex items-center justify-between bg-white cursor-pointer hover:border-gray-600 transition-colors">
                  <div class="flex items-center text-gray-500 overflow-hidden ml-2">
                    <span class="text-sm font-medium truncate file-name">Institute logo</span>
                  </div>
                  <div class="px-5 py-1.5 rounded-full border border-gray-200 text-sm font-bold text-gray-800 bg-white hover:bg-gray-50 transition-colors shadow-sm shrink-0">Browse</div>
                  <input type="file" class="hidden" accept="image/*" onchange="this.parentElement.querySelector('.file-name').innerText = this.files[0] ? this.files[0].name : 'Institute logo'">
                </label>
                
                <!-- Upload 2 -->
                <label class="border border-dashed border-gray-400 rounded-lg p-3 flex items-center justify-between bg-white cursor-pointer hover:border-gray-600 transition-colors">
                  <div class="flex items-center text-gray-500 overflow-hidden ml-2">
                    <span class="text-sm font-medium truncate file-name">Institute photo</span>
                  </div>
                  <div class="px-5 py-1.5 rounded-full border border-gray-200 text-sm font-bold text-gray-800 bg-white hover:bg-gray-50 transition-colors shadow-sm shrink-0">Browse</div>
                  <input type="file" class="hidden" accept="image/*" onchange="this.parentElement.querySelector('.file-name').innerText = this.files[0] ? this.files[0].name : 'Institute photo'">
                </label>
                
                <!-- Upload 3 -->
                <label class="border border-dashed border-gray-400 rounded-lg p-3 flex items-center justify-between bg-white cursor-pointer hover:border-gray-600 transition-colors">
                  <div class="flex items-center text-gray-500 overflow-hidden ml-2">
                    <span class="text-sm font-medium truncate file-name">Director photo</span>
                  </div>
                  <div class="px-5 py-1.5 rounded-full border border-gray-200 text-sm font-bold text-gray-800 bg-white hover:bg-gray-50 transition-colors shadow-sm shrink-0">Browse</div>
                  <input type="file" class="hidden" accept="image/*" onchange="this.parentElement.querySelector('.file-name').innerText = this.files[0] ? this.files[0].name : 'Director photo'">
                </label>
                
                <!-- Upload 4 -->
                <label class="border border-dashed border-gray-400 rounded-lg p-3 flex items-center justify-between bg-white cursor-pointer hover:border-gray-600 transition-colors">
                  <div class="flex items-center text-gray-500 overflow-hidden ml-2">
                    <span class="text-sm font-medium truncate file-name">Director Aadhaar card</span>
                  </div>
                  <div class="px-5 py-1.5 rounded-full border border-gray-200 text-sm font-bold text-gray-800 bg-white hover:bg-gray-50 transition-colors shadow-sm shrink-0">Browse</div>
                  <input type="file" class="hidden" accept=".pdf,image/*" onchange="this.parentElement.querySelector('.file-name').innerText = this.files[0] ? this.files[0].name : 'Director Aadhaar card'">
                </label>

              </div>
            </div>

            <!-- Submit Area -->
            <button type="submit" id="submitBtn" class="w-full py-4 bg-[#525CEB] hover:bg-[#434bcf] text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 text-lg shadow-sm">
              Submit <i class="ri-arrow-right-line"></i>
            </button>
            
          </form>

          <!-- Success State (Hidden initially) -->
          <div id="successState" class="hidden text-center py-12 px-6">
            <div class="w-20 h-20 rounded-full bg-green-100 text-green-500 mx-auto mb-4 flex items-center justify-center text-4xl shadow-sm">
              <i class="ri-check-line"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Registration Submitted!</h3>
            <p class="text-gray-500 mb-6">Thank you for registering. Our team will contact you shortly.</p>
            <button type="button" onclick="window.location.reload()" class="px-6 py-2.5 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-gray-200 transition-colors">Submit Another</button>
          </div>

        </div>
      </div>
    </section>

    <script>
      function showSuccess() {
        document.getElementById('franchiseForm').classList.add('hidden');
        document.getElementById('successState').classList.remove('hidden');
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
console.log('franchise/registration.html successfully updated with new form design!');
