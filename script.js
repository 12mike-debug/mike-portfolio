// ============================================================
// This file adds interactivity. Right now it does one job:
// open/close the mobile navigation menu when the hamburger
// button (the three-line icon) is tapped on small screens.
// ============================================================

// "DOM" = Document Object Model. It's just the browser's live
// representation of everything on the page — every heading,
// button, link. document.getElementById() reaches into that
// representation and grabs one specific element by its "id".
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// addEventListener says: "when this happens, run this function."
// Here: when the hamburger button is clicked, toggle the menu.
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  // aria-expanded tells screen readers whether the menu is open —
  // it doesn't change how the page looks, only how it's announced.
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close the mobile menu automatically after tapping a link,
// so the menu doesn't stay open over the section you jumped to.
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});
