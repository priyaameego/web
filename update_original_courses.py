import re

with open('d:/webcodian/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# We will split by 'href="courses.html"' and replace the specific ones.
# Actually, the 'Details' buttons are the ones with class starting with "relative overflow-hidden px-4 py-3.5 bg-white/5 border border-white/10"
# Let's just find each course card and replace its details button.

courses = [
    ("DCA - 6 Months", "course/dca-6-months.html"),
    ("MS Office Complete Package", "course/ms-office-complete-package.html"),
    ("Python for Beginners", "course/python-for-beginners.html"),
    ("ADCA - 12 Months", "course/adca-12-months.html"),
    ("Basic Data Entry Operator", "course/basic-data-entry-operator-deo.html"),
    ("C Programming Fundamentals", "course/c-programming-fundamentals.html"),
    ("Certificate in Computer Concepts (CCC Prep)", "course/certificate-in-computer-concepts-ccc-prep.html"),
    ("CorelDRAW & Page Layout", "course/coreldraw-page-layout.html"),
    ("Cyber Safety for Students", "course/cyber-safety-for-students.html")
]

# We will use regex to find each course block and modify the Details button inside it.
for title, slug in courses:
    # Pattern to match a block containing the course title, followed by courses.html inside the same course-card-3d
    # Note: re.sub with a function allows precise replacement
    
    # We find the course title first, then replace the NEXT occurrence of href="courses.html"
    # To do this safely:
    # Split content by the title
    parts = content.split(title)
    if len(parts) > 1:
        # The next href="courses.html" is in parts[1]
        subparts = parts[1].split('href="courses.html"', 1)
        if len(subparts) == 2:
            parts[1] = subparts[0] + f'href="{slug}"' + subparts[1]
            content = parts[0] + title + parts[1]

with open('d:/webcodian/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated courses links in original index.html!')
