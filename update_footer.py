import os
import re

new_footer = """<!-- Footer -->
<footer class="bg-[#081C3A] mesh-gradient-dark text-gray-300 pt-24 pb-8 lg:pt-28 lg:pb-10 relative overflow-hidden text-sm mt-0 border-t-0">
  <div class="noise-overlay"></div>
  <!-- Animated glow orbs -->
  <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
  <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style="animation-delay: 2s;"></div>

  <div class="container mx-auto px-6 lg:px-12 relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
      
      <!-- Column 1 -->
      <div>
        <div class="glass-card-3d-dark rounded-[24px] p-4 inline-block mb-8 shadow-[0_0_30px_rgba(37,99,235,0.15)] group transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:-translate-y-2">
          <div class="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md p-2 border border-white/10">
             <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[marquee_1.5s_ease-in-out]"></div>
             <img src="https://www.institutehub.in/storage/dashboard/branding/brand-strip/JasdHk2McXjAjd2NRBl1qeCzFAR4QWGHuJWiC7Dz.jpg" alt="Logo" class="h-12 w-auto object-contain bg-white rounded-lg px-2">
          </div>
        </div>
        <p class="leading-loose text-gray-400/90 font-medium">An ISO 9001:2015 certified institute offering practical computer courses, hands-on lab training, and recognized certifications to build job-ready skills.</p>
      </div>

      <!-- Column 2 -->
      <div>
        <h3 class="text-white font-bold text-xl mb-8 relative inline-block group cursor-default">
          Explore
          <span class="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
        </h3>
        <ul class="space-y-4">
          <li><a href="blog.html" class="group flex items-center text-gray-400 hover:text-white transition-all duration-300"><i class="ri-arrow-right-line opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-blue-400 transition-all duration-300 mr-2"></i> <span class="group-hover:translate-x-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">Blog</span></a></li>
          <li><a href="events.html" class="group flex items-center text-gray-400 hover:text-white transition-all duration-300"><i class="ri-arrow-right-line opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-blue-400 transition-all duration-300 mr-2"></i> <span class="group-hover:translate-x-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">Events</span></a></li>
          <li><a href="news.html" class="group flex items-center text-gray-400 hover:text-white transition-all duration-300"><i class="ri-arrow-right-line opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-blue-400 transition-all duration-300 mr-2"></i> <span class="group-hover:translate-x-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">News</span></a></li>
          <li><a href="download.html" class="group flex items-center text-gray-400 hover:text-white transition-all duration-300"><i class="ri-arrow-right-line opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-blue-400 transition-all duration-300 mr-2"></i> <span class="group-hover:translate-x-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">Download</span></a></li>
        </ul>
      </div>
      
      <!-- Column 3 -->
      <div>
        <h3 class="text-white font-bold text-xl mb-8 relative inline-block group cursor-default">
          Useful Links
          <span class="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
        </h3>
        <ul class="space-y-4">
          <li><a href="#" class="group flex items-center text-gray-400 hover:text-white transition-all duration-300"><i class="ri-arrow-right-line opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-blue-400 transition-all duration-300 mr-2"></i> <span class="group-hover:translate-x-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">Terms & Conditions</span></a></li>
          <li><a href="#" class="group flex items-center text-gray-400 hover:text-white transition-all duration-300"><i class="ri-arrow-right-line opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-blue-400 transition-all duration-300 mr-2"></i> <span class="group-hover:translate-x-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">Privacy Policy</span></a></li>
          <li><a href="#" class="group flex items-center text-gray-400 hover:text-white transition-all duration-300"><i class="ri-arrow-right-line opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-blue-400 transition-all duration-300 mr-2"></i> <span class="group-hover:translate-x-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">Refund Policy</span></a></li>
          <li><a href="#" class="group flex items-center text-gray-400 hover:text-white transition-all duration-300"><i class="ri-arrow-right-line opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-blue-400 transition-all duration-300 mr-2"></i> <span class="group-hover:translate-x-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">Cancellation Policy</span></a></li>
        </ul>
      </div>

      <!-- Column 4 -->
      <div>
        <h3 class="text-white font-bold text-xl mb-8 relative inline-block group cursor-default">
          Contact Us
          <span class="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
        </h3>
        <ul class="space-y-6 text-gray-400">
          <li class="flex items-center gap-4 group cursor-default">
            <div class="w-12 h-12 rounded-full glass-panel-dark flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 border border-white/5 group-hover:border-blue-500/30">
              <i class="ri-map-pin-2-fill text-gray-400 group-hover:text-blue-400 text-xl group-hover:rotate-12 transition-all duration-300"></i>
            </div>
            <span class="font-medium group-hover:text-gray-200 transition-colors">123 Education Street, Tech Hub, City, Country 123456</span>
          </li>
          <li class="flex items-center gap-4 group">
            <div class="w-12 h-12 rounded-full glass-panel-dark flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 border border-white/5 group-hover:border-purple-500/30">
              <i class="ri-phone-fill text-gray-400 group-hover:text-purple-400 text-xl group-hover:rotate-12 transition-all duration-300"></i>
            </div>
            <a href="tel:+919876543210" class="font-medium hover:text-white transition-colors">+91 98765 43210</a>
          </li>
          <li class="flex items-center gap-4 group">
            <div class="w-12 h-12 rounded-full glass-panel-dark flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300 border border-white/5 group-hover:border-pink-500/30">
              <i class="ri-mail-send-fill text-gray-400 group-hover:text-pink-400 text-xl group-hover:rotate-12 transition-all duration-300"></i>
            </div>
            <a href="mailto:info@institutehub.in" class="font-medium hover:text-white transition-colors">info@institutehub.in</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Animated Gradient Divider -->
    <div class="relative w-full h-px my-10">
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-1/2 animate-[marquee_4s_ease-in-out_infinite_alternate]"></div>
    </div>

    <div class="flex flex-col md:flex-row justify-between items-center gap-6 pb-4">
      <div class="flex items-center gap-3 text-center md:text-left">
        <p class="text-gray-500 font-medium tracking-wide">&copy; 2026 InstituteHub. All rights reserved.</p>
        <span class="w-1.5 h-1.5 rounded-full bg-blue-500 hidden md:block opacity-50"></span>
        <p class="text-gray-500 font-medium tracking-wide hidden md:block opacity-75">Made with Excellence</p>
      </div>
      <div class="flex items-center gap-4">
        <a href="#" class="magnetic-btn w-12 h-12 rounded-full glass-panel-dark flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:border-blue-500/30 transition-all duration-300 group border border-white/5"><i class="ri-facebook-fill text-xl group-hover:-rotate-12 transition-transform"></i></a>
        <a href="#" class="magnetic-btn w-12 h-12 rounded-full glass-panel-dark flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-purple-500/30 transition-all duration-300 group border border-white/5"><i class="ri-twitter-x-line text-xl group-hover:rotate-12 transition-transform"></i></a>
        <a href="#" class="magnetic-btn w-12 h-12 rounded-full glass-panel-dark flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:border-pink-500/30 transition-all duration-300 group border border-white/5"><i class="ri-instagram-line text-xl group-hover:-rotate-12 transition-transform"></i></a>
        <a href="#" class="magnetic-btn w-12 h-12 rounded-full glass-panel-dark flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:border-blue-500/30 transition-all duration-300 group border border-white/5"><i class="ri-linkedin-fill text-xl group-hover:rotate-12 transition-transform"></i></a>
      </div>
    </div>
  </div>
</footer>

<!-- Floating Action Buttons -->
<a href="https://wa.me/919794412733" target="_blank" class="fixed bottom-6 left-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl shadow-lg hover:bg-green-600 transition-colors z-50 hover:scale-110 hover:shadow-green-500/50">
  <i class="ri-whatsapp-line"></i>
</a>
<a href="#" class="fixed bottom-6 right-6 w-14 h-14 glass-panel-dark border border-white/10 rounded-full flex items-center justify-center text-2xl text-blue-400 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-2 transition-all duration-300 z-50 group hover:border-blue-400/50 backdrop-blur-xl">
  <div class="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-400/20 transition-all duration-300"></div>
  <i class="ri-arrow-up-s-line group-hover:-translate-y-1 transition-transform drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"></i>
</a>"""

def update_files():
    for root, dirs, files in os.walk('.'):
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    pattern = r'<!-- Footer -->.*?<i class="ri-arrow-up-s-line"></i>\s*</a>'
                    if re.search(pattern, content, re.DOTALL):
                        new_content = re.sub(pattern, new_footer, content, flags=re.DOTALL)
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Updated {filepath}")
                    else:
                        print(f"Footer pattern not found in {filepath}")
                except Exception as e:
                    pass

if __name__ == '__main__':
    update_files()
