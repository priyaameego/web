import re

def fix_icons():
    with open('online-enquiry.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # The icon string might have right-4 or right-5 and top-[14px] or top-[16px]
    # Let's replace the whole class for the arrow down icon
    # original might be like: <i class="ri-arrow-down-s-line absolute right-5 top-[16px] text-gray-400 pointer-events-none"></i>
    
    # We will use regex to find and replace it
    pattern = r'<i class="ri-arrow-down-s-line absolute[^>]+text-gray-400 pointer-events-none"></i>'
    replacement = '<i class="ri-arrow-down-s-line absolute text-gray-400 pointer-events-none" style="right: 1rem; top: 50%; transform: translateY(-50%);"></i>'
    
    content = re.sub(pattern, replacement, content)
    
    # Just in case they are slightly different
    content = content.replace(
        '<i class="ri-arrow-down-s-line absolute right-5 top-[16px] text-gray-400 pointer-events-none"></i>',
        replacement
    )
    content = content.replace(
        '<i class="ri-arrow-down-s-line absolute right-4 top-[14px] text-gray-400 pointer-events-none"></i>',
        replacement
    )
    
    with open('online-enquiry.html', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    fix_icons()
