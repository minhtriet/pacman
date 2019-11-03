import * as tf from '@tensorflow/tfjs';

let obNext;
let reward;

const logEnv = function(state, moveReward) {
  if (state) {
    // ghosts = [x][y][edible]
    let ghosts = tf.tensor(state.get('ghost_position').concat([state.get('ghost_edible')]).flat());
    let user = tf.tensor([state.get('user_position')['x'], state.get('user_position')['y']);
    let map = tf.tensor(state.get('map'));
  }
  reward = moveReward;
  
};

export {logEnv};
