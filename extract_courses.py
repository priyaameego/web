import json
import re

def parse_courses():
    with open('d:/webcodian/index.html', 'r', encoding='utf-8') as f:
        content = f.read()
        
    courses = []
    
    # Split by course card div start
    cards = content.split('<div class="course-card-3d')
    for card in cards[1:]: # Skip the first chunk
        if '<h3' not in card: continue
        
        title_match = re.search(r'<h3[^>]*>(.*?)</h3>', card)
        category_match = re.search(r'<div class="text-xs font-bold[^>]*>(.*?)</div>', card)
        price_match = re.search(r'<span class="text-3xl font-bold[^>]*>(.*?)</span>', card)
        old_price_match = re.search(r'<span class="text-sm text-gray-500 line-through[^>]*>(.*?)</span>', card)
        img_match = re.search(r'<img src="(.*?)"', card)
        duration_match = re.search(r'<i class="ri-time-line.*?</i> (.*?)</span>', card)
        
        if title_match:
            title = title_match.group(1).replace('—', '-').strip()
            title = re.sub(r'<[^>]+>', '', title) # strip HTML
            slug = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')
            
            courses.append({
                'title': title,
                'slug': slug,
                'category': category_match.group(1) if category_match else 'Computer Courses',
                'price': price_match.group(1) if price_match else '₹0',
                'old_price': old_price_match.group(1) if old_price_match else '₹0',
                'image': img_match.group(1) if img_match else '',
                'duration': duration_match.group(1) if duration_match else '6 Months'
            })
            
    with open('d:/webcodian/courses_data.json', 'w', encoding='utf-8') as f:
        json.dump(courses, f, indent=4)
        
    print(f"Extracted {len(courses)} courses.")

parse_courses()
