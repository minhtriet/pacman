import * as tf from '@tensorflow/tfjs';

let obNext;
let reward;

const logEnv = function(state, moveReward) {
  if (state) {
    let ghostsAndPlayer = state.get('ghost_position').concat(state.get('ghost_edible'));
    ghostsAndPlayer = ghostsAndPlayer.concat(state.get('user_position')['x']);
    ghostsAndPlayer = ghostsAndPlayer.concat(state.get('user_position')['y']);
    ghostsAndPlayer = ghostsAndPlayer.flat(Infinity);
//    obNext = tf.tensor(state.get('map').unshift(ghostsAndPlayer));
    debugger;
    obNext = tf.tensor(state.get('map'));
    debugger;
  }
  reward = moveReward;
};

export {logEnv};
