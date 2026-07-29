import re

def make_browse_clickable():
    with open('online-admission.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # We need to replace the fake file inputs with real ones wrapped in <label>
    
    # Student photo
    old_photo = """<!-- Student photo -->
                    <div class="flex items-center justify-between w-full bg-white border border-gray-300 border-dashed rounded-md px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors">
                      <div class="flex items-center gap-2 text-sm text-gray-500">
                        <i class="ri-cloud-upload-line text-[#4F46E5]"></i> Student photo *
                      </div>
                      <span class="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold text-[#111827]">Browse</span>
                    </div>"""
    new_photo = """<!-- Student photo -->
                    <label class="flex items-center justify-between w-full bg-white border border-gray-300 border-dashed rounded-md px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors group">
                      <div class="flex items-center gap-2 text-sm text-gray-500">
                        <i class="ri-cloud-upload-line text-[#4F46E5]"></i> <span class="file-name">Student photo *</span>
                      </div>
                      <span class="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold text-[#111827] group-hover:bg-gray-200 transition-colors">Browse</span>
                      <input type="file" accept="image/*" class="hidden" onchange="this.parentElement.querySelector('.file-name').textContent = this.files[0] ? this.files[0].name : 'Student photo *'">
                    </label>"""
    
    # Aadhaar card
    old_aadhaar = """<!-- Aadhaar card -->
                    <div class="flex items-center justify-between w-full bg-white border border-gray-300 border-dashed rounded-md px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors">
                      <div class="flex items-center gap-2 text-sm text-gray-500">
                        <i class="ri-cloud-upload-line text-[#4F46E5]"></i> Aadhaar card *
                      </div>
                      <span class="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold text-[#111827]">Browse</span>
                    </div>"""
    new_aadhaar = """<!-- Aadhaar card -->
                    <label class="flex items-center justify-between w-full bg-white border border-gray-300 border-dashed rounded-md px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors group">
                      <div class="flex items-center gap-2 text-sm text-gray-500">
                        <i class="ri-cloud-upload-line text-[#4F46E5]"></i> <span class="file-name">Aadhaar card *</span>
                      </div>
                      <span class="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold text-[#111827] group-hover:bg-gray-200 transition-colors">Browse</span>
                      <input type="file" accept=".pdf,image/*" class="hidden" onchange="this.parentElement.querySelector('.file-name').textContent = this.files[0] ? this.files[0].name : 'Aadhaar card *'">
                    </label>"""
                    
    # 10 th marksheet
    old_marksheet = """<!-- 10th marksheet -->
                  <div class="flex items-center justify-between w-full bg-white border border-gray-300 border-dashed rounded-md px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors">
                    <div class="flex items-center gap-2 text-sm text-gray-500">
                      <i class="ri-cloud-upload-line text-[#4F46E5]"></i> 10 th marksheet *
                    </div>
                    <span class="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold text-[#111827]">Browse</span>
                  </div>"""
    new_marksheet = """<!-- 10th marksheet -->
                  <label class="flex items-center justify-between w-full bg-white border border-gray-300 border-dashed rounded-md px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors group">
                    <div class="flex items-center gap-2 text-sm text-gray-500">
                      <i class="ri-cloud-upload-line text-[#4F46E5]"></i> <span class="file-name">10 th marksheet *</span>
                    </div>
                    <span class="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold text-[#111827] group-hover:bg-gray-200 transition-colors">Browse</span>
                    <input type="file" accept=".pdf,image/*" class="hidden" onchange="this.parentElement.querySelector('.file-name').textContent = this.files[0] ? this.files[0].name : '10 th marksheet *'">
                  </label>"""
    
    content = content.replace(old_photo, new_photo)
    content = content.replace(old_aadhaar, new_aadhaar)
    content = content.replace(old_marksheet, new_marksheet)
    
    with open('online-admission.html', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    make_browse_clickable()
