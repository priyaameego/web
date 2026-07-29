import re

def fix():
    with open('courses.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # The JS logic to replace
    old_js = """      function filterCategory(category, element) {
        currentCategory = category;
        currentPage = 1; // reset to page 1

        // Update button styles
        document.querySelectorAll('.category-btn').forEach(btn => {
          btn.classList.remove('bg-primary', 'text-white', 'shadow-md');
          btn.classList.add('bg-white', 'border', 'border-gray-200', 'text-gray-600', 'shadow-sm');
        });
        element.classList.remove('bg-white', 'border', 'border-gray-200', 'text-gray-600', 'shadow-sm');
        element.classList.add('bg-primary', 'text-white', 'shadow-md');

        applyFilters();
      }"""

    new_js = """      function filterCategory(category, element) {
        currentCategory = category;
        currentPage = 1; // reset to page 1

        const activeClasses = ['bg-primary', 'text-white', 'shadow-md', 'hover:bg-primary-light'];
        const inactiveClasses = ['bg-white', 'border', 'border-gray-200', 'text-gray-600', 'shadow-sm', 'hover:border-primary', 'hover:text-primary', 'hover:shadow-md', 'group'];

        // Update button styles
        document.querySelectorAll('.category-btn').forEach(btn => {
          btn.classList.remove(...activeClasses);
          btn.classList.add(...inactiveClasses);
          // ensure icon has group-hover
          const icon = btn.querySelector('i');
          if (icon) icon.classList.add('group-hover:text-primary');
        });
        
        element.classList.remove(...inactiveClasses);
        element.classList.add(...activeClasses);
        // remove group-hover from active button icon so it doesn't turn dark on hover
        const activeIcon = element.querySelector('i');
        if (activeIcon) activeIcon.classList.remove('group-hover:text-primary');

        applyFilters();
      }"""

    if old_js in content:
        content = content.replace(old_js, new_js)
    else:
        print("Could not find old JS")
        
    # Also we need to make sure the "All Courses" button initially does not have `group` or `hover:text-primary` etc. (It didn't have it originally).
    # And the other buttons DO have it. When the script runs on load, it won't change classes. So initial state is fine.
    
    with open('courses.html', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    fix()
