/* ============================================================
   Veritas Analytics — main.js
   ============================================================ */

(function () {
  'use strict';

  /* --- Navbar scroll effect --- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* --- Mobile hamburger --- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu on nav link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* --- Footer year --- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --- Scroll fade-in (IntersectionObserver) --- */
  const fadeTargets = document.querySelectorAll(
    '.service-card, .step, .about-text, .about-visual, .stat, .contact-form, .contact-info'
  );
  fadeTargets.forEach(el => el.classList.add('fade-in'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    fadeTargets.forEach(el => observer.observe(el));
  } else {
    // Fallback: show everything
    fadeTargets.forEach(el => el.classList.add('visible'));
  }

  /* --- Animated counters --- */
  const statNums = document.querySelectorAll('.stat-num');

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    statNums.forEach(el => statsObserver.observe(el));
  } else {
    statNums.forEach(el => { el.textContent = el.dataset.target; });
  }

  /* --- Contact form --- */
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameEl = document.getElementById('name');
      const emailEl = document.getElementById('email');
      const messageEl = document.getElementById('message');

      let valid = true;

      function setFieldError(el, errorId, msg) {
        const errorEl = document.getElementById(errorId);
        if (msg) {
          el.classList.add('invalid');
          el.setAttribute('aria-invalid', 'true');
          if (errorEl) errorEl.textContent = msg;
        } else {
          el.classList.remove('invalid');
          el.removeAttribute('aria-invalid');
          if (errorEl) errorEl.textContent = '';
        }
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const nameError = nameEl.value.trim() ? '' : 'Por favor, informe seu nome.';
      setFieldError(nameEl, 'name-error', nameError);
      if (nameError) valid = false;

      const emailMsg = !emailEl.value.trim()
        ? 'Por favor, informe seu e-mail.'
        : (!emailPattern.test(emailEl.value) ? 'Informe um e-mail válido.' : '');
      setFieldError(emailEl, 'email-error', emailMsg);
      if (emailMsg) valid = false;

      const messageError = messageEl.value.trim() ? '' : 'Por favor, escreva uma mensagem.';
      setFieldError(messageEl, 'message-error', messageError);
      if (messageError) valid = false;

      if (!valid) {
        feedback.textContent = 'Por favor, corrija os campos indicados.';
        feedback.className = 'form-note error';
        return;
      }

      // Simulate submission (no backend wired yet)
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Enviando…';

      setTimeout(() => {
        form.reset();
        ['name-error', 'email-error', 'message-error'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.textContent = '';
        });
        feedback.textContent = '✓ Mensagem enviada! Retornarei em até 24 horas.';
        feedback.className = 'form-note success';
        btn.disabled = false;
        btn.textContent = 'Enviar mensagem';
      }, 1200);
    });
  }

})();
