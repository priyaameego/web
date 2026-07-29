import re

def fix_colors():
    with open('online-enquiry.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Container background
    content = content.replace(
        'bg-[#e2e5e9]',
        'bg-gray-100'
    )
    
    # 2. Text colors
    content = content.replace('text-[#081C3A]', 'text-primary')
    content = content.replace('text-[#111827]', 'text-gray-900')
    
    # 3. Focus rings
    content = content.replace('focus:border-[#4F46E5]', 'focus:border-primary')
    content = content.replace('focus:ring-[#4F46E5]/50', 'focus:ring-primary/20')
    
    # 4. Buttons
    # Submit button is currently text-white
    content = content.replace(
        '<button type="submit" class="text-white font-medium text-sm flex items-center gap-2 group hover:text-white/80 transition-colors">',
        '<button type="submit" class="text-primary font-bold text-base flex items-center gap-2 group hover:text-primary-light transition-colors">'
    )
    # Go to admission link is text-[#081C3A] which we already replaced to text-primary above. We should make it text-gray-600
    content = content.replace(
        '<a href="./online-admission.html" class="text-primary font-medium text-sm flex items-center gap-2 group hover:text-primary/70 transition-colors">',
        '<a href="./online-admission.html" class="text-gray-500 font-medium text-sm flex items-center gap-2 group hover:text-gray-800 transition-colors">'
    )
    
    # Also I used `text-[#081C3A]/70` -> let's fix it if it exists
    content = content.replace('text-primary/70', 'text-primary-light')
    
    with open('online-enquiry.html', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    fix_colors()
