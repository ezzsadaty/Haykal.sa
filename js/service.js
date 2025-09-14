// document.addEventListener('DOMContentLoaded', function() {
//     // Filter Services
//     const filterButtons = document.querySelectorAll('.filter-buttons button');
//     const serviceCards = document.querySelectorAll('.service-card');
    
//     filterButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             // Update active button
//             filterButtons.forEach(btn => btn.classList.remove('active'));
//             button.classList.add('active');
            
//             const filterValue = button.getAttribute('data-filter');
            
//             // Filter services
//             serviceCards.forEach(card => {
//                 if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
//                     card.style.display = 'block';
//                 } else {
//                     card.style.display = 'none';
//                 }
//             });
//         });
//     });
    
//     // Service Card Click (Show Details)
//     serviceCards.forEach(card => {
//         card.addEventListener('click', function(e) {
//             // Don't trigger if clicking on CTA link
//             if (e.target.closest('.service-cta')) return;
            
//             // Toggle active class
//             this.classList.toggle('active');
            
//             // Close other open cards
//             serviceCards.forEach(otherCard => {
//                 if (otherCard !== this) {
//                     otherCard.classList.remove('active');
//                 }
//             });
//         });
//     });
    
//     // Service Spotlight
//     const spotlight = document.querySelector('.service-spotlight');
//     const closeSpotlight = document.querySelector('.close-spotlight');
//     const spotlightTitle = document.getElementById('spotlight-title');
//     const spotlightDesc = document.getElementById('spotlight-desc');
//     const spotlightImg = document.getElementById('spotlight-img');
    
//     // Sample data - replace with your actual service data
//     const serviceData = {
//         'بناء الاستراتيجيات المؤسسية': {
//             desc: `
//                 <p>نقدم منهجية متكاملة لبناء الاستراتيجيات المؤسسية التي تتماشى مع رؤية 2030، بدءاً من التحليل الاستراتيجي وحتى تنفيذ المبادرات.</p>
//                 <h3>مميزات الخدمة:</h3>
//                 <ul>
//                     <li>تحليل SWOT متعمق</li>
//                     <li>وضع الأهداف الاستراتيجية SMART</li>
//                     <li>خرائط استراتيجية متكاملة</li>
//                     <li>ربط الاستراتيجيات بمؤشرات الأداء</li>
//                 </ul>
//                 <h3>النتائج المتوقعة:</h3>
//                 <p>استراتيجية واضحة قابلة للتنفيذ مع خارطة طريق مفصلة لتحقيق الأهداف المؤسسية</p>
//             `,
//             img: 'images/service-strategy.jpg'
//         },
//         'إدارة السمعة الرقمية': {
//             desc: `
//                 <p>حلول متكاملة لمراقبة وإدارة السمعة الرقمية للمؤسسات عبر جميع المنصات الرقمية</p>
//                 <h3>مميزات الخدمة:</h3>
//                 <ul>
//                     <li>مراقبة المحتوى الرقمي 24/7</li>
//                     <li>إدارة الأزمات الإلكترونية الفورية</li>
//                     <li>تحليل المشاعر والرأي العام</li>
//                     <li>تقارير شهرية مفصلة</li>
//                 </ul>
//                 <h3>النتائج المتوقعة:</h3>
//                 <p>تحسين الصورة الذهنية للمؤسسة وزيادة الثقة لدى الجمهور المستهدف</p>
//             `,
//             img: 'images/service-digital.jpg'
//         }
//         // Add data for all services
//     };
    
//     // Open spotlight when clicking service title
//     serviceCards.forEach(card => {
//         const title = card.querySelector('h3');
//         title.style.cursor = 'pointer';
        
//         title.addEventListener('click', function(e) {
//             const serviceName = this.textContent;
//             spotlightTitle.textContent = serviceName;
//             spotlightDesc.innerHTML = serviceData[serviceName].desc;
//             spotlightImg.src = serviceData[serviceName].img;
//             spotlightImg.alt = serviceName;
            
//             spotlight.classList.add('active');
//             document.body.style.overflow = 'hidden';
//         });
//     });
    
//     // Close spotlight
//     closeSpotlight.addEventListener('click', () => {
//         spotlight.classList.remove('active');
//         document.body.style.overflow = 'auto';
//     });
    
//     // Close when clicking outside content
//     spotlight.addEventListener('click', function(e) {
//         if (e.target === this) {
//             this.classList.remove('active');
//             document.body.style.overflow = 'auto';
//         }
//     });
    
//     // Animate stats in case studies when scrolling
//     const caseStats = document.querySelectorAll('.case-stats span');
    
//     const animateStats = () => {
//         caseStats.forEach(stat => {
//             const target = +stat.getAttribute('data-value') || +stat.textContent.replace('+','').replace('%','');
//             const count = +stat.textContent.replace('+','').replace('%','');
            
//             if (count < target) {
//                 stat.textContent = Math.ceil(count + (target/50));
//                 setTimeout(animateStats, 20);
//             } else {
//                 stat.textContent = target + (stat.textContent.includes('+') ? '+' : (stat.textContent.includes('%') ? '%' : ''));
//             }
//         });
//     };
    
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 animateStats();
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, { threshold: 0.5 });
    
//     document.querySelectorAll('.case-studies').forEach(section => {
//         observer.observe(section);
//     });
// });



document.addEventListener('DOMContentLoaded', function() {
    // Filter Services
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const serviceCards = document.querySelectorAll('.service-card');
    console.log(filterButtons);
    console.log(serviceCards)
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filter services - hide all first
            serviceCards.forEach(card => {
                card.style.display = 'none';
            });
            
            // Then show only matching services
            if (filterValue === 'all') {
                serviceCards.forEach(card => {
                    card.style.display = 'block';
                });
            } else {
                serviceCards.forEach(card => {
                    const categories = card.getAttribute('data-category').split(' ');
                    if (categories.includes(filterValue)) {
                        card.style.display = 'block';
                    }
                });
            }
            
            // Close any open service details when filtering
            serviceCards.forEach(card => {
                card.classList.remove('active');
            });
        });
    });
    
    // Service Card Click (Show Details)
    serviceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on CTA link
            if (e.target.closest('.service-cta')) return;
            
            // Toggle active class
            this.classList.toggle('active');
            
            // Close other open cards
            serviceCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.classList.remove('active');
                }
            });
        });
    });
    
    // // Service Spotlight
    // const spotlight = document.querySelector('.service-spotlight');
    // const closeSpotlight = document.querySelector('.close-spotlight');
    // const spotlightTitle = document.getElementById('spotlight-title');
    // const spotlightDesc = document.getElementById('spotlight-desc');
    // const spotlightImg = document.getElementById('spotlight-img');
    
    // // Sample data - replace with your actual service data
    // const serviceData = {
    //     'بناء الاستراتيجيات المؤسسية': {
    //         desc: `
    //             <p>نقدم منهجية متكاملة لبناء الاستراتيجيات المؤسسية التي تتماشى مع رؤية 2030، بدءاً من التحليل الاستراتيجي وحتى تنفيذ المبادرات.</p>
    //             <h3>مميزات الخدمة:</h3>
    //             <ul>
    //                 <li>تحليل SWOT متعمق</li>
    //                 <li>وضع الأهداف الاستراتيجية SMART</li>
    //                 <li>خرائط استراتيجية متكاملة</li>
    //                 <li>ربط الاستراتيجيات بمؤشرات الأداء</li>
    //             </ul>
    //             <h3>النتائج المتوقعة:</h3>
    //             <p>استراتيجية واضحة قابلة للتنفيذ مع خارطة طريق مفصلة لتحقيق الأهداف المؤسسية</p>
    //         `,
    //         img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    //     },
    //     'تحليل الأداء المؤسسي': {
    //         desc: `
    //             <p>خدمة متخصصة في تقييم أداء المؤسسات ووضع خطط التحسين المستمر</p>
    //             <h3>مميزات الخدمة:</h3>
    //             <ul>
    //                 <li>تحليل مؤشرات الأداء الرئيسية (KPIs)</li>
    //                 <li>مقارنة معيارية مع المنافسين</li>
    //                 <li>تحديد نقاط القوة والضعف</li>
    //                 <li>خطط تحسين الأداء</li>
    //             </ul>
    //             <h3>النتائج المتوقعة:</h3>
    //             <p>تحسين كفاءة العمليات وزيادة الإنتاجية وتقليل التكاليف</p>
    //         `,
    //         img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    //     },
    //     'إدارة السمعة الرقمية': {
    //         desc: `
    //             <p>حلول متكاملة لمراقبة وإدارة السمعة الرقمية للمؤسسات عبر جميع المنصات الرقمية</p>
    //             <h3>مميزات الخدمة:</h3>
    //             <ul>
    //                 <li>مراقبة المحتوى الرقمي 24/7</li>
    //                 <li>إدارة الأزمات الإلكترونية الفورية</li>
    //                 <li>تحليل المشاعر والرأي العام</li>
    //                 <li>تقارير شهرية مفصلة</li>
    //             </ul>
    //             <h3>النتائج المتوقعة:</h3>
    //             <p>تحسين الصورة الذهنية للمؤسسة وزيادة الثقة لدى الجمهور المستهدف</p>
    //         `,
    //         img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    //     },
    //     'التواصل الحكومي': {
    //         desc: `
    //             <p>استراتيجيات متكاملة لتحسين التواصل بين الجهات الحكومية والمواطنين</p>
    //             <h3>مميزات الخدمة:</h3>
    //             <ul>
    //                 <li>إعداد الخطط التواصلية</li>
    //                 <li>إدارة الحملات الحكومية</li>
    //                 <li>قياس أثر التواصل</li>
    //                 <li>تحسين تجربة المستخدم</li>
    //             </ul>
    //             <h3>النتائج المتوقعة:</h3>
    //             <p>تحسين جودة الخدمات الحكومية وزيادة رضا المواطنين</p>
    //         `,
    //         img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    //     },
    //     'التخطيط للتحول الرقمي الحكومي': {
    //         desc: `
    //             <p>خطط استراتيجية لتحقيق التحول الرقمي في الجهات الحكومية وفق أفضل الممارسات العالمية</p>
    //             <h3>مميزات الخدمة:</h3>
    //             <ul>
    //                 <li>تحليل الوضع الراهن</li>
    //                 <li>وضع خارطة طريق التحول</li>
    //                 <li>إدارة تنفيذ المشاريع</li>
    //                 <li>قياس أثر التحول</li>
    //             </ul>
    //             <h3>النتائج المتوقعة:</h3>
    //             <p>تحول رقمي ناجح يحقق أهداف رؤية 2030 ويحسن تجربة المستخدم</p>
    //         `,
    //         img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    //     },
    //     'تقييم الأداء الحكومي': {
    //         desc: `
    //             <p>منهجيات علمية لقياس أداء الجهات الحكومية واقتراح خطط التحسين</p>
    //             <h3>مميزات الخدمة:</h3>
    //             <ul>
    //                 <li>تصميم مؤشرات الأداء</li>
    //                 <li>إعداد تقارير الأداء</li>
    //                 <li>مقترحات التحسين</li>
    //                 <li>متابعة التنفيذ</li>
    //             </ul>
    //             <h3>النتائج المتوقعة:</h3>
    //             <p>تحسين جودة الخدمات الحكومية وزيادة كفاءة الأداء</p>
    //         `,
    //         img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    //     },
    //     'استشارات الموارد البشرية': {
    //         desc: `
    //             <p>حلول متكاملة لإدارة وتطوير الموارد البشرية في القطاع الخاص</p>
    //             <h3>مميزات الخدمة:</h3>
    //             <ul>
    //                 <li>تصميم الهياكل التنظيمية</li>
    //                 <li>تطوير سياسات الموارد البشرية</li>
    //                 <li>برامج تدريب وتطوير الموظفين</li>
    //                 <li>أنظمة تقييم الأداء</li>
    //             </ul>
    //             <h3>النتائج المتوقعة:</h3>
    //             <p>تحسين إنتاجية الموظفين وزيادة ولائهم للمؤسسة</p>
    //         `,
    //         img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    //     },
    //     'استشارات التسويق الرقمي': {
    //         desc: `
    //             <p>خطط تسويقية مبتكرة لتعزيز الحضور الرقمي للشركات</p>
    //             <h3>مميزات الخدمة:</h3>
    //             <ul>
    //                 <li>تحليل السوق الرقمي</li>
    //                 <li>تخطيط الحملات التسويقية</li>
    //                 <li>تحسين محركات البحث</li>
    //                 <li>إدارة وسائل التواصل الاجتماعي</li>
    //             </ul>
    //             <h3>النتائج المتوقعة:</h3>
    //             <p>زيادة المبيعات وتحسين الصورة الذهنية للعلامة التجارية</p>
    //         `,
    //         img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    //     }
    // };
    
    // // Open spotlight when clicking service title
    // serviceCards.forEach(card => {
    //     const title = card.querySelector('h3');
    //     title.style.cursor = 'pointer';
        
    //     title.addEventListener('click', function(e) {
    //         const serviceName = this.textContent;
    //         spotlightTitle.textContent = serviceName;
    //         spotlightDesc.innerHTML = serviceData[serviceName].desc;
    //         spotlightImg.src = serviceData[serviceName].img;
    //         spotlightImg.alt = serviceName;
            
    //         spotlight.classList.add('active');
    //         document.body.style.overflow = 'hidden';
    //     });
    // });
    
    // // Close spotlight
    // closeSpotlight.addEventListener('click', () => {
    //     spotlight.classList.remove('active');
    //     document.body.style.overflow = 'auto';
    // });
    
    // // Close when clicking outside content
    // spotlight.addEventListener('click', function(e) {
    //     if (e.target === this) {
    //         this.classList.remove('active');
    //         document.body.style.overflow = 'auto';
    //     }
    // });
    
// Scroll to services when clicking indicator
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const servicesSection = document.querySelector('.interactive-services');
            if (servicesSection) {
                servicesSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});
