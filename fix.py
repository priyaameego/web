import re

# Read layout.html for the header
with open('d:/webcodian/src/layout.html', 'r', encoding='utf-8') as f:
    layout_content = f.read()

header_match = re.search(r'<header id="site-header".*?</header>', layout_content, re.DOTALL)
if header_match:
    new_header = header_match.group(0)
    # Fix the /login.html to login.html if needed
    new_header = new_header.replace('href="/certificate-verification.html"', 'href="certificate-verification.html"')
    new_header = new_header.replace('href="/login.html"', 'href="login.html"')

# Read build-homepage.js
with open('d:/webcodian/scripts/build-homepage.js', 'r', encoding='utf-8') as f:
    home_content = f.read()

# Replace header
home_content = re.sub(r'<header id="site-header".*?</header>', new_header, home_content, flags=re.DOTALL)

# Now for the facilities section. Let's make it luxury.
facilities_html = '''    <!-- 2. Facilities Grid -->
    <section class="py-24 bg-white relative z-20">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="text-center max-w-4xl mx-auto mb-20 animate-on-scroll">
          <h2 class="text-primary font-bold tracking-widest uppercase text-sm mb-4 inline-block pb-1">Explore By Facilities</h2>
          <h3 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Learn New Skills When And<br>Where You Like</h3>
          <p class="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">Computer institutes typically offer a range of facilities to support their students' learning and development. Some common facilities you might find in a computer institute include</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">'''

facilities = [
    {"title": "Training<br>Programs", "icon": "ri-focus-3-line"},
    {"title": "Expert<br>Faculty", "icon": "ri-team-fill"},
    {"title": "Security", "icon": "ri-lock-2-line"},
    {"title": "Course<br>Materials", "icon": "ri-book-2-fill"},
    {"title": "Certification", "icon": "ri-graduation-cap-fill"},
    {"title": "Flexible<br>Learning", "icon": "ri-time-line"},
    {"title": "Career<br>Placement", "icon": "ri-line-chart-line"},
    {"title": "Practical<br>Approach", "icon": "ri-shuffle-line"},
    {"title": "Support<br>System", "icon": "ri-customer-service-2-fill"},
    {"title": "Library", "icon": "ri-book-read-fill"},
    {"title": "Computer<br>Lab", "icon": "ri-computer-line"},
    {"title": "Workshops", "icon": "ri-briefcase-4-fill"}
]

for i, fac in enumerate(facilities):
    facilities_html += f'''
          <!-- Card {i+1} -->
          <div class="group bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm hover:shadow-premium hover:-translate-y-2 hover:border-primary/20 transition-all duration-500 flex flex-col items-center text-center animate-on-scroll">
            <div class="w-16 h-16 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center text-3xl mb-5 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
              <i class="{fac['icon']}"></i>
            </div>
            <h4 class="font-bold text-gray-900 text-[15px] leading-snug group-hover:text-primary transition-colors">{fac['title']}</h4>
          </div>'''

facilities_html += '''
        </div>
      </div>
    </section>'''

# Replace facilities section
# The facilities section starts with <!-- 2. Facilities Grid --> and ends right before <!-- 3. Learn New Skills (Split Layout) -->
home_content = re.sub(r'<!-- 2\. Facilities Grid -->.*?<!-- 3\. Learn New Skills \(Split Layout\) -->', facilities_html + '\n\n    <!-- 3. Learn New Skills (Split Layout) -->', home_content, flags=re.DOTALL)

with open('d:/webcodian/scripts/build-homepage.js', 'w', encoding='utf-8') as f:
    f.write(home_content)

print('Updated successfully!')
