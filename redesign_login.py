import os
import re

new_login_html = """<section class="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-slate-50">
  <!-- Premium Background -->
  <div class="absolute inset-0 bg-[#0B1F3A]"></div>
  <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
  
  <!-- Animated Orbs & Mesh -->
  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
  <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style="animation-delay: 2s;"></div>

  <!-- Floating Visual Elements (Subtle) -->
  <i class="ri-graduation-cap-line absolute top-1/4 left-[15%] text-white/5 text-6xl rotate-[-15deg] animate-float pointer-events-none hidden lg:block"></i>
  <i class="ri-macbook-line absolute bottom-1/4 right-[15%] text-white/5 text-6xl rotate-[15deg] animate-float pointer-events-none hidden lg:block" style="animation-delay: 1.5s;"></i>
  <i class="ri-shield-check-line absolute top-1/3 right-[20%] text-white/5 text-4xl rotate-[20deg] animate-float pointer-events-none hidden lg:block" style="animation-delay: 3s;"></i>
  <i class="ri-cpu-line absolute top-[60%] left-[20%] text-white/5 text-5xl rotate-[10deg] animate-float pointer-events-none hidden lg:block" style="animation-delay: 2.5s;"></i>

  <!-- Main Container -->
  <div class="relative w-full max-w-[480px] z-10 animate-fade-up">
    
    <!-- Logo -->
    <div class="flex justify-center mb-8">
      <div class="bg-white/10 backdrop-blur-xl rounded-[24px] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/10 hover:-translate-y-1 transition-transform duration-500 group relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[marquee_1.5s_ease-in-out]"></div>
        <img src="https://www.institutehub.in/storage/dashboard/branding/brand-strip/JasdHk2McXjAjd2NRBl1qeCzFAR4QWGHuJWiC7Dz.jpg" alt="InstituteHub" class="h-10 bg-white rounded-lg px-2">
      </div>
    </div>

    <!-- Auth Card -->
    <div class="bg-white/95 backdrop-blur-3xl rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20 relative">
      
      <!-- Welcome Header -->
      <div class="text-center mb-8">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100 shadow-sm">
          🎓 Welcome to InstituteHub
        </span>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">Sign In to Continue</h1>
        <p class="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">Access your dashboard, manage your learning, track certifications, and continue your educational journey.</p>
      </div>

      <!-- Segmented Controls -->
      <div class="bg-gray-100/80 p-1.5 rounded-2xl flex mb-8 relative border border-gray-200/50 shadow-inner">
        <!-- Active indicator -->
        <div id="active-tab-bg" class="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(33.33%-4px)] bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200 transition-all duration-300 ease-out z-0"></div>
        
        <button type="button" onclick="switchPortal('Admin', 0)" class="relative z-10 flex-1 py-2.5 text-xs sm:text-sm font-bold transition-colors text-gray-900 focus:outline-none" id="tab-Admin">Admin</button>
        <button type="button" onclick="switchPortal('Franchise', 1)" class="relative z-10 flex-1 py-2.5 text-xs sm:text-sm font-semibold transition-colors text-gray-500 hover:text-gray-900 focus:outline-none" id="tab-Franchise">Franchise</button>
        <button type="button" onclick="switchPortal('Student', 2)" class="relative z-10 flex-1 py-2.5 text-xs sm:text-sm font-semibold transition-colors text-gray-500 hover:text-gray-900 focus:outline-none" id="tab-Student">Student</button>
      </div>

      <!-- Form -->
      <form class="space-y-5">
        <div>
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Email Address</label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0B1F3A] transition-colors">
              <i class="ri-mail-line text-lg"></i>
            </div>
            <input type="email" required placeholder="name@example.com" class="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-[15px] rounded-2xl pl-11 pr-4 py-3.5 focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#0B1F3A]/10 focus:border-[#0B1F3A] transition-all shadow-sm">
          </div>
        </div>

        <div>
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Password</label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0B1F3A] transition-colors">
              <i class="ri-lock-password-line text-lg"></i>
            </div>
            <input type="password" id="passwordInput" required placeholder="••••••••" class="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-[15px] rounded-2xl pl-11 pr-12 py-3.5 focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#0B1F3A]/10 focus:border-[#0B1F3A] transition-all shadow-sm font-medium tracking-wider">
            <button type="button" onclick="togglePassword()" class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#0B1F3A] transition-colors focus:outline-none">
              <i id="passwordIcon" class="ri-eye-line text-lg"></i>
            </button>
          </div>
          <div class="mt-2 ml-1 h-1 w-full bg-gray-100 rounded-full overflow-hidden hidden" id="passwordStrengthContainer">
            <div id="passwordStrengthBar" class="h-full bg-gray-300 w-0 transition-all duration-300"></div>
          </div>
        </div>

        <div class="flex items-center justify-between pt-2">
          <label class="flex items-center gap-2.5 cursor-pointer group">
            <div class="relative flex items-center justify-center">
              <input type="checkbox" class="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-[#0B1F3A] checked:border-[#0B1F3A] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/30 focus:ring-offset-1">
              <i class="ri-check-line absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-sm font-bold"></i>
            </div>
            <span class="text-[13px] font-semibold text-gray-500 group-hover:text-gray-900 transition-colors">Remember me</span>
          </label>
          <a href="forgot-password.html" class="text-[13px] font-bold text-[#0B1F3A] hover:text-blue-700 transition-colors hover:underline underline-offset-4">Forgot Password?</a>
        </div>

        <button type="submit" class="w-full py-4 mt-6 bg-gradient-to-r from-[#0B1F3A] to-[#11325c] text-white font-bold text-[15px] rounded-2xl hover:from-[#11325c] hover:to-[#0B1F3A] shadow-[0_8px_20px_rgba(11,31,58,0.25)] hover:shadow-[0_12px_25px_rgba(11,31,58,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden">
          <span class="relative z-10 flex items-center gap-2">Sign In <i class="ri-arrow-right-line group-hover:translate-x-1.5 transition-transform"></i></span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[marquee_1.2s_ease-in-out]"></div>
        </button>
      </form>

      <!-- Quick Actions -->
      <div class="mt-8 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[13px]">
        <a href="online-admission.html" class="font-bold text-gray-500 hover:text-gray-900 transition-colors">Student Registration</a>
        <span class="w-1 h-1 rounded-full bg-gray-300 my-auto hidden sm:block"></span>
        <a href="contact.html" class="font-bold text-gray-500 hover:text-gray-900 transition-colors">Support Center</a>
      </div>
    </div>

    <!-- Trust Badges -->
    <div class="mt-8 flex justify-center gap-4 sm:gap-6 text-white/50 text-[11px] sm:text-xs font-medium tracking-wide">
      <div class="flex items-center gap-1.5"><i class="ri-shield-keyhole-line text-lg"></i> Secure Login</div>
      <span class="w-1 h-1 rounded-full bg-white/20 my-auto hidden sm:block"></span>
      <div class="flex items-center gap-1.5"><i class="ri-lock-line text-lg"></i> SSL Protected</div>
      <span class="w-1 h-1 rounded-full bg-white/20 my-auto hidden sm:block"></span>
      <div class="flex items-center gap-1.5 hidden sm:flex"><i class="ri-verified-badge-line text-lg"></i> ISO Certified</div>
    </div>
  </div>
  
  <script>
    function switchPortal(portalName, index) {
      const tabs = ['Admin', 'Franchise', 'Student'];
      
      // Update background position
      const bg = document.getElementById('active-tab-bg');
      // width is approx 33.33%, offset is index * 100% of the active tab width (roughly index * 33.33%)
      bg.style.transform = `translateX(${index * 100}%)`;
      
      tabs.forEach(tab => {
        const el = document.getElementById('tab-' + tab);
        if (tab === portalName) {
          el.className = 'relative z-10 flex-1 py-2.5 text-xs sm:text-sm font-bold transition-colors text-gray-900 focus:outline-none';
        } else {
          el.className = 'relative z-10 flex-1 py-2.5 text-xs sm:text-sm font-semibold transition-colors text-gray-500 hover:text-gray-900 focus:outline-none';
        }
      });
    }

    function togglePassword() {
      const input = document.getElementById('passwordInput');
      const icon = document.getElementById('passwordIcon');
      if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'ri-eye-off-line text-lg text-[#0B1F3A]';
      } else {
        input.type = 'password';
        icon.className = 'ri-eye-line text-lg';
      }
    }

    // Optional: Visual only password strength indicator
    document.getElementById('passwordInput').addEventListener('input', function(e) {
      const container = document.getElementById('passwordStrengthContainer');
      const bar = document.getElementById('passwordStrengthBar');
      const val = e.target.value;
      
      if (val.length > 0) {
        container.classList.remove('hidden');
        if (val.length < 5) {
          bar.style.width = '33%';
          bar.className = 'h-full bg-red-400 transition-all duration-300';
        } else if (val.length < 8) {
          bar.style.width = '66%';
          bar.className = 'h-full bg-yellow-400 transition-all duration-300';
        } else {
          bar.style.width = '100%';
          bar.className = 'h-full bg-green-500 transition-all duration-300 shadow-[0_0_8px_rgba(34,197,94,0.6)]';
        }
      } else {
        container.classList.add('hidden');
        bar.style.width = '0';
      }
    });
  </script>
</section>"""

def redesign_login():
    with open('login.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace the existing section
    pattern = r'<section class="relative min-h-screen.*?</section>'
    
    if re.search(pattern, content, re.DOTALL):
        new_content = re.sub(pattern, new_login_html, content, flags=re.DOTALL)
        with open('login.html', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Updated login.html")
    else:
        print("Could not find section in login.html")

if __name__ == '__main__':
    redesign_login()
