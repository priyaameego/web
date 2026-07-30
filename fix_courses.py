import glob
import os

files = ['d:/webcodian/courses.html'] + glob.glob('d:/webcodian/course/*.html')

for filepath in files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            text = f.read()
        
        original = text
        
        # 1. Fix encodings
        text = text.replace('ΓÇö', '—')
        text = text.replace('Γé╣', '₹')
        
        # 2. Fix top gap in details page (main pt and section py)
        text = text.replace('<main class="pt-[140px] lg:pt-[160px]">', '<main class="pt-[100px] lg:pt-[120px]">')
        text = text.replace('py-20 lg:py-28', 'py-8 lg:py-12')
        
        if text != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(text)
            print(f'Updated {filepath}')
    except Exception as e:
        print(f'Error reading {filepath}: {e}')

print('Done')
