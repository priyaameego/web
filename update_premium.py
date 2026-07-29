import re

def premium():
    with open('online-enquiry.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Update Container
    content = content.replace(
        'bg-white/80 backdrop-blur-2xl border border-white rounded-[32px] shadow-2xl',
        'bg-[#e2e5e9] rounded-[24px] shadow-2xl' # light gray/blue premium background
    )

    # Remove the old Enquiry Form Header since the screenshot doesn't have it prominently, or just make it subtle
    content = content.replace(
        '<div class="text-center mb-8 border-b border-gray-100 pb-6">\n            <h2 class="text-[#111827] font-bold tracking-wider text-sm">ENQUIRY FORM</h2>\n          </div>',
        ''
    )

    # Section Headers
    # 1 Contact
    content = content.replace(
        '<div class="flex items-center gap-3 mb-4 bg-[#f4f6fc] p-3 rounded-lg text-primary">\n                <div class="w-6 h-6 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-xs font-bold shrink-0">1</div>\n                <h3 class="font-bold text-[#111827]">Contact</h3>\n              </div>',
        '<div class="flex items-center gap-4 mb-6 mt-2">\n                <span class="text-sm font-bold text-gray-400">1</span>\n                <h3 class="font-bold text-[#081C3A] text-lg">Contact</h3>\n              </div>'
    )
    # 2 Location
    content = content.replace(
        '<div class="flex items-center gap-3 mb-4 bg-[#f4f6fc] p-3 rounded-lg text-primary">\n                <div class="w-6 h-6 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-xs font-bold shrink-0">2</div>\n                <h3 class="font-bold text-[#111827]">Location</h3>\n              </div>',
        '<div class="flex items-center gap-4 mb-6 mt-8">\n                <span class="text-sm font-bold text-gray-400">2</span>\n                <h3 class="font-bold text-[#081C3A] text-lg">Location</h3>\n              </div>'
    )
    # 3 Course & details
    content = content.replace(
        '<div class="flex items-center gap-3 mb-4 bg-[#f4f6fc] p-3 rounded-lg text-primary">\n                <div class="w-6 h-6 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-xs font-bold shrink-0">3</div>\n                <h3 class="font-bold text-[#111827]">Course & details</h3>\n              </div>',
        '<div class="flex items-center gap-4 mb-6 mt-8">\n                <span class="text-sm font-bold text-gray-400">3</span>\n                <h3 class="font-bold text-[#081C3A] text-lg">Course & details</h3>\n              </div>'
    )

    # Inputs replacement
    old_input = 'w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5] text-sm text-gray-900 placeholder-gray-500 transition-colors'
    new_input = 'w-full bg-white rounded-lg px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/50 text-sm text-[#081C3A] placeholder-gray-400 border-none shadow-sm transition-all'
    content = content.replace(old_input, new_input)
    
    # Select replacement
    old_select = 'w-full bg-white border border-gray-300 rounded-md px-4 py-3 appearance-none focus:outline-none focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5] text-sm text-gray-500 transition-colors cursor-pointer'
    new_select = 'w-full bg-white rounded-lg px-5 py-3.5 appearance-none focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/50 text-sm text-gray-500 border-none shadow-sm transition-all cursor-pointer'
    content = content.replace(old_select, new_select)
    
    # Adjust arrow icon position for select
    content = content.replace('absolute right-4 top-[14px]', 'absolute right-5 top-[16px]')

    # Update buttons
    old_buttons = """<div class="flex flex-wrap items-center gap-4 mt-8 pt-4">
              <button type="submit" class="px-7 py-3 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium text-sm rounded-full transition-colors flex items-center gap-2 group">
                Submit enquiry <i class="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
              </button>
              <a href="./online-admission.html" class="px-7 py-3 bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#111827] font-medium text-sm rounded-full transition-colors flex items-center gap-2 group">
                Go to admission form <i class="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>"""
    
    # In the screenshot, "Submit enquiry ->" has white text and "Go to admission form ->" is dark text, with no visible borders.
    # We will make them minimal plain text links.
    new_buttons = """<div class="flex flex-wrap items-center gap-8 mt-10 pt-2">
              <button type="submit" class="text-white font-medium text-sm flex items-center gap-2 group hover:text-white/80 transition-colors">
                Submit enquiry <i class="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
              </button>
              <a href="./online-admission.html" class="text-[#081C3A] font-medium text-sm flex items-center gap-2 group hover:text-[#081C3A]/70 transition-colors">
                Go to admission form <i class="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>"""
    
    content = content.replace(old_buttons, new_buttons)
    
    with open('online-enquiry.html', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    premium()
