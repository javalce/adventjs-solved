#!/usr/bin/env node
import { readdir } from 'node:fs/promises';
import path from 'node:path';

import { Command } from 'commander';
import prompts from 'prompts';
import { startVitest } from 'vitest/node';

function cancelOperation() {
  console.log('\nAdios! 👋\n');
  process.exit(0);
}

async function main() {
  const program = new Command()
    .addArgument('[year]', 'Año de los retos')
    .addArgument('[challenge]', 'Reto a resolver');

  let { year, challenge } = program.opts();

  if (year === undefined) {
    const result = await prompts(
      {
        type: 'select',
        name: 'year',
        message: '¿De qué año quieres ejecutar los tests?',
        initial: 0,
        choices: [
          { title: '2023', value: '2023' },
          { title: '2024', value: '2024' },
        ],
      },
      {
        onCancel: cancelOperation,
      },
    );

    year = result.year;
  }

  if (challenge === undefined) {
    const yearDir = path.join(process.cwd(), year);
    const challenges = await readdir(yearDir);

    const result = await prompts(
      {
        type: 'select',
        name: 'challenge',
        message: '¿De qué reto quieres ejecutar los tests?',
        initial: 0,
        choices: [
          { title: 'Ejecutar todos los tests', value: 'all' },
          ...challenges.map((challenge) => {
            let title = challenge.replace(/-/g, ' ');

            title = title[0].toUpperCase() + title.slice(1);

            return { title, value: challenge };
          }),
        ],
      },
      {
        onCancel: cancelOperation,
      },
    );

    challenge = result.challenge;
  }

  const directory = path.join(year, challenge === 'all' ? '' : challenge);

  startVitest('test', [directory]);
}

main().catch(console.error);
