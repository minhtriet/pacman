import * as tf from '@tensorflow/tfjs';

let obNext;
let reward;


const createPolicyNetwork = function(hiddenLayerSizes) {
  if (!Array.isArray(hiddenLayerSizes)) {
    hiddenLayerSizes = [hiddenLayerSizes];
  }
  this.policyNet = tf.sequential();
  hiddenLayerSizes.forEach((hiddenLayerSize, i) => {
    this.policyNet.add(tf.layers.dense({
      units: hiddenLayerSize,
      activation: 'elu',
      // `inputShape` is required only for the first layer.
      inputShape: i === 0 ? [4] : undefined,
    }));
  });
  // The last layer has only one unit. The single output number will be
  // converted to a probability of selecting the leftward-force action.
  this.policyNet.add(tf.layers.dense({units: 1}));
};


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
