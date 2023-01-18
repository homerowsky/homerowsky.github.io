document.addEventListener('DOMContentLoaded', function () {
	const navBar = document.querySelector('.navbar')

	function addBg() {
		if (window.scrollY >= 300) {
			navBar.classList.add('scrolled')
		} else {
			navBar.classList.remove('scrolled')
		}
	}
	window.addEventListener('scroll', addBg)
})
