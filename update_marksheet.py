import re

def update_marksheet():
    with open('marksheet-verification.html', 'r', encoding='utf-8') as f:
        content = f.read()

    new_html = """        <div class="w-full max-w-lg bg-white rounded-xl shadow-md border border-gray-100 animate-fade-up overflow-hidden" id="verifyCard">
          <div class="p-6 border-b border-gray-100 flex gap-4 items-center">
            <div class="w-12 h-12 rounded-xl bg-[#f4f6fc] text-[#4F46E5] flex items-center justify-center shrink-0 border border-[#4F46E5]/10">
              <i class="ri-file-text-line text-xl"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-[#081C3A]">Marksheet Verification</h2>
              <p class="text-sm text-gray-500 mt-1">Enter registration number, course, and term to download the marksheet.</p>
            </div>
          </div>
          
          <form onsubmit="event.preventDefault(); verifyAction();" class="p-6 space-y-6">
            <input type="text" id="verifyInput" required placeholder="Registration number *" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 placeholder-gray-500 transition-colors shadow-sm">
            
            <div class="relative">
              <select required class="w-full bg-white border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 transition-colors shadow-sm cursor-pointer appearance-none" style="appearance: none; -webkit-appearance: none;">
                <option value="" disabled selected hidden>Course *</option>
                <option>Course *</option>
                <option>ADCA</option>
                <option>DCA</option>
                <option>Web Development</option>
              </select>
              <i class="ri-arrow-down-s-line absolute text-gray-400 pointer-events-none" style="right: 1rem; top: 50%; transform: translateY(-50%);"></i>
            </div>
            
            <div class="relative">
              <select required class="w-full bg-white border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 transition-colors shadow-sm cursor-pointer appearance-none" style="appearance: none; -webkit-appearance: none;">
                <option value="" disabled selected hidden></option>
                <option>Semester 1</option>
                <option>Semester 2</option>
                <option>Final</option>
              </select>
              <i class="ri-arrow-down-s-line absolute text-gray-400 pointer-events-none" style="right: 1rem; top: 50%; transform: translateY(-50%);"></i>
            </div>
            
            <div class="pt-2">
              <button type="submit" id="verifyBtn" class="w-full py-3.5 bg-[#4F46E5] text-white font-medium text-base rounded-full hover:bg-[#4338ca] transition-colors flex justify-center items-center gap-2 group shadow-sm">
                <span class="btn-text flex items-center gap-2">Search <i class="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i></span>
                <div class="loading-spinner hidden w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </button>
            </div>
          </form>
        </div>"""

    # We will replace from <div class="w-full max-w-lg bg-white...id="verifyCard"> to </div> right before <!-- Success Result -->
    pattern = r'<div class="w-full max-w-lg bg-white rounded-\[24px\] shadow-2xl p-8 border border-gray-100 animate-fade-up" id="verifyCard">.*?</form>\s*</div>'
    
    new_content = re.sub(pattern, new_html, content, flags=re.DOTALL)
    
    with open('marksheet-verification.html', 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == '__main__':
    update_marksheet()
