const fs = require('fs');
const path = require('path');

const layoutHtml = fs.readFileSync(path.join(__dirname, '../src/layout.html'), 'utf8');

const verificationContent = `
    <!-- Cinematic Hero Section -->
    <section class="relative h-[450px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
             alt="Campus Office" 
             class="w-full h-full object-cover animate-ken-burns opacity-60">
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-[#081C3A]/95 via-[#081C3A]/80 to-[#081C3A] z-10 mix-blend-multiply"></div>
      
      <!-- Floating Particles -->
      <div class="absolute inset-0 z-10 opacity-30 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>

      <div class="container mx-auto px-6 relative z-20 text-center animate-fade-up">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-6 shadow-premium">
          ✅ Franchise Verification
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-2xl">
          Verify an Authorized <span class="text-accent">Franchise Centre</span>
        </h1>
        
        <p class="text-lg text-gray-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Enter your Franchise ID to verify whether a franchise centre is officially registered with InstituteHub.
        </p>

        <div class="flex items-center justify-center gap-2 text-sm font-medium text-gray-400">
          <a href="../index.html" class="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span class="text-accent">Franchise Verification</span>
        </div>
      </div>
    </section>

    <!-- Verification Section -->
    <section class="py-24 bg-gray-50 relative overflow-hidden min-h-[500px]">
      <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div class="container mx-auto px-6 lg:px-12 relative z-10 flex justify-center">
        <!-- Input Card -->
        <div id="verificationCard" class="w-full max-w-xl bg-white/80 backdrop-blur-2xl border border-white rounded-[32px] shadow-2xl p-8 md:p-12 animate-fade-up">
          <div class="text-center mb-8">
            <div class="w-16 h-16 rounded-2xl bg-blue-50 text-primary mx-auto mb-4 flex items-center justify-center text-3xl shadow-sm">
              <i class="ri-shield-check-line"></i>
            </div>
            <h2 class="text-3xl font-bold text-gray-900 mb-2">Franchise Verification</h2>
            <p class="text-gray-500">Verify an authorised franchise centre by its Franchise ID.</p>
          </div>

          <form onsubmit="event.preventDefault(); verifyFranchise();" class="space-y-6">
            <div class="relative group">
              <label class="block text-sm font-bold text-gray-700 mb-2">Franchise ID <span class="text-red-500">*</span></label>
              <div class="relative">
                <i class="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-primary transition-colors"></i>
                <input type="text" id="franchiseIdInput" required placeholder="e.g. FRN-000001" class="w-full bg-gray-50 border border-gray-200 rounded-[20px] pl-12 pr-4 py-4 focus:outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-mono text-lg tracking-wider text-gray-900 placeholder-gray-400 shadow-sm">
              </div>
            </div>

            <button type="submit" id="verifyBtn" class="w-full py-4 bg-primary text-white font-bold text-lg rounded-[20px] hover:bg-primary-light transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex justify-center items-center gap-2 overflow-hidden relative">
              <span class="relative z-10 flex items-center gap-2 btn-text">Verify <i class="ri-arrow-right-line"></i></span>
              <div class="loading-spinner hidden w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10"></div>
            </button>
          </form>
        </div>

        <!-- Success Result Card (Hidden) -->
        <div id="successResult" class="hidden w-full max-w-2xl bg-white border border-gray-100 rounded-[32px] shadow-2xl overflow-hidden">
          <div class="bg-green-500 p-8 text-center text-white relative overflow-hidden">
            <div class="absolute -right-4 -top-4 text-9xl text-white/10"><i class="ri-shield-check-fill"></i></div>
            <div class="w-20 h-20 bg-white rounded-full text-green-500 mx-auto flex items-center justify-center text-5xl mb-4 shadow-lg relative z-10">
              <i class="ri-check-line"></i>
            </div>
            <h2 class="text-3xl font-bold relative z-10">Verified Franchise</h2>
            <p class="text-green-100 font-medium relative z-10">This centre is officially registered with InstituteHub.</p>
          </div>
          <div class="p-8 md:p-12 space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Franchise Name</p>
                <p class="text-lg font-bold text-gray-900">InstituteHub Preview Centre</p>
              </div>
              <div>
                <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Franchise ID</p>
                <p class="text-lg font-mono font-bold text-primary">FRN-000001</p>
              </div>
              <div>
                <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Location</p>
                <p class="text-gray-900 font-medium flex items-center gap-1"><i class="ri-map-pin-line text-gray-400"></i> Varanasi, Uttar Pradesh</p>
              </div>
              <div>
                <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Registration Status</p>
                <span class="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full">Active</span>
              </div>
              <div>
                <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Valid Until</p>
                <p class="text-gray-900 font-medium">31 Dec, 2028</p>
              </div>
            </div>
            <div class="pt-8 border-t border-gray-100 text-center">
              <button onclick="resetVerification()" class="px-8 py-3 bg-gray-100 text-gray-700 font-bold rounded-full hover:bg-gray-200 transition-colors">Verify Another</button>
            </div>
          </div>
        </div>

        <!-- Error Result Card (Hidden) -->
        <div id="errorResult" class="hidden w-full max-w-xl bg-white border border-red-100 rounded-[32px] shadow-2xl overflow-hidden p-8 md:p-12 text-center">
          <div class="w-24 h-24 bg-red-50 text-red-500 rounded-full mx-auto flex items-center justify-center text-5xl mb-6 shadow-inner">
            <i class="ri-close-circle-line"></i>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Franchise Not Found</h2>
          <p class="text-gray-500 mb-8">We couldn't find any registered franchise matching that ID. Please check the ID and try again.</p>
          <button onclick="resetVerification()" class="px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors shadow-lg">Try Again</button>
        </div>

      </div>
    </section>

    <script>
      function verifyFranchise() {
        const input = document.getElementById('franchiseIdInput').value.trim();
        const btn = document.getElementById('verifyBtn');
        const btnText = btn.querySelector('.btn-text');
        const spinner = btn.querySelector('.loading-spinner');
        const card = document.getElementById('verificationCard');
        const successResult = document.getElementById('successResult');
        const errorResult = document.getElementById('errorResult');

        // Loading state
        btn.disabled = true;
        btnText.classList.add('hidden');
        spinner.classList.remove('hidden');
        btn.classList.add('bg-primary-light', 'cursor-not-allowed');

        setTimeout(() => {
          // Reset button
          btn.disabled = false;
          btnText.classList.remove('hidden');
          spinner.classList.add('hidden');
          btn.classList.remove('bg-primary-light', 'cursor-not-allowed');
          
          // Hide input card
          card.classList.add('hidden');

          // Simple mock logic: if ID ends with 1, success, else error.
          if(input.endsWith('1') || input.toLowerCase() === 'frn-000001') {
            successResult.classList.remove('hidden');
            successResult.classList.add('animate-fade-up');
          } else {
            errorResult.classList.remove('hidden');
            errorResult.classList.add('animate-fade-up');
          }
        }, 1500);
      }

      function resetVerification() {
        document.getElementById('franchiseIdInput').value = '';
        document.getElementById('successResult').classList.add('hidden');
        document.getElementById('errorResult').classList.add('hidden');
        
        const card = document.getElementById('verificationCard');
        card.classList.remove('hidden');
        card.classList.add('animate-fade-up');
      }
    </script>
`;

const centersContent = `
    <!-- Clean Hero Section -->
    <section class="relative h-[400px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2070&auto=format&fit=crop" 
             alt="Computer Institute" 
             class="w-full h-full object-cover animate-ken-burns opacity-50">
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-[#081C3A]/95 to-[#081C3A] z-10 mix-blend-multiply"></div>

      <div class="container mx-auto px-6 relative z-20 text-center animate-fade-up">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-6 shadow-premium">
          📍 Authorized Centers
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-lg">
          Find <span class="text-accent">Authorized Centers</span>
        </h1>
        
        <p class="text-lg text-gray-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Search and verify officially registered InstituteHub training centres across different cities and districts.
        </p>

        <div class="flex items-center justify-center gap-2 text-sm font-medium text-gray-400">
          <a href="../index.html" class="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span class="text-accent">Find Centers</span>
        </div>
      </div>
    </section>

    <!-- Table Section -->
    <section class="py-24 bg-gray-50 min-h-[600px]">
      <div class="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div class="bg-white rounded-[24px] shadow-premium border border-gray-100 overflow-hidden animate-fade-up">
          
          <!-- Header -->
          <div class="p-6 md:p-8 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-white sticky top-0 z-10">
            <h2 class="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <i class="ri-building-4-line text-primary"></i> Find Centers
            </h2>
            <div class="relative w-full md:w-72">
              <i class="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input type="text" placeholder="Search centres..." class="w-full bg-gray-50 border border-gray-200 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors text-gray-700">
            </div>
          </div>

          <!-- Responsive Table -->
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-bold">
                  <th class="p-4 md:p-6 whitespace-nowrap">Centre Name</th>
                  <th class="p-4 md:p-6 whitespace-nowrap">District</th>
                  <th class="p-4 md:p-6 whitespace-nowrap">City</th>
                  <th class="p-4 md:p-6 whitespace-nowrap">State</th>
                </tr>
              </thead>
              <tbody class="text-sm font-medium text-gray-700 divide-y divide-gray-100">
                <tr class="hover:bg-blue-50/50 transition-colors cursor-default group">
                  <td class="p-4 md:p-6 whitespace-nowrap text-gray-900 font-bold group-hover:text-primary transition-colors">ITEK INSTITUTE</td>
                  <td class="p-4 md:p-6 whitespace-nowrap">Azamgarh</td>
                  <td class="p-4 md:p-6 whitespace-nowrap">Beohara</td>
                  <td class="p-4 md:p-6 whitespace-nowrap"><span class="px-3 py-1 bg-gray-100 rounded-md text-xs font-bold text-gray-600">Uttar Pradesh</span></td>
                </tr>
                <tr class="bg-gray-50/30 hover:bg-blue-50/50 transition-colors cursor-default group">
                  <td class="p-4 md:p-6 whitespace-nowrap text-gray-900 font-bold group-hover:text-primary transition-colors">TECH VISION ACADEMY</td>
                  <td class="p-4 md:p-6 whitespace-nowrap">Varanasi</td>
                  <td class="p-4 md:p-6 whitespace-nowrap">Lanka</td>
                  <td class="p-4 md:p-6 whitespace-nowrap"><span class="px-3 py-1 bg-gray-100 rounded-md text-xs font-bold text-gray-600">Uttar Pradesh</span></td>
                </tr>
                <tr class="hover:bg-blue-50/50 transition-colors cursor-default group">
                  <td class="p-4 md:p-6 whitespace-nowrap text-gray-900 font-bold group-hover:text-primary transition-colors">EXCEL COMPUTER LAB</td>
                  <td class="p-4 md:p-6 whitespace-nowrap">Patna</td>
                  <td class="p-4 md:p-6 whitespace-nowrap">Kankarbagh</td>
                  <td class="p-4 md:p-6 whitespace-nowrap"><span class="px-3 py-1 bg-gray-100 rounded-md text-xs font-bold text-gray-600">Bihar</span></td>
                </tr>
                <tr class="bg-gray-50/30 hover:bg-blue-50/50 transition-colors cursor-default group">
                  <td class="p-4 md:p-6 whitespace-nowrap text-gray-900 font-bold group-hover:text-primary transition-colors">DIGITAL HUB</td>
                  <td class="p-4 md:p-6 whitespace-nowrap">Lucknow</td>
                  <td class="p-4 md:p-6 whitespace-nowrap">Gomti Nagar</td>
                  <td class="p-4 md:p-6 whitespace-nowrap"><span class="px-3 py-1 bg-gray-100 rounded-md text-xs font-bold text-gray-600">Uttar Pradesh</span></td>
                </tr>
                <tr class="hover:bg-blue-50/50 transition-colors cursor-default group">
                  <td class="p-4 md:p-6 whitespace-nowrap text-gray-900 font-bold group-hover:text-primary transition-colors">FUTURE IT POINT</td>
                  <td class="p-4 md:p-6 whitespace-nowrap">Bhopal</td>
                  <td class="p-4 md:p-6 whitespace-nowrap">MP Nagar</td>
                  <td class="p-4 md:p-6 whitespace-nowrap"><span class="px-3 py-1 bg-gray-100 rounded-md text-xs font-bold text-gray-600">Madhya Pradesh</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <!-- Pagination (Mock) -->
          <div class="p-4 border-t border-gray-100 flex justify-between items-center bg-gray-50 text-xs font-medium text-gray-500">
            <span>Showing 1 to 5 of 5 entries</span>
            <div class="flex gap-1">
              <button class="px-3 py-1 rounded bg-white border border-gray-200 hover:bg-gray-100 transition-colors disabled:opacity-50" disabled>Prev</button>
              <button class="px-3 py-1 rounded bg-primary text-white border border-primary transition-colors">1</button>
              <button class="px-3 py-1 rounded bg-white border border-gray-200 hover:bg-gray-100 transition-colors disabled:opacity-50" disabled>Next</button>
            </div>
          </div>

        </div>
      </div>
    </section>
`;

function buildPage(filename, content) {
  // Calculate prefix correctly for /franchise/ pages
  const prefix = '../';
  let finalHtml = layoutHtml.replace('{{CONTENT}}', content);

  // Fix relative links like layout does
  finalHtml = finalHtml.replace(/href="([a-zA-Z0-9\-\/]+\.html)"/g, (match, p1) => {
    if (p1.startsWith('http') || p1.startsWith('#') || p1.startsWith('../')) return match;
    return `href="${prefix}${p1}"`;
  });
  finalHtml = finalHtml.replace(/src="\.\/src\/main\.js"/g, `src="${prefix}src/main.js"`);
  finalHtml = finalHtml.replace(/href="\.\/dist\/output\.css"/g, `href="${prefix}dist/output.css"`);

  fs.writeFileSync(path.join(__dirname, '../franchise', filename), finalHtml);
  console.log(`franchise/${filename} successfully created!`);
}

buildPage('verification.html', verificationContent);
buildPage('centers.html', centersContent);
