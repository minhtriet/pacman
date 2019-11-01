// import * as tf from '@tensorflow/tfjs';


// hit a coin, reward + 1
// remove score
// eat ghost
// eat fruit
// die
const obNext = [];
let reward;
// ob_next, reward, done, info = env.step(action)

const logEnv = function(state, moveReward) {
  if (state) {
    const iterator = state.values();
    let substate;
    while (true) {
      substate = iterator.next();
      if (substate['done'] == true) {
        break;
      }
      obNext.push(...substate.value);
    }
  }
  reward = moveReward;
};

export {logEnv};
