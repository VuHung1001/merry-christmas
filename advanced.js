window.addEventListener("DOMContentLoaded", () => {

function displayText() {
	const greetingArr = 'Merry Christmas !!'.split('');
	const greetingArr2 = 'Wish you a happy holiday with your loved ones'.split('');
	const textContainer = document.querySelector('.text-container.text-outside-card');
	const textContainer2 = document.querySelector('.text-container.text-inside-card');

	function renderText(textContainer, greetingArr) {
		if (textContainer) {
			textContainer.innerHTML = '';
		}

		for (let i = 0; i < greetingArr.length; i++) {
			const char = greetingArr[i];
			const spanEle = document.createElement('span');
			spanEle.setAttribute('style', `--index: ${i+1}`);
			spanEle.style.transform = 'scale(1)';
			spanEle.innerText = char;
			if (char === '') {
				spanEle.innerHTML = '&nbsp;'
			}

			if (textContainer) {
				textContainer.appendChild(spanEle);
			}
		}
	}

	renderText(textContainer, greetingArr)
	window.renderText = () => renderText(textContainer2, greetingArr2)
}   
displayText();  
setInterval(() => {
	displayText();  
}, 3500);  






function createSnowflake() {
	const snowflake = document.createElement('div');
	snowflake.classList.add('snowflake');
	
	// Vị trí ngẫu nhiên từ trái sang phải
	snowflake.style.left = Math.random() * 100 + '%';
	
	// Kích thước ngẫu nhiên
	const size = Math.random() * 5 + 2;
	snowflake.style.width = `${size}px`;
	snowflake.style.height = `${size}px`;
	
	document.body.appendChild(snowflake);

	// Động tác rơi
	snowflake.animate([
		{ transform: 'translateY(-10px)', opacity: 0.8 },
		{ transform: 'translateY(100vh)', opacity: 0.2 }
	], {
		duration: Math.random() * 5000 + 3000, // Thời gian rơi 3-8 giây
		easing: 'linear',
		fill: 'forwards'
	});

	// Xóa bông tuyết sau khi rơi xong
	setTimeout(() => {
		snowflake.remove();
	}, 8000);
}

// Tạo tuyết liên tục
function startSnowfall() {
	setInterval(createSnowflake, 200); // Tạo bông tuyết mỗi 200ms
}

// Bắt đầu hiệu ứng khi trang tải
window.addEventListener('load', startSnowfall);






const viewCardBtn = document.querySelector('.view-card-btn')
if (viewCardBtn) {
	setTimeout(() => {
		viewCardBtn.style.visibility = 'visible';
		viewCardBtn.style.opacity = '1';
		viewCardBtn.style.transform = 'scale(1)';
		viewCardBtn.style.animation = 'appear 0.8s forwards';
	// }, 9500);
	}, 3500);
}
})



function viewCard() {
	const card = document.querySelector('.card');
	const noelTree = document.querySelector('.noel-tree');
	const viewCardBtn = document.querySelector('.view-card-btn')
	const wrapperCard = document.querySelector('.wrapper-card')

	if (card) {
		card.style.visibility = 'visible';
		card.style.opacity = '1';
		card.style.transform = 'translateY(0)';
	}

	if (noelTree) {
		noelTree.style.visibility = 'hidden';
		noelTree.style.opacity = '0';
	}

	if (viewCardBtn) {
		viewCardBtn.style.visibility = 'hidden';
		viewCardBtn.style.opacity = '0';
	}

	if (wrapperCard) {
		function handleMouseOverCard() {
			return debounce(() => {
				const textContainer2 = document.querySelector('.text-container.text-inside-card');
	
				if (textContainer2) {
					textContainer2.innerHTML = '';
				}
	
				setTimeout(() => {
					if (window.renderText) {
						window.renderText();
					}
				});
			})
		}
		wrapperCard.addEventListener('mouseover', handleMouseOverCard())

		wrapperCard.addEventListener('click', (event) => {
			const target = event.target;
			if (target?.className === 'wrapper-card') {
				wrapperCard.removeEventListener('mouseover', handleMouseOverCard());
				if (card) {
					card.style.visibility = 'hidden';
					card.style.opacity = '0';
					card.style.transform = 'translateY(-100vh)';
				}
			
				if (noelTree) {
					noelTree.style.visibility = 'visible';
					noelTree.style.opacity = '1';
				}
			
				if (viewCardBtn) {
					viewCardBtn.style.visibility = 'visible';
					viewCardBtn.style.opacity = '1';
				}
			}			
		})
	}
}

function debounce (callback, wait = 800) {
	let timeoutId = null;
	return (...args) => {
		window.clearTimeout(timeoutId);
		timeoutId = window.setTimeout(() => {
			callback(...args);
		}, wait);
	};
}

// window.addEventListener('load', function() {
// 		// Mô phỏng nhấp chuột tự động
// 		const event = new MouseEvent('click', {
// 			view: window,
// 			bubbles: true,
// 			cancelable: true
// 		});
  
// 	  // Kích hoạt sự kiện nhấp chuột trên phần tử body hoặc bất kỳ phần tử nào khác
// 	  document.body.dispatchEvent(event);
// });  // chỉ kích hoạt một lần, khi có tương tác đầu tiên

document.addEventListener('click', function() {
    const audio = document.getElementById('audioElement');
    if (audio.paused) {
		audio.muted = false;
		audio.volume = 0.25;
      	audio.play();
    }
}, { once: true });  // chỉ kích hoạt một lần, khi có tương tác đầu tiên
