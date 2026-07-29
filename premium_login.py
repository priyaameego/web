import re

def premium_login():
    with open('login.html', 'r', encoding='utf-8') as f:
        content = f.read()

    new_html = """        <section class="relative min-h-screen flex flex-col lg:flex-row pt-[72px] lg:pt-[104px] bg-[#f8fafc]">
      
      <!-- Left Side (Gradient & Welcome Text) -->
      <div class="w-full lg:w-5/12 bg-gradient-to-br from-[#22c55e] via-[#3b82f6] to-[#f97316] p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
        
        <!-- Premium Ambient Glows -->
        <div class="absolute top-0 left-0 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div class="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-white/10 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <!-- Glass Logo -->
        <div class="bg-white/20 backdrop-blur-2xl rounded-[24px] p-5 inline-block mb-12 lg:mb-20 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border border-white/30 max-w-[280px] hover:scale-105 transition-transform duration-500">
          <img src="https://www.institutehub.in/storage/dashboard/branding/brand-strip/JasdHk2McXjAjd2NRBl1qeCzFAR4QWGHuJWiC7Dz.jpg" alt="Logo" class="w-full h-auto bg-white rounded-lg px-2 py-1 shadow-sm">
        </div>
        
        <div class="text-white relative z-10 animate-fade-up">
          <p class="text-white/90 font-bold text-xs tracking-[0.25em] uppercase mb-5 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-green-300 animate-pulse"></span> Secure Sign In</p>
          <h1 class="text-4xl lg:text-[3.25rem] font-bold leading-[1.1] mb-6 drop-shadow-md">Welcome back to your institute portal</h1>
          <p class="text-white/90 text-base mb-10 max-w-sm leading-relaxed font-light">Choose your portal and continue with your account credentials.</p>
          
          <div class="flex flex-wrap gap-3">
            <span class="px-5 py-2 bg-white/10 backdrop-blur-xl rounded-full text-sm font-semibold border border-white/20 shadow-lg hover:bg-white/20 transition-colors cursor-default">Admin</span>
            <span class="px-5 py-2 bg-white/10 backdrop-blur-xl rounded-full text-sm font-semibold border border-white/20 shadow-lg hover:bg-white/20 transition-colors cursor-default">Franchise</span>
            <span class="px-5 py-2 bg-white/10 backdrop-blur-xl rounded-full text-sm font-semibold border border-white/20 shadow-lg hover:bg-white/20 transition-colors cursor-default">Student</span>
          </div>
        </div>
      </div>
      
      <!-- Right Side (Login Form) -->
      <div class="w-full lg:w-7/12 flex items-center justify-center p-6 lg:p-12 relative bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9]">
        
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIxIiBmaWxsPSIjMDAwIi8+PC9zdmc+')]"></div>

        <div class="w-full max-w-[440px] bg-white/90 backdrop-blur-3xl rounded-[2.5rem] p-8 lg:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white relative z-10 animate-fade-up">
          <p class="text-[#16a34a] font-extrabold text-[11px] tracking-widest uppercase mb-3">Account Login</p>
          <h2 class="text-3xl lg:text-[2rem] font-bold text-[#0f172a] mb-10 tracking-tight">Sign in to continue</h2>
          
          <div class="mb-8">
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 pl-1">Portal Selection</p>
            <div class="grid grid-cols-3 gap-3 mb-4 bg-gray-50/50 p-1.5 rounded-2xl border border-gray-100">
              <button type="button" onclick="switchPortal('Admin')" id="tab-Admin" class="py-2.5 bg-white text-[#16a34a] shadow-sm rounded-xl text-sm font-bold transition-all portal-tab ring-1 ring-gray-200 hover:ring-[#16a34a]/30">Admin</button>
              <button type="button" onclick="switchPortal('Franchise')" id="tab-Franchise" class="py-2.5 text-gray-500 rounded-xl text-sm font-medium hover:text-gray-900 transition-all portal-tab">Franchise</button>
              <button type="button" onclick="switchPortal('Student')" id="tab-Student" class="py-2.5 text-gray-500 rounded-xl text-sm font-medium hover:text-gray-900 transition-all portal-tab">Student</button>
            </div>
            <div class="h-5 flex items-center">
              <p id="portalDesc" class="text-[13px] text-gray-500 font-medium pl-1 animate-fade-in"><strong class="text-gray-800">Admin Portal:</strong> Institute dashboard and management modules.</p>
            </div>
          </div>
          
          <form class="space-y-6">
            <div>
              <label class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2 pl-1">Email Address</label>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#16a34a] transition-colors">
                  <i class="ri-mail-line text-lg"></i>
                </div>
                <input type="email" required placeholder="name@institute.com" class="w-full bg-gray-50/50 border border-gray-200 rounded-2xl pl-11 pr-4 py-3.5 focus:outline-none focus:bg-white focus:border-[#16a34a] focus:ring-4 focus:ring-[#16a34a]/10 transition-all text-[15px] text-gray-900 placeholder-gray-400 shadow-sm">
              </div>
            </div>
            
            <div>
              <label class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2 pl-1">Password</label>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#16a34a] transition-colors">
                  <i class="ri-lock-password-line text-lg"></i>
                </div>
                <input type="password" required placeholder="••••••••" class="w-full bg-gray-50/50 border border-gray-200 rounded-2xl pl-11 pr-12 py-3.5 focus:outline-none focus:bg-white focus:border-[#16a34a] focus:ring-4 focus:ring-[#16a34a]/10 transition-all text-[15px] text-gray-900 placeholder-gray-400 shadow-sm font-medium tracking-wide">
                <button type="button" class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-700 transition-colors focus:outline-none">
                  <i class="ri-eye-line text-lg"></i>
                </button>
              </div>
            </div>
            
            <div class="flex items-center justify-between pt-1">
              <label class="flex items-center gap-2.5 cursor-pointer group">
                <div class="relative flex items-center justify-center">
                  <input type="checkbox" class="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-[#16a34a] checked:border-[#16a34a] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#16a34a]/30 focus:ring-offset-1">
                  <i class="ri-check-line absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-sm font-bold"></i>
                </div>
                <span class="text-[14px] text-gray-600 font-medium group-hover:text-gray-900 transition-colors">Remember me</span>
              </label>
              <a href="#" class="text-[14px] font-bold text-[#16a34a] hover:text-[#15803d] transition-colors underline-offset-4 hover:underline">Forgot password?</a>
            </div>
            
            <button type="submit" class="w-full py-4 mt-8 bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white font-bold text-[15px] rounded-2xl hover:from-[#16a34a] hover:to-[#15803d] hover:shadow-[0_8px_25px_-8px_rgba(22,163,74,0.5)] hover:-translate-y-0.5 transition-all duration-300 flex justify-center items-center gap-2 group">
              Log In to Portal <i class="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
            </button>
          </form>
          
        </div>
      </div>
    
    <script>
      function switchPortal(portalName) {
        const tabs = document.querySelectorAll('.portal-tab');
        tabs.forEach(tab => {
          if (tab.id === 'tab-' + portalName) {
            tab.className = 'py-2.5 bg-white text-[#16a34a] shadow-sm rounded-xl text-sm font-bold transition-all portal-tab ring-1 ring-gray-200 hover:ring-[#16a34a]/30';
          } else {
            tab.className = 'py-2.5 text-gray-500 rounded-xl text-sm font-medium hover:text-gray-900 transition-all portal-tab';
          }
        });
        
        const desc = document.getElementById('portalDesc');
        // Reset animation
        desc.classList.remove('animate-fade-in');
        void desc.offsetWidth; // trigger reflow
        desc.classList.add('animate-fade-in');

        if (portalName === 'Admin') {
          desc.innerHTML = '<strong class="text-gray-800">Admin Portal:</strong> Institute dashboard and management modules.';
        } else if (portalName === 'Franchise') {
          desc.innerHTML = '<strong class="text-gray-800">Franchise Portal:</strong> Manage your centers, admissions, and reports.';
        } else if (portalName === 'Student') {
          desc.innerHTML = '<strong class="text-gray-800">Student Portal:</strong> Access courses, exams, and verification.';
        }
      }
    </script>
    </section>"""

    # We replace from <section class="relative min-h-screen... up to the end of the section
    pattern = r'<section class="relative min-h-screen.*?</section>'
    
    new_content = re.sub(pattern, new_html, content, flags=re.DOTALL)
    
    with open('login.html', 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == '__main__':
    premium_login()
