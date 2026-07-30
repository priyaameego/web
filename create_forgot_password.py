import re

new_forgot_html = """<section class="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-slate-50">
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
  <i class="ri-mail-send-line absolute top-[60%] left-[20%] text-white/5 text-5xl rotate-[10deg] animate-float pointer-events-none hidden lg:block" style="animation-delay: 2.5s;"></i>

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
    <div class="bg-white/95 backdrop-blur-3xl rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20 relative overflow-hidden transition-all duration-500" id="authCard">
      
      <!-- Welcome Header -->
      <div class="text-center mb-8">
        <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-50 to-blue-100 text-[#0B1F3A] flex items-center justify-center text-3xl mx-auto mb-6 shadow-sm border border-blue-200">
          <i class="ri-lock-unlock-line"></i>
        </div>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">Forgot Password?</h1>
        <p class="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">No worries, enter your email and we'll send you reset instructions.</p>
      </div>

      <!-- Form -->
      <form id="forgotPasswordForm" class="space-y-5" onsubmit="handleReset(event)">
        <div>
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Email Address</label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0B1F3A] transition-colors">
              <i class="ri-mail-line text-lg"></i>
            </div>
            <input type="email" id="emailInput" required placeholder="name@example.com" class="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-[15px] rounded-2xl pl-11 pr-4 py-3.5 focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#0B1F3A]/10 focus:border-[#0B1F3A] transition-all shadow-sm">
          </div>
          <p id="errorMsg" class="hidden text-red-500 text-xs mt-2 ml-1 font-medium animate-fade-in"><i class="ri-error-warning-line"></i> Please enter a valid email address.</p>
        </div>

        <button type="submit" id="submitBtn" class="w-full py-4 mt-4 bg-gradient-to-r from-[#0B1F3A] to-[#11325c] text-white font-bold text-[15px] rounded-2xl hover:from-[#11325c] hover:to-[#0B1F3A] shadow-[0_8px_20px_rgba(11,31,58,0.25)] hover:shadow-[0_12px_25px_rgba(11,31,58,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden">
          <span class="relative z-10 flex items-center gap-2" id="btnText">Send Reset Link <i class="ri-arrow-right-line group-hover:translate-x-1.5 transition-transform"></i></span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[marquee_1.2s_ease-in-out]"></div>
        </button>
      </form>

      <!-- Success State -->
      <div id="successState" class="hidden text-center py-2 animate-fade-up">
         <div class="w-20 h-20 rounded-full bg-green-50 text-green-500 flex items-center justify-center text-4xl mx-auto mb-5 shadow-inner border border-green-100">
           <i class="ri-check-line"></i>
         </div>
         <h2 class="text-2xl font-bold text-gray-900 mb-2">Check your email</h2>
         <p class="text-gray-500 text-sm mb-6 leading-relaxed">We have sent a password reset link to <br><strong id="userEmailDisplay" class="text-gray-800">your email</strong>.</p>
      </div>

      <!-- Quick Actions -->
      <div class="mt-8 pt-6 border-t border-gray-100 flex justify-center text-[13px]">
        <a href="login.html" class="inline-flex items-center gap-1.5 font-bold text-gray-500 hover:text-gray-900 transition-colors group">
          <i class="ri-arrow-left-line group-hover:-translate-x-1 transition-transform"></i> Back to Login
        </a>
      </div>
    </div>
  </div>
  
  <script>
    function handleReset(e) {
      e.preventDefault();
      const email = document.getElementById('emailInput').value;
      const form = document.getElementById('forgotPasswordForm');
      const btn = document.getElementById('submitBtn');
      const btnText = document.getElementById('btnText');
      const errorMsg = document.getElementById('errorMsg');
      const emailInput = document.getElementById('emailInput');
      
      // Inline validation
      if (!email || !email.includes('@')) {
        errorMsg.classList.remove('hidden');
        emailInput.classList.add('border-red-400', 'ring-red-400/20');
        // Shake animation
        const card = document.getElementById('authCard');
        card.classList.add('animate-[shake_0.5s_ease-in-out]');
        setTimeout(() => card.classList.remove('animate-[shake_0.5s_ease-in-out]'), 500);
        return;
      }
      
      // Clear errors
      errorMsg.classList.add('hidden');
      emailInput.classList.remove('border-red-400', 'ring-red-400/20');

      // Loading state
      btnText.innerHTML = '<i class="ri-loader-4-line animate-spin text-lg"></i> Sending...';
      btn.disabled = true;
      btn.classList.add('opacity-80', 'cursor-not-allowed');
      
      // Simulate API call
      setTimeout(() => {
        form.classList.add('hidden');
        document.getElementById('successState').classList.remove('hidden');
        document.getElementById('userEmailDisplay').textContent = email;
      }, 1500);
    }
    
    document.getElementById('emailInput').addEventListener('input', function() {
        document.getElementById('errorMsg').classList.add('hidden');
        this.classList.remove('border-red-400', 'ring-red-400/20');
    });
  </script>
</section>"""

def create_forgot_password():
    with open('login.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace the existing section
    pattern = r'<section class="relative min-h-screen.*?</section>'
    
    if re.search(pattern, content, re.DOTALL):
        new_content = re.sub(pattern, new_forgot_html, content, flags=re.DOTALL)
        
        # Also fix the title if we want, but since we're just copying login, 
        # let's modify the <title> tag
        new_content = re.sub(r'<title>.*?</title>', '<title>InstituteHub | Forgot Password</title>', new_content)
        
        with open('forgot-password.html', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Created forgot-password.html")
    else:
        print("Could not find section in login.html")

if __name__ == '__main__':
    create_forgot_password()
