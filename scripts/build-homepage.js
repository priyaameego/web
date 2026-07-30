const fs = require('fs');
const path = require('path');

const homepageHtml = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>InstituteHub | Premium Education</title>
  <meta name="description" content="InstituteHub - Where education meets excellence. Ultra premium education institute offering top-tier courses, placement support, and expert faculty.">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- CSS -->
  <link rel="stylesheet" href="./dist/output.css">
  
  <!-- Icons -->
  <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
  <style>
    /* Custom animations for Homepage */
    @keyframes infiniteScroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      width: 200%;
      animation: infiniteScroll 20s linear infinite;
    }
    .animate-marquee:hover {
      animation-play-state: paused;
    }
    .glass-card {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    }
    .dark-glass {
      background: rgba(8, 28, 58, 0.8);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  </style>
</head>
<body class="bg-gray-50 text-gray-900 font-sans selection:bg-primary selection:text-white antialiased overflow-x-hidden">

  <!-- Topbar & Navbar -->
  <header id="site-header" class="fixed w-full top-0 z-50 transition-all duration-300 shadow-sm bg-slate-50 border-b border-gray-100">
    <!-- Topbar -->
    <div class="bg-primary text-white/90 text-sm py-2 hidden lg:block border-b border-white/10">
      <div class="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div class="flex items-center gap-6">
          <span class="flex items-center gap-2 font-medium tracking-wide"><i class="ri-map-pin-2-line text-accent"></i> Nagwa Lanka, Varanasi, Pin 221005</span>
          <span class="flex items-center gap-2 font-medium tracking-wide"><i class="ri-phone-line text-accent"></i> <a href="tel:9794412732" class="hover:text-white transition-colors">9794412732</a></span>
        </div>
        <div class="flex items-center font-medium gap-3">
          <a href="certificate-verification.html" class="flex items-center gap-2 px-5 py-1.5 rounded bg-accent text-white hover:bg-yellow-600 transition-colors shadow-sm">
            <i class="ri-medal-line"></i> Certificate Verification
          </a>
          <a href="login.html" class="flex items-center gap-2 px-5 py-1.5 rounded bg-primary-light text-white hover:bg-blue-700 transition-colors shadow-sm">
            <i class="ri-draft-line"></i> Online Exam
          </a>
          <a href="login.html" class="flex items-center gap-2 px-5 py-1.5 rounded bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/10 shadow-sm">
            <i class="ri-user-line"></i> Student Login
          </a>
        </div>
      </div>
    </div>

    <!-- Main Nav -->
    <nav class="container mx-auto px-6 lg:px-12 py-3 flex justify-between items-center">
      <!-- Brand -->
      <a href="index.html" class="flex items-center group">
        <img src="https://www.institutehub.in/storage/dashboard/branding/brand-strip/JasdHk2McXjAjd2NRBl1qeCzFAR4QWGHuJWiC7Dz.jpg" alt="InstituteHub Logo" class="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300">
      </a>

      <!-- Desktop Menu -->
      <ul class="hidden lg:flex items-center gap-7 text-[15px] font-medium text-gray-600">
        <li><a href="index.html" class="text-primary font-semibold transition-colors">Home</a></li>
        
        <li class="relative group">
          <a href="javascript:void(0);" class="hover:text-primary transition-colors flex items-center gap-1 py-2">About Us <i class="ri-arrow-down-s-line text-gray-400 group-hover:rotate-180 transition-transform"></i></a>
          <ul class="absolute top-full left-0 w-[240px] bg-white rounded-xl shadow-premium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col border border-gray-100 py-3 mt-1 overflow-hidden z-50">
            <li><a href="about/director-ceo-message.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text-primary hover:bg-blue-50/50 transition-colors">Director & CEO Message</a></li>
            <li><a href="about/who-we-are.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text-primary hover:bg-blue-50/50 transition-colors">Who We Are</a></li>
            <li><a href="about/our-campus-and-approach.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Our Campus & Approach</a></li>
            <li><a href="our-team.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Our Team</a></li>
            <li><a href="mission.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Vision & Mission</a></li>
            <li><a href="linkage-authorization.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Linkage & Authorization</a></li>
            <li><a href="testimonial.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Testimonial</a></li>
          </ul>
        </li>
        
        <li><a href="courses.html" class="hover:text- transition-colors py-2">Courses</a></li>
        
        <li class="relative group">
          <a href="javascript:void(0);" class="hover:text- transition-colors flex items-center gap-1 py-2">Student Zone <i class="ri-arrow-down-s-line text-gray-400 group-hover:rotate-180 transition-transform"></i></a>
          <ul class="absolute top-full left-0 w-[240px] bg-white rounded-xl shadow-premium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col border border-gray-100 py-3 mt-1 overflow-hidden z-50">
            <li><a href="online-enquiry.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Student Enquiry</a></li>
            <li><a href="online-admission.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Online Admission</a></li>
            <li><a href="student-verification.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Student Verification</a></li>
            <li><a href="certificate-verification.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Certificate Verification</a></li>
            <li><a href="marksheet-verification.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Marksheet Verification</a></li>
            <li><a href="download-admit-card.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Admit Card</a></li>
            <li><a href="login.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Student Login</a></li>
          </ul>
        </li>
        
        <li class="relative group">
          <a href="javascript:void(0);" class="hover:text- transition-colors flex items-center gap-1 py-2">Franchise <i class="ri-arrow-down-s-line text-gray-400 group-hover:rotate-180 transition-transform"></i></a>
          <ul class="absolute top-full left-0 w-[240px] bg-white rounded-xl shadow-premium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col border border-gray-100 py-3 mt-1 overflow-hidden z-50">
            <li><a href="franchise/registration.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Registration</a></li>
            <li><a href="franchise/verification.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Verification</a></li>
            <li><a href="franchise/centers.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Find Centers</a></li>
          </ul>
        </li>
        
        <li><a href="career.html" class="hover:text- transition-colors py-2">Career</a></li>
        
        <li class="relative group">
          <a href="javascript:void(0);" class="hover:text- transition-colors flex items-center gap-1 py-2">Highlight <i class="ri-arrow-down-s-line text-gray-400 group-hover:rotate-180 transition-transform"></i></a>
          <ul class="absolute top-full left-0 w-[240px] bg-white rounded-xl shadow-premium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col border border-gray-100 py-3 mt-1 overflow-hidden z-50">
            <li><a href="blog.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Blog</a></li>
            <li><a href="news.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">News</a></li>
            <li><a href="photo-gallery.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Photo Gallery</a></li>
            <li><a href="video.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Video Gallery</a></li>
            <li><a href="events.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Events</a></li>
            <li><a href="download.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Download</a></li>
            <li><a href="online-payment.html" class="block px-6 py-2.5 text-[15px] text-gray-700 hover:text- hover:bg-blue-50/50 transition-colors">Online Payment</a></li>
          </ul>
        </li>
        
        <li><a href="faq.html" class="hover:text- transition-colors py-2">FAQ</a></li>
        
        <li><a href="contact.html" class="hover:text- transition-colors py-2">Contact Us</a></li>
      </ul>
      
      <!-- CTA / Mobile Toggle -->
      <div class="flex items-center gap-4">
        <a href="login.html" class="hidden lg:flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary-light hover:shadow-lg transition-all duration-300 magnetic-btn">
          <i class="ri-user-line"></i> Login
        </a>
        <button id="mobile-menu-btn" class="lg:hidden text-2xl text-primary focus:outline-none">
          <i class="ri-menu-4-line"></i>
        </button>
      </div>
    </nav>

    <!-- Mobile Drawer -->
    <div id="mobile-drawer" class="fixed inset-y-0 right-0 h-screen w-full sm:w-[320px] bg-white shadow-2xl z-[100] transform translate-x-full transition-transform duration-300 overflow-y-auto">
      <div class="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
        <img src="https://www.institutehub.in/storage/dashboard/branding/brand-strip/JasdHk2McXjAjd2NRBl1qeCzFAR4QWGHuJWiC7Dz.jpg" alt="Logo" class="h-10 w-auto object-contain">
        <button id="close-menu-btn" class="text-gray-500 hover:text-red-500 focus:outline-none text-3xl"><i class="ri-close-line"></i></button>
      </div>
      <div class="p-6 pb-24">
        <ul class="flex flex-col gap-2 text-[15px] font-medium text-gray-700">
          <li><a href="index.html" class="block py-3 hover:text-primary border-b border-gray-50">Home</a></li>
          
          <!-- About Us Dropdown -->
          <li>
            <button class="w-full flex justify-between items-center py-3 border-b border-gray-50 focus:outline-none" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')">
              About Us <i class="ri-arrow-down-s-line transition-transform text-lg"></i>
            </button>
            <ul class="hidden flex-col gap-2 pl-4 py-2 bg-gray-50 rounded-lg mt-1">
              <li><a href="about/director-ceo-message.html" class="block py-2 text-sm">Director & CEO Message</a></li>
              <li><a href="about/who-we-are.html" class="block py-2 text-sm">Who We Are</a></li>
              <li><a href="about/our-campus-and-approach.html" class="block py-2 text-sm">Our Campus & Approach</a></li>
              <li><a href="our-team.html" class="block py-2 text-sm">Our Team</a></li>
              <li><a href="mission.html" class="block py-2 text-sm">Vision & Mission</a></li>
              <li><a href="linkage-authorization.html" class="block py-2 text-sm">Linkage & Authorization</a></li>
              <li><a href="testimonial.html" class="block py-2 text-sm">Testimonial</a></li>
            </ul>
          </li>

          <li><a href="courses.html" class="block py-3 hover:text-primary border-b border-gray-50">Courses</a></li>

          <!-- Student Zone Dropdown -->
          <li>
            <button class="w-full flex justify-between items-center py-3 border-b border-gray-50 focus:outline-none" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')">
              Student Zone <i class="ri-arrow-down-s-line transition-transform text-lg"></i>
            </button>
            <ul class="hidden flex-col gap-2 pl-4 py-2 bg-gray-50 rounded-lg mt-1">
              <li><a href="online-enquiry.html" class="block py-2 text-sm">Student Enquiry</a></li>
              <li><a href="online-admission.html" class="block py-2 text-sm">Online Admission</a></li>
              <li><a href="student-verification.html" class="block py-2 text-sm">Student Verification</a></li>
              <li><a href="certificate-verification.html" class="block py-2 text-sm">Certificate Verification</a></li>
              <li><a href="marksheet-verification.html" class="block py-2 text-sm">Marksheet Verification</a></li>
              <li><a href="download-admit-card.html" class="block py-2 text-sm">Admit Card</a></li>
              <li><a href="login.html" class="block py-2 text-sm">Student Login</a></li>
            </ul>
          </li>

          <!-- Franchise Dropdown -->
          <li>
            <button class="w-full flex justify-between items-center py-3 border-b border-gray-50 focus:outline-none" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')">
              Franchise <i class="ri-arrow-down-s-line transition-transform text-lg"></i>
            </button>
            <ul class="hidden flex-col gap-2 pl-4 py-2 bg-gray-50 rounded-lg mt-1">
              <li><a href="franchise/registration.html" class="block py-2 text-sm">Registration</a></li>
              <li><a href="franchise/verification.html" class="block py-2 text-sm">Verification</a></li>
              <li><a href="franchise/centers.html" class="block py-2 text-sm">Find Centers</a></li>
            </ul>
          </li>

          <li><a href="career.html" class="block py-3 hover:text-primary border-b border-gray-50">Career</a></li>

          <!-- Highlights Dropdown -->
          <li>
            <button class="w-full flex justify-between items-center py-3 border-b border-gray-50 focus:outline-none" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')">
              Highlights <i class="ri-arrow-down-s-line transition-transform text-lg"></i>
            </button>
            <ul class="hidden flex-col gap-2 pl-4 py-2 bg-gray-50 rounded-lg mt-1">
              <li><a href="blog.html" class="block py-2 text-sm">Blog</a></li>
              <li><a href="news.html" class="block py-2 text-sm">News</a></li>
              <li><a href="photo-gallery.html" class="block py-2 text-sm">Photo Gallery</a></li>
              <li><a href="video.html" class="block py-2 text-sm">Video Gallery</a></li>
              <li><a href="events.html" class="block py-2 text-sm">Events</a></li>
              <li><a href="download.html" class="block py-2 text-sm">Download</a></li>
              <li><a href="online-payment.html" class="block py-2 text-sm">Online Payment</a></li>
            </ul>
          </li>

          <li><a href="faq.html" class="block py-3 hover:text-primary border-b border-gray-50">FAQ</a></li>
          <li><a href="contact.html" class="block py-3 hover:text-primary">Contact Us</a></li>
        </ul>
        
        <div class="mt-8">
          <a href="login.html" class="flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-xl font-bold hover:bg-primary-light transition-all w-full shadow-lg">
            <i class="ri-user-line"></i> Student Login
          </a>
        </div>
      </div>
    </div>
  </header>

  <main>
    <!-- 1. Cinematic Hero Section -->
    <section class="relative h-screen min-h-[700px] flex items-center pt-20 overflow-hidden">
      <!-- Background Slider -->
      <div class="absolute inset-0 z-0 group" id="hero-slider">
        <!-- Slide 1 -->
        <div class="hero-slide absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100 z-10">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover animate-ken-burns opacity-60" alt="Students learning programming">
        </div>
        <!-- Slide 2 -->
        <div class="hero-slide absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0 z-0">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover animate-ken-burns opacity-60" alt="Computer Lab Coding">
        </div>
        <!-- Slide 3 -->
        <div class="hero-slide absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0 z-0">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover animate-ken-burns opacity-60" alt="Students with laptops collaborating">
        </div>

        <!-- Slider Controls -->
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
          <button class="hero-dot w-8 h-2 rounded-full bg-white transition-all duration-300"></button>
          <button class="hero-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300"></button>
          <button class="hero-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300"></button>
        </div>

        <!-- Arrow Controls -->
        <button id="hero-prev" class="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 border border-white/20 backdrop-blur text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110">
          <i class="ri-arrow-left-s-line text-2xl"></i>
        </button>
        <button id="hero-next" class="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 border border-white/20 backdrop-blur text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110">
          <i class="ri-arrow-right-s-line text-2xl"></i>
        </button>
      </div>

      <script>
        document.addEventListener('DOMContentLoaded', () => {
          const slides = document.querySelectorAll('.hero-slide');
          const dots = document.querySelectorAll('.hero-dot');
          const prevBtn = document.getElementById('hero-prev');
          const nextBtn = document.getElementById('hero-next');
          let currentSlide = 0;
          let slideInterval;

          function showSlide(index) {
            slides.forEach((slide, i) => {
              if (i === index) {
                slide.classList.remove('opacity-0');
                slide.classList.add('opacity-100');
                slide.style.zIndex = '10';
              } else {
                slide.classList.remove('opacity-100');
                slide.classList.add('opacity-0');
                slide.style.zIndex = '0';
              }
            });
            dots.forEach((dot, i) => {
              if (i === index) {
                dot.classList.remove('bg-white/40', 'w-2');
                dot.classList.add('bg-white', 'w-8');
              } else {
                dot.classList.remove('bg-white', 'w-8');
                dot.classList.add('bg-white/40', 'w-2');
              }
            });
          }

          function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
          }

          function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
          }

          function startSlideShow() {
            slideInterval = setInterval(nextSlide, 5000);
          }

          function resetInterval() {
            clearInterval(slideInterval);
            startSlideShow();
          }

          if(nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
            prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });
          }
          
          dots.forEach((dot, i) => {
            dot.addEventListener('click', () => { currentSlide = i; showSlide(currentSlide); resetInterval(); });
          });

          startSlideShow();
        });
      </script>

      <div class="absolute inset-0 bg-gradient-to-r from-[#081C3A] via-[#081C3A]/90 to-transparent z-10 mix-blend-multiply pointer-events-none"></div>
      
      <!-- Floating Particles -->
      <div class="absolute inset-0 z-10 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>

      <div class="container mx-auto px-6 lg:px-12 relative z-20 flex flex-col lg:flex-row items-center gap-16">
        
        <!-- Left Content -->
        <div class="lg:w-3/5 text-white animate-fade-up">
          <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-medium text-sm mb-8 shadow-premium transform hover:scale-105 transition-transform cursor-default">
            🎓 Future-Ready Computer Education
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] drop-shadow-2xl">
            Learn Today.<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-300">Build Tomorrow.</span>
          </h1>
          
          <p class="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 font-light leading-relaxed">
            Join InstituteHub to master practical computer skills, industry-recognized certifications, and career-focused training through expert faculty and modern learning environments.
          </p>
          
          <div class="flex flex-wrap items-center gap-4">
            <a href="courses.html" class="px-8 py-4 bg-accent text-[#081C3A] font-bold rounded-full hover:bg-yellow-500 hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-1">
              Explore Courses
            </a>
            <a href="online-admission.html" class="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
              Apply Online <i class="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>

        <!-- Right Side Stats (Glassmorphism) -->
        <div class="lg:w-2/5 hidden lg:flex flex-col gap-6 animate-fade-up" style="animation-delay: 0.2s;">
          
          <div class="dark-glass p-6 rounded-3xl flex items-center gap-6 transform hover:-translate-x-4 transition-transform duration-500">
            <div class="w-16 h-16 rounded-2xl bg-accent text-[#081C3A] flex items-center justify-center text-3xl shadow-lg"><i class="ri-user-smile-line"></i></div>
            <div>
              <div class="text-3xl font-bold text-white mb-1 counter" data-target="20000">0</div>
              <div class="text-sm font-medium text-gray-400">Students Empowered</div>
            </div>
          </div>

          <div class="dark-glass p-6 rounded-3xl flex items-center gap-6 ml-12 transform hover:-translate-x-4 transition-transform duration-500">
            <div class="w-16 h-16 rounded-2xl bg-blue-500 text-white flex items-center justify-center text-3xl shadow-lg"><i class="ri-book-open-line"></i></div>
            <div>
              <div class="text-3xl font-bold text-white mb-1 counter" data-target="150">0</div>
              <div class="text-sm font-medium text-gray-400">Professional Courses</div>
            </div>
          </div>

          <div class="dark-glass p-6 rounded-3xl flex items-center gap-6 transform hover:-translate-x-4 transition-transform duration-500">
            <div class="w-16 h-16 rounded-2xl bg-green-500 text-white flex items-center justify-center text-3xl shadow-lg"><i class="ri-briefcase-line"></i></div>
            <div>
              <div class="text-3xl font-bold text-white mb-1">100%</div>
              <div class="text-sm font-medium text-gray-400">Placement Assistance</div>
            </div>
          </div>

        </div>

      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
        <span class="text-xs font-bold text-white uppercase tracking-widest">Scroll</span>
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div class="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>

    <!-- 2. Facilities Grid -->
    <section class="py-24 bg-white relative z-20 shadow-2xl">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
          <h2 class="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 inline-block border-b-2 border-blue-600 pb-1">Explore By Facilities</h2>
          <h3 class="text-3xl md:text-5xl font-bold text-[#2A2B44] mb-6 leading-tight">Learn New Skills When And<br>Where You Like</h3>
          <p class="text-gray-500 text-lg leading-relaxed">Computer institutes typically offer a range of facilities to support their students' learning and development. Some common facilities you might find in a computer institute include</p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          
          <!-- Card 1 -->
          <div class="group flex flex-col items-center text-center p-6 bg-[#f8f9fa] border border-gray-100 rounded-[20px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
            <div class="w-16 h-16 bg-gradient-to-b from-[#ebe6fa] to-white text-[#7152e0] rounded-t-[30px] rounded-b-[10px] flex items-center justify-center text-3xl mb-5 shadow-sm border border-white">
              <i class="ri-focus-3-line drop-shadow-md group-hover:scale-110 transition-transform"></i>
            </div>
            <h4 class="font-bold text-[#2A2B44] text-[15px] leading-snug">Training<br>Programs</h4>
          </div>

          <!-- Card 2 -->
          <div class="group flex flex-col items-center text-center p-6 bg-[#f8f9fa] border border-gray-100 rounded-[20px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
            <div class="w-16 h-16 bg-gradient-to-b from-[#fbead7] to-white text-[#f49b36] rounded-t-[30px] rounded-b-[10px] flex items-center justify-center text-3xl mb-5 shadow-sm border border-white">
              <i class="ri-team-fill drop-shadow-md group-hover:scale-110 transition-transform"></i>
            </div>
            <h4 class="font-bold text-[#2A2B44] text-[15px] leading-snug">Expert<br>Faculty</h4>
          </div>

          <!-- Card 3 -->
          <div class="group flex flex-col items-center text-center p-6 bg-[#f8f9fa] border border-gray-100 rounded-[20px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
            <div class="w-16 h-16 bg-gradient-to-b from-[#e0f0fa] to-white text-[#3ca3d4] rounded-t-[30px] rounded-b-[10px] flex items-center justify-center text-3xl mb-5 shadow-sm border border-white">
              <i class="ri-lock-2-line drop-shadow-md group-hover:scale-110 transition-transform"></i>
            </div>
            <h4 class="font-bold text-[#2A2B44] text-[15px] leading-snug">Security</h4>
          </div>

          <!-- Card 4 -->
          <div class="group flex flex-col items-center text-center p-6 bg-[#f8f9fa] border border-gray-100 rounded-[20px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
            <div class="w-16 h-16 bg-gradient-to-b from-[#fbe7dc] to-white text-[#e87034] rounded-t-[30px] rounded-b-[10px] flex items-center justify-center text-3xl mb-5 shadow-sm border border-white">
              <i class="ri-book-2-fill drop-shadow-md group-hover:scale-110 transition-transform"></i>
            </div>
            <h4 class="font-bold text-[#2A2B44] text-[15px] leading-snug">Course<br>Materials</h4>
          </div>

          <!-- Card 5 -->
          <div class="group flex flex-col items-center text-center p-6 bg-[#f8f9fa] border border-gray-100 rounded-[20px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
            <div class="w-16 h-16 bg-gradient-to-b from-[#fce8f2] to-white text-[#d64188] rounded-t-[30px] rounded-b-[10px] flex items-center justify-center text-3xl mb-5 shadow-sm border border-white">
              <i class="ri-graduation-cap-fill drop-shadow-md group-hover:scale-110 transition-transform"></i>
            </div>
            <h4 class="font-bold text-[#2A2B44] text-[15px] leading-snug">Certification</h4>
          </div>

          <!-- Card 6 -->
          <div class="group flex flex-col items-center text-center p-6 bg-[#f8f9fa] border border-gray-100 rounded-[20px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
            <div class="w-16 h-16 bg-gradient-to-b from-[#f2e9e4] to-white text-[#744525] rounded-t-[30px] rounded-b-[10px] flex items-center justify-center text-3xl mb-5 shadow-sm border border-white">
              <i class="ri-time-line drop-shadow-md group-hover:scale-110 transition-transform"></i>
            </div>
            <h4 class="font-bold text-[#2A2B44] text-[15px] leading-snug">Flexible<br>Learning</h4>
          </div>

          <!-- Card 7 -->
          <div class="group flex flex-col items-center text-center p-6 bg-[#f8f9fa] border border-gray-100 rounded-[20px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
            <div class="w-16 h-16 bg-gradient-to-b from-[#e0f5ec] to-white text-[#2db36f] rounded-t-[30px] rounded-b-[10px] flex items-center justify-center text-3xl mb-5 shadow-sm border border-white">
              <i class="ri-line-chart-line drop-shadow-md group-hover:scale-110 transition-transform"></i>
            </div>
            <h4 class="font-bold text-[#2A2B44] text-[15px] leading-snug">Career<br>Placement</h4>
          </div>

          <!-- Card 8 -->
          <div class="group flex flex-col items-center text-center p-6 bg-[#f8f9fa] border border-gray-100 rounded-[20px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
            <div class="w-16 h-16 bg-gradient-to-b from-[#f2e6f5] to-white text-[#8e45aa] rounded-t-[30px] rounded-b-[10px] flex items-center justify-center text-3xl mb-5 shadow-sm border border-white">
              <i class="ri-shuffle-line drop-shadow-md group-hover:scale-110 transition-transform"></i>
            </div>
            <h4 class="font-bold text-[#2A2B44] text-[15px] leading-snug">Practical<br>Approach</h4>
          </div>

          <!-- Card 9 -->
          <div class="group flex flex-col items-center text-center p-6 bg-[#f8f9fa] border border-gray-100 rounded-[20px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
            <div class="w-16 h-16 bg-gradient-to-b from-[#f2e6df] to-white text-[#8e4e20] rounded-t-[30px] rounded-b-[10px] flex items-center justify-center text-3xl mb-5 shadow-sm border border-white">
              <i class="ri-customer-service-2-fill drop-shadow-md group-hover:scale-110 transition-transform"></i>
            </div>
            <h4 class="font-bold text-[#2A2B44] text-[15px] leading-snug">Support<br>System</h4>
          </div>

          <!-- Card 10 -->
          <div class="group flex flex-col items-center text-center p-6 bg-[#f8f9fa] border border-gray-100 rounded-[20px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
            <div class="w-16 h-16 bg-gradient-to-b from-[#e3eef6] to-white text-[#2c73b4] rounded-t-[30px] rounded-b-[10px] flex items-center justify-center text-3xl mb-5 shadow-sm border border-white">
              <i class="ri-book-read-fill drop-shadow-md group-hover:scale-110 transition-transform"></i>
            </div>
            <h4 class="font-bold text-[#2A2B44] text-[15px] leading-snug">Library</h4>
          </div>

          <!-- Card 11 -->
          <div class="group flex flex-col items-center text-center p-6 bg-[#f8f9fa] border border-gray-100 rounded-[20px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
            <div class="w-16 h-16 bg-gradient-to-b from-[#f6e3ee] to-white text-[#b42c73] rounded-t-[30px] rounded-b-[10px] flex items-center justify-center text-3xl mb-5 shadow-sm border border-white">
              <i class="ri-computer-line drop-shadow-md group-hover:scale-110 transition-transform"></i>
            </div>
            <h4 class="font-bold text-[#2A2B44] text-[15px] leading-snug">Computer<br>Lab</h4>
          </div>

          <!-- Card 12 -->
          <div class="group flex flex-col items-center text-center p-6 bg-[#f8f9fa] border border-gray-100 rounded-[20px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
            <div class="w-16 h-16 bg-gradient-to-b from-[#e3f2ea] to-white text-[#2c8352] rounded-t-[30px] rounded-b-[10px] flex items-center justify-center text-3xl mb-5 shadow-sm border border-white">
              <i class="ri-briefcase-4-fill drop-shadow-md group-hover:scale-110 transition-transform"></i>
            </div>
            <h4 class="font-bold text-[#2A2B44] text-[15px] leading-snug">Workshops</h4>
          </div>

        </div>
      </div>
    </section>

    <!-- 3. Learn New Skills (Split Layout) -->
    <section class="py-24 bg-[#fffbfa] relative overflow-hidden">
      <!-- Background subtle gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/30 z-0 pointer-events-none"></div>
      
      <div class="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        <div class="lg:w-1/2 animate-on-scroll relative">
          <!-- Illustration replacement with a premium educational stock image -->
          <div class="absolute -inset-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded-[40px] transform -rotate-3 opacity-50 blur-lg"></div>
          <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000&auto=format&fit=crop" class="w-full rounded-[40px] shadow-2xl object-cover h-[500px] relative z-10" alt="Learning skills at home">
        </div>

        <div class="lg:w-1/2 animate-on-scroll">
          <h2 class="text-4xl md:text-5xl font-bold text-[#2A2B44] mb-6 leading-tight">Learn new skills when and where you like</h2>
          <p class="text-gray-500 text-lg leading-relaxed mb-10">Structured computer education, hands-on labs, and guidance from instructors who help you build confidence for exams and careers.</p>
          
          <ul class="space-y-6">
            <li class="flex items-center gap-4">
              <div class="w-6 h-6 rounded-full bg-[#2db36f] text-white flex items-center justify-center shrink-0 shadow-sm"><i class="ri-check-line text-sm font-bold"></i></div>
              <p class="text-[#2A2B44] font-semibold text-lg">Access classes on campus with structured lab time</p>
            </li>
            <li class="flex items-center gap-4">
              <div class="w-6 h-6 rounded-full bg-[#2db36f] text-white flex items-center justify-center shrink-0 shadow-sm"><i class="ri-check-line text-sm font-bold"></i></div>
              <p class="text-[#2A2B44] font-semibold text-lg">Flexible batches and course plans</p>
            </li>
            <li class="flex items-center gap-4">
              <div class="w-6 h-6 rounded-full bg-[#2db36f] text-white flex items-center justify-center shrink-0 shadow-sm"><i class="ri-check-line text-sm font-bold"></i></div>
              <p class="text-[#2A2B44] font-semibold text-lg">Quality training with practical assessments</p>
            </li>
          </ul>
        </div>

      </div>
    </section>

    <!-- 4. Featured Courses Grid -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 animate-on-scroll">
          <div class="max-w-2xl">
            <h2 class="text-primary font-bold tracking-widest uppercase text-sm mb-3">Trending Programs</h2>
            <h3 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured <span class="text-primary">Courses</span></h3>
            <p class="text-gray-500 text-lg">Select from our most popular diploma and certification programs.</p>
          </div>
          <a href="courses.html" class="hidden md:inline-flex px-6 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors mt-6 md:mt-0">
            View All Courses
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Course Card 1 -->
          <div class="bg-white rounded-[32px] shadow-premium overflow-hidden border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group animate-on-scroll">
            <div class="relative h-60 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" alt="ADCA" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">Computer Applications</div>
            </div>
            <div class="p-8 flex flex-col h-[280px]">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">Advance Diploma in Computer Application (ADCA)</h3>
              <div class="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                <span class="flex items-center gap-1"><i class="ri-time-line text-primary"></i> 12 Months</span>
                <span class="flex items-center gap-1"><i class="ri-book-read-line text-primary"></i> 8 Subjects</span>
              </div>
              <div class="mt-auto">
                <div class="flex items-end gap-2 mb-6">
                  <span class="text-2xl font-bold text-gray-900">₹8,500</span>
                  <span class="text-sm text-gray-400 line-through mb-1">₹12,000</span>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <a href="course/adca-12-months.html" class="px-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 font-bold text-sm text-center rounded-xl hover:bg-gray-100 transition-colors">Details</a>
                  <a href="online-admission.html" class="px-4 py-3 bg-primary text-white font-bold text-sm text-center rounded-xl hover:bg-primary-light hover:shadow-lg transition-all shadow-md">Apply Now</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Course Card 2 -->
          <div class="bg-white rounded-[32px] shadow-premium overflow-hidden border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group animate-on-scroll">
            <div class="relative h-60 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" alt="Python" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">Programming</div>
            </div>
            <div class="p-8 flex flex-col h-[280px]">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">Python for Beginners & Data Science Basics</h3>
              <div class="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                <span class="flex items-center gap-1"><i class="ri-time-line text-primary"></i> 3 Months</span>
                <span class="flex items-center gap-1"><i class="ri-book-read-line text-primary"></i> 4 Subjects</span>
              </div>
              <div class="mt-auto">
                <div class="flex items-end gap-2 mb-6">
                  <span class="text-2xl font-bold text-gray-900">₹4,500</span>
                  <span class="text-sm text-gray-400 line-through mb-1">₹6,000</span>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <a href="course/python-for-beginners.html" class="px-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 font-bold text-sm text-center rounded-xl hover:bg-gray-100 transition-colors">Details</a>
                  <a href="online-admission.html" class="px-4 py-3 bg-primary text-white font-bold text-sm text-center rounded-xl hover:bg-primary-light hover:shadow-lg transition-all shadow-md">Apply Now</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Course Card 3 -->
          <div class="bg-white rounded-[32px] shadow-premium overflow-hidden border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group animate-on-scroll">
            <div class="relative h-60 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop" alt="Tally" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">Accounting</div>
            </div>
            <div class="p-8 flex flex-col h-[280px]">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">Tally ERP 9 & GST Advanced Accounting</h3>
              <div class="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                <span class="flex items-center gap-1"><i class="ri-time-line text-primary"></i> 6 Months</span>
                <span class="flex items-center gap-1"><i class="ri-book-read-line text-primary"></i> 5 Subjects</span>
              </div>
              <div class="mt-auto">
                <div class="flex items-end gap-2 mb-6">
                  <span class="text-2xl font-bold text-gray-900">₹6,000</span>
                  <span class="text-sm text-gray-400 line-through mb-1">₹8,000</span>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <a href="course/tally-erp-9-gst.html" class="px-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 font-bold text-sm text-center rounded-xl hover:bg-gray-100 transition-colors">Details</a>
                  <a href="online-admission.html" class="px-4 py-3 bg-primary text-white font-bold text-sm text-center rounded-xl hover:bg-primary-light hover:shadow-lg transition-all shadow-md">Apply Now</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 5. Interactive Section: Notice Board & Recent Students -->
    <section class="py-24 bg-white relative">
      <div class="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12">
        
        <!-- Notice Board -->
        <div class="bg-blue-50 rounded-[40px] p-8 md:p-12 animate-on-scroll border border-blue-100">
          <div class="flex items-center justify-between mb-8">
            <h3 class="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <i class="ri-pushpin-2-fill text-primary"></i> Notice Board
            </h3>
            <a href="news.html" class="text-primary font-bold hover:underline">View All</a>
          </div>
          
          <div class="space-y-4">
            <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4">
              <div class="w-12 h-12 bg-red-100 text-red-500 rounded-xl flex items-center justify-center shrink-0 font-bold flex-col leading-none">
                <span class="text-sm">24</span>
                <span class="text-[10px] uppercase">Oct</span>
              </div>
              <div>
                <span class="inline-block px-2 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded-full mb-2 uppercase">Important</span>
                <h4 class="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">Admit Cards for November 2026 Examination Released.</h4>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4">
              <div class="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center shrink-0 font-bold flex-col leading-none">
                <span class="text-sm">15</span>
                <span class="text-[10px] uppercase">Oct</span>
              </div>
              <div>
                <span class="inline-block px-2 py-1 bg-blue-50 text-primary text-[10px] font-bold rounded-full mb-2 uppercase">Event</span>
                <h4 class="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">Mega Placement Drive - 50+ IT Companies visiting campus.</h4>
              </div>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4">
              <div class="w-12 h-12 bg-gray-100 text-gray-500 rounded-xl flex items-center justify-center shrink-0 font-bold flex-col leading-none">
                <span class="text-sm">02</span>
                <span class="text-[10px] uppercase">Oct</span>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">Holiday Notice: Gandhi Jayanti. All centers remain closed.</h4>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Students -->
        <div class="bg-gray-50 rounded-[40px] p-8 md:p-12 animate-on-scroll border border-gray-200">
          <div class="flex items-center justify-between mb-8">
            <h3 class="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <i class="ri-user-star-fill text-accent"></i> Recently Joined
            </h3>
          </div>
          
          <div class="overflow-hidden h-[360px] relative">
            <div class="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-gray-50 to-transparent z-10"></div>
            <div class="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
            
            <!-- Animated scrolling list -->
            <div class="animate-[slideUp_20s_linear_infinite] space-y-4 pt-10">
              
              <div class="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
                <img src="https://ui-avatars.com/api/?name=Rahul+Verma&background=0D8ABC&color=fff" class="w-12 h-12 rounded-full">
                <div class="flex-grow">
                  <h4 class="font-bold text-gray-900 text-sm">Rahul Verma</h4>
                  <p class="text-xs text-gray-500">ADCA</p>
                </div>
                <span class="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Active</span>
              </div>
              
              <div class="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
                <img src="https://ui-avatars.com/api/?name=Sneha+Singh&background=F59E0B&color=fff" class="w-12 h-12 rounded-full">
                <div class="flex-grow">
                  <h4 class="font-bold text-gray-900 text-sm">Sneha Singh</h4>
                  <p class="text-xs text-gray-500">Python</p>
                </div>
                <span class="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Active</span>
              </div>
              
              <div class="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
                <img src="https://ui-avatars.com/api/?name=Vikash+Kumar&background=3B82F6&color=fff" class="w-12 h-12 rounded-full">
                <div class="flex-grow">
                  <h4 class="font-bold text-gray-900 text-sm">Vikash Kumar</h4>
                  <p class="text-xs text-gray-500">Tally ERP</p>
                </div>
                <span class="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Active</span>
              </div>

              <div class="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
                <img src="https://ui-avatars.com/api/?name=Priya+Sharma&background=8B5CF6&color=fff" class="w-12 h-12 rounded-full">
                <div class="flex-grow">
                  <h4 class="font-bold text-gray-900 text-sm">Priya Sharma</h4>
                  <p class="text-xs text-gray-500">DCA</p>
                </div>
                <span class="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Active</span>
              </div>

              <div class="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
                <img src="https://ui-avatars.com/api/?name=Amit+Pandey&background=10B981&color=fff" class="w-12 h-12 rounded-full">
                <div class="flex-grow">
                  <h4 class="font-bold text-gray-900 text-sm">Amit Pandey</h4>
                  <p class="text-xs text-gray-500">Web Design</p>
                </div>
                <span class="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Active</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 6. Authorization Marquee -->
    <section class="py-12 border-y border-gray-100 bg-white overflow-hidden">
      <div class="container mx-auto px-6 lg:px-12 mb-8 text-center">
        <h4 class="text-sm font-bold text-gray-400 uppercase tracking-widest">Recognized & Authorized By</h4>
      </div>
      <div class="w-full relative flex items-center group">
        <div class="animate-marquee gap-16 items-center px-8">
          <!-- Repeat logos twice for infinite scroll effect -->
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/ISO_9001-2015_Certified.png" class="h-16 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
          <div class="text-2xl font-bold text-gray-300 font-serif whitespace-nowrap grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">MSME Govt. of India</div>
          <div class="text-2xl font-bold text-gray-300 font-serif whitespace-nowrap grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">Skill India</div>
          <div class="text-2xl font-bold text-gray-300 font-serif whitespace-nowrap grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">Digital India</div>
          <div class="text-2xl font-bold text-gray-300 font-serif whitespace-nowrap grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">Ministry of Corporate Affairs</div>
          
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/ISO_9001-2015_Certified.png" class="h-16 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
          <div class="text-2xl font-bold text-gray-300 font-serif whitespace-nowrap grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">MSME Govt. of India</div>
          <div class="text-2xl font-bold text-gray-300 font-serif whitespace-nowrap grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">Skill India</div>
          <div class="text-2xl font-bold text-gray-300 font-serif whitespace-nowrap grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">Digital India</div>
          <div class="text-2xl font-bold text-gray-300 font-serif whitespace-nowrap grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">Ministry of Corporate Affairs</div>
        </div>
      </div>
    </section>

    <!-- 7. Testimonial Slider & CTA -->
    <section class="py-24 bg-[#081C3A] text-white relative overflow-hidden">
      <!-- Background elements -->
      <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      <div class="absolute -right-40 -bottom-40 w-96 h-96 bg-primary rounded-full blur-[150px] opacity-40"></div>
      
      <div class="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <div class="animate-on-scroll">
          <h2 class="text-accent font-bold tracking-widest uppercase text-sm mb-3">Student Success</h2>
          <h3 class="text-4xl md:text-5xl font-bold mb-10 leading-tight">Hear it from the ones<br>who <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">succeeded.</span></h3>
          
          <!-- Testimonial Slider -->
          <div class="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 min-h-[300px]">
            <div class="absolute top-8 right-8 text-6xl text-white/10 font-serif">"</div>
            
            <div id="homeTestimonials">
              <div class="testimonial-item opacity-100 transition-opacity duration-1000 absolute inset-0 p-10">
                <div class="flex text-accent mb-6 text-xl">
                  <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>
                </div>
                <p class="text-xl text-gray-300 font-light italic mb-8">"InstituteHub gave me the perfect platform to launch my career in software development. The faculties are extremely knowledgeable and supportive."</p>
                <div class="flex items-center gap-4">
                  <img src="https://ui-avatars.com/api/?name=Rohan+Das&background=fff&color=081C3A" class="w-12 h-12 rounded-full">
                  <div>
                    <h4 class="font-bold">Rohan Das</h4>
                    <p class="text-sm text-gray-400">Software Developer</p>
                  </div>
                </div>
              </div>

              <div class="testimonial-item opacity-0 pointer-events-none transition-opacity duration-1000 absolute inset-0 p-10">
                <div class="flex text-accent mb-6 text-xl">
                  <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i>
                </div>
                <p class="text-xl text-gray-300 font-light italic mb-8">"The practical approach to learning Tally made accounting so much easier to understand. I secured a job in a reputed firm within a month of completion."</p>
                <div class="flex items-center gap-4">
                  <img src="https://ui-avatars.com/api/?name=Anjali+Gupta&background=fff&color=081C3A" class="w-12 h-12 rounded-full">
                  <div>
                    <h4 class="font-bold">Anjali Gupta</h4>
                    <p class="text-sm text-gray-400">Accountant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Course Guidance CTA -->
        <div class="bg-white rounded-[40px] p-10 md:p-14 text-gray-900 shadow-2xl animate-on-scroll border border-gray-100">
          <h3 class="text-3xl font-bold mb-4">Finding Your Right Course?</h3>
          <p class="text-gray-500 mb-8 leading-relaxed">Not sure which path to choose? Our expert counselors are here to guide you based on your background and career aspirations.</p>
          
          <div class="space-y-4">
            <a href="tel:9794412732" class="flex items-center justify-between p-5 rounded-2xl bg-gray-50 border border-gray-200 hover:border-primary hover:bg-blue-50 transition-colors group">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform"><i class="ri-phone-line text-xl"></i></div>
                <div>
                  <div class="text-sm text-gray-500 font-bold">Call for Guidance</div>
                  <div class="font-bold text-gray-900">9794412732</div>
                </div>
              </div>
              <i class="ri-arrow-right-line text-gray-400 group-hover:text-primary transition-colors"></i>
            </a>

            <a href="online-enquiry.html" class="flex items-center justify-between p-5 rounded-2xl bg-gray-50 border border-gray-200 hover:border-primary hover:bg-blue-50 transition-colors group">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform"><i class="ri-mail-send-line text-xl"></i></div>
                <div>
                  <div class="text-sm text-gray-500 font-bold">Drop an Enquiry</div>
                  <div class="font-bold text-gray-900">We'll call you back</div>
                </div>
              </div>
              <i class="ri-arrow-right-line text-gray-400 group-hover:text-primary transition-colors"></i>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- 8. Editorial Blog Section -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 animate-on-scroll">
          <div class="max-w-2xl">
            <h2 class="text-primary font-bold tracking-widest uppercase text-sm mb-3">Insights & Updates</h2>
            <h3 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest <span class="text-primary">Articles</span></h3>
          </div>
          <a href="blog.html" class="hidden md:inline-flex px-6 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors mt-6 md:mt-0">
            View All News
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <article class="bg-white rounded-[32px] overflow-hidden shadow-premium border border-gray-100 group animate-on-scroll">
            <div class="relative h-60 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">Technology</div>
            </div>
            <div class="p-8">
              <div class="flex items-center gap-4 text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">
                <span>Oct 24, 2026</span>
                <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>5 Min Read</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-snug">The Future of AI in Education and Skill Development</h3>
              <a href="blog.html" class="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-light transition-colors">Read Article <i class="ri-arrow-right-line"></i></a>
            </div>
          </article>

          <article class="bg-white rounded-[32px] overflow-hidden shadow-premium border border-gray-100 group animate-on-scroll">
            <div class="relative h-60 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">Careers</div>
            </div>
            <div class="p-8">
              <div class="flex items-center gap-4 text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">
                <span>Oct 18, 2026</span>
                <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>4 Min Read</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-snug">How to Ace Your First Tech Interview: Tips from Experts</h3>
              <a href="blog.html" class="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-light transition-colors">Read Article <i class="ri-arrow-right-line"></i></a>
            </div>
          </article>

          <article class="bg-white rounded-[32px] overflow-hidden shadow-premium border border-gray-100 group animate-on-scroll">
            <div class="relative h-60 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542744094-24638ea0b3b5?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">Updates</div>
            </div>
            <div class="p-8">
              <div class="flex items-center gap-4 text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">
                <span>Oct 10, 2026</span>
                <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>3 Min Read</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-snug">InstituteHub Opens 5 New Centers Across Uttar Pradesh</h3>
              <a href="blog.html" class="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-light transition-colors">Read Article <i class="ri-arrow-right-line"></i></a>
            </div>
          </article>

        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-[#081C3A] text-gray-300 pt-24 pb-8 lg:pt-28 lg:pb-10 relative overflow-hidden text-sm mt-0 border-t-0">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-light to-blue-300"></div>
    <div class="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    <!-- Decorative Glow -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container mx-auto px-6 lg:px-12 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
        
        <!-- Column 1 -->
        <div>
          <div class="mb-8 bg-white inline-block p-4 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
            <img src="https://www.institutehub.in/storage/dashboard/branding/brand-strip/JasdHk2McXjAjd2NRBl1qeCzFAR4QWGHuJWiC7Dz.jpg" alt="Logo" class="h-14 w-auto object-contain">
          </div>
          <p class="leading-loose text-gray-400">An ISO 9001:2015 certified institute offering practical computer courses, hands-on lab training, and recognized certifications to build job-ready skills.</p>
        </div>

        <!-- Column 2 -->
        <div>
          <h3 class="text-white font-bold text-xl mb-8 relative inline-block">
            Explore
            <span class="absolute -bottom-3 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
          </h3>
          <ul class="space-y-4">
            <li><a href="blog.html" class="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 hover:translate-x-2"><i class="ri-arrow-right-s-line text-primary"></i> Blog</a></li>
            <li><a href="events.html" class="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 hover:translate-x-2"><i class="ri-arrow-right-s-line text-primary"></i> Events</a></li>
            <li><a href="news.html" class="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 hover:translate-x-2"><i class="ri-arrow-right-s-line text-primary"></i> News</a></li>
            <li><a href="download.html" class="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 hover:translate-x-2"><i class="ri-arrow-right-s-line text-primary"></i> Download</a></li>
          </ul>
        </div>
        
        <!-- Column 3 -->
        <div>
          <h3 class="text-white font-bold text-xl mb-8 relative inline-block">
            Useful Links
            <span class="absolute -bottom-3 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
          </h3>
          <ul class="space-y-4">
            <li><a href="#" class="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 hover:translate-x-2"><i class="ri-arrow-right-s-line text-primary"></i> Terms & Conditions</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 hover:translate-x-2"><i class="ri-arrow-right-s-line text-primary"></i> Privacy Policy</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 hover:translate-x-2"><i class="ri-arrow-right-s-line text-primary"></i> Refund Policy</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 hover:translate-x-2"><i class="ri-arrow-right-s-line text-primary"></i> Cancellation Policy</a></li>
          </ul>
        </div>

        <!-- Column 4 -->
        <div>
          <h3 class="text-white font-bold text-xl mb-8 relative inline-block">
            Contact Us
            <span class="absolute -bottom-3 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
          </h3>
          <ul class="space-y-5 text-gray-400">
            <li class="flex items-start gap-4 hover:translate-x-1 transition-transform duration-300">
              <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 shadow-inner">
                <i class="ri-map-pin-2-fill text-primary text-xl"></i>
              </div>
              <span class="mt-2">123 Education Street, Tech Hub, City, Country 123456</span>
            </li>
            <li class="flex items-center gap-4 hover:translate-x-1 transition-transform duration-300">
              <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 shadow-inner">
                <i class="ri-phone-fill text-primary text-xl"></i>
              </div>
              <a href="tel:+919876543210" class="hover:text-white transition-colors mt-1">+91 98765 43210</a>
            </li>
            <li class="flex items-center gap-4 hover:translate-x-1 transition-transform duration-300">
              <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 shadow-inner">
                <i class="ri-mail-send-fill text-primary text-xl"></i>
              </div>
              <a href="mailto:info@institutehub.in" class="hover:text-white transition-colors mt-1">info@institutehub.in</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-center md:text-left text-gray-500 font-medium tracking-wide">&copy; 2026 InstituteHub. All rights reserved.</p>
        <div class="flex items-center gap-3">
          <a href="#" class="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-inner"><i class="ri-facebook-fill text-lg"></i></a>
          <a href="#" class="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-inner"><i class="ri-twitter-x-line text-lg"></i></a>
          <a href="#" class="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-inner"><i class="ri-instagram-line text-lg"></i></a>
          <a href="#" class="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-inner"><i class="ri-linkedin-fill text-lg"></i></a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Floating Action Buttons -->
  <a href="https://wa.me/919794412733" target="_blank" class="fixed bottom-6 left-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl shadow-lg hover:bg-green-600 transition-colors z-50">
    <i class="ri-whatsapp-line"></i>
  </a>
  <a href="#" class="fixed bottom-6 right-6 w-12 h-12 bg-transparent border-2 border-primary text-primary rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-primary hover:text-white transition-all z-50 focus:outline-none">
    <i class="ri-arrow-up-s-line"></i>
  </a>

  <script src="./src/main.js"></script>
  <script>
    // Testimonial Auto Slider
    let currentTesti = 0;
    const testiItems = document.querySelectorAll('.testimonial-item');
    if (testiItems.length > 0) {
      setInterval(() => {
        testiItems.forEach(i => {
          i.classList.remove('opacity-100');
          i.classList.add('opacity-0', 'pointer-events-none');
        });
        currentTesti = (currentTesti + 1) % testiItems.length;
        testiItems[currentTesti].classList.remove('opacity-0', 'pointer-events-none');
        testiItems[currentTesti].classList.add('opacity-100');
      }, 5000);
    }
    
    // Count up animation for stats
    const counters = document.querySelectorAll('.counter');
    const animateCounters = () => {
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / 200;
        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(animateCounters, 1);
        } else {
          counter.innerText = target + "+";
        }
      });
    };
    
    // Trigger count up when hero is visible
    setTimeout(animateCounters, 1000);
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '../index.html'), homepageHtml);
console.log('Homepage index.html successfully created!');
