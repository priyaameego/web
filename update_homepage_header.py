import re

with open('d:/webcodian/src/layout.html', 'r', encoding='utf-8') as f:
    layout_content = f.read()

header_match = re.search(r'<header id="site-header".*?</header>', layout_content, re.DOTALL)
if header_match:
    new_header = header_match.group(0)
    # Fix paths
    new_header = new_header.replace('href="/certificate-verification.html"', 'href="certificate-verification.html"')
    new_header = new_header.replace('href="/login.html"', 'href="login.html"')

with open('d:/webcodian/scripts/build-homepage.js', 'r', encoding='utf-8') as f:
    home_content = f.read()

# Replace header
home_content = re.sub(r'<header id="site-header".*?</header>', new_header, home_content, flags=re.DOTALL)

with open('d:/webcodian/scripts/build-homepage.js', 'w', encoding='utf-8') as f:
    f.write(home_content)

print('Header updated successfully!')
