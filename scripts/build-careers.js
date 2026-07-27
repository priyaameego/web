const fs = require('fs');

const layout = fs.readFileSync('src/layout.html', 'utf8');

const jobs = [
  // Existing
  { title: "Website Developer", type: "Full-time", loc: "Varanasi", desc: "this is test message", req: "1-2 Years", mode: "On Campus", skill: "HTML, CSS, JS" },
  { title: "Computer Operator", type: "Full-time", loc: "On Campus", desc: "We are looking for a reliable Computer Operator to support day-to-day centre operations, printing, data entry, and student front-desk assistance.", req: "Fresher/1 Year", mode: "On Campus", skill: "MS Office, Typing" },
  { title: "Computer Trainer", type: "Full-time", loc: "On Campus", desc: "Deliver theory and practical instruction for diploma and certificate programmes while mentoring students and supporting classroom activities.", req: "2+ Years", mode: "On Campus", skill: "Teaching, IT Skills" },
  { title: "Computer Data Entry", type: "Part-time", loc: "On Campus · Hybrid Optional", desc: "Support admissions and academic departments by maintaining accurate student records and examination data.", req: "1 Year", mode: "Hybrid", skill: "Data Entry, Excel" },
  { title: "Computer Typing Trainer", type: "Part-time", loc: "On Campus", desc: "Teach Hindi and English typing courses while helping students improve speed and accuracy.", req: "1+ Year", mode: "On Campus", skill: "English/Hindi Typing" },
  { title: "Front Office Executive", type: "Full-time", loc: "On Campus", desc: "Handle visitor management, admissions enquiries, phone calls, student support, and daily front-office operations.", req: "1-3 Years", mode: "On Campus", skill: "Communication, CRM" },
  { title: "IT Support Assistant", type: "Contract", loc: "On Campus", desc: "Maintain computer labs, networking, printers, projectors, antivirus systems, and technical infrastructure.", req: "2+ Years", mode: "On Campus", skill: "Hardware, Networking" },
  { title: "Digital Marketing Assistant", type: "Part-time", loc: "Remote · On Campus", desc: "Manage social media, local SEO, website updates, digital campaigns, lead generation, and online branding.", req: "1-2 Years", mode: "Remote/Hybrid", skill: "SEO, Social Media" },
  
  // New
  { title: "Academic Counselor", type: "Full-time", loc: "On Campus", desc: "Help students choose the right courses, guide admissions, and provide career counseling.", req: "2-5 Years", mode: "On Campus", skill: "Counseling, Sales" },
  { title: "Admission Executive", type: "Full-time", loc: "On Campus", desc: "Manage admission enquiries, documentation, student registration, and follow-up.", req: "1-3 Years", mode: "On Campus", skill: "Sales, Communication" },
  { title: "Graphic Designer", type: "Full-time", loc: "On Campus", desc: "Design posters, certificates, banners, social media creatives, and institute branding materials.", req: "2+ Years", mode: "On Campus", skill: "Photoshop, Illustrator" },
  { title: "Video Editor", type: "Full-time", loc: "On Campus", desc: "Create promotional videos, event highlights, classroom tutorials, and YouTube content.", req: "2+ Years", mode: "On Campus", skill: "Premiere Pro, After Effects" },
  { title: "Web Designer", type: "Full-time", loc: "On Campus", desc: "Design responsive websites, landing pages, UI components, and institute web portals.", req: "3+ Years", mode: "On Campus", skill: "Figma, UI/UX, Tailwind" },
  { title: "Python Trainer", type: "Full-time", loc: "On Campus", desc: "Teach Python programming, automation, AI fundamentals, and project-based learning.", req: "3+ Years", mode: "On Campus", skill: "Python, Django, AI" },
  { title: "Full Stack Developer", type: "Full-time", loc: "On Campus", desc: "Train students in MERN Stack, APIs, databases, deployment, and real-world projects.", req: "4+ Years", mode: "On Campus", skill: "MERN, Node.js, React" },
  { title: "Tally & Accounting Trainer", type: "Full-time", loc: "On Campus", desc: "Teach Tally Prime, GST, payroll, taxation, and practical accounting concepts.", req: "3+ Years", mode: "On Campus", skill: "Tally Prime, GST" },
  { title: "Networking Trainer", type: "Full-time", loc: "On Campus", desc: "Deliver practical networking classes covering CCNA, hardware, LAN, routers, and troubleshooting.", req: "3+ Years", mode: "On Campus", skill: "CCNA, Networking" },
  { title: "Office Administrator", type: "Full-time", loc: "On Campus", desc: "Oversee daily institute operations, staff coordination, scheduling, inventory, and documentation.", req: "5+ Years", mode: "On Campus", skill: "Administration, Management" }
];

const careersContent = `
    <!-- Cinematic Hero Section -->
    <section class="relative h-[650px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
             alt="Team Collaboration" 
             class="w-full h-full object-cover animate-ken-burns opacity-60">
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-[#081C3A]/95 via-[#081C3A]/80 to-[#081C3A] z-10 mix-blend-multiply"></div>
      
      <!-- Floating Particles & Light rays -->
      <div class="absolute inset-0 z-10 opacity-30 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>

      <div class="container mx-auto px-6 relative z-20 text-center animate-fade-up">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-6 shadow-premium">
          💼 Join Our Team
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-2xl">
          Build Your Career With <span class="text-accent">InstituteHub</span>
        </h1>
        
        <p class="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
          Become a part of our growing team and help shape the future of computer education. We are looking for passionate educators, developers, IT professionals, and support staff dedicated to empowering students through quality learning.
        </p>

        <div class="flex items-center justify-center gap-2 text-sm font-medium text-gray-400 mb-12">
          <a href="index.html" class="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span class="text-accent">Careers</span>
        </div>
        
        <div class="animate-bounce inline-block text-white/50">
          <i class="ri-arrow-down-line text-2xl"></i>
        </div>
      </div>
    </section>

    <!-- Career Statistics -->
    <section class="py-12 bg-[#081C3A] relative z-30 border-b border-white/10">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <div class="text-4xl font-bold text-accent mb-2">10+</div>
            <div class="text-sm font-bold text-gray-300 uppercase tracking-wider">Open Positions</div>
          </div>
          <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <div class="text-4xl font-bold text-accent mb-2">150+</div>
            <div class="text-sm font-bold text-gray-300 uppercase tracking-wider">Team Members</div>
          </div>
          <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <div class="text-4xl font-bold text-accent mb-2">20K+</div>
            <div class="text-sm font-bold text-gray-300 uppercase tracking-wider">Students Trained</div>
          </div>
          <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <div class="text-4xl font-bold text-accent mb-2">25+</div>
            <div class="text-sm font-bold text-gray-300 uppercase tracking-wider">Years Excellence</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Search Section (Sticky) -->
    <div class="sticky top-[72px] z-40 py-6 animate-fade-up">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-[28px] shadow-premium p-4 flex flex-col md:flex-row gap-4 items-center">
          <div class="relative w-full md:flex-1 group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <i class="ri-search-line"></i>
            </div>
            <input type="text" placeholder="Search by Job Title..." class="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-transparent rounded-2xl text-sm focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium">
          </div>
          <div class="relative w-full md:w-64 group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <i class="ri-map-pin-line"></i>
            </div>
            <input type="text" placeholder="Location..." class="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-transparent rounded-2xl text-sm focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium">
          </div>
          <select class="w-full md:w-48 bg-gray-50/50 border border-transparent rounded-2xl px-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-primary cursor-pointer font-medium text-gray-600">
            <option>All Types</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </select>
          <select class="w-full md:w-48 bg-gray-50/50 border border-transparent rounded-2xl px-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-primary cursor-pointer font-medium text-gray-600">
            <option>All Departments</option>
            <option>Academics</option>
            <option>IT & Tech</option>
            <option>Administration</option>
          </select>
          <button class="w-full md:w-auto px-8 py-3 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light transition-colors shadow-md">Search</button>
        </div>
      </div>
    </div>

    <!-- Why Join InstituteHub -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Join <span class="text-primary">InstituteHub?</span></h2>
          <p class="text-gray-600 text-lg">We offer a dynamic, supportive, and growth-oriented environment where your contributions make a real impact.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${[
            {i: "ri-line-chart-line", t: "Career Growth", d: "Continuous learning, promotions, and leadership opportunities."},
            {i: "ri-group-line", t: "Friendly Work Culture", d: "Supportive team environment with collaborative learning."},
            {i: "ri-macbook-line", t: "Skill Development", d: "Regular workshops, certifications, and technical training."},
            {i: "ri-building-4-line", t: "Modern Infrastructure", d: "Well-equipped computer labs and digital classrooms."},
            {i: "ri-home-wifi-line", t: "Flexible Work", d: "Hybrid and remote opportunities for selected roles."},
            {i: "ri-medal-line", t: "Recognition & Rewards", d: "Performance-based appreciation and employee recognition."}
          ].map((f, index) => 
            '<div class="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-premium hover:-translate-y-2 transition-all duration-300 group animate-fade-up" style="animation-delay: ' + (index*0.1) + 's;">' +
              '<div class="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">' +
                '<i class="' + f.i + '"></i>' +
              '</div>' +
              '<h3 class="text-xl font-bold text-gray-900 mb-3">' + f.t + '</h3>' +
              '<p class="text-gray-600">' + f.d + '</p>' +
            '</div>'
          ).join('')}
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="py-24 bg-white relative">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8 animate-fade-up">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Current <span class="text-primary">Open Positions</span></h2>
            <p class="text-gray-600 text-lg">Find the perfect role to match your skills and aspirations.</p>
          </div>
          <div class="mt-6 md:mt-0">
            <span class="px-4 py-2 bg-gray-100 text-gray-700 font-bold rounded-full text-sm">Showing 18 Jobs</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${jobs.map((job, index) => 
            '<div class="bg-white rounded-[32px] p-8 border border-gray-200 shadow-sm hover:shadow-premium hover:border-primary/30 transition-all duration-500 group relative flex flex-col h-full animate-fade-up" style="animation-delay: ' + ((index%3)*0.1) + 's;">' +
              '<div class="absolute top-8 right-8 w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">' +
                '<i class="ri-arrow-right-up-line text-xl"></i>' +
              '</div>' +
              '<div class="mb-6">' +
                '<span class="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-bold rounded-full mb-4">' + job.type + '</span>' +
                '<h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors pr-12">' + job.title + '</h3>' +
                '<div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">' +
                  '<span class="flex items-center gap-1"><i class="ri-map-pin-line text-gray-400"></i> ' + job.loc + '</span>' +
                  '<span class="flex items-center gap-1"><i class="ri-briefcase-line text-gray-400"></i> ' + job.req + '</span>' +
                '</div>' +
              '</div>' +
              '<p class="text-gray-600 text-sm mb-8 flex-grow leading-relaxed">' + job.desc + '</p>' +
              '<div class="mb-8">' +
                '<p class="text-xs font-bold text-gray-900 mb-3 uppercase tracking-wider">Skills Required</p>' +
                '<div class="flex flex-wrap gap-2">' +
                  job.skill.split(', ').map(s => '<span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium">' + s + '</span>').join('') +
                '</div>' +
              '</div>' +
              '<div class="flex gap-4 mt-auto pt-6 border-t border-gray-100">' +
                '<button class="flex-1 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors shadow-md">Apply Now</button>' +
                '<button class="flex-1 py-3 bg-gray-50 text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-colors border border-gray-200">View Role</button>' +
              '</div>' +
            '</div>'
          ).join('')}
        </div>
        
        <div class="mt-16 text-center animate-fade-up">
          <button class="px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors shadow-lg">Load More Jobs</button>
        </div>
      </div>
    </section>

    <!-- Recruitment Process -->
    <section class="py-24 bg-[#081C3A] text-white overflow-hidden">
      <div class="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div class="text-center mb-16 animate-fade-up">
          <h2 class="text-4xl font-bold mb-4">Our Hiring <span class="text-accent">Process</span></h2>
          <p class="text-gray-400 text-lg">A simple and transparent process to get you onboard.</p>
        </div>
        
        <div class="relative animate-fade-up" style="animation-delay: 0.2s;">
          <!-- Line -->
          <div class="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
            ${[
              {n: "1", t: "Apply Online", i: "ri-file-text-line"},
              {n: "2", t: "Review", i: "ri-search-eye-line"},
              {n: "3", t: "Interview", i: "ri-user-voice-line"},
              {n: "4", t: "Assessment", i: "ri-code-box-line"},
              {n: "5", t: "Offer Letter", i: "ri-mail-send-line"},
              {n: "6", t: "Welcome", i: "ri-shake-hands-line"}
            ].map(s => 
              '<div class="flex flex-col items-center text-center group">' +
                '<div class="w-16 h-16 rounded-full bg-[#081C3A] border-4 border-white/20 flex items-center justify-center text-2xl text-gray-400 group-hover:border-accent group-hover:text-accent group-hover:scale-110 transition-all duration-300 shadow-xl mb-4 relative">' +
                  '<i class="' + s.i + '"></i>' +
                  '<div class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-[#081C3A] text-xs font-bold flex items-center justify-center shadow-lg">' + s.n + '</div>' +
                '</div>' +
                '<h4 class="font-bold text-sm text-gray-200 group-hover:text-white transition-colors">' + s.t + '</h4>' +
              '</div>'
            ).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Life at InstituteHub (Masonry) -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Life at <span class="text-primary">InstituteHub</span></h2>
          <p class="text-gray-600 text-lg">Experience a vibrant workplace culture filled with learning, collaboration, and celebrations.</p>
        </div>

        <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          ${[
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80",
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80",
            "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80",
            "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80"
          ].map(img => 
            '<div class="break-inside-avoid rounded-2xl overflow-hidden group relative cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-up">' +
              '<img src="' + img + '&w=600&auto=format&fit=crop" class="w-full object-cover group-hover:scale-105 transition-transform duration-700">' +
              '<div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">' +
                '<i class="ri-instagram-line text-4xl text-white"></i>' +
              '</div>' +
            '</div>'
          ).join('')}
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-12 max-w-3xl">
        <div class="text-center mb-12 animate-fade-up">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>
        <div class="space-y-4">
          ${[
            "How do I apply?", "Can freshers apply?", "Are internships available?", "Is remote work available?", "What documents are required?", "How long does the hiring process take?"
          ].map(q => 
            '<div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm animate-fade-up">' +
              '<button class="w-full px-6 py-5 text-left font-bold text-gray-900 flex justify-between items-center hover:text-primary transition-colors focus:outline-none">' +
                q + ' <i class="ri-add-line text-xl"></i>' +
              '</button>' +
            '</div>'
          ).join('')}
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-light via-primary to-[#081C3A] z-0"></div>
      <div class="absolute top-0 right-10 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] animate-float"></div>
      
      <div class="container mx-auto px-6 relative z-10 text-center animate-fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
        <p class="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          We're always looking for talented educators, developers, designers, marketers, and support professionals who are passionate about shaping the future of digital education.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <button class="px-8 py-4 bg-accent text-[#081C3A] rounded-full font-bold hover:bg-yellow-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">Apply Now</button>
          <button class="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 text-white rounded-full font-bold hover:bg-white/20 hover:border-white/40 transition-all duration-300">Explore Open Roles</button>
        </div>
      </div>
    </section>
`;

let finalHtml = layout.replace('{{CONTENT}}', careersContent);
fs.writeFileSync('career.html', finalHtml);
console.log('career.html successfully created!');
