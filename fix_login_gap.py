import re

def fix_gap():
    with open('login.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove the header entirely
    # The header starts at <header id="site-header" and ends at </header>
    content = re.sub(r'<header id="site-header".*?</header>', '', content, flags=re.DOTALL)

    # Remove the top padding from the section
    content = content.replace('pt-[72px] lg:pt-[104px]', '')

    with open('login.html', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    fix_gap()
