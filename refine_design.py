import re

def refine_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Define replacement patterns for the premium redesign
    
    # 1. Colors mappings
    # Convert various colors to the new premium palette
    content = re.sub(r'\bbg-primaryDark\b', 'bg-primary', content)
    content = re.sub(r'\btext-text\b', 'text-textMain', content)
    content = re.sub(r'\btext-muted\b', 'text-textMuted', content)
    
    # Convert loud backgrounds to white/secondary
    content = re.sub(r'\bbg-(blue|red|green|yellow|purple|pink|indigo|teal|orange)-(50|100|200|300|400|500|600|700|800|900)\b', 'bg-white', content)
    
    # Remove gradients entirely and replace with solid premium colors
    content = re.sub(r'\bbg-gradient-to-[a-z]{1,2}\b', 'bg-white', content)
    content = re.sub(r'\bfrom-[a-z]+-\d+\b', '', content)
    content = re.sub(r'\bvia-[a-z]+-\d+\b', '', content)
    content = re.sub(r'\bto-[a-z]+-\d+\b', '', content)

    # Secondary background variations
    content = re.sub(r'\bbg-gray-50\b', 'bg-secondary', content)
    content = re.sub(r'\bbg-gray-100\b', 'bg-secondary', content)
    content = re.sub(r'\bbg-slate-50\b', 'bg-secondary', content)
    
    # Button replacements
    # Primary buttons
    # Old: bg-primary text-white (or similar)
    # Ensure they are: bg-primary text-white shadow-premium hover:shadow-premium-hover transition-all
    
    # Text colors
    content = re.sub(r'\btext-(blue|red|green|yellow|purple|pink|indigo|teal|orange)-(400|500|600|700|800|900)\b', 'text-primary', content)
    content = re.sub(r'\btext-gray-(500|600)\b', 'text-textMuted', content)
    content = re.sub(r'\btext-gray-(700|800|900)\b', 'text-textMain', content)
    content = re.sub(r'\btext-black\b', 'text-textMain', content)

    # Hover text colors
    content = re.sub(r'\bhover:text-(blue|red|green|yellow|purple|pink|indigo|teal|orange)-\d+\b', 'hover:text-accent', content)
    content = re.sub(r'\bgroup-hover:text-(blue|red|green|yellow|purple|pink|indigo|teal|orange)-\d+\b', 'group-hover:text-accent', content)
    content = re.sub(r'\bhover:text-white\b', 'hover:text-accent', content)
    content = re.sub(r'\bgroup-hover:text-white\b', 'group-hover:text-primary', content)

    # Hover background colors
    content = re.sub(r'\bhover:bg-primary\b', 'hover:shadow-premium', content)
    content = re.sub(r'\bgroup-hover:bg-primary\b', 'group-hover:border-accent', content)
    content = re.sub(r'\bhover:bg-[a-z]+-\d+\b', 'hover:shadow-premium', content)
    
    # Icon containers
    # old: bg-blue-100 text-blue-600
    # replaced earlier to: bg-white text-primary
    # let's refine ring and borders
    content = re.sub(r'\bborder-[a-z]+-\d+\b', 'border-borderLight', content)
    content = re.sub(r'\bring-[a-z]+-\d+\b', 'ring-borderLight', content)

    # Shadows
    content = re.sub(r'\bshadow-(lg|xl|2xl)\b', 'shadow-premium', content)
    content = re.sub(r'\bhover:shadow-(lg|xl|2xl)\b', 'hover:shadow-premium-hover', content)
    content = re.sub(r'\bshadow-md\b', 'shadow-sm', content)
    
    # Remove hover translations if they are too flashy, replace with slight lift
    content = re.sub(r'\bhover:-translate-y-\d+\b', 'hover:-translate-y-1', content)
    
    # Clean up double spaces created by empty replacements
    content = re.sub(r'\s+', ' ', content)
    content = content.replace('class=" ', 'class="').replace(' "', '"')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Refined", file_path)

refine_html('d:/webcodian/index.html')
