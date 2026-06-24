document.addEventListener('DOMContentLoaded', function () {
    // تشغيل القائمة المنسدلة للأسئلة الشائعة بشكل مرن وسريع
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            
            // تبديل العرض للـ Answer الحالية
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});