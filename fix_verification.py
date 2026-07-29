import re

def fix_verification():
    with open('student-verification.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # The HTML block to replace
    old_html = """          <div class="p-6 border-b border-gray-50 flex gap-4 items-center">
            <div class="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100/50">
              <i class="ri-user-search-line text-2xl"></i>
            </div>
            <div>
              <h2 class="text-xl font-bold text-[#111827]">Student Verification</h2>
              <p class="text-sm text-gray-500 mt-1">Lookup by registration number and date of birth.</p>
            </div>
          </div>
          
          <form onsubmit="event.preventDefault(); verifyAction();" class="p-6 space-y-5">
            <input type="text" id="verifyInput" required placeholder="Registration number *" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 text-sm text-gray-900 placeholder-gray-500 transition-colors shadow-sm">
            
            <input type="text" id="verifyDob" required placeholder="Date of birth *" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 text-sm text-gray-900 placeholder-gray-500 transition-colors shadow-sm">
            
            <div class="pt-2">
              <button type="submit" id="verifyBtn" class="w-full py-3.5 bg-[#4F46E5] text-white font-medium text-base rounded-full hover:bg-indigo-700 transition-colors flex justify-center items-center gap-2 group">
                <span class="btn-text flex items-center gap-2">Verify <i class="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i></span>
                <div class="loading-spinner hidden w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </button>
            </div>
          </form>"""
          
    new_html = """          <div class="p-6 border-b border-gray-100 flex gap-4 items-center">
            <div class="w-12 h-12 rounded-xl bg-[#f4f6fc] text-[#4F46E5] flex items-center justify-center shrink-0 border border-[#4F46E5]/10">
              <i class="ri-user-search-line text-xl"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-[#081C3A]">Student Verification</h2>
              <p class="text-sm text-gray-500 mt-1">Lookup by registration number and date of birth.</p>
            </div>
          </div>
          
          <form onsubmit="event.preventDefault(); verifyAction();" class="p-6 space-y-6">
            <input type="text" id="verifyInput" required placeholder="Registration number *" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 placeholder-gray-500 transition-colors shadow-sm">
            
            <input type="text" id="verifyDob" required placeholder="Date of birth *" onfocus="(this.type='date')" onblur="(this.value==''?this.type='text':this.type='date')" class="w-full bg-white border border-gray-200 rounded-md px-4 py-3.5 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 placeholder-gray-500 transition-colors shadow-sm cursor-pointer">
            
            <div class="pt-2">
              <button type="submit" id="verifyBtn" class="w-full py-3.5 bg-[#4F46E5] text-white font-medium text-base rounded-full hover:bg-[#4338ca] transition-colors flex justify-center items-center gap-2 group shadow-sm">
                <span class="btn-text flex items-center gap-2">Verify <i class="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i></span>
                <div class="loading-spinner hidden w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </button>
            </div>
          </form>"""
          
    if old_html in content:
        content = content.replace(old_html, new_html)
    else:
        print("Could not find the exact old HTML block. Retrying with regex...")
        # Since white-space might differ slightly, let's use a regex that matches from `<div class="p-6 border-b` up to `</form>`
        pattern = r'<div class="p-6 border-b border-gray-50 flex gap-4 items-center">.*?</form>'
        content = re.sub(pattern, new_html.strip(), content, flags=re.DOTALL)
        
    with open('student-verification.html', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    fix_verification()
