import * as tf from '@tensorflow/tfjs';

let obNext;
let reward;

const createPolicyNetwork = function(hiddenLayerSizes) {
  if (!Array.isArray(hiddenLayerSizes)) {
    hiddenLayerSizes = [hiddenLayerSizes];
  }
  let policyNet = tf.sequential();
  hiddenLayerSizes.forEach((hiddenLayerSize, i) => {
    policyNet.add(tf.layers.dense({
      units: hiddenLayerSize,
      activation: 'elu',
      // `inputShape` is required only for the first layer.
      inputShape: i === 0 ? [4] : undefined,
    }));
  });
  // The last layer has only one unit. The single output number will be
  // converted to a probability of selecting the leftward-force action.
  policyNet.add(tf.layers.dense({units: 1}));
};
// 10 10
// 170 200

const logEnv = function(state, moveReward) {
  reward = moveReward;

};

export {logEnv};
