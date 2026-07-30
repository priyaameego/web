import re

def fix_styles_css(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add missing color variables into the @theme block
    theme_colors = """
  --color-primary: #0B1F3A;
  --color-primary-dark: #051124;
  --color-primary-light: #1A365D;
  --color-accent: #C9A96E;
  --color-secondary: #FAFBFC;
  --color-text: #1E293B;
  --color-muted: #64748B;
"""
    
    # We can just insert it right after @theme {
    if '--color-primary:' not in content:
        content = content.replace('@theme {', '@theme {' + theme_colors)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Fixed styles.css")

fix_styles_css('d:/webcodian/src/styles.css')
