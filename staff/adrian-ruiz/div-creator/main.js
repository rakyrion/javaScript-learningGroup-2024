

const body = document.getElementById('body')

const tablero = document.createElement('div')
tablero.className = 'tablero'

body.appendChild(tablero)
// BUCLES FOR

for(let i = 0; i < 8; i++){
	const fila = document.createElement('div')
	fila.className = 'fila'
	if (i % 2 !== 0) {
		fila.classList.add('impar')
	}
	
	for(let z = 0; z < 8; z++){
		
		const casilla = document.createElement('div')
		casilla.className = 'casilla'

		if (z % 2 === 0) {
			casilla.classList.add('blanca')
		} else {
			casilla.classList.add('negra')
		}

		fila.appendChild(casilla)
	}
	
	tablero.appendChild(fila)
}

const peon = document.getElementById('peon')

let peonTop = 330
let peonLeft = 30

const btnUp = document.getElementById('btn-up')
const btnLeft = document.getElementById('btn-left')
const btnRight = document.getElementById('btn-right')
const btnDown = document.getElementById('btn-down')

btnUp.addEventListener('click', () => {
	console.log('HAS CLICKADO ARRIBA')
	if (peonTop > 330) {
		peonTop -= 80
		peon.style.top = peonTop + 'px'
	} 
	
})

btnDown.addEventListener('click', () => {
	console.log('HAS CLICKADO ABAJO')
	if (peonTop < 890) {
		peonTop += 80
		peon.style.top = peonTop + 'px'
	}
})

btnLeft.addEventListener('click', () => {
	console.log('HAS CLICKADO IZQUIERDA')
	
	if (peonLeft > 30) {
		peonLeft -= 80
		peon.style.left = peonLeft + 'px'
	}
})


btnRight.addEventListener('click', () => {
	console.log('HAS CLICKADO DERECHA')
	if (peonLeft < 590) {
		peonLeft += 80
		peon.style.left = peonLeft + 'px'
	}
})