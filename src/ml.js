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
    // ghosts = [x][y][edible]
    let ghosts = tf.tensor(state.get('ghost_position').concat([state.get('ghost_edible')]).flat());
    let user = tf.tensor([state.get('user_position')['x'], state.get('user_position')['y']);
    let map = tf.tensor(state.get('map'));
  }
  reward = moveReward;
  
};

export {logEnv};
