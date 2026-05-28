// 导航栏滚动效果
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 100) {
    nav.style.padding = '8px 0';
    nav.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
  } else {
    nav.style.padding = '16px 0';
    nav.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
  }
});

// 移动端菜单切换
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = '#fff';
    navLinks.style.padding = '20px';
    navLinks.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      if (window.innerWidth <= 768) navLinks.style.display = 'none';
    }
  });
});

// 元素进入视口动画
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.featured-card, .tool-card, .cat-card, .about-wrap').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'row';
    navLinks.style.position = 'static';
    navLinks.style.padding = '0';
    navLinks.style.boxShadow = 'none';
    navLinks.style.background = 'transparent';
  } else {
    navLinks.style.display = 'none';
  }
});
