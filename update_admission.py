import re

def update_admission():
    with open('online-admission.html', 'r', encoding='utf-8') as f:
        content = f.read()

    start_str = '<div class="max-w-4xl mx-auto bg-white rounded-[32px] shadow-2xl overflow-hidden text-left">'
    
    # We need to find where this div ends. Since it contains the whole multi-step form, we can just replace from start_str to `<script>`
    
    # Or just use regex to match from start_str up to `</section>`
    
    new_form_html = """<div class="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden text-left">
            <div class="text-center py-4 border-b border-gray-100">
              <h2 class="text-[#111827] font-bold tracking-wider text-sm uppercase">ADMISSION FORM</h2>
            </div>
            
            <form onsubmit="event.preventDefault();" class="p-6 md:p-8 space-y-8">
              <!-- 1 Course And Batch -->
              <div>
                <div class="flex items-center gap-3 mb-6 bg-[#f4f6fc] p-3 rounded-lg text-primary">
                  <div class="w-6 h-6 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-xs font-bold shrink-0">1</div>
                  <h3 class="font-bold text-[#111827] text-lg">Course And Batch</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Session -->
                  <div class="relative mt-1">
                    <label class="absolute -top-2.5 left-3 bg-white px-1 text-xs font-medium text-[#4F46E5]">Session *</label>
                    <input type="text" value="2026-27" required class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 transition-colors">
                  </div>
                  <!-- Select batch -->
                  <div class="relative mt-1">
                    <select class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-500 transition-colors cursor-pointer appearance-none" style="appearance: none; -webkit-appearance: none;">
                      <option value="">Select batch</option>
                      <option>Morning</option>
                      <option>Evening</option>
                    </select>
                    <i class="ri-arrow-down-s-line absolute text-gray-400 pointer-events-none" style="right: 1rem; top: 50%; transform: translateY(-50%);"></i>
                  </div>
                  <!-- Select course -->
                  <div class="relative">
                    <select class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-500 transition-colors cursor-pointer appearance-none" style="appearance: none; -webkit-appearance: none;">
                      <option value="">Select course</option>
                      <option>ADCA</option>
                      <option>DCA</option>
                    </select>
                    <i class="ri-arrow-down-s-line absolute text-gray-400 pointer-events-none" style="right: 1rem; top: 50%; transform: translateY(-50%);"></i>
                  </div>
                  <!-- Admission date -->
                  <div class="relative">
                    <label class="absolute -top-2.5 left-3 bg-white px-1 text-xs font-medium text-[#4F46E5]">Admission date *</label>
                    <input type="text" value="29/07/2026" required class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 transition-colors">
                  </div>
                </div>
              </div>

              <!-- 2 Student -->
              <div>
                <div class="flex items-center gap-3 mb-6 bg-[#f4f6fc] p-3 rounded-lg text-primary">
                  <div class="w-6 h-6 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-xs font-bold shrink-0">2</div>
                  <h3 class="font-bold text-[#111827] text-lg">Student</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full name *" required class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 transition-colors">
                  <input type="text" placeholder="Date of birth *" required class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 transition-colors">
                  
                  <div class="relative">
                    <select required class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-500 transition-colors cursor-pointer appearance-none" style="appearance: none; -webkit-appearance: none;">
                      <option value="">Select gender *</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    <i class="ri-arrow-down-s-line absolute text-gray-400 pointer-events-none" style="right: 1rem; top: 50%; transform: translateY(-50%);"></i>
                  </div>
                  <input type="text" placeholder="Father's name *" required class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 transition-colors">
                  <input type="text" placeholder="Mother's name *" required class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 transition-colors">
                  
                  <div class="relative">
                    <select class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-500 transition-colors cursor-pointer appearance-none" style="appearance: none; -webkit-appearance: none;">
                      <option value="">Blood group (optional)</option>
                      <option>A+</option>
                      <option>O+</option>
                    </select>
                    <i class="ri-arrow-down-s-line absolute text-gray-400 pointer-events-none" style="right: 1rem; top: 50%; transform: translateY(-50%);"></i>
                  </div>
                  <div class="relative">
                    <select class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-500 transition-colors cursor-pointer appearance-none" style="appearance: none; -webkit-appearance: none;">
                      <option value="">Qualification (optional)</option>
                      <option>10th</option>
                      <option>12th</option>
                    </select>
                    <i class="ri-arrow-down-s-line absolute text-gray-400 pointer-events-none" style="right: 1rem; top: 50%; transform: translateY(-50%);"></i>
                  </div>
                  <input type="text" placeholder="Referral code (optional)" class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 transition-colors">
                </div>
              </div>

              <!-- 3 Contact -->
              <div>
                <div class="flex items-center gap-3 mb-6 bg-[#f4f6fc] p-3 rounded-lg text-primary">
                  <div class="w-6 h-6 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-xs font-bold shrink-0">3</div>
                  <h3 class="font-bold text-[#111827] text-lg">Contact</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="tel" placeholder="Phone *" required class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 transition-colors">
                  <input type="tel" placeholder="Alternate mobile" class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 transition-colors">
                  <input type="email" placeholder="Email *" required class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 transition-colors">
                  <input type="text" placeholder="Address *" required class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 transition-colors">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <input type="text" placeholder="PIN code *" required class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 transition-colors">
                  <input type="text" placeholder="District" class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 transition-colors">
                  <input type="text" placeholder="State" class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 transition-colors">
                </div>
              </div>

              <!-- 4 Identity And Documents -->
              <div>
                <div class="flex items-center gap-3 mb-6 bg-[#f4f6fc] p-3 rounded-lg text-primary">
                  <div class="w-6 h-6 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-xs font-bold shrink-0">4</div>
                  <h3 class="font-bold text-[#111827] text-lg">Identity And Documents</h3>
                </div>
                <div class="space-y-6">
                  <input type="text" placeholder="Aadhaar number *" required class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-900 transition-colors">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Student photo -->
                    <div class="flex items-center justify-between w-full bg-white border border-gray-300 border-dashed rounded-md px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors">
                      <div class="flex items-center gap-2 text-sm text-gray-500">
                        <i class="ri-cloud-upload-line text-[#4F46E5]"></i> Student photo *
                      </div>
                      <span class="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold text-[#111827]">Browse</span>
                    </div>
                    <!-- Aadhaar card -->
                    <div class="flex items-center justify-between w-full bg-white border border-gray-300 border-dashed rounded-md px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors">
                      <div class="flex items-center gap-2 text-sm text-gray-500">
                        <i class="ri-cloud-upload-line text-[#4F46E5]"></i> Aadhaar card *
                      </div>
                      <span class="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold text-[#111827]">Browse</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 5 Additional information -->
              <div>
                <div class="flex items-center gap-3 mb-6 bg-[#f4f6fc] p-3 rounded-lg text-primary">
                  <div class="w-6 h-6 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-xs font-bold shrink-0">5</div>
                  <h3 class="font-bold text-[#111827] text-lg">Additional information</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- 10th marksheet -->
                  <div class="flex items-center justify-between w-full bg-white border border-gray-300 border-dashed rounded-md px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors">
                    <div class="flex items-center gap-2 text-sm text-gray-500">
                      <i class="ri-cloud-upload-line text-[#4F46E5]"></i> 10 th marksheet *
                    </div>
                    <span class="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold text-[#111827]">Browse</span>
                  </div>
                  <!-- Exam mode -->
                  <div class="relative">
                    <select required class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-500 transition-colors cursor-pointer appearance-none" style="appearance: none; -webkit-appearance: none;">
                      <option value="">EXAM MODE *</option>
                      <option>Online</option>
                      <option>Offline</option>
                    </select>
                    <i class="ri-arrow-down-s-line absolute text-gray-400 pointer-events-none" style="right: 1rem; top: 50%; transform: translateY(-50%);"></i>
                  </div>
                  
                  <!-- Declaration -->
                  <div class="relative">
                    <select required class="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] text-sm text-gray-500 transition-colors cursor-pointer appearance-none" style="appearance: none; -webkit-appearance: none;">
                      <option value="">I, -------------------------- (Student), declare</option>
                      <option>I agree to the terms</option>
                    </select>
                    <i class="ri-arrow-down-s-line absolute text-gray-400 pointer-events-none" style="right: 1rem; top: 50%; transform: translateY(-50%);"></i>
                  </div>
                </div>
              </div>

              <!-- Buttons -->
              <div class="flex flex-wrap items-center gap-4 mt-8 pt-4">
                <button type="submit" class="px-7 py-3 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium text-sm rounded-full transition-colors flex items-center gap-2 group">
                  Submit admission <i class="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                </button>
                <a href="./online-enquiry.html" class="px-7 py-3 bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#111827] font-medium text-sm rounded-full transition-colors flex items-center gap-2 group">
                  Enquiry only <i class="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </form>
          </div>"""
    
    start_idx = content.find(start_str)
    if start_idx == -1:
        print("Could not find start string")
        return
        
    # Find the end of the section
    end_str = '</section>'
    end_idx = content.find(end_str, start_idx)
    
    # We want to replace from start_idx up to the closing </div></div></div> before </section>
    # Actually the structure is:
    # <div class="container...">
    #   ...
    #   <div class="max-w-4xl mx-auto...
    #   </div>
    # </div>
    # Let's just use regex to replace everything between start_str and the script tag
    
    pattern = r'<div class="max-w-4xl mx-auto bg-white rounded-\[32px\] shadow-2xl overflow-hidden text-left">.*?</section>'
    
    new_content = re.sub(pattern, new_form_html + '\n      </div>\n    </section>', content, flags=re.DOTALL)
    
    # The previous JS code inside `<script>` might contain references to nextStep() which we removed. We can leave it or remove it.
    # The script is outside </section>. It's fine to leave it.
    
    with open('online-admission.html', 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == '__main__':
    update_admission()
