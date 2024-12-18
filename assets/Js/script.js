
// Mobile screen hamburger menu
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

function navToggle() {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll')
    // document.body.classList.toggle('hidden')
}

btn.addEventListener('click', navToggle);

// <!-- Add this script at the end of your body tag -->
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    }); 
});


// Percentage Bar 
window.onload = function() {
    let progressBar = document.getElementById('progress');
    let progressBar1 = document.getElementById('progress1');
    let progressBar2 = document.getElementById('progress2');
    let progressBar3 = document.getElementById('progress3');
    let progressBar4 = document.getElementById('progress4');
    let progressBar5 = document.getElementById('progress5');
    let progressBar6 = document.getElementById('progress6');
    let progressBar7 = document.getElementById('progress7');
    let progressBar8 = document.getElementById('progress8');

    function loadBar(bar, targetWidth, intervalTime, callback){
        let width = 0;
        bar.style.width = '0%';
        bar.textContent = '0%';

        let loading = setInterval(() => {
            if (width >= targetWidth) {
              clearInterval(loading);
              if (callback) {
                  callback();
              }
            } else {
              width++;
              bar.style.width = width + '%';
              bar.textContent = width + '%';
            }
    }, intervalTime);
}

function startLoading() {
    loadBar(progressBar, 80, 15, () => {
        loadBar(progressBar1, 92, 15, () => {
            loadBar(progressBar2, 82, 15, () => {
                loadBar(progressBar3, 70,15, ()=> {
                    loadBar(progressBar4, 71,15, ()=> {
                    loadBar(progressBar5, 70,15, ()=> {
                        loadBar(progressBar6, 81,15, ()=> {
                            loadBar(progressBar7, 85,15, ()=> {
                                setTimeout(startLoading, 200); // Restart loading after a delay
                                });                   
                            });
                        });
                    });
                });
            });
        });
    });
}

  startLoading();
}


 // JavaScript to add a 'scrolled' class when scrolling down
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else{
        header.classList.remove('scrolled');
    }
});


