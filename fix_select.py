import re

def fix_select():
    with open('online-enquiry.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace appearance-none class with inline styles to ensure it works even without Tailwind JIT
    content = content.replace(
        'appearance-none',
        'appearance-none" style="-webkit-appearance: none; -moz-appearance: none; appearance: none;'
    )
    
    with open('online-enquiry.html', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    fix_select()
