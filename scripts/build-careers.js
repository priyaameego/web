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
    <section class="relative h-[300px] flex items-center justify-center overflow-hidden">
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

        <div class="flex items-center justify-center gap-2 text-sm font-medium text-gray-400 mb-12">
          <a href="index.html" class="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span class="text-accent">Careers</span>
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
              '<div class="flex flex-col xl:flex-row gap-3 mt-auto pt-6 border-t border-gray-100">' +
                '<button class="w-full xl:flex-1 py-3 bg-[#0B1F3A] text-white font-bold rounded-xl hover:bg-[#1E293B] hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-300">Apply Now</button>' +
                '<button class="w-full xl:flex-1 py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-50 hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-300 border border-gray-200">View Role</button>' +
              '</div>' +
            '</div>'
          ).join('')}
        </div>
        
        <div class="mt-16 text-center animate-fade-up">
          <button class="px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors shadow-lg">Load More Jobs</button>
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
