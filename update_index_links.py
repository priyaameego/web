import json
import re

def update_index():
    with open('d:/webcodian/courses_data.json', 'r', encoding='utf-8') as f:
        courses = json.load(f)
        
    with open('d:/webcodian/index.html', 'r', encoding='utf-8') as f:
        content = f.read()
        
    # We will iterate through each course and find its card in the HTML, 
    # then replace the "courses.html" link in its "Details" button.
    
    for course in courses:
        title = course['title']
        slug = course['slug']
        
        # We need to find the specific course card. We can use a regex that finds the block containing the title and the next Details button.
        # title might have spaces and special chars, so let's escape it safely
        safe_title = re.escape(title).replace(r'\ ', r'\s*').replace(r'\-', r'[\-\—]')
        
        # Regex to find the <a href="courses.html" ...>Details</a> that follows this title.
        pattern = r'(<h3[^>]*>.*?{}.*?</h3>.*?<a href=\")courses\.html(\"[^>]*>.*?Details.*?</a>)'.format(safe_title)
        
        # Function to replace
        def replace_link(match):
            return match.group(1) + f"./course/{slug}.html" + match.group(2)
            
        content = re.sub(pattern, replace_link, content, flags=re.DOTALL | re.IGNORECASE)
        
    with open('d:/webcodian/index.html', 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("index.html updated successfully.")

update_index()
