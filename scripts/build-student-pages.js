const fs = require('fs');
const path = require('path');

const layoutHtml = fs.readFileSync(path.join(__dirname, '../src/layout.html'), 'utf8');

// 1. Student Enquiry
const enquiryContent = `
    <section class="relative min-h-[700px] flex items-center justify-center overflow-hidden py-24">
      <div class="absolute inset-0 z-0 bg-[#081C3A]">
        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
             alt="Student Support" 
             class="w-full h-full object-cover opacity-20">
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-12 animate-fade-up">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-6 shadow-premium">
            📩 Student Enquiry
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">We're Here to Help</h1>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto font-light mb-4">Ask about admissions, courses, fees, placements, certificates, or student support.</p>
          <div class="flex items-center justify-center gap-2 text-sm font-medium text-gray-400">
            <a href="index.html" class="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span class="text-accent">Student Enquiry</span>
          </div>
        </div>

        <div class="max-w-3xl mx-auto bg-white/80 backdrop-blur-2xl border border-white rounded-[32px] shadow-2xl p-8 md:p-12 animate-fade-up" style="animation-delay: 0.2s;">
          <form onsubmit="event.preventDefault(); showSuccess(this);" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="relative group">
                <i class="ri-user-line absolute left-4 top-[38px] text-gray-400 group-focus-within:text-primary transition-colors"></i>
                <label class="block text-sm font-bold text-gray-700 mb-2">Full Name <span class="text-red-500">*</span></label>
                <input type="text" required class="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-10 pr-4 py-3 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm">
              </div>
              <div class="relative group">
                <i class="ri-phone-line absolute left-4 top-[38px] text-gray-400 group-focus-within:text-primary transition-colors"></i>
                <label class="block text-sm font-bold text-gray-700 mb-2">Mobile Number <span class="text-red-500">*</span></label>
                <input type="tel" required class="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-10 pr-4 py-3 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm">
              </div>
              <div class="relative group">
                <i class="ri-mail-line absolute left-4 top-[38px] text-gray-400 group-focus-within:text-primary transition-colors"></i>
                <label class="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" class="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-10 pr-4 py-3 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm">
              </div>
              <div class="relative group">
                <i class="ri-book-read-line absolute left-4 top-[38px] text-gray-400 group-focus-within:text-primary transition-colors"></i>
                <label class="block text-sm font-bold text-gray-700 mb-2">Course of Interest <span class="text-red-500">*</span></label>
                <select required class="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-10 pr-4 py-3 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm cursor-pointer text-gray-600">
                  <option value="">Select Course</option>
                  <option>ADCA</option>
                  <option>DCA</option>
                  <option>Web Development</option>
                </select>
              </div>
              <div class="relative group md:col-span-2">
                <i class="ri-map-pin-line absolute left-4 top-[38px] text-gray-400 group-focus-within:text-primary transition-colors"></i>
                <label class="block text-sm font-bold text-gray-700 mb-2">District <span class="text-red-500">*</span></label>
                <input type="text" required class="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-10 pr-4 py-3 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm">
              </div>
              <div class="relative group md:col-span-2">
                <i class="ri-message-3-line absolute left-4 top-[38px] text-gray-400 group-focus-within:text-primary transition-colors"></i>
                <label class="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows="3" class="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-10 pr-4 py-3 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"></textarea>
              </div>
            </div>
            
            <button type="submit" class="w-full py-4 bg-primary text-white font-bold text-lg rounded-2xl hover:bg-primary-light transition-colors shadow-md flex items-center justify-center gap-2 group mt-4">
              Send Enquiry <i class="ri-send-plane-fill group-hover:translate-x-1 transition-transform"></i>
            </button>
            
            <div class="hidden success-message text-center p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700 font-bold mt-4 animate-fade-up">
              <i class="ri-checkbox-circle-fill mr-1"></i> Enquiry Submitted Successfully! We will contact you soon.
            </div>
          </form>
        </div>
      </div>
    </section>
    
    <script>
      function showSuccess(form) {
        form.querySelector('button').classList.add('hidden');
        form.querySelector('.success-message').classList.remove('hidden');
      }
    </script>
`;

// 2. Online Admission
const admissionContent = `
    <section class="relative min-h-[800px] py-24 bg-gray-50">
      <div class="absolute top-0 left-0 w-full h-[400px] bg-[#081C3A] z-0 rounded-b-[40px]"></div>
      
      <div class="container mx-auto px-6 relative z-10 text-center animate-fade-up">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-6 shadow-premium">
          🎓 Online Admission
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-12">Apply Online for Your Future</h1>
        
        <div class="max-w-4xl mx-auto bg-white rounded-[32px] shadow-2xl overflow-hidden text-left">
          <!-- Progress -->
          <div class="bg-gray-50 border-b border-gray-100 p-6 flex justify-between items-center relative">
            <div class="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 -z-10 mx-6 w-[calc(100%-48px)]"></div>
            
            <div class="flex flex-col items-center gap-2 bg-gray-50 px-2 cursor-default step-indicator active" data-step="1">
              <div class="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-md indicator-circle transition-all">1</div>
              <span class="text-xs font-bold text-primary indicator-text transition-all">Personal Info</span>
            </div>
            <div class="flex flex-col items-center gap-2 bg-gray-50 px-2 cursor-default step-indicator" data-step="2">
              <div class="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-400 font-bold flex items-center justify-center indicator-circle transition-all">2</div>
              <span class="text-xs font-bold text-gray-400 indicator-text transition-all">Course & Center</span>
            </div>
            <div class="flex flex-col items-center gap-2 bg-gray-50 px-2 cursor-default step-indicator" data-step="3">
              <div class="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-400 font-bold flex items-center justify-center indicator-circle transition-all">3</div>
              <span class="text-xs font-bold text-gray-400 indicator-text transition-all">Submit</span>
            </div>
          </div>

          <div class="p-8 md:p-12">
            <form onsubmit="event.preventDefault(); showAdmissionSuccess();">
              
              <!-- STEP 1 -->
              <div class="form-step active" id="step-1">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Personal Details</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-2">Student Name *</label>
                    <input type="text" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-primary outline-none">
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-2">Father's Name *</label>
                    <input type="text" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-primary outline-none">
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-2">Date of Birth *</label>
                    <input type="date" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-primary outline-none text-gray-600">
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-2">Gender *</label>
                    <select required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-primary outline-none text-gray-600">
                      <option value="">Select Gender</option><option>Male</option><option>Female</option>
                    </select>
                  </div>
                  <div class="md:col-span-2">
                    <label class="block text-sm font-bold text-gray-700 mb-2">Address *</label>
                    <input type="text" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-primary outline-none">
                  </div>
                </div>
                <div class="mt-8 flex justify-end">
                  <button type="button" onclick="nextStep(2)" class="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-light">Next Step</button>
                </div>
              </div>

              <!-- STEP 2 -->
              <div class="form-step hidden" id="step-2">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Course & Center</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-2">Select State *</label>
                    <select required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-primary outline-none text-gray-600">
                      <option value="">Choose State</option><option>Uttar Pradesh</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-2">Select District *</label>
                    <select required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-primary outline-none text-gray-600">
                      <option value="">Choose District</option><option>Varanasi</option>
                    </select>
                  </div>
                  <div class="md:col-span-2">
                    <label class="block text-sm font-bold text-gray-700 mb-2">Select Study Center *</label>
                    <select required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-primary outline-none text-gray-600">
                      <option value="">Choose Center</option><option>InstituteHub Main Campus</option>
                    </select>
                  </div>
                  <div class="md:col-span-2">
                    <label class="block text-sm font-bold text-gray-700 mb-2">Select Course *</label>
                    <select required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-primary outline-none text-gray-600">
                      <option value="">Choose Course</option><option>ADCA</option>
                    </select>
                  </div>
                </div>
                <div class="mt-8 flex justify-between">
                  <button type="button" onclick="nextStep(1)" class="px-8 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200">Back</button>
                  <button type="button" onclick="nextStep(3)" class="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-light">Next Step</button>
                </div>
              </div>

              <!-- STEP 3 -->
              <div class="form-step hidden" id="step-3">
                <div class="text-center mb-8">
                  <i class="ri-checkbox-circle-fill text-6xl text-primary mb-4 block"></i>
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">Submit Application</h3>
                  <p class="text-gray-500">Please review your details and click submit.</p>
                </div>
                <div class="mt-8 flex flex-col items-center">
                  <button type="submit" class="px-10 py-4 bg-accent text-[#081C3A] font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:bg-yellow-500 w-full md:w-auto">Submit Admission Form</button>
                  <button type="button" onclick="nextStep(2)" class="mt-4 text-gray-500 font-bold hover:text-gray-900">Back to Edit</button>
                </div>
                <div id="admissionSuccess" class="hidden text-center mt-6 p-4 bg-green-50 text-green-700 rounded-xl font-bold animate-fade-up">
                  Admission form submitted successfully!
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>

    <script>
      function nextStep(stepNumber) {
        document.querySelectorAll('.form-step').forEach(step => step.classList.add('hidden'));
        document.getElementById('step-' + stepNumber).classList.remove('hidden');
        document.getElementById('step-' + stepNumber).classList.add('animate-fade-up');
        
        document.querySelectorAll('.step-indicator').forEach(indicator => {
          const stepVal = parseInt(indicator.getAttribute('data-step'));
          const circle = indicator.querySelector('.indicator-circle');
          const text = indicator.querySelector('.indicator-text');
          
          if (stepVal <= stepNumber) {
            circle.className = 'w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-md indicator-circle transition-all';
            text.className = 'text-xs font-bold text-primary indicator-text transition-all';
          } else {
            circle.className = 'w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-400 font-bold flex items-center justify-center indicator-circle transition-all';
            text.className = 'text-xs font-bold text-gray-400 indicator-text transition-all';
          }
        });
      }
      
      function showAdmissionSuccess() {
        document.getElementById('admissionSuccess').classList.remove('hidden');
      }
    </script>
`;

// 3. Verifications & Admit Card (Shared Layout)
function getVerificationPage(title, badge, icon, desc, fieldLabel, fieldPlaceholder, resultHTML) {
  return `
    <section class="relative min-h-[600px] flex items-center justify-center py-24 bg-gray-50">
      <!-- Minimal Header Background -->
      <div class="absolute top-0 left-0 w-full h-[300px] bg-[#081C3A] z-0"></div>
      
      <div class="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <div class="text-center mb-10 animate-fade-up text-white">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 font-medium text-sm mb-4 shadow-premium">
            ${badge}
          </div>
          <h1 class="text-4xl font-bold mb-3">${title}</h1>
          <p class="text-gray-300 font-light max-w-xl mx-auto">${desc}</p>
        </div>

        <div class="w-full max-w-lg bg-white rounded-[24px] shadow-2xl p-8 border border-gray-100 animate-fade-up" id="verifyCard">
          <form onsubmit="event.preventDefault(); verifyAction();" class="space-y-6">
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">${fieldLabel} <span class="text-red-500">*</span></label>
              <input type="text" id="verifyInput" required placeholder="${fieldPlaceholder}" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-lg font-mono tracking-wider">
            </div>
            <button type="submit" id="verifyBtn" class="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light shadow-md transition-colors flex justify-center items-center gap-2">
              <span class="btn-text flex items-center gap-2">${title.includes('Download') ? 'Download' : 'Verify'} <i class="ri-arrow-right-line"></i></span>
              <div class="loading-spinner hidden w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </button>
          </form>
        </div>

        <!-- Success Result -->
        <div id="successResult" class="hidden w-full max-w-lg bg-white rounded-[24px] shadow-2xl overflow-hidden mt-6 animate-fade-up">
          <div class="bg-green-500 p-6 text-center text-white">
            <i class="${icon} text-5xl mb-2 inline-block"></i>
            <h2 class="text-2xl font-bold">Verification Successful</h2>
          </div>
          <div class="p-8">
            <div class="space-y-4 text-sm">
              ${resultHTML}
            </div>
            <button onclick="resetVerify()" class="w-full mt-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors">Check Another</button>
          </div>
        </div>

        <!-- Error Result -->
        <div id="errorResult" class="hidden w-full max-w-lg bg-white rounded-[24px] shadow-2xl p-8 text-center mt-6 animate-fade-up">
          <div class="w-20 h-20 bg-red-50 text-red-500 rounded-full mx-auto flex items-center justify-center text-4xl mb-4">
            <i class="ri-close-circle-line"></i>
          </div>
          <h2 class="text-xl font-bold text-gray-900 mb-2">Record Not Found</h2>
          <p class="text-gray-500 mb-6 text-sm">We couldn't find a record matching this ID.</p>
          <button onclick="resetVerify()" class="w-full py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors">Try Again</button>
        </div>

      </div>
    </section>

    <script>
      function verifyAction() {
        const input = document.getElementById('verifyInput').value.trim();
        const btn = document.getElementById('verifyBtn');
        const card = document.getElementById('verifyCard');
        
        btn.querySelector('.btn-text').classList.add('hidden');
        btn.querySelector('.loading-spinner').classList.remove('hidden');
        btn.disabled = true;

        setTimeout(() => {
          btn.querySelector('.btn-text').classList.remove('hidden');
          btn.querySelector('.loading-spinner').classList.add('hidden');
          btn.disabled = false;
          
          card.classList.add('hidden');

          if(input.endsWith('1') || input.toLowerCase().includes('123')) {
            document.getElementById('successResult').classList.remove('hidden');
          } else {
            document.getElementById('errorResult').classList.remove('hidden');
          }
        }, 1200);
      }

      function resetVerify() {
        document.getElementById('verifyInput').value = '';
        document.getElementById('successResult').classList.add('hidden');
        document.getElementById('errorResult').classList.add('hidden');
        document.getElementById('verifyCard').classList.remove('hidden');
      }
    </script>
  `;
}

const studentVerifyResult = `
  <div class="flex justify-between border-b pb-2"><span class="text-gray-500">Name</span> <span class="font-bold text-gray-900">Rahul Kumar</span></div>
  <div class="flex justify-between border-b pb-2"><span class="text-gray-500">Enrollment No.</span> <span class="font-bold text-gray-900">ENR-1001</span></div>
  <div class="flex justify-between border-b pb-2"><span class="text-gray-500">Course</span> <span class="font-bold text-gray-900">ADCA</span></div>
  <div class="flex justify-between border-b pb-2"><span class="text-gray-500">Centre</span> <span class="font-bold text-gray-900">InstituteHub Main</span></div>
  <div class="flex justify-between"><span class="text-gray-500">Status</span> <span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Active</span></div>
`;

const certVerifyResult = `
  <div class="flex justify-between border-b pb-2"><span class="text-gray-500">Name</span> <span class="font-bold text-gray-900">Rahul Kumar</span></div>
  <div class="flex justify-between border-b pb-2"><span class="text-gray-500">Certificate No.</span> <span class="font-bold text-gray-900">CERT-99881</span></div>
  <div class="flex justify-between border-b pb-2"><span class="text-gray-500">Course</span> <span class="font-bold text-gray-900">ADCA</span></div>
  <div class="flex justify-between border-b pb-2"><span class="text-gray-500">Completion</span> <span class="font-bold text-gray-900">14 May 2026</span></div>
  <div class="flex justify-between"><span class="text-gray-500">Authenticity</span> <span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Verified</span></div>
`;

const marksheetVerifyResult = `
  <div class="flex justify-between border-b pb-2"><span class="text-gray-500">Name</span> <span class="font-bold text-gray-900">Rahul Kumar</span></div>
  <div class="flex justify-between border-b pb-2"><span class="text-gray-500">Course</span> <span class="font-bold text-gray-900">ADCA</span></div>
  <div class="flex justify-between border-b pb-2"><span class="text-gray-500">Total Marks</span> <span class="font-bold text-gray-900">450/500</span></div>
  <div class="flex justify-between border-b pb-2"><span class="text-gray-500">Grade</span> <span class="font-bold text-gray-900 text-lg text-primary">A+</span></div>
  <div class="flex justify-between"><span class="text-gray-500">Result</span> <span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Pass</span></div>
`;

const admitCardResult = `
  <div class="flex justify-between border-b pb-2"><span class="text-gray-500">Name</span> <span class="font-bold text-gray-900">Rahul Kumar</span></div>
  <div class="flex justify-between border-b pb-2"><span class="text-gray-500">Exam</span> <span class="font-bold text-gray-900">Final Semester (ADCA)</span></div>
  <div class="flex justify-between border-b pb-2"><span class="text-gray-500">Date</span> <span class="font-bold text-gray-900">20 July 2026</span></div>
  <div class="flex justify-between"><span class="text-gray-500">Centre</span> <span class="font-bold text-gray-900">InstituteHub Main</span></div>
  <button class="w-full mt-4 py-3 bg-primary text-white font-bold rounded-xl flex justify-center items-center gap-2"><i class="ri-download-2-line"></i> Download PDF</button>
`;

// 4. Student Login
const studentLoginContent = `
    <section class="relative min-h-[700px] flex items-center justify-center py-24 bg-gradient-to-br from-[#081C3A] to-primary">
      <div class="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div class="container mx-auto px-6 relative z-10 flex justify-center">
        <div class="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] shadow-2xl p-8 md:p-10 animate-fade-up text-white">
          
          <div class="text-center mb-8">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold mb-4">
              🔐 Secure Portal
            </div>
            <h1 class="text-3xl font-bold mb-2">Student Login</h1>
            <p class="text-gray-300 text-sm">Access your student dashboard.</p>
          </div>

          <form class="space-y-5">
            <div>
              <label class="block text-sm font-bold text-white/90 mb-2">Registration Number</label>
              <input type="text" required placeholder="e.g. REG-00123" class="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:bg-white/10 focus:border-accent transition-all text-white placeholder-white/40">
            </div>
            <div>
              <label class="block text-sm font-bold text-white/90 mb-2 flex justify-between">
                <span>Password</span>
                <a href="#" class="text-accent text-xs hover:underline">Forgot?</a>
              </label>
              <div class="relative">
                <input type="password" required placeholder="••••••••" class="w-full bg-white/5 border border-white/20 rounded-xl pl-4 pr-10 py-3 focus:outline-none focus:bg-white/10 focus:border-accent transition-all text-white placeholder-white/40 tracking-wider">
                <i class="ri-eye-off-line absolute right-4 top-1/2 -translate-y-1/2 text-white/50 cursor-pointer hover:text-white transition-colors"></i>
              </div>
            </div>
            
            <label class="flex items-center gap-2 cursor-pointer mt-4">
              <input type="checkbox" class="rounded border-white/20 bg-white/5 text-accent focus:ring-accent focus:ring-offset-[#081C3A]">
              <span class="text-sm text-gray-300">Remember Me</span>
            </label>

            <button type="button" class="w-full py-4 mt-2 bg-accent text-[#081C3A] font-bold rounded-xl hover:bg-yellow-500 hover:shadow-[0_0_20px_rgba(255,204,0,0.4)] transition-all duration-300">
              Login to Dashboard
            </button>
          </form>

        </div>
      </div>
    </section>
`;

const pages = [
  { file: 'online-enquiry.html', content: enquiryContent },
  { file: 'online-admission.html', content: admissionContent },
  { file: 'student-verification.html', content: getVerificationPage('Student Verification', '✅ Student Verification', 'ri-user-follow-line', 'Verify student records instantly.', 'Student ID / Enrollment Number', 'e.g. ENR-1001', studentVerifyResult) },
  { file: 'certificate-verification.html', content: getVerificationPage('Certificate Verification', '🏅 Certificate Verification', 'ri-medal-fill', 'Verify the authenticity of certificates issued by the institute.', 'Certificate Number', 'e.g. CERT-99881', certVerifyResult) },
  { file: 'marksheet-verification.html', content: getVerificationPage('Marksheet Verification', '📄 Marksheet Verification', 'ri-file-paper-2-line', 'Verify academic marksheets securely.', 'Marksheet Number', 'e.g. MRK-22334', marksheetVerifyResult) },
  { file: 'download-admit-card.html', content: getVerificationPage('Download Admit Card', '📝 Admit Card', 'ri-profile-line', 'Download your examination admit card.', 'Enrollment Number / Reg. No.', 'e.g. ENR-1001', admitCardResult) },
  { file: 'login.html', content: studentLoginContent }
];

function buildPages() {
  const prefix = './';
  
  pages.forEach(page => {
    let finalHtml = layoutHtml.replace('{{CONTENT}}', page.content);

    // Fix relative links
    finalHtml = finalHtml.replace(/href="([a-zA-Z0-9\-\/]+\.html)"/g, (match, p1) => {
      if (p1.startsWith('http') || p1.startsWith('#') || p1.startsWith('./')) return match;
      return `href="${prefix}${p1}"`;
    });
    finalHtml = finalHtml.replace(/src="\.\/src\/main\.js"/g, `src="${prefix}src/main.js"`);
    finalHtml = finalHtml.replace(/href="\.\/dist\/output\.css"/g, `href="${prefix}dist/output.css"`);

    fs.writeFileSync(path.join(__dirname, '..', page.file), finalHtml);
    console.log(`${page.file} successfully created!`);
  });
}

buildPages();
