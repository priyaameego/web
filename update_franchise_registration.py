import re

def update_franchise_reg():
    with open('franchise/registration.html', 'r', encoding='utf-8') as f:
        content = f.read()

    new_html = """        <div class="w-full bg-white rounded-xl shadow-md border border-gray-100 animate-fade-up overflow-hidden mb-12">
          <!-- Header -->
          <div class="p-6 border-b border-gray-100 text-center">
            <h2 class="text-[15px] font-bold text-[#081C3A] tracking-[0.1em] uppercase">Franchise Registration Form</h2>
          </div>
          
          <form onsubmit="event.preventDefault(); document.getElementById('successState').classList.remove('hidden');" class="p-6 md:p-8 space-y-6">
            
            <!-- Section 1: Institute -->
            <div class="bg-[#f8f9ff] p-3 rounded-xl flex items-center gap-3">
              <div class="w-6 h-6 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-xs font-bold shrink-0">1</div>
              <h3 class="text-[17px] font-bold text-[#081C3A]">Institute</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" required placeholder="Institute name *" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#4F46E5] transition-colors shadow-sm">
              <input type="tel" required placeholder="Institute phone *" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#4F46E5] transition-colors shadow-sm">
              
              <input type="tel" placeholder="WhatsApp number" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#4F46E5] transition-colors shadow-sm">
              <input type="email" required placeholder="Email address *" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#4F46E5] transition-colors shadow-sm">
              
              <input type="text" required placeholder="Address *" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#4F46E5] transition-colors shadow-sm">
              <input type="text" required placeholder="PIN code *" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#4F46E5] transition-colors shadow-sm">
              
              <input type="text" placeholder="Institute registration date" onfocus="(this.type='date')" onblur="(this.value ? '' : this.type='text')" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#4F46E5] transition-colors shadow-sm">
              <input type="url" placeholder="Google Map link" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#4F46E5] transition-colors shadow-sm">
              
              <input type="text" placeholder="District" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#4F46E5] transition-colors shadow-sm">
              <input type="text" placeholder="State" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#4F46E5] transition-colors shadow-sm">
            </div>

            <!-- Section 2: Director -->
            <div class="bg-[#f8f9ff] p-3 rounded-xl flex items-center gap-3 mt-6">
              <div class="w-6 h-6 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-xs font-bold shrink-0">2</div>
              <h3 class="text-[17px] font-bold text-[#081C3A]">Director</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" required placeholder="Director name *" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#4F46E5] transition-colors shadow-sm">
              <input type="tel" placeholder="Director phone" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#4F46E5] transition-colors shadow-sm">
              
              <input type="tel" placeholder="Director WhatsApp" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#4F46E5] transition-colors shadow-sm">
              <input type="email" placeholder="Email address" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#4F46E5] transition-colors shadow-sm">
              
              <input type="text" placeholder="Aadhaar number (12 digits)" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#4F46E5] transition-colors shadow-sm">
            </div>

            <!-- Section 3: Documents -->
            <div class="bg-[#f8f9ff] p-3 rounded-xl flex items-center gap-3 mt-6">
              <div class="w-6 h-6 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-xs font-bold shrink-0">3</div>
              <h3 class="text-[17px] font-bold text-[#081C3A]">Documents</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <!-- File Uploads -->
              <div class="relative w-full border border-dashed border-gray-300 rounded-lg p-3 flex items-center justify-between cursor-pointer hover:border-[#4F46E5] group bg-white transition-colors">
                <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10">
                <div class="flex items-center gap-2 text-[13px] text-gray-500 group-hover:text-[#4F46E5] transition-colors">
                  <i class="ri-cloud-upload-line text-[#4F46E5]"></i> Institute logo
                </div>
                <div class="font-bold text-[13px] text-[#081C3A]">Browse</div>
              </div>
              
              <div class="relative w-full border border-dashed border-gray-300 rounded-lg p-3 flex items-center justify-between cursor-pointer hover:border-[#4F46E5] group bg-white transition-colors">
                <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10">
                <div class="flex items-center gap-2 text-[13px] text-gray-500 group-hover:text-[#4F46E5] transition-colors">
                  <i class="ri-cloud-upload-line text-[#4F46E5]"></i> Institute photo
                </div>
                <div class="font-bold text-[13px] text-[#081C3A]">Browse</div>
              </div>
              
              <div class="relative w-full border border-dashed border-gray-300 rounded-lg p-3 flex items-center justify-between cursor-pointer hover:border-[#4F46E5] group bg-white transition-colors">
                <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10">
                <div class="flex items-center gap-2 text-[13px] text-gray-500 group-hover:text-[#4F46E5] transition-colors">
                  <i class="ri-cloud-upload-line text-[#4F46E5]"></i> Director photo
                </div>
                <div class="font-bold text-[13px] text-[#081C3A]">Browse</div>
              </div>
              
              <div class="relative w-full border border-dashed border-gray-300 rounded-lg p-3 flex items-center justify-between cursor-pointer hover:border-[#4F46E5] group bg-white transition-colors">
                <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10">
                <div class="flex items-center gap-2 text-[13px] text-gray-500 group-hover:text-[#4F46E5] transition-colors">
                  <i class="ri-cloud-upload-line text-[#4F46E5]"></i> Director Aadhaar card
                </div>
                <div class="font-bold text-[13px] text-[#081C3A]">Browse</div>
              </div>
              
            </div>

            <!-- Submit Button -->
            <div class="pt-6 border-t border-gray-100 mt-6">
              <button type="submit" class="w-full py-3.5 bg-[#4F46E5] text-white font-medium text-base rounded-full hover:bg-[#4338ca] transition-colors flex justify-center items-center gap-2 group shadow-sm">
                <span class="btn-text flex items-center gap-2">Submit <i class="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i></span>
              </button>
            </div>
            
            <!-- Success State -->
            <div id="successState" class="hidden text-center py-6">
               <h3 class="text-xl font-bold text-green-600"><i class="ri-checkbox-circle-fill"></i> Registration Submitted!</h3>
               <p class="text-sm text-gray-500 mt-2">Thank you for your interest. We will contact you soon.</p>
            </div>

          </form>
        </div>"""

    # Replace from <div class="bg-white/80 backdrop-blur-2xl... down to </div> right before </section>
    pattern = r'<div class="bg-white/80 backdrop-blur-2xl border border-white rounded-\[32px\] shadow-2xl overflow-hidden animate-fade-up">.*?</div>\s*</section>'
    
    new_content = re.sub(pattern, new_html + "\n      </div>\n    </section>", content, flags=re.DOTALL)
    
    # Let's remove the script tag that we don't need anymore since it's a flat form
    script_pattern = r'<script>.*?function nextStep.*?function updateIndicators.*?</script>'
    new_content = re.sub(script_pattern, '', new_content, flags=re.DOTALL)
    
    with open('franchise/registration.html', 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == '__main__':
    update_franchise_reg()
