const fs = require('fs');

const layout = fs.readFileSync('src/layout.html', 'utf8');

const faqContent = `
    <!-- Cinematic Hero Section -->
    <section class="relative h-[550px] flex items-center justify-center overflow-hidden">
      <!-- Background Image with Ken Burns -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
             alt="Classroom" 
             class="w-full h-full object-cover animate-ken-burns">
      </div>
      <!-- Dark Cinematic Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#081C3A]/95 via-[#081C3A]/80 to-[#081C3A] z-10 mix-blend-multiply"></div>
      
      <!-- Floating Particles -->
      <div class="absolute inset-0 z-10 opacity-30 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>

      <!-- Center Content -->
      <div class="container mx-auto px-6 relative z-20 text-center animate-fade-up">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-6 shadow-premium">
          <i class="ri-book-read-fill text-accent"></i> Frequently Asked Questions
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-2xl">
          Frequently Asked Questions
        </h1>
        
        <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
          Find answers to the most common questions about admissions, courses, certificates, online exams, student services, and franchise opportunities.
        </p>

        <!-- Breadcrumb -->
        <div class="flex items-center justify-center gap-2 text-sm font-medium text-gray-400">
          <a href="index.html" class="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span class="text-accent">FAQ</span>
        </div>
      </div>
    </section>

    <!-- FAQ Accordion Section -->
    <section class="py-24 bg-gray-50 relative -mt-10 z-30">
      <div class="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div class="bg-white/80 backdrop-blur-xl rounded-[32px] p-8 lg:p-14 shadow-premium border border-white/40 animate-fade-up" id="custom-faq-accordion">
          
          <div class="space-y-4">
            <!-- FAQ 1 -->
            <div class="faq-item group bg-gray-50/50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 hover:bg-white">
              <button class="faq-btn w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none relative">
                <span class="font-bold text-lg text-gray-900 pr-8 group-hover:text-primary transition-colors">How can I take admission at the institute?</span>
                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 faq-icon border border-gray-100 group-hover:border-primary/20">
                  <i class="ri-add-line text-primary text-xl transition-transform duration-300"></i>
                </div>
              </button>
              <div class="faq-content h-0 overflow-hidden transition-all duration-500 ease-in-out px-6">
                <p class="pb-6 text-gray-600 leading-relaxed text-base">You can take admission by visiting our campus at Nagwa Lanka, Varanasi, or you can apply online through the 'Online Admission' portal in the Student Zone. Make sure to have your educational documents ready for verification.</p>
              </div>
            </div>

            <!-- FAQ 2 -->
            <div class="faq-item group bg-gray-50/50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 hover:bg-white">
              <button class="faq-btn w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none relative">
                <span class="font-bold text-lg text-gray-900 pr-8 group-hover:text-primary transition-colors">What documents are required for admission?</span>
                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 faq-icon border border-gray-100 group-hover:border-primary/20">
                  <i class="ri-add-line text-primary text-xl transition-transform duration-300"></i>
                </div>
              </button>
              <div class="faq-content h-0 overflow-hidden transition-all duration-500 ease-in-out px-6">
                <p class="pb-6 text-gray-600 leading-relaxed text-base">Generally, you will need a copy of your recent passport-size photographs, Aadhar card or ID proof, and the marksheets of your highest educational qualification. Specific courses might require additional documents.</p>
              </div>
            </div>

            <!-- FAQ 3 -->
            <div class="faq-item group bg-gray-50/50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 hover:bg-white">
              <button class="faq-btn w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none relative">
                <span class="font-bold text-lg text-gray-900 pr-8 group-hover:text-primary transition-colors">Which computer courses are offered?</span>
                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 faq-icon border border-gray-100 group-hover:border-primary/20">
                  <i class="ri-add-line text-primary text-xl transition-transform duration-300"></i>
                </div>
              </button>
              <div class="faq-content h-0 overflow-hidden transition-all duration-500 ease-in-out px-6">
                <p class="pb-6 text-gray-600 leading-relaxed text-base">We offer a wide range of professional computer courses including Web Development, Data Science, Software Engineering, Graphic Design, DCA, ADCA, and various other short-term and long-term certification programs.</p>
              </div>
            </div>

            <!-- FAQ 4 -->
            <div class="faq-item group bg-gray-50/50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 hover:bg-white">
              <button class="faq-btn w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none relative">
                <span class="font-bold text-lg text-gray-900 pr-8 group-hover:text-primary transition-colors">Do you provide a certificate after course completion?</span>
                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 faq-icon border border-gray-100 group-hover:border-primary/20">
                  <i class="ri-add-line text-primary text-xl transition-transform duration-300"></i>
                </div>
              </button>
              <div class="faq-content h-0 overflow-hidden transition-all duration-500 ease-in-out px-6">
                <p class="pb-6 text-gray-600 leading-relaxed text-base">Yes, upon successful completion of your course and passing the final online examination, you will be awarded an ISO-certified and industry-recognized certificate from InstituteHub.</p>
              </div>
            </div>

            <!-- FAQ 5 -->
            <div class="faq-item group bg-gray-50/50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 hover:bg-white">
              <button class="faq-btn w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none relative">
                <span class="font-bold text-lg text-gray-900 pr-8 group-hover:text-primary transition-colors">How do I verify a student certificate or marksheet online?</span>
                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 faq-icon border border-gray-100 group-hover:border-primary/20">
                  <i class="ri-add-line text-primary text-xl transition-transform duration-300"></i>
                </div>
              </button>
              <div class="faq-content h-0 overflow-hidden transition-all duration-500 ease-in-out px-6">
                <p class="pb-6 text-gray-600 leading-relaxed text-base">You can easily verify certificates and marksheets by visiting our 'Certificate Verification' or 'Marksheet Verification' pages under the Student Zone. Simply enter the Enrollment Number to fetch the authentic details.</p>
              </div>
            </div>

            <!-- FAQ 6 -->
            <div class="faq-item group bg-gray-50/50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 hover:bg-white">
              <button class="faq-btn w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none relative">
                <span class="font-bold text-lg text-gray-900 pr-8 group-hover:text-primary transition-colors">Can I pay fees online?</span>
                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 faq-icon border border-gray-100 group-hover:border-primary/20">
                  <i class="ri-add-line text-primary text-xl transition-transform duration-300"></i>
                </div>
              </button>
              <div class="faq-content h-0 overflow-hidden transition-all duration-500 ease-in-out px-6">
                <p class="pb-6 text-gray-600 leading-relaxed text-base">Yes, we offer a secure online payment portal. You can navigate to the 'Online Payment' section from our main menu to pay your admission or tuition fees using UPI, Debit/Credit Cards, or Net Banking.</p>
              </div>
            </div>

            <!-- FAQ 7 -->
            <div class="faq-item group bg-gray-50/50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 hover:bg-white">
              <button class="faq-btn w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none relative">
                <span class="font-bold text-lg text-gray-900 pr-8 group-hover:text-primary transition-colors">Are classes available in Hindi and English?</span>
                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 faq-icon border border-gray-100 group-hover:border-primary/20">
                  <i class="ri-add-line text-primary text-xl transition-transform duration-300"></i>
                </div>
              </button>
              <div class="faq-content h-0 overflow-hidden transition-all duration-500 ease-in-out px-6">
                <p class="pb-6 text-gray-600 leading-relaxed text-base">Yes! Our expert faculty members teach comprehensively in both Hindi and English (Hinglish) to ensure that every student perfectly grasps the technical concepts without any language barrier.</p>
              </div>
            </div>

            <!-- FAQ 8 -->
            <div class="faq-item group bg-gray-50/50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 hover:bg-white">
              <button class="faq-btn w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none relative">
                <span class="font-bold text-lg text-gray-900 pr-8 group-hover:text-primary transition-colors">How can I download my admit card for exams?</span>
                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 faq-icon border border-gray-100 group-hover:border-primary/20">
                  <i class="ri-add-line text-primary text-xl transition-transform duration-300"></i>
                </div>
              </button>
              <div class="faq-content h-0 overflow-hidden transition-all duration-500 ease-in-out px-6">
                <p class="pb-6 text-gray-600 leading-relaxed text-base">Before your scheduled online exam, you can visit the 'Student Zone' and click on 'Download Admit Card'. Enter your registered details to instantly view and print your admit card.</p>
              </div>
            </div>

            <!-- FAQ 9 -->
            <div class="faq-item group bg-gray-50/50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 hover:bg-white">
              <button class="faq-btn w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none relative">
                <span class="font-bold text-lg text-gray-900 pr-8 group-hover:text-primary transition-colors">Do you offer franchise or study centre partnerships?</span>
                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 faq-icon border border-gray-100 group-hover:border-primary/20">
                  <i class="ri-add-line text-primary text-xl transition-transform duration-300"></i>
                </div>
              </button>
              <div class="faq-content h-0 overflow-hidden transition-all duration-500 ease-in-out px-6">
                <p class="pb-6 text-gray-600 leading-relaxed text-base">Yes, we actively partner with passionate educators and entrepreneurs. You can apply through the 'Franchise Registration' page. Our team will review your application and assist you in setting up an authorized InstituteHub study centre.</p>
              </div>
            </div>

            <!-- FAQ 10 -->
            <div class="faq-item group bg-gray-50/50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 hover:bg-white">
              <button class="faq-btn w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none relative">
                <span class="font-bold text-lg text-gray-900 pr-8 group-hover:text-primary transition-colors">What are the institute working hours and how do I contact you?</span>
                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 faq-icon border border-gray-100 group-hover:border-primary/20">
                  <i class="ri-add-line text-primary text-xl transition-transform duration-300"></i>
                </div>
              </button>
              <div class="faq-content h-0 overflow-hidden transition-all duration-500 ease-in-out px-6">
                <p class="pb-6 text-gray-600 leading-relaxed text-base">We are open Monday through Saturday from 9:00 AM to 6:00 PM. You can contact us via Phone at 9794412732, WhatsApp at 9794412733, or drop us an email at webcodian.institute@gmail.com.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Still Have Questions CTA -->
    <section class="py-24 relative overflow-hidden">
      <!-- Animated Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#081C3A] via-primary to-primary-light z-0"></div>
      
      <!-- Glowing Orbs -->
      <div class="absolute -top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-float"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-[100px] animate-float" style="animation-delay: 2s;"></div>
      
      <div class="container mx-auto px-6 lg:px-12 relative z-10">
        <div class="bg-white/10 backdrop-blur-2xl rounded-[32px] p-10 lg:p-16 border border-white/20 shadow-2xl text-center animate-fade-up max-w-5xl mx-auto">
          
          <div class="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-8 animate-bounce" style="animation-duration: 3s;">
            <i class="ri-question-answer-fill text-4xl text-white"></i>
          </div>

          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Still have a question?</h2>
          <p class="text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            If you couldn't find the answer you're looking for, our support team is always ready to help. Contact us for admissions, courses, certificate verification, franchise inquiries, or general assistance.
          </p>
          
          <div class="flex flex-wrap justify-center gap-5">
            <a href="contact.html" class="px-8 py-4 bg-white text-primary rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 magnetic-btn border border-transparent hover:border-white">
              Contact Us
            </a>
            <a href="tel:9794412732" class="px-8 py-4 bg-transparent border-2 border-white/50 text-white rounded-full font-bold hover:bg-white/10 hover:border-white hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              <i class="ri-phone-fill text-xl"></i> Call Now
            </a>
            <a href="https://wa.me/919794412733" target="_blank" class="px-8 py-4 bg-green-500 text-white rounded-full font-bold shadow-lg hover:bg-green-400 hover:shadow-green-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              <i class="ri-whatsapp-fill text-xl"></i> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Custom FAQ JS -->
    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const faqItems = document.querySelectorAll('#custom-faq-accordion .faq-item');
        
        faqItems.forEach(item => {
          const btn = item.querySelector('.faq-btn');
          const content = item.querySelector('.faq-content');
          const icon = item.querySelector('.faq-icon i');
          const iconContainer = item.querySelector('.faq-icon');
          
          btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Close all
            faqItems.forEach(otherItem => {
              otherItem.classList.remove('active', 'border-primary', 'shadow-md');
              otherItem.classList.add('border-gray-100');
              const otherContent = otherItem.querySelector('.faq-content');
              const otherIcon = otherItem.querySelector('.faq-icon i');
              const otherIconContainer = otherItem.querySelector('.faq-icon');
              otherContent.style.height = '0px';
              otherIcon.classList.remove('rotate-45', 'text-white');
              otherIcon.classList.add('text-primary');
              otherIconContainer.classList.remove('bg-primary', 'border-primary');
              otherIconContainer.classList.add('bg-white', 'border-gray-100');
            });
            
            if (!isOpen) {
              item.classList.add('active', 'border-primary', 'shadow-md');
              item.classList.remove('border-gray-100');
              content.style.height = content.scrollHeight + 'px';
              icon.classList.add('rotate-45', 'text-white');
              icon.classList.remove('text-primary');
              iconContainer.classList.add('bg-primary', 'border-primary');
              iconContainer.classList.remove('bg-white', 'border-gray-100');
            }
          });
        });
      });
    </script>
`;

let finalHtml = layout.replace('{{CONTENT}}', faqContent);
fs.writeFileSync('faq.html', finalHtml);
console.log('faq.html successfully created!');
