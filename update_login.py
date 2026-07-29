import re

def update_login():
    with open('login.html', 'r', encoding='utf-8') as f:
        content = f.read()

    new_html = """    <section class="relative min-h-screen flex flex-col lg:flex-row pt-[72px] lg:pt-[104px] bg-[#f8fafc]">
      
      <!-- Left Side (Gradient & Welcome Text) -->
      <div class="w-full lg:w-5/12 bg-gradient-to-br from-[#22c55e] via-[#3b82f6] to-[#f97316] p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
        <!-- Glass Logo -->
        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 inline-block mb-12 lg:mb-20 shadow-lg border border-white/20 max-w-[280px]">
          <img src="https://www.institutehub.in/storage/dashboard/branding/brand-strip/JasdHk2McXjAjd2NRBl1qeCzFAR4QWGHuJWiC7Dz.jpg" alt="Logo" class="w-full h-auto bg-white rounded px-2 py-1">
        </div>
        
        <div class="text-white relative z-10">
          <p class="text-white/90 font-bold text-xs tracking-[0.2em] uppercase mb-4">Secure Sign In</p>
          <h1 class="text-4xl lg:text-5xl font-bold leading-[1.1] mb-6">Welcome back to your institute portal</h1>
          <p class="text-white/80 text-[15px] mb-10 max-w-sm leading-relaxed">Choose your portal and continue with your account credentials.</p>
          
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/10 shadow-sm">Admin</span>
            <span class="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/10 shadow-sm">Franchise</span>
            <span class="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/10 shadow-sm">Student</span>
          </div>
        </div>
      </div>
      
      <!-- Right Side (Login Form) -->
      <div class="w-full lg:w-7/12 flex items-center justify-center p-6 lg:p-12">
        
        <div class="w-full max-w-md bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <p class="text-[#22c55e] font-bold text-[10px] tracking-widest uppercase mb-2">Account Login</p>
          <h2 class="text-[28px] font-bold text-[#111827] mb-8">Sign in to continue</h2>
          
          <div class="mb-6">
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Portal</p>
            <div class="grid grid-cols-3 gap-3 mb-3">
              <button type="button" class="py-2.5 bg-green-50 text-green-600 border border-green-200 rounded-xl text-sm font-bold transition-colors">Admin</button>
              <button type="button" class="py-2.5 bg-white text-gray-600 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">Franchise</button>
              <button type="button" class="py-2.5 bg-white text-gray-600 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">Student</button>
            </div>
            <p class="text-xs text-gray-500 font-medium"><strong class="text-gray-700">Admin Portal:</strong> Institute dashboard and management modules.</p>
          </div>
          
          <form class="space-y-5">
            <div>
              <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
              <!-- Based on screenshot, using red border for active/demo state of email -->
              <input type="email" required class="w-full bg-white border border-red-300 rounded-xl px-4 py-3.5 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-50 transition-all text-sm text-gray-900 shadow-sm">
            </div>
            
            <div>
              <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Password</label>
              <div class="relative">
                <input type="password" required class="w-full bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-3.5 focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-50 transition-all text-sm text-gray-900 shadow-sm">
                <i class="ri-eye-line absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"></i>
              </div>
            </div>
            
            <div class="flex items-center justify-between pt-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="w-4 h-4 rounded border-gray-300 text-[#22c55e] focus:ring-[#22c55e]">
                <span class="text-[13px] text-gray-500 font-medium">Remember me</span>
              </label>
              <a href="#" class="text-[13px] font-bold text-[#22c55e] hover:text-green-600 transition-colors">Forgot password?</a>
            </div>
            
            <button type="submit" class="w-full py-3.5 mt-6 bg-[#22c55e] text-white font-bold rounded-xl hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300">
              Log in
            </button>
          </form>
          
        </div>

      </div>
    </section>"""

    # We replace from <section class="relative min-h-[700px]... up to the end of the section
    pattern = r'<section class="relative min-h-\[700px\].*?</section>'
    
    new_content = re.sub(pattern, new_html, content, flags=re.DOTALL)
    
    with open('login.html', 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == '__main__':
    update_login()
