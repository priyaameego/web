const fs = require('fs');

const layout = fs.readFileSync('src/layout.html', 'utf8');

const posts = [
  // Existing Posts
  { title: "Tips for Productive Online Learning", category: "Institute Updates", author: "Webcodian Institute", date: "10 May 2026", readTime: "4 min read", img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop", excerpt: "Learn how to maximize your productivity while studying online with these proven tips." },
  { title: "Marksheet Verification: Step-by-Step for Students", category: "Student Zone & Exams", author: "Webcodian Institute", date: "5 May 2026", readTime: "3 min read", img: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=2070&auto=format&fit=crop", excerpt: "A complete guide on how to verify your digital certificates and marksheets easily." },
  { title: "File Naming and Backups for Class Projects", category: "Digital Skills", author: "Webcodian Institute", date: "3 May 2026", readTime: "5 min read", img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop", excerpt: "Organize your workflow and never lose a coding project again with these backup strategies." },
  { title: "Celebrate Your Certification Journey", category: "Institute Updates", author: "Webcodian Institute", date: "27 Apr 2026", readTime: "2 min read", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop", excerpt: "Congratulations to our recent graduates on completing their professional courses!" },
  { title: "Celebrate Your Certification Journey", category: "Institute Updates", author: "Webcodian Institute", date: "27 Apr 2026", readTime: "2 min read", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop", excerpt: "Another batch of successful students receiving their certificates and placement offers." },
  { title: "Admit Card and Exam Day Checklist", category: "Student Zone & Exams", author: "Webcodian Institute", date: "23 Apr 2026", readTime: "3 min read", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop", excerpt: "Everything you need to know and prepare before your final online examination." },
  { title: "Using the Library and Self-Study Hours Wisely", category: "Institute Updates", author: "Webcodian Institute", date: "17 Apr 2026", readTime: "4 min read", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop", excerpt: "Maximize your focus by utilizing our modern campus library and dedicated study areas." },
  
  // New Premium Posts
  { title: "How to Build an IT Career After Computer Training", category: "Career Guidance", author: "Webcodian Institute", date: "12 May 2026", readTime: "6 min read", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop", excerpt: "Actionable steps to transition from training to a full-time software developer role." },
  { title: "Top Skills Employers Look for in Freshers", category: "Placement Success", author: "Webcodian Institute", date: "14 May 2026", readTime: "5 min read", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop", excerpt: "Discover the soft and hard skills that top IT companies look for during campus placements." },
  { title: "Artificial Intelligence and the Future of Computer Education", category: "Technology", author: "Webcodian Institute", date: "18 May 2026", readTime: "7 min read", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop", excerpt: "How AI is shaping the curriculum and tools we use to teach the next generation of developers." },
  { title: "How Our Students Achieved Their Dream Careers", category: "Student Success", author: "Webcodian Institute", date: "20 May 2026", readTime: "4 min read", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", excerpt: "Read inspiring stories of our alumni who secured high-paying jobs at top MNCs." },
  { title: "Frontend vs Backend Development – Which Path is Right for You?", category: "Web Development", author: "Webcodian Institute", date: "22 May 2026", readTime: "6 min read", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", excerpt: "A complete comparison to help you choose between UI/UX engineering and server-side logic." },
  { title: "Essential Cyber Security Tips Every Student Should Know", category: "Cyber Security", author: "Webcodian Institute", date: "25 May 2026", readTime: "5 min read", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", excerpt: "Protect your digital identity and projects with these fundamental cybersecurity practices." },
  { title: "Design Skills Every Creative Student Should Learn", category: "Graphic Design", author: "Webcodian Institute", date: "28 May 2026", readTime: "4 min read", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop", excerpt: "Master the principles of typography, color theory, and layout with Adobe Creative Cloud." },
  { title: "Best Programming Languages to Learn in 2026", category: "Programming", author: "Webcodian Institute", date: "30 May 2026", readTime: "8 min read", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop", excerpt: "An updated guide on the most in-demand languages for web, mobile, and AI development." }
];

const blogContent = `
    <!-- Cinematic Hero Section -->
    <section class="relative h-[300px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
             alt="Digital Classroom" 
             class="w-full h-full object-cover animate-ken-burns">
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-[#081C3A]/95 via-[#081C3A]/70 to-[#081C3A] z-10 mix-blend-multiply"></div>
      
      <!-- Floating Particles & Light rays -->
      <div class="absolute inset-0 z-10 opacity-40 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-primary/20 to-transparent blur-[100px] z-10"></div>

      <div class="container mx-auto px-6 relative z-20 text-center animate-fade-up">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-6 shadow-premium">
          <i class="ri-article-fill text-accent"></i> InstituteHub Blog
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-2xl">
          Insights, Learning &<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Student Success</span>
        </h1>

        <div class="flex items-center justify-center gap-2 text-sm font-medium text-gray-400">
          <a href="index.html" class="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span class="text-accent">Blog</span>
        </div>
      </div>
    </section>

    <!-- Search & Filter Section (Sticky) -->
    <div class="sticky top-[72px] z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm animate-fade-up" style="animation-delay: 0.2s;">
      <div class="container mx-auto px-6 lg:px-12 py-4">
        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div class="relative w-full md:w-96 group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
              <i class="ri-search-line"></i>
            </div>
            <input type="text" id="searchInput" placeholder="Search Articles..." class="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
          </div>
          <div class="flex gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <select id="categorySelect" class="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-full px-4 py-2.5 focus:outline-none focus:border-primary cursor-pointer">
              <option value="all">All Categories</option>
              <option value="Institute Updates">Institute Updates</option>
              <option value="Career Guidance">Career Guidance</option>
              <option value="Web Development">Web Development</option>
              <option value="Placement Success">Placement Success</option>
              <option value="Technology">Technology</option>
              <option value="Student Success">Student Success</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Programming">Programming</option>
            </select>
            <select id="sortSelect" class="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-full px-4 py-2.5 focus:outline-none focus:border-primary cursor-pointer">
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
            </select>
            <select id="readTimeSelect" class="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-full px-4 py-2.5 focus:outline-none focus:border-primary cursor-pointer">
              <option value="all">Any Read Time</option>
              <option value="short">&lt; 5 mins</option>
              <option value="long">&gt;= 5 mins</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <section class="py-16 bg-gray-50 relative z-30">
      <div class="container mx-auto px-6 lg:px-12">
        
        <!-- Featured Article -->
        <div class="mb-16 animate-fade-up" style="animation-delay: 0.3s;">
          <div class="bg-white rounded-[32px] overflow-hidden shadow-premium border border-gray-100 flex flex-col lg:flex-row group cursor-pointer hover:shadow-2xl transition-all duration-500">
            <div class="lg:w-1/2 relative overflow-hidden h-64 lg:h-auto">
              <img src="${posts[7].img}" alt="Featured" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
              <div class="absolute top-6 left-6">
                <span class="px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/40 text-white text-sm font-semibold rounded-full shadow-lg">Featured • ${posts[7].category}</span>
              </div>
            </div>
            <div class="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center bg-white relative">
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors leading-tight">${posts[7].title}</h2>
              <p class="text-gray-600 text-lg mb-8 leading-relaxed">${posts[7].excerpt}</p>
              
              <div class="flex items-center justify-between mt-auto pt-8 border-t border-gray-100">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">WI</div>
                  <div>
                    <h4 class="font-bold text-sm text-gray-900">${posts[7].author}</h4>
                    <p class="text-xs text-gray-500">${posts[7].date} • ${posts[7].readTime}</p>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button class="w-10 h-10 rounded-full bg-gray-50 text-gray-400 hover:bg-blue-50 hover:text-primary transition-colors flex items-center justify-center"><i class="ri-bookmark-line"></i></button>
                  <button class="w-10 h-10 rounded-full bg-gray-50 text-gray-400 hover:bg-blue-50 hover:text-primary transition-colors flex items-center justify-center"><i class="ri-share-line"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row gap-10">
          <!-- Blog Grid (75%) -->
          <div class="lg:w-3/4">
            <div id="blogGrid" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              ${posts.slice(0, 15).map((post, i) => {
                if(post.title === posts[7].title) return ''; // Skip featured
                return '<article data-category="' + post.category + '" data-readtime="' + post.readTime + '" data-title="' + post.title.toLowerCase() + '" data-excerpt="' + post.excerpt.toLowerCase() + '" class="blog-post-card bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-premium hover:-translate-y-2 transition-all duration-500 border border-gray-100 group flex flex-col h-full animate-fade-up" style="animation-delay: ' + ((i%3)*0.1) + 's;">' +
                  '<div class="relative h-56 overflow-hidden">' +
                    '<img src="' + post.img + '" alt="' + post.title + '" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">' +
                    '<div class="absolute top-4 left-4">' +
                      '<span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full shadow-sm">' + post.category + '</span>' +
                    '</div>' +
                  '</div>' +
                  '<div class="p-6 flex flex-col flex-grow">' +
                    '<h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">' + post.title + '</h3>' +
                    '<p class="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">' + post.excerpt + '</p>' +
                    
                    '<div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">' +
                       '<div class="flex items-center gap-2">' +
                        '<div class="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">WI</div>' +
                        '<div class="flex flex-col">' +
                          '<span class="text-xs font-bold text-gray-900">' + post.date + '</span>' +
                          '<span class="text-[10px] text-gray-500">' + post.readTime + '</span>' +
                        '</div>' +
                      '</div>' +
                      '<div class="flex gap-1 text-gray-400 group-hover:text-primary transition-colors">' +
                        '<i class="ri-arrow-right-up-line text-lg"></i>' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                '</article>';
              }).join('')}
            </div>
            
            <!-- Pagination -->
            <div class="flex justify-center mt-16 animate-fade-up">
              <div class="flex gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <button class="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors"><i class="ri-arrow-left-s-line"></i></button>
                <button class="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold shadow-md">1</button>
                <button class="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 font-medium transition-colors">2</button>
                <button class="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 font-medium transition-colors">3</button>
                <button class="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors"><i class="ri-arrow-right-s-line"></i></button>
              </div>
            </div>
          </div>

          <!-- Sidebar (25%) -->
          <aside class="lg:w-1/4 animate-fade-up" style="animation-delay: 0.4s;">
            <div class="sticky top-[160px] space-y-8">
              
              <!-- Categories -->
              <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h4 class="font-bold text-lg text-gray-900 mb-6 flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-accent"></div> Categories</h4>
                <ul class="space-y-3">
                  <li><a href="javascript:void(0);" data-category="Institute Updates" class="category-filter-btn flex justify-between items-center text-sm text-gray-600 hover:text-primary transition-colors group"><span class="group-hover:translate-x-1 transition-transform">Institute Updates</span> <span class="px-2 py-0.5 bg-gray-50 rounded-md text-xs font-medium">5</span></a></li>
                  <li><a href="javascript:void(0);" data-category="Career Guidance" class="category-filter-btn flex justify-between items-center text-sm text-gray-600 hover:text-primary transition-colors group"><span class="group-hover:translate-x-1 transition-transform">Career Guidance</span> <span class="px-2 py-0.5 bg-gray-50 rounded-md text-xs font-medium">3</span></a></li>
                  <li><a href="javascript:void(0);" data-category="Student Success" class="category-filter-btn flex justify-between items-center text-sm text-gray-600 hover:text-primary transition-colors group"><span class="group-hover:translate-x-1 transition-transform">Student Success</span> <span class="px-2 py-0.5 bg-gray-50 rounded-md text-xs font-medium">4</span></a></li>
                  <li><a href="javascript:void(0);" data-category="Web Development" class="category-filter-btn flex justify-between items-center text-sm text-gray-600 hover:text-primary transition-colors group"><span class="group-hover:translate-x-1 transition-transform">Web Development</span> <span class="px-2 py-0.5 bg-gray-50 rounded-md text-xs font-medium">2</span></a></li>
                  <li><a href="javascript:void(0);" data-category="Cyber Security" class="category-filter-btn flex justify-between items-center text-sm text-gray-600 hover:text-primary transition-colors group"><span class="group-hover:translate-x-1 transition-transform">Cyber Security</span> <span class="px-2 py-0.5 bg-gray-50 rounded-md text-xs font-medium">1</span></a></li>
                </ul>
              </div>

              <!-- Popular Topics -->
              <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h4 class="font-bold text-lg text-gray-900 mb-6 flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-accent"></div> Popular Tags</h4>
                <div class="flex flex-wrap gap-2">
                  <a href="javascript:void(0);" data-tag="exam" class="tag-filter-btn px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-xs text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors">Exams</a>
                  <a href="javascript:void(0);" data-tag="placement" class="tag-filter-btn px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-xs text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors">Placements</a>
                  <a href="javascript:void(0);" data-tag="admission" class="tag-filter-btn px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-xs text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors">Admissions</a>
                  <a href="javascript:void(0);" data-tag="software" class="tag-filter-btn px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-xs text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors">Software</a>
                  <a href="javascript:void(0);" data-tag="ai" class="tag-filter-btn px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-xs text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors">AI</a>
                  <a href="javascript:void(0);" data-tag="franchise" class="tag-filter-btn px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-xs text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors">Franchise</a>
                </div>
              </div>
              
              <!-- Featured Course Banner -->
              <div class="rounded-3xl overflow-hidden relative group cursor-pointer h-64">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div class="absolute bottom-0 left-0 p-6">
                  <span class="px-3 py-1 bg-accent text-white text-[10px] font-bold rounded-full mb-3 inline-block uppercase tracking-wider">New Course</span>
                  <h4 class="font-bold text-xl text-white mb-2 leading-tight">Master Full-Stack Web Development</h4>
                  <p class="text-xs text-white/80 flex items-center gap-1 group-hover:text-accent transition-colors">Apply Now <i class="ri-arrow-right-line"></i></p>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-20 relative overflow-hidden">
      <!-- Animated Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-light via-primary to-[#081C3A] z-0"></div>
      
      <!-- Floating Shapes -->
      <div class="absolute top-0 right-10 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] animate-float"></div>
      <div class="absolute bottom-10 left-10 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-float" style="animation-delay: 2s;"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto bg-white/10 backdrop-blur-2xl rounded-[32px] p-10 md:p-16 border border-white/20 shadow-2xl text-center animate-fade-up">
          <div class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6 text-2xl text-white">
            <i class="ri-mail-send-fill"></i>
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Never Miss an Update</h2>
          <p class="text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Subscribe to receive institute news, exam updates, computer education tips, career guidance, and the latest blog articles directly in your inbox.
          </p>
          
          <form class="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" placeholder="Enter Your Email Address" required class="w-full md:flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-white/20 transition-all text-sm font-medium">
            <button type="submit" class="px-8 py-4 rounded-full bg-accent text-white font-bold hover:bg-yellow-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 magnetic-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-900 text-white relative">
      <div class="container mx-auto px-6 text-center animate-fade-up">
        <h2 class="text-3xl font-bold mb-6">Start Your Learning Journey Today</h2>
        <p class="text-gray-400 max-w-2xl mx-auto mb-10">Join thousands of students building successful careers with industry-focused computer education, expert trainers, certifications, and placement support.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="courses.html" class="px-8 py-4 bg-primary rounded-full font-bold hover:bg-primary-light transition-all duration-300">Explore Courses</a>
          <a href="contact.html" class="px-8 py-4 border border-gray-600 rounded-full font-bold hover:border-white transition-all duration-300">Contact Us</a>
          <a href="online-admission.html" class="px-8 py-4 bg-accent rounded-full font-bold hover:bg-yellow-500 text-white transition-all duration-300">Apply Now</a>
        </div>
      </div>
    </section>

    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const searchInput = document.getElementById('searchInput');
        const categorySelect = document.getElementById('categorySelect');
        const sortSelect = document.getElementById('sortSelect');
        const readTimeSelect = document.getElementById('readTimeSelect');
        const blogGrid = document.getElementById('blogGrid');
        const posts = Array.from(document.querySelectorAll('.blog-post-card'));
        const categoryFilterBtns = document.querySelectorAll('.category-filter-btn');
        const tagFilterBtns = document.querySelectorAll('.tag-filter-btn');

        let activeCategory = 'all';
        let activeTag = '';

        function filterPosts() {
          const query = searchInput.value.toLowerCase().trim();
          const category = activeCategory;
          const readTime = readTimeSelect.value;
          const tag = activeTag.toLowerCase();

          posts.forEach(post => {
            const title = post.getAttribute('data-title');
            const excerpt = post.getAttribute('data-excerpt');
            const postCategory = post.getAttribute('data-category');
            const postReadtimeStr = post.getAttribute('data-readtime');
            const readTimeMinutes = parseInt(postReadtimeStr) || 0;

            const matchesSearch = !query || title.includes(query) || excerpt.includes(query);
            const matchesCategory = category === 'all' || postCategory === category;
            const matchesTag = !tag || title.includes(tag) || excerpt.includes(tag) || postCategory.toLowerCase().includes(tag);
            
            let matchesReadTime = true;
            if (readTime === 'short') {
              matchesReadTime = readTimeMinutes < 5;
            } else if (readTime === 'long') {
              matchesReadTime = readTimeMinutes >= 5;
            }

            if (matchesSearch && matchesCategory && matchesTag && matchesReadTime) {
              post.style.display = '';
            } else {
              post.style.display = 'none';
            }
          });
        }

        searchInput.addEventListener('input', () => {
          activeTag = '';
          tagFilterBtns.forEach(b => b.classList.remove('bg-primary', 'text-white'));
          filterPosts();
        });

        categorySelect.addEventListener('change', () => {
          activeCategory = categorySelect.value;
          filterPosts();
        });

        readTimeSelect.addEventListener('change', filterPosts);

        categoryFilterBtns.forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = btn.getAttribute('data-category');
            activeCategory = cat;
            categorySelect.value = cat;
            filterPosts();
          });
        });

        tagFilterBtns.forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            const tag = btn.getAttribute('data-tag');
            if (activeTag === tag) {
              activeTag = '';
              btn.classList.remove('bg-primary', 'text-white');
            } else {
              tagFilterBtns.forEach(b => b.classList.remove('bg-primary', 'text-white'));
              activeTag = tag;
              btn.classList.add('bg-primary', 'text-white');
            }
            filterPosts();
          });
        });
      });
    </script>
`;

let finalHtml = layout.replace('{{CONTENT}}', blogContent);
fs.writeFileSync('blog.html', finalHtml);
console.log('blog.html successfully created!');
