import re

def update():
    with open('courses.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Update buttons
    content = content.replace(
        '<a href="courses.html" class="px-6 py-3',
        '<a href="javascript:void(0)" onclick="filterCategory(\'All\', this)" class="category-btn px-6 py-3'
    )
    content = content.replace(
        '<a href="software-development.html" class="px-6 py-3',
        '<a href="javascript:void(0)" onclick="filterCategory(\'Software Development\', this)" class="category-btn px-6 py-3'
    )
    content = content.replace(
        '<a href="computer-applications.html" class="px-6 py-3',
        '<a href="javascript:void(0)" onclick="filterCategory(\'Computer Applications\', this)" class="category-btn px-6 py-3'
    )
    content = content.replace(
        '<a href="office-automation.html" class="px-6 py-3',
        '<a href="javascript:void(0)" onclick="filterCategory(\'Office Automation\', this)" class="category-btn px-6 py-3'
    )
    content = content.replace(
        '<a href="tally-accounts.html" class="px-6 py-3',
        '<a href="javascript:void(0)" onclick="filterCategory(\'Tally & Accounts\', this)" class="category-btn px-6 py-3'
    )
    content = content.replace(
        '<a href="hardware-network.html" class="px-6 py-3',
        '<a href="javascript:void(0)" onclick="filterCategory(\'Hardware & Network\', this)" class="category-btn px-6 py-3'
    )

    # Make the "All Courses" active by default
    content = content.replace(
        'class="category-btn px-6 py-3 rounded-full bg-primary text-white',
        'id="cat-All" class="category-btn px-6 py-3 rounded-full bg-primary text-white active-cat'
    )
    
    # Add id and remove inactive classes to others to easily manage them
    categories = ['Software Development', 'Computer Applications', 'Office Automation', 'Tally & Accounts', 'Hardware & Network']
    for cat in categories:
        cat_id = cat.replace(' ', '-').replace('&', 'and')
        content = content.replace(
            f'onclick="filterCategory(\'{cat}\', this)" class="category-btn px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-600',
            f'id="cat-{cat_id}" onclick="filterCategory(\'{cat}\', this)" class="category-btn px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-600'
        )

    # Add data-category to cards
    # Card 1: ADCA -> Computer Applications
    content = content.replace(
        '<!-- Course Card 1 -->\n          <div class="bg-white rounded-[28px]',
        '<!-- Course Card 1 -->\n          <div data-category="Computer Applications" class="course-card bg-white rounded-[28px]'
    )
    # Card 2: C Programming -> Software Development
    content = content.replace(
        '<!-- Course Card 2 -->\n          <div class="bg-white rounded-[28px]',
        '<!-- Course Card 2 -->\n          <div data-category="Software Development" class="course-card bg-white rounded-[28px]'
    )
    # Card 3: Tally -> Tally & Accounts
    content = content.replace(
        '<!-- Course Card 3 -->\n          <div class="bg-white rounded-[28px]',
        '<!-- Course Card 3 -->\n          <div data-category="Tally & Accounts" class="course-card bg-white rounded-[28px]'
    )
    # Card 4: DCA -> Computer Applications
    content = content.replace(
        '<!-- Course Card 4 -->\n          <div class="bg-white rounded-[28px]',
        '<!-- Course Card 4 -->\n          <div data-category="Computer Applications" class="course-card bg-white rounded-[28px]'
    )
    # Card 5: Basic Data Entry -> Office Automation (or Data Entry)
    content = content.replace(
        '<!-- Course Card 5 -->\n          <div class="bg-white rounded-[28px]',
        '<!-- Course Card 5 -->\n          <div data-category="Office Automation" class="course-card bg-white rounded-[28px]'
    )
    # Card 6: CorelDRAW -> DTP & Design
    content = content.replace(
        '<!-- Course Card 6 -->\n          <div class="bg-white rounded-[28px]',
        '<!-- Course Card 6 -->\n          <div data-category="Software Development" class="course-card bg-white rounded-[28px]'
    ) # Mapped to Software dev to have something. Or let's just use "Computer Applications"

    # Pagination buttons update
    content = content.replace(
        '<a href="?page=1" class="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-lg hover:bg-primary-light transition-colors">1</a>',
        '<a href="javascript:void(0)" onclick="changePage(1)" id="page-1" class="page-btn w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-lg hover:bg-primary-light transition-colors">1</a>'
    )
    content = content.replace(
        '<a href="?page=2" class="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-blue-50 hover:text-primary hover:border-primary transition-colors">2</a>',
        '<a href="javascript:void(0)" onclick="changePage(2)" id="page-2" class="page-btn w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-blue-50 hover:text-primary hover:border-primary transition-colors">2</a>'
    )
    content = content.replace(
        '<a href="?page=3" class="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-blue-50 hover:text-primary hover:border-primary transition-colors">3</a>',
        '<a href="javascript:void(0)" onclick="changePage(3)" id="page-3" class="page-btn w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-blue-50 hover:text-primary hover:border-primary transition-colors">3</a>'
    )

    # Add the JavaScript logic
    script_logic = """
      let currentCategory = 'All';
      let currentPage = 1;
      const itemsPerPage = 3;

      function filterCategory(category, element) {
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
      }

      function changePage(page) {
        currentPage = page;
        
        // Update pagination buttons
        document.querySelectorAll('.page-btn').forEach(btn => {
          btn.classList.remove('bg-primary', 'text-white', 'shadow-lg');
          btn.classList.add('bg-white', 'border', 'border-gray-200', 'text-gray-700');
        });
        const activeBtn = document.getElementById('page-' + page);
        if(activeBtn) {
            activeBtn.classList.remove('bg-white', 'border', 'border-gray-200', 'text-gray-700');
            activeBtn.classList.add('bg-primary', 'text-white', 'shadow-lg');
        }

        applyFilters();
      }

      function applyFilters() {
        const cards = document.querySelectorAll('.course-card');
        const emptyState = document.getElementById('emptyState');
        let visibleCount = 0;
        let filteredCards = [];

        cards.forEach(card => {
          const cat = card.getAttribute('data-category');
          if (currentCategory === 'All' || cat === currentCategory) {
            filteredCards.push(card);
          } else {
            card.style.display = 'none';
          }
        });

        // Pagination
        const startIdx = (currentPage - 1) * itemsPerPage;
        const endIdx = startIdx + itemsPerPage;

        filteredCards.forEach((card, index) => {
          if (index >= startIdx && index < endIdx) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        if (visibleCount === 0) {
          emptyState.classList.remove('hidden');
        } else {
          emptyState.classList.add('hidden');
        }
      }
      
      // Initialize on load
      document.addEventListener('DOMContentLoaded', () => {
         applyFilters();
      });
"""

    content = content.replace('// Mock search logic', script_logic + '\n      // Mock search logic')
    
    with open('courses.html', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    update()
