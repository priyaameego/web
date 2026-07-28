import urllib.request
import re

req = urllib.request.Request('https://gyaanpathdigital.in/', headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    js_files = re.findall(r'src=\"([^\"]+\.js)\"', html)
    print("JS Files:", js_files)
    
    css_files = re.findall(r'href=\"([^\"]+\.css)\"', html)
    print("CSS Files:", css_files)
    
    # Try to find inline scripts about cursor
    inline_scripts = re.findall(r'<script>(.*?)</script>', html, re.DOTALL | re.IGNORECASE)
    for i, script in enumerate(inline_scripts):
        if 'cursor' in script.lower():
            print(f"Found cursor in inline script {i}:")
            print(script)
except Exception as e:
    print(e)
