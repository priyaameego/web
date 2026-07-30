import re
import sys

def replace_header():
    try:
        with open('d:/webcodian/courses.html', 'r', encoding='utf-8') as f:
            courses_content = f.read()

        header_match = re.search(r'(<header id="site-header".*?</header>)', courses_content, re.DOTALL)
        if not header_match:
            print('Header not found in courses.html')
            return
            
        new_header = header_match.group(1)

        with open('d:/webcodian/index.html', 'r', encoding='utf-8') as f:
            index_content = f.read()

        # Replace in index.html
        index_content = re.sub(r'<header id="site-header".*?</header>', new_header.replace('\\', '\\\\'), index_content, flags=re.DOTALL)

        with open('d:/webcodian/index.html', 'w', encoding='utf-8') as f:
            f.write(index_content)
            
        print('Header successfully replaced')
    except Exception as e:
        print(f"Error: {e}")

replace_header()
