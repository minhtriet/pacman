import * as tf from '@tensorflow/tfjs';
import * as util from './util.js';

let obNext, reward;


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

const logEnv = function(moveReward, playground=null, ghost=null, ghostPos=null, user=null) {
  reward = moveReward;
  debugger;
  if (ghostPos !== null) {
    let x, y;
    for (let i = 0; i < ghostPos.length; i++) {
      x = util.pointToCoord(ghostPos[i]['new']['x']);
      y = util.pointToCoord(ghostPos[i]['new']['y']);
      if (ghost[i].isVunerable()) {
        playground[x][y] = util.VULNERABLE_GHOST;
      } else {
        playground[x][y] = util.INVULNERABLE_GHOST;
      }
    }
  }
};

export {logEnv};
