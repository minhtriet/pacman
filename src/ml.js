// import * as tf from '@tensorflow/tfjs';


// hit a coin, reward + 1
// remove score
// eat ghost
// eat fruit
// die
let obNext;
let reward;
// ob_next, reward, done, info = env.step(action)

const rl = function(ob, rw) {
  debugger;
}

const logEnv = function(state, moveReward) {
  if (state) {
    let ghostsAndPlayer = state.get('ghost_position').concat(state.get('ghost_edible'));
    ghostsAndPlayer = ghostsAndPlayer.concat(state.get('user_position')['x']);
    ghostsAndPlayer = ghostsAndPlayer.concat(state.get('user_position')['y']);
    ghostsAndPlayer = ghostsAndPlayer.flat(Infinity);
    obNext = state.get('map').unshift(ghostsAndPlayer);
  }
  reward = moveReward;
  rl(obNext, reward);
};

export {logEnv};
