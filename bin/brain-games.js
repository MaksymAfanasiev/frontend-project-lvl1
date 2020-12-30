#!/usr/bin/env node
import printName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = printName('May I have your name? ');
console.log(`Hello ${userName}`);
