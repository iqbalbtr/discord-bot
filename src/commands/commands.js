import 'dotenv/config';
import { getRPSChoices } from "./utility/game.js"
import { capitalize } from "./utils.js"

// Get the game choices from game.js
function createCommandChoices() {
  const choices = getRPSChoices();
  const commandChoices = [];

  for (let choice of choices) {
    commandChoices.push({
      name: capitalize(choice),
      value: choice.toLowerCase(),
    });
  }

  return commandChoices;
}

const PING_COMMAND = {
  name: 'ping',
  description: 'pong',
  type: 1,
}

// Simple test command
const TEST_COMMAND = {
  name: 'lumine',
  description: 'Basic command',
  type: 1,
};

// Command containing options
const CHALLENGE_COMMAND = {
  name: 'challenge',
  description: 'Challenge to a match of rock paper scissors',
  options: [
    {
      type: 3,
      name: 'object',
      description: 'Pick your object',
      required: true,
      choices: createCommandChoices(),
    },
  ],
  type: 1,
};

export const ALL_COMMANDS = [TEST_COMMAND, CHALLENGE_COMMAND, PING_COMMAND];

