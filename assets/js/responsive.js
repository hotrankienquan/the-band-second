var header = document.querySelector('#header')
var mobileMenu = document.querySelector('#mobile-menu')
var currentHeight = header.clientHeight;
mobileMenu.onclick = function () {
	// console.log(header.clientHeight)
	// var isClosed = header.clientHeight === 46;
	// if (isClosed)
	// {
	// 	header.style.height = 'auto'

		
	// }
	// else {
	// 	header.style.height = '46px'
	// }
	header.clientHeight === currentHeight ? header.style.height = 'auto' : header.style.height = null ;

}

// auto dong khi chon menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]') 
menuItems.forEach((menuItem) => {
	// tim menu cha
	
	menuItem.onclick = function (event) {
		var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
		if (isParentMenu) {
			
			// bo default cua thz cha more
			event.preventDefault()
		} else {
			header.style.height = null
		}
	}
})