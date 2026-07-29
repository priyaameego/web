import re

def update_franchise():
    with open('franchise/verification.html', 'r', encoding='utf-8') as f:
        content = f.read()

    new_html = """        <div id="verificationCard" class="w-full max-w-lg bg-white rounded-xl shadow-md border border-gray-100 animate-fade-up overflow-hidden">
          <div class="p-6 border-b border-gray-100 flex gap-4 items-center">
            <div class="w-12 h-12 rounded-xl bg-[#f4f6fc] text-[#4F46E5] flex items-center justify-center shrink-0 border border-[#4F46E5]/10">
              <i class="ri-store-2-line text-xl"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-[#081C3A]">Franchise Verification</h2>
              <p class="text-sm text-gray-500 mt-1">Verify an authorised franchise centre by its franchise ID.</p>
            </div>
          </div>
          
          <form onsubmit="event.preventDefault(); verifyFranchise();" class="p-6 space-y-6">
            <input type="text" id="franchiseIdInput" required placeholder="Franchise ID (e.g. FRN-000001) *" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 placeholder-gray-500 transition-colors shadow-sm">
            
            <div class="pt-2">
              <button type="submit" id="verifyBtn" class="w-full py-3.5 bg-[#4F46E5] text-white font-medium text-base rounded-full hover:bg-[#4338ca] transition-colors flex justify-center items-center gap-2 group shadow-sm">
                <span class="btn-text flex items-center gap-2">Verify <i class="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i></span>
                <div class="loading-spinner hidden w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </button>
            </div>
          </form>
        </div>"""

    # Replace the old form container
    pattern = r'<div id="verificationCard" class="w-full max-w-xl bg-white/80 backdrop-blur-2xl border border-white rounded-\[32px\] shadow-2xl p-8 md:p-12 animate-fade-up">.*?</form>\s*</div>'
    
    new_content = re.sub(pattern, new_html, content, flags=re.DOTALL)
    
    with open('franchise/verification.html', 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == '__main__':
    update_franchise()
