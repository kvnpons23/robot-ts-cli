#!/usr/bin/env node

import { program } from 'commander';
import inquirer from 'inquirer';
import PlaceSchema from './lib/schema/placeSchema';
import Place from './lib/handlers/place';
import Move from './lib/handlers/move';
import Report from './lib/handlers/report';
import Left from './lib/handlers/left';
import Right from './lib/handlers/right';

program
  .command('place')
  .alias('p')
  .description('Command for placing the robot within the table top')
  .action(() => {
    inquirer.prompt(PlaceSchema).then((answers) => {
      new Place().executeLifecycle(answers);
    })
  });

program
  .command('move')
  .alias('m')
  .description('Moves the robot 1 unit to the direction it is facing')
  .action(() => {
    new Move().executeProcess();
  });

program
  .command('left')
  .alias('l')
  .description('Rotates the robot 90 degrees to left(counter clockwise)')
  .action(() => {
    new Left().executeProcess();
  });

program
  .command('right')
  .alias('r')
  .description('Rotates the robot 90 degrees to right(clockwise)')
  .action(() => {
    new Right().executeProcess();
  });

program
  .command('report')
  .alias('rp')
  .description('Logs the current coordinates of the robot and which direction it is facing')
  .action(() => {
    new Report().executeProcess();
  });

program.parse(process.argv);