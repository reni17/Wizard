import { collision } from "./collision.js";

export function start(state, game) {
  game.createWizard(state.wizard);

  window.requestAnimationFrame((timestamp) => gameLoop(state, game, timestamp));
}

export function gameLoop(state, game, timestamp) {
  wizardMoovement(state, game);

  if (state.keys.Space) {

    game.wizard.style.backgroundImage = 'url("/src/images/wizard-fire.png")';


    //spawn Fireballs
    if (timestamp > state.fireball.nextTimestamp) {
        game.createFireball(state.wizard, state.fireball);
        state.fireball.nextTimestamp =
          timestamp + state.fireball.maxSpawnInterval;
      }

    
  } else {
    game.wizard.style.backgroundImage = 'url("/src/images/wizard.png")';
  }

  //spawn Bugs

  if (timestamp > state.bugSettings.nextTimestamp) {
    game.createBug(state.bugSettings);
    state.bugSettings.nextTimestamp =
      timestamp + Math.random() * state.bugSettings.maxSpawnInterval;
  }

  //render Bugs
  let bugElements = document.querySelectorAll('.bug');
  bugElements.forEach((el) => {
    let posX = parseInt(el.style.left);

    if(collision(game.wizard, el)){
        state.gameOver = true
    }


    if (posX > 0) {
      el.style.left = posX - state.bugSettings.speed + 'px';
    } else {
      el.remove();
    }
  });

  //render fireballs
  document.querySelectorAll(".fireball").forEach((fireballEl) => {
    let posX = parseInt(fireballEl.style.left);

    //detect collision between bug and fieball

    bugElements.forEach((el) => {
      if (collision(el, fireballEl)) {
        el.remove();
        fireballEl.remove();
       let score = document.getElementById('score')
      score.textContent =parseInt(score.textContent)+2;
      

      }
      if (posX > game.gameScreen.offsetWidth) {
        fireballEl.remove();
      } else {
        fireballEl.style.left = posX + state.fireball.speed + "px";
      }
    });
  });

  //detect collision between wizard and bug

  if(state.gameOver){
    const end = document.getElementById('end')
    end.classList.remove('hidden')
  }else{
       window.requestAnimationFrame(gameLoop.bind(null, state, game));
  }
 
}

function wizardMoovement(state, game) {
  if (
    state.keys.KeyD &&
    state.wizard.posX + state.wizard.width < game.gameScreen.offsetWidth
  ) {
    state.wizard.posX += state.wizard.speed;
    game.wizard.style.left = state.wizard.posX + "px";
  } else if (
    state.keys.KeyS &&
    state.wizard.posY + state.wizard.height < game.gameScreen.offsetHeight
  ) {
    state.wizard.posY += state.wizard.speed;
    game.wizard.style.top = state.wizard.posY + "px";
  } else if (state.keys.KeyW && state.wizard.posY > 50) {
    state.wizard.posY -= state.wizard.speed;
    game.wizard.style.top = state.wizard.posY + "px";
  } else if (state.keys.KeyA && state.wizard.posX > 0) {
    state.wizard.posX -= state.wizard.speed;
    game.wizard.style.left = state.wizard.posX + "px";
  }
}
