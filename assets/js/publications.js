(() => {
  'use strict';
  const browser = document.querySelector('[data-publication-browser]');
  if (!browser) return;
  const form = browser.querySelector('form');
  const query = form.querySelector('input');
  const year = form.querySelector('#publication-year');
  const type = form.querySelector('#publication-type');
  const count = form.querySelector('.result-count');
  const empty = browser.querySelector('.empty-results');
  const groups = Array.from(browser.querySelectorAll('.publication-year'));
  const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const papers = Array.from(browser.querySelectorAll('.publication')).map(element => ({
    element,
    text: normalize(['h3', '.authors', '.venue', '.publication-note'].map(selector =>
      element.querySelector(selector)?.textContent || '').join(' ') + ' ' + element.dataset.keywords)
  }));

  function filter() {
    const terms = normalize(query.value).trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    papers.forEach(({element, text}) => {
      element.hidden = !(terms.every(term => text.includes(term)) &&
        (!year.value || element.dataset.year === year.value) &&
        (!type.value || element.dataset.type === type.value));
      if (!element.hidden) visible++;
    });
    groups.forEach(group => { group.hidden = !group.querySelector('.publication:not([hidden])'); });
    count.textContent = browser.dataset.resultTemplate.replace('{count}', visible).replace('{total}', papers.length);
    empty.hidden = visible !== 0;
  }

  form.hidden = false;
  form.addEventListener('submit', event => event.preventDefault());
  query.addEventListener('input', filter);
  year.addEventListener('change', filter);
  type.addEventListener('change', filter);
  form.addEventListener('reset', () => {
    // Wait until the browser has restored the controls' default values.
    setTimeout(() => { filter(); query.focus(); }, 0);
  });
  filter();

  browser.querySelectorAll('[data-copy]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', async () => {
      const paper = button.closest('.publication');
      const status = paper.querySelector('.copy-status');
      const fallback = paper.querySelector('.manual-copy');
      const text = document.getElementById(button.dataset.copy).textContent.trim();
      status.textContent = '';
      fallback.hidden = true;
      try {
        await navigator.clipboard.writeText(text);
        status.textContent = browser.dataset.copied;
      } catch {
        status.textContent = browser.dataset.copyFailed;
        fallback.hidden = false;
        const textarea = fallback.querySelector('textarea');
        textarea.value = text;
        textarea.focus();
        textarea.select();
      }
    });
  });
})();
