import json
import os
import re

def build_courses():
    with open('d:/webcodian/courses_data.json', 'r', encoding='utf-8') as f:
        courses = json.load(f)
        
    with open('d:/webcodian/index.html', 'r', encoding='utf-8') as f:
        index_html = f.read()
        
    head_match = re.search(r'(<head>.*?</head>)', index_html, re.DOTALL)
    head_html = head_match.group(1) if head_match else ''
    
    header_match = re.search(r'(<header id="site-header".*?</header>)', index_html, re.DOTALL)
    header_html = header_match.group(1) if header_match else ''
    header_html = header_html.replace('href="', 'href="../').replace('src="', 'src="../')
    header_html = header_html.replace('href="../tel:', 'href="tel:').replace('href="../mailto:', 'href="mailto:')
    header_html = header_html.replace('href="../javascript:', 'href="javascript:').replace('src="../http', 'src="http')
    
    footer_match = re.search(r'(<footer.*?</footer>)', index_html, re.DOTALL)
    footer_html = footer_match.group(1) if footer_match else ''
    footer_html = footer_html.replace('href="', 'href="../').replace('src="', 'src="../')
    footer_html = footer_html.replace('href="../tel:', 'href="tel:').replace('href="../mailto:', 'href="mailto:')
    footer_html = footer_html.replace('src="../http', 'src="http')
    
    head_html = head_html.replace('href="./dist', 'href="../dist')
    
    for course in courses:
        slug = course['slug']
        title = course['title']
        category = course['category']
        price = course['price']
        old_price = course['old_price']
        image = course['image']
        duration = course['duration']
        
        content = f"""
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
{head_html}
<body class="bg-white text-gray-900 font-sans selection:bg-primary selection:text-white antialiased overflow-x-hidden">
  {header_html}

  <main class="pt-[140px] lg:pt-[160px]">
    
    <!-- Premium Light Hero Section -->
    <section class="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/50 py-20 lg:py-28 border-b border-gray-200 overflow-hidden">
      <!-- Sophisticated Background patterns -->
      <div class="absolute inset-0 z-0 opacity-[0.03]" style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 32px 32px;"></div>
      
      <!-- Premium glowing orbs -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-100/40 to-purple-100/40 blur-3xl z-0 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-100/30 to-orange-50/30 blur-3xl z-0 pointer-events-none"></div>

      <div class="container mx-auto px-6 lg:px-12 relative z-10">
        <div class="w-full lg:w-3/4">
          
          <!-- Breadcrumb Fixed & Styled inside a pill -->
          <div class="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-8 font-medium bg-white/60 backdrop-blur-md border border-gray-200/60 inline-flex px-4 py-2 rounded-full shadow-sm">
            <a href="../index.html" class="hover:text-primary transition-colors flex items-center gap-1"><i class="ri-home-4-line"></i> Home</a>
            <i class="ri-arrow-right-s-line text-gray-400"></i>
            <a href="../courses.html" class="hover:text-primary transition-colors">Courses</a>
            <i class="ri-arrow-right-s-line text-gray-400"></i>
            <span class="text-primary font-bold">{title}</span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
            {title}
          </h1>
          
          <!-- Premium Badges -->
          <div class="flex flex-wrap items-center gap-4 text-sm font-semibold text-gray-700">
            <div class="flex items-center gap-2 bg-white/80 backdrop-blur border border-gray-200/80 px-4 py-2 rounded-full shadow-sm">
              <i class="ri-verified-badge-fill text-blue-500 text-lg"></i>
              <span>By Webcodian Institute</span>
            </div>
            <div class="flex items-center gap-2 bg-white/80 backdrop-blur border border-gray-200/80 px-4 py-2 rounded-full shadow-sm">
              <i class="ri-global-fill text-indigo-500 text-lg"></i>
              <span>{category}</span>
            </div>
            <div class="flex items-center gap-1.5 bg-white/80 backdrop-blur border border-gray-200/80 px-4 py-2 rounded-full shadow-sm">
              <div class="flex text-yellow-400 text-base">
                <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class=\"ri-star-fill\"></i><i class="ri-star-fill"></i>
              </div>
              <span class="text-slate-900 font-extrabold ml-1">(4.9 Reviews)</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Main Content Area -->
    <section class="container mx-auto px-6 lg:px-12 py-10 relative">
      <div class="flex flex-col lg:flex-row gap-12">
        
        <!-- Left Column -->
        <div class="w-full lg:w-2/3">
          
          <!-- Pill-style Tabs -->
          <div class="bg-gray-50 rounded-xl p-2 mb-8 sticky top-[100px] z-40 border border-gray-100 flex overflow-x-auto hide-scrollbar">
            <a href="#curriculum" class="flex-1 text-center py-3 px-4 rounded-lg font-bold text-gray-900 hover:text-primary transition-colors">Curriculum</a>
            <a href="#overview" class="flex-1 text-center py-3 px-4 rounded-lg font-bold text-gray-900 hover:text-primary transition-colors">Overview</a>
            <a href="#instructor" class="flex-1 text-center py-3 px-4 rounded-lg font-bold text-primary border-b-2 border-primary bg-white shadow-sm transition-colors">Instructor</a>
            <a href="#reviews" class="flex-1 text-center py-3 px-4 rounded-lg font-bold text-gray-900 hover:text-primary transition-colors">Reviews</a>
          </div>

          <!-- Instructor / Overview block as seen in Image 1 -->
          <div class="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm mb-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div class="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div class="w-16 h-16 rounded-xl border border-gray-100 flex items-center justify-center p-2 bg-gray-50 mx-auto sm:mx-0">
                <img src="https://www.institutehub.in/storage/dashboard/branding/brand-strip/JasdHk2McXjAjd2NRBl1qeCzFAR4QWGHuJWiC7Dz.jpg" alt="Logo" class="w-full h-full object-contain">
              </div>
              <div>
                <h3 class="font-bold text-gray-900 text-lg">Webcodian Institute</h3>
                <p class="text-primary text-sm font-medium">Instructor</p>
                <div class="flex justify-center sm:justify-start gap-2 mt-3">
                  <a href="../contact.html" class="px-4 py-1.5 bg-[#4F46E5] text-white text-sm font-bold rounded hover:bg-blue-700 transition-colors">Contact</a>
                  <a href="tel:9794412732" class="px-4 py-1.5 border border-[#4F46E5] text-[#4F46E5] text-sm font-bold rounded hover:bg-blue-50 transition-colors flex items-center gap-1">
                    <i class="ri-phone-line"></i> 9794412732
                  </a>
                </div>
              </div>
            </div>
            
            <div class="flex flex-wrap items-center justify-center md:justify-end gap-4 text-sm font-medium text-gray-500 w-full md:w-auto mt-4 md:mt-0">
              <span class="flex items-center gap-1.5"><i class="ri-book-read-line text-primary"></i> 26 Courses</span>
              <span class="flex items-center gap-1.5"><i class="ri-file-list-line text-primary"></i> 4+ Lessons</span>
              <span class="flex items-center gap-1.5"><i class="ri-time-line text-primary"></i> {duration}</span>
            </div>
          </div>
          
          <div id="overview" class="scroll-mt-40 mb-12">
            <h2 class="text-2xl font-bold mb-4 text-primary">Course Overview</h2>
            <div class="prose prose-lg text-gray-600 max-w-none text-sm leading-relaxed">
              <p>Welcome to the {title} program. This course is meticulously designed for individuals looking to gain deep insights and hands-on experience in {category}. By blending theoretical concepts with practical lab sessions, we ensure our students are industry-ready upon graduation.</p>
            </div>
          </div>

          <div id="curriculum" class="scroll-mt-40 mb-12">
            <h2 class="text-2xl font-bold mb-4 text-primary">Curriculum</h2>
            <div class="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
              <div class="border-b border-gray-100">
                <button class="w-full text-left px-6 py-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('.ri-arrow-down-s-line').classList.toggle('rotate-180')">
                  <span class="font-bold text-gray-900">Module 1: Fundamentals</span>
                  <i class="ri-arrow-down-s-line text-xl text-gray-400 transition-transform"></i>
                </button>
                <div class="hidden">
                  <ul class="flex flex-col text-sm text-gray-600 bg-white">
                    <li class="px-6 py-4 flex justify-between border-t border-gray-50 hover:bg-gray-50">
                      <span class="flex items-center gap-3"><i class="ri-play-circle-line text-primary text-lg"></i> Introduction</span>
                      <span class="text-gray-400">15 mins</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Right Column (Sticky Sidebar) -->
        <div class="w-full lg:w-1/3">
          <div class="sticky top-[100px] z-30 mb-10">
            <!-- Sidebar Card from Image 1 -->
            <div class="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
              
              <!-- Placeholder Image Box -->
              <div class="h-48 bg-gray-200 flex items-center justify-center p-4">
                 <div class="w-full h-full border-4 border-gray-300 rounded-lg flex items-center justify-center">
                    <i class="ri-image-line text-6xl text-gray-300"></i>
                 </div>
              </div>
              
              <div class="p-6 bg-white">
                <h3 class="font-bold text-gray-900 text-lg mb-6">Course includes:</h3>
                
                <div class="space-y-4 text-sm text-gray-500">
                  <div class="flex justify-between items-center">
                    <span class="flex items-center gap-2"><i class="ri-translate-2 text-blue-500"></i> Language:</span>
                    <span class="font-bold text-gray-900">Hindi / English</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="flex items-center gap-2"><i class="ri-time-line text-blue-500"></i> Duration:</span>
                    <span class="font-bold text-gray-900">{duration}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="flex items-center gap-2"><i class="ri-wifi-line text-blue-500"></i> Online Price:</span>
                    <span class="font-bold text-blue-600">{price} <span class="text-xs text-gray-400 line-through ml-1">{old_price}</span></span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="flex items-center gap-2"><i class="ri-building-4-line text-blue-500"></i> Offline Price:</span>
                    <span class="font-bold text-blue-600">{price} <span class="text-xs text-gray-400 line-through ml-1">{old_price}</span></span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="flex items-center gap-2"><i class="ri-user-line text-blue-500"></i> Instructor:</span>
                    <span class="font-bold text-gray-900">Webcodian Institute</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="flex items-center gap-2"><i class="ri-medal-line text-blue-500"></i> Certificate:</span>
                    <span class="font-bold text-gray-900">Yes</span>
                  </div>
                </div>
                
                <div class="grid grid-cols-2 gap-3 mt-8">
                  <a href="../online-enquiry.html" class="flex items-center justify-center gap-1 bg-[#4F46E5] text-white py-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors shadow-sm">
                    Enquiry <i class="ri-arrow-right-line"></i>
                  </a>
                  <a href="../online-admission.html" class="flex items-center justify-center gap-1 bg-white border border-[#4F46E5] text-[#4F46E5] py-3 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors shadow-sm">
                    Buy now <i class="ri-arrow-right-line"></i>
                  </a>
                </div>

              </div>
            </div>
            
            <!-- Floating WhatsApp Icon -->
            <a href="https://wa.me/919794412732" class="fixed bottom-6 left-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform z-50">
              <i class="ri-whatsapp-line"></i>
            </a>

          </div>
        </div>

      </div>
    </section>
  </main>

  {footer_html}
  
</body>
</html>
        """
        
        filepath = f"d:/webcodian/course/{slug}.html"
        with open(filepath, 'w', encoding='utf-8') as cf:
            cf.write(content)
            
    print("Course pages regenerated with premium light hero.")

build_courses()
