import json
import re

def update_courses_page():
    with open('d:/webcodian/courses_data.json', 'r', encoding='utf-8') as f:
        courses = json.load(f)
        
    with open('d:/webcodian/courses.html', 'r', encoding='utf-8') as f:
        content = f.read()
        
    for course in courses:
        title = course['title']
        slug = course['slug']
        
        safe_title = re.escape(title).replace(r'\ ', r'\s*').replace(r'\-', r'[\-\—]')
        
        pattern = r'(<h3[^>]*>.*?{}.*?</h3>.*?<a href=\")[^\"]+(\"[^>]*>.*?Details.*?</a>)'.format(safe_title)
        
        def replace_link(match):
            return match.group(1) + f"./course/{slug}.html" + match.group(2)
            
        content = re.sub(pattern, replace_link, content, flags=re.DOTALL | re.IGNORECASE)
        
    with open('d:/webcodian/courses.html', 'w', encoding='utf-8') as f:
        f.write(content)
        
    print('courses.html updated successfully.')

update_courses_page()
