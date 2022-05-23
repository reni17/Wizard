import { collision } from "./collision.js";

export function start(state, game) {
  game.createWizard(state.wizard);

  window.requestAnimationFrame((timestamp) => gameLoop(state, game, timestamp));
}

export function gameLoop(state, game, timestamp) {
  wizardMoovement(state, game);

  if (state.keys.Space) {

    game.wizard.style.backgroundImage = 'url("/src/images/wizard-fire.png")';

    if (timestamp > state.fireball.nextTimestamp) {
        game.createFireball(state.wizard, state.fireball);
        state.fireball.nextTimestamp =
          timestamp + state.fireball.maxSpawnInterval;
      }

    
  } else {
    game.wizard.style.backgroundImage = 'url("/src/images/wizard.png")';
  }

  //spawnBugs

  if (timestamp > state.bugSettings.nextTimestamp) {
    game.createBug(state.bugSettings);
    state.bugSettings.nextTimestamp =
      timestamp + Math.random() * state.bugSettings.maxSpawnInterval;
  }

  //render Bugs
  let bugElements = document.querySelectorAll('.bug');
  bugElements.forEach((el) => {
    let posX = parseInt(el.style.left);
    if (posX > 0) {
      el.style.left = posX - state.bugSettings.speed + 'px';
    } else {
      el.remove();
    }
  });

  //render firebows
  document.querySelectorAll(".fireball").forEach((fireballEl) => {
    let posX = parseInt(fireballEl.style.left);

    //detect collision

    bugElements.forEach((el) => {
      if (collision(el, fireballEl)) {
        el.remove();
        fireballEl.remove();
      }
      if (posX > game.gameScreen.offsetWidth) {
        fireballEl.remove();
      } else {
        fireballEl.style.left = posX + state.fireball.speed + "px";
      }
    });
  });

  window.requestAnimationFrame(gameLoop.bind(null, state, game));
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
