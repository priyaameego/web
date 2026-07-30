const fs = require('fs');

const layout = fs.readFileSync('src/layout.html', 'utf8');

const pages = {};

// ==========================================
// 1. News Page
// ==========================================
pages['news.html'] = `
    <section class="relative h-[300px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover animate-ken-burns">
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-[#081C3A]/90 via-[#081C3A]/80 to-[#081C3A] z-10 mix-blend-multiply"></div>
      <div class="absolute inset-0 z-10 opacity-30 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>
      
      <div class="container mx-auto px-6 relative z-20 text-center animate-fade-up">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-6 shadow-premium">
          <i class="ri-newspaper-fill text-accent"></i> News & Announcements
        </div>
        <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">Latest News & <span class="text-accent">Announcements</span></h1>
        <div class="flex items-center justify-center gap-2 text-sm font-medium text-gray-400">
          <a href="index.html" class="hover:text-white transition-colors">Home</a> <span>/</span> <span class="text-accent">News</span>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50 relative z-30">
      <div class="container mx-auto px-6 lg:px-12">
        <!-- Featured News -->
        <div class="mb-16 animate-fade-up border border-gray-100 rounded-[32px] overflow-hidden bg-white shadow-premium flex flex-col lg:flex-row group cursor-pointer hover:shadow-2xl transition-all duration-500">
          <div class="lg:w-1/2 relative h-72 lg:h-auto overflow-hidden">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
            <div class="absolute top-6 left-6">
              <span class="px-4 py-2 bg-white/20 backdrop-blur-md text-white border border-white/40 font-bold rounded-full text-sm shadow-lg">Featured • Institute Updates</span>
            </div>
          </div>
          <div class="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors">Convocation Ceremony 2026: Celebrating Our Graduates</h2>
            <p class="text-gray-600 mb-8 leading-relaxed">The annual convocation ceremony will be held this Saturday. All passed students are invited to receive their certificates and join the grand celebration...</p>
            <div class="flex items-center justify-between mt-auto">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">WI</div>
                <div><h4 class="font-bold text-sm">Webcodian Institute</h4><p class="text-xs text-gray-500">24 May 2026</p></div>
              </div>
              <button class="text-primary font-bold hover:text-primary-light transition-colors flex items-center gap-2">Read More <i class="ri-arrow-right-line"></i></button>
            </div>
          </div>
        </div>

        <!-- News Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${[
            {t: "Admissions Open for Winter Batch", c: "Admission Updates", d: "20 May 2026", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80"},
            {t: "TCS & Infosys Mega Placement Drive", c: "Placement News", d: "18 May 2026", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80"},
            {t: "Final Online Exam Schedule Released", c: "Exam Notices", d: "15 May 2026", img: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80"}
          ].map((n, i) => 
            '<article class="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-premium hover:-translate-y-2 transition-all duration-500 border border-gray-100 group animate-fade-up" style="animation-delay: ' + (i*0.1) + 's;">' +
              '<div class="relative h-56 overflow-hidden">' +
                '<img src="' + n.img + '&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">' +
                '<div class="absolute top-4 left-4"><span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full shadow-sm">' + n.c + '</span></div>' +
              '</div>' +
              '<div class="p-6">' +
                '<span class="text-xs font-bold text-gray-400 mb-2 block">' + n.d + '</span>' +
                '<h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">' + n.t + '</h3>' +
                '<p class="text-gray-500 text-sm mb-6 line-clamp-2">Stay informed about the latest developments and important updates from our administration office.</p>' +
                '<button class="text-primary font-bold text-sm hover:text-primary-light transition-colors flex items-center gap-2">Read More <i class="ri-arrow-right-line"></i></button>' +
              '</div>' +
            '</article>'
          ).join('')}
        </div>
      </div>
    </section>
`;

// ==========================================
// 2. Photo Gallery Page
// ==========================================
pages['photo-gallery.html'] = `
    <section class="relative h-[300px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0 grid grid-cols-3 gap-1 opacity-40">
        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover">
        <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover">
        <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover">
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-[#081C3A]/95 via-[#081C3A]/80 to-[#081C3A] z-10 mix-blend-multiply"></div>
      <div class="container mx-auto px-6 relative z-20 text-center animate-fade-up">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-6 shadow-premium">
          <i class="ri-camera-lens-fill text-accent"></i> Photography
        </div>
        <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">Campus Photo <span class="text-accent">Gallery</span></h1>
        <div class="flex gap-2 justify-center flex-wrap">
          <button class="filter-btn px-4 py-2 bg-primary text-white rounded-full text-sm font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer" data-filter="all">All Photos</button>
          <button class="filter-btn px-4 py-2 bg-white/10 text-white rounded-full text-sm font-bold hover:bg-white/20 transition-all cursor-pointer" data-filter="Campus">Campus</button>
          <button class="filter-btn px-4 py-2 bg-white/10 text-white rounded-full text-sm font-bold hover:bg-white/20 transition-all cursor-pointer" data-filter="Events">Events</button>
          <button class="filter-btn px-4 py-2 bg-white/10 text-white rounded-full text-sm font-bold hover:bg-white/20 transition-all cursor-pointer" data-filter="Placements">Placements</button>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <!-- Masonry Grid -->
        <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          ${[
            {url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80", category: "Campus"},
            {url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80", category: "Events"},
            {url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80", category: "Placements"},
            {url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80", category: "Campus"},
            {url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80", category: "Events"},
            {url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80", category: "Campus"},
            {url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80", category: "Placements"},
            {url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80", category: "Events"}
          ].map(img => 
            '<div data-category="' + img.category + '" class="photo-card break-inside-avoid rounded-2xl overflow-hidden group relative cursor-pointer shadow-lg animate-fade-up">' +
              '<img src="' + img.url + '&w=600&auto=format&fit=crop" class="w-full object-cover">' +
              '<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">' +
                '<span class="text-accent text-xs font-bold uppercase tracking-wider mb-1">' + img.category + '</span>' +
                '<div class="flex justify-between items-center">' +
                  '<button class="w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center hover:bg-primary transition-colors"><i class="ri-zoom-in-line"></i></button>' +
                  '<button class="w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center hover:bg-primary transition-colors"><i class="ri-download-line"></i></button>' +
                '</div>' +
              '</div>' +
            '</div>'
          ).join('')}
        </div>
      </div>
    </section>

    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const buttons = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.photo-card');

        buttons.forEach(btn => {
          btn.addEventListener('click', () => {
            buttons.forEach(b => {
              b.classList.remove('bg-primary', 'text-white');
              b.classList.add('bg-white/10', 'text-white');
            });
            btn.classList.add('bg-primary', 'text-white');
            btn.classList.remove('bg-white/10');

            const filter = btn.getAttribute('data-filter');
            cards.forEach(card => {
              if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = '';
              } else {
                card.style.display = 'none';
              }
            });
          });
        });
      });
    </script>

`;

// ==========================================
// 3. Video Gallery Page
// ==========================================
pages['video.html'] = `
    <section class="relative h-[300px] flex items-center justify-center overflow-hidden bg-black">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop" class="w-full h-full object-cover opacity-50 animate-ken-burns">
      </div>
      <div class="container mx-auto px-6 relative z-20 text-center animate-fade-up">
        <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">Video <span class="text-accent">Gallery</span></h1>
      </div>
    </section>

    <section class="py-24 bg-gray-900">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${[1,2,3,4,5,6].map(i => 
            '<div class="bg-gray-800 rounded-3xl overflow-hidden group cursor-pointer border border-gray-700 hover:border-primary transition-colors">' +
              '<div class="relative h-64 overflow-hidden">' +
                '<img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100">' +
                '<div class="absolute inset-0 flex items-center justify-center">' +
                  '<div class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center text-2xl group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg">' +
                    '<i class="ri-play-fill ml-1"></i>' +
                  '</div>' +
                '</div>' +
                '<div class="absolute bottom-4 right-4"><span class="px-2 py-1 bg-black/80 text-white text-xs font-bold rounded">10:45</span></div>' +
                '<div class="absolute top-4 left-4"><span class="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">Campus Tour</span></div>' +
              '</div>' +
              '<div class="p-6">' +
                '<h3 class="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors line-clamp-2">Inside InstituteHub: A Complete Campus Tour 2026</h3>' +
                '<div class="flex items-center gap-4 text-sm text-gray-400">' +
                  '<span><i class="ri-eye-line"></i> 12K Views</span>' +
                  '<span><i class="ri-calendar-line"></i> 1 Month Ago</span>' +
                '</div>' +
              '</div>' +
            '</div>'
          ).join('')}
        </div>
      </div>
    </section>
`;

// ==========================================
// 4. Events Page
// ==========================================
pages['events.html'] = `
    <section class="relative h-[300px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover animate-ken-burns">
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-[#081C3A]/90 via-[#081C3A]/70 to-[#081C3A] z-10 mix-blend-multiply"></div>
      <div class="container mx-auto px-6 relative z-20 text-center animate-fade-up">
        <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">Upcoming & Past <span class="text-accent">Events</span></h1>
      </div>
    </section>

    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-12 max-w-6xl">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Event Timeline</h2>
        
        <div class="space-y-8">
          ${[
            {m: "May", d: "25", t: "National Level Code Hackathon 2026", l: "Main Campus, IT Lab 1"},
            {m: "Jun", d: "10", t: "AI & Machine Learning Seminar", l: "Auditorium"},
            {m: "Jun", d: "22", t: "Annual Convocation Ceremony", l: "Grand Hall"}
          ].map(e => 
            '<div class="bg-white rounded-[32px] p-6 lg:p-10 shadow-premium border border-gray-100 flex flex-col md:flex-row gap-8 items-center hover:-translate-y-2 transition-all duration-300">' +
              '<div class="w-24 h-24 shrink-0 rounded-2xl bg-primary/10 border border-primary/20 flex flex-col items-center justify-center text-primary">' +
                '<span class="text-sm font-bold uppercase tracking-widest">' + e.m + '</span>' +
                '<span class="text-3xl font-bold leading-none">' + e.d + '</span>' +
              '</div>' +
              '<div class="flex-grow text-center md:text-left">' +
                '<div class="inline-block px-3 py-1 bg-accent/20 text-yellow-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Upcoming</div>' +
                '<h3 class="text-2xl font-bold text-gray-900 mb-2 hover:text-primary transition-colors cursor-pointer">' + e.t + '</h3>' +
                '<p class="text-gray-500 flex items-center justify-center md:justify-start gap-2"><i class="ri-map-pin-line text-primary"></i> ' + e.l + '</p>' +
              '</div>' +
              '<div class="shrink-0 w-full md:w-auto text-center">' +
                '<button class="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-light transition-colors shadow-lg shadow-primary/30 w-full">Register Now</button>' +
              '</div>' +
            '</div>'
          ).join('')}
        </div>
      </div>
    </section>
`;

// ==========================================
// 5. Download Page
// ==========================================
pages['download.html'] = `
    <section class="relative py-16 bg-gradient-to-br from-[#081C3A] to-primary overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>
      <div class="container mx-auto px-6 relative z-10 text-center animate-fade-up">
        <h1 class="text-5xl font-bold text-white mb-6">Download Center</h1>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-12 max-w-6xl">
        
        <!-- Search and Filters for Downloads -->
        <div class="mb-12 flex flex-col sm:flex-row gap-4 items-center justify-between animate-fade-up">
          <div class="relative w-full sm:w-80 group">
            <i class="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"></i>
            <input type="text" id="downloadSearch" placeholder="Search documents..." class="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm">
          </div>
          <div class="flex gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 hide-scrollbar">
            <button class="dl-filter-btn px-4 py-2 bg-primary text-white rounded-full text-xs font-bold shadow-sm cursor-pointer" data-filter="all">All Documents</button>
            <button class="dl-filter-btn px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-full text-xs font-bold hover:bg-gray-50 transition-all cursor-pointer" data-filter="syllabus">Syllabus</button>
            <button class="dl-filter-btn px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-full text-xs font-bold hover:bg-gray-50 transition-all cursor-pointer" data-filter="form">Forms</button>
            <button class="dl-filter-btn px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-full text-xs font-bold hover:bg-gray-50 transition-all cursor-pointer" data-filter="calendar">Calendar</button>
            <button class="dl-filter-btn px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-full text-xs font-bold hover:bg-gray-50 transition-all cursor-pointer" data-filter="prospectus">Prospectus</button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${[
            {n: "Institute Prospectus 2026", s: "4.5 MB", t: "PDF", cat: "prospectus"},
            {n: "O-Level Syllabus & Guidelines", s: "1.2 MB", t: "PDF", cat: "syllabus"},
            {n: "Admission Registration Form", s: "800 KB", t: "PDF", cat: "form"},
            {n: "CCC Exam Sample Papers", s: "2.1 MB", t: "ZIP", cat: "syllabus"},
            {n: "Academic Calendar 2026-27", s: "1.5 MB", t: "PDF", cat: "calendar"},
            {n: "Franchise Application Form", s: "950 KB", t: "PDF", cat: "form"}
          ].map(d => 
            '<div data-name="' + d.n.toLowerCase() + '" data-category="' + d.cat + '" class="download-item bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex items-center gap-6 group">' +
              '<div class="w-16 h-16 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center text-3xl shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">' +
                '<i class="ri-file-pdf-2-fill"></i>' +
              '</div>' +
              '<div class="flex-grow">' +
                '<h3 class="font-bold text-gray-900 text-lg mb-1 group-hover:text-primary transition-colors">' + d.n + '</h3>' +
                '<p class="text-sm text-gray-500 font-medium">' + d.t + ' Document • ' + d.s + '</p>' +
              '</div>' +
              '<button class="w-12 h-12 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center hover:bg-primary hover:text-white transition-colors shrink-0 border border-gray-200">' +
                '<i class="ri-download-2-line text-lg"></i>' +
              '</button>' +
            '</div>'
          ).join('')}
        </div>
      </div>
    </section>

    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const searchInput = document.getElementById('downloadSearch');
        const buttons = document.querySelectorAll('.dl-filter-btn');
        const items = document.querySelectorAll('.download-item');

        function filterDownloads() {
          const query = searchInput.value.toLowerCase().trim();
          const activeFilter = document.querySelector('.dl-filter-btn.bg-primary').getAttribute('data-filter');

          items.forEach(item => {
            const name = item.getAttribute('data-name');
            const category = item.getAttribute('data-category');

            const matchesSearch = !query || name.includes(query);
            const matchesCategory = activeFilter === 'all' || category === activeFilter;

            if (matchesSearch && matchesCategory) {
              item.style.display = 'flex';
            } else {
              item.style.display = 'none';
            }
          });
        }

        if (searchInput) {
          searchInput.addEventListener('input', filterDownloads);
        }

        buttons.forEach(btn => {
          btn.addEventListener('click', () => {
            buttons.forEach(b => {
              b.classList.remove('bg-primary', 'text-white');
              b.classList.add('bg-white', 'border', 'border-gray-200', 'text-gray-600');
            });
            btn.classList.add('bg-primary', 'text-white');
            btn.classList.remove('bg-white', 'border', 'border-gray-200', 'text-gray-600');
            filterDownloads();
          });
        });
      });
    </script>
`;

// ==========================================
// 6. Online Payment Page
// ==========================================
pages['online-payment.html'] = `
    <section class="relative pt-20 pb-16 bg-gradient-to-br from-[#081C3A] via-primary to-primary-light overflow-hidden">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"></div>
      <div class="container mx-auto px-6 relative z-10 text-center animate-fade-up">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Secure Online Fee Payment</h1>
      </div>
    </section>

    <section class="py-20 bg-gray-50 -mt-10 relative z-20">
      <div class="container mx-auto px-6 lg:px-12 max-w-4xl animate-fade-up" style="animation-delay: 0.2s;">
        <div class="bg-white rounded-[32px] shadow-2xl border border-gray-100 p-8 md:p-12">
          
          <!-- Steps -->
          <div class="flex justify-between items-center mb-12 border-b border-gray-100 pb-8 relative">
            <div class="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 -z-10"></div>
            <div class="flex flex-col items-center gap-2 bg-white px-2">
              <div class="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-md">1</div>
              <span class="text-xs font-bold text-primary">Student</span>
            </div>
            <div class="flex flex-col items-center gap-2 bg-white px-2">
              <div class="w-10 h-10 rounded-full bg-gray-100 text-gray-400 font-bold flex items-center justify-center">2</div>
              <span class="text-xs font-bold text-gray-400">Course</span>
            </div>
            <div class="flex flex-col items-center gap-2 bg-white px-2">
              <div class="w-10 h-10 rounded-full bg-gray-100 text-gray-400 font-bold flex items-center justify-center">3</div>
              <span class="text-xs font-bold text-gray-400">Payment</span>
            </div>
            <div class="flex flex-col items-center gap-2 bg-white px-2">
              <div class="w-10 h-10 rounded-full bg-gray-100 text-gray-400 font-bold flex items-center justify-center">4</div>
              <span class="text-xs font-bold text-gray-400">Receipt</span>
            </div>
          </div>

          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700">Student Name</label>
                <input type="text" class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
              </div>
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700">Enrollment Number</label>
                <input type="text" class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
              </div>
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700">Mobile Number</label>
                <input type="tel" class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
              </div>
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700">Course</label>
                <select class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                  <option>Select Course</option>
                  <option>Web Development</option>
                  <option>O-Level</option>
                </select>
              </div>
            </div>
            
            <div class="space-y-2 mt-6">
              <label class="text-sm font-bold text-gray-700">Amount (₹)</label>
              <div class="relative">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold font-sans">₹</span>
                <input type="number" class="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-10 pr-4 py-4 text-lg font-bold text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="0.00">
              </div>
            </div>

            <div class="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-between">
              <div class="flex items-center gap-4">
                <i class="ri-shield-check-fill text-3xl text-green-500"></i>
                <div>
                  <h4 class="font-bold text-gray-900">100% Secure Payment</h4>
                  <p class="text-xs text-gray-500">256-bit SSL encryption. We accept UPI, Visa, MasterCard & Rupay.</p>
                </div>
              </div>
            </div>

            <button type="submit" class="w-full py-4 mt-8 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Proceed to Pay
            </button>
          </form>

        </div>
      </div>
    </section>
`;

Object.keys(pages).forEach(filename => {
  let finalHtml = layout.replace('{{CONTENT}}', pages[filename]);
  fs.writeFileSync(filename, finalHtml);
  console.log(filename + ' successfully created!');
});
