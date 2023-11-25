window.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'w':
            if (player.velocity.y === 0)
            {
                player.velocity.y = -20
            }
            break
        case 'a':
            //player pra esquerda
            keys.a.pressed = true
            break
        case 'd':
            //player pra direita
            keys.d.pressed = true
            break
    }
})

window.addEventListener('keyup', (event) => {
    switch(event.key) {
        case 'a':
            //player parar de ir pra esquerda
            keys.a.pressed = false
            break
        case 'd':
            //player parar de ir pra direita
            keys.d.pressed = false
            break
    }
})  