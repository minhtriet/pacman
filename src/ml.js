// import * as tf from '@tensorflow/tfjs';

/**const mobilenet = tf.loadLayersModel(
      'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');*/

// hit a coin, reward + 1
// remove score
// eat ghost
// eat fruit
// die
let ob_next;
let reward;
let log = [];
// ob_next, reward, done, info = env.step(action)

var logEnv = function(state, move_reward) {
    let iterator = state.values();
    let substate;
    while (true) {
        substate = iterator.next();
        if (substate['done'] == true) {
            break;
        }
        ob_next.push(...substate.value);
    }
    move_reward = reward;

}

export { logEnv }
