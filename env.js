import * as tf from '@tensorflow/tfjs';

// hit a coin, reward + 1
// remove score
// eat ghost
// eat fruit
// die
let ob_next;
let reward;
let done;
let env;
ob_next, reward, done, info = env.step(action)