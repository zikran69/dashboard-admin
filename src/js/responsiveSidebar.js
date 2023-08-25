const s = (elm) => document.getElementById(elm)

const triggerToggle = (elm) => {
  s(elm).addEventListener('click', () => {
    s('sidebar').classList.toggle('hidden')
    s('sidebar-overlay').classList.toggle('hidden')
    s('close-sidebar').classList.toggle('hidden')
    return s('sidebar').classList.contains('hidden')
      ? s('open-sidebar').classList.remove('text-primary-blue')
      : s('open-sidebar').classList.add('text-primary-blue')
  })
}

;['open-sidebar', 'close-sidebar', 'sidebar-overlay'].forEach(triggerToggle)

const close_sidebar = document.getElementById('close-sidebar');
close_sidebar.classList.add('lg:hidden');

