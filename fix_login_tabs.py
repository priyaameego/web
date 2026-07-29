import re

def update_tabs():
    with open('login.html', 'r', encoding='utf-8') as f:
        content = f.read()

    old_html = """            <div class="grid grid-cols-3 gap-3 mb-3">
              <button type="button" class="py-2.5 bg-green-50 text-green-600 border border-green-200 rounded-xl text-sm font-bold transition-colors">Admin</button>
              <button type="button" class="py-2.5 bg-white text-gray-600 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">Franchise</button>
              <button type="button" class="py-2.5 bg-white text-gray-600 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">Student</button>
            </div>
            <p class="text-xs text-gray-500 font-medium"><strong class="text-gray-700">Admin Portal:</strong> Institute dashboard and management modules.</p>"""

    new_html = """            <div class="grid grid-cols-3 gap-3 mb-3">
              <button type="button" onclick="switchPortal('Admin')" id="tab-Admin" class="py-2.5 bg-green-50 text-green-600 border border-green-200 rounded-xl text-sm font-bold transition-colors portal-tab">Admin</button>
              <button type="button" onclick="switchPortal('Franchise')" id="tab-Franchise" class="py-2.5 bg-white text-gray-600 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors portal-tab">Franchise</button>
              <button type="button" onclick="switchPortal('Student')" id="tab-Student" class="py-2.5 bg-white text-gray-600 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors portal-tab">Student</button>
            </div>
            <p id="portalDesc" class="text-xs text-gray-500 font-medium h-4"><strong class="text-gray-700">Admin Portal:</strong> Institute dashboard and management modules.</p>"""

    script_html = """
    <script>
      function switchPortal(portalName) {
        const tabs = document.querySelectorAll('.portal-tab');
        tabs.forEach(tab => {
          if (tab.id === 'tab-' + portalName) {
            tab.className = 'py-2.5 bg-green-50 text-green-600 border border-green-200 rounded-xl text-sm font-bold transition-colors portal-tab';
          } else {
            tab.className = 'py-2.5 bg-white text-gray-600 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors portal-tab';
          }
        });
        
        const desc = document.getElementById('portalDesc');
        if (portalName === 'Admin') {
          desc.innerHTML = '<strong class="text-gray-700">Admin Portal:</strong> Institute dashboard and management modules.';
        } else if (portalName === 'Franchise') {
          desc.innerHTML = '<strong class="text-gray-700">Franchise Portal:</strong> Manage your centers, admissions, and reports.';
        } else if (portalName === 'Student') {
          desc.innerHTML = '<strong class="text-gray-700">Student Portal:</strong> Access courses, exams, and verification.';
        }
      }
    </script>
    """

    content = content.replace(old_html, new_html)
    
    # Add script before </section>
    content = content.replace('</section>', script_html + '\n    </section>')
    
    with open('login.html', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    update_tabs()
