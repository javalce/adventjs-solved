#!/usr/bin/env node
import { readdir } from 'node:fs/promises';
import path from 'node:path';

import prompts from 'prompts';
import { startVitest } from 'vitest/node';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const args = yargs(hideBin(process.argv)).options({
  year: {
    type: 'string',
    description: 'Año de los retos',
    default: '2023',
  },
  challenge: {
    type: 'string',
    description: 'Reto a resolver',
  },
});

prompts.override(args.argv);

async function main() {
  const { year, challenge } = await prompts(
    [
      {
        type: 'select',
        name: 'year',
        message: '¿De qué año quieres ejecutar los tests?',
        initial: 0,
        choices: [{ title: '2023', value: '2023' }],
      },
      {
        type: 'select',
        name: 'challenge',
        message: '¿De qué reto quieres ejecutar los tests?',
        initial: 0,
        choices: async (year) => {
          const yearDir = path.join(process.cwd(), year);
          const challenges = await readdir(yearDir);
          const challengesChoices = challenges.map((challenge) => {
            let title = challenge.replace(/-/g, ' ');

            title = title[0].toUpperCase() + title.slice(1);

            return { title, value: challenge };
          });

          return [{ title: 'Ejecutar todos los tests', value: 'all' }, ...challengesChoices];
        },
      },
    ],
    {
      onCancel: () => {
        console.log('\nAdios! 👋\n');
        process.exit(0);
      },
    },
  );

  const directory = path.join(year, challenge === 'all' ? '' : challenge);

  startVitest('test', [directory]);
}

main().catch(console.error);
