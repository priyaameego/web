import re

def refine_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Define replacement patterns for the premium redesign, but keep dark section backgrounds intact

    # 1. Colors mappings
    # Convert various loud text colors to accent/primary ONLY if they are not in dark sections,
    # or just use text-primary and text-accent.
    
    # Let's replace course card gradient hovers and borders with a soft gold/navy theme.
    # The course cards have: bg-gradient-to-r from-blue-500 to-purple-500 (etc)
    content = re.sub(r'bg-gradient-to-r from-(blue|emerald|amber|pink|indigo|red|violet|yellow)-[456]00 to-(purple|teal|orange|rose|cyan|fuchsia|red)-[456]00', 'bg-white/10 border border-white/20', content)
    
    # For text gradients: text-transparent bg-clip-text bg-gradient-to-r from-...
    content = re.sub(r'group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[a-z]+-400 group-hover:to-[a-z]+-400', 'group-hover:text-accent', content)
    
    # Shadow colors on course cards: shadow-blue-500/30 -> shadow-black/20
    content = re.sub(r'shadow-(blue|emerald|amber|pink|indigo|red|violet|yellow)-500/30', 'shadow-black/20', content)
    
    # Course card buttons
    content = re.sub(r'bg-(blue|emerald|amber|pink|indigo|red|violet|yellow)-500 text-white', 'bg-accent text-[#0A0F1C]', content)
    content = re.sub(r'bg-gradient-to-r from-(blue|emerald|amber|pink|indigo|red|violet|yellow)-600 to-(blue|emerald|amber|pink|indigo|red|violet|yellow)-400', 'bg-white', content)
    
    # Facility cards (Facilities Grid) - these are on a white bg
    # Replace their icon bg gradients
    content = re.sub(r'bg-gradient-to-b from-\[\#[a-z0-9]+\] to-white text-\[\#[a-z0-9]+\]', 'bg-secondary text-primary', content)
    
    # Ensure text colors are primarily textMain or primary
    # Wait, doing global text replacements broke things earlier. Let's not do global text replacements.
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Refined", file_path)

refine_html('d:/webcodian/index.html')
