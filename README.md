# robot-ts-cli

Robot displacement console app written in typescript.

clone this repository

```
git clone https://github.com/kvnpons23/robot-ts-cli.git
```

## Setup Process

|Commands|Description|
|---|---|
|cd robot-ts-cli | go inside the project directory|
|npm install | to install all dependencies|
|npm run build | to build to bin folder|
|npm install -global| to install to your local machine|
|npm t | to check for the tests and coverage|

## Commands

### place

**alias:** p

**description:** places the robot anywhere in 5 x 5 unit table.

**Parameters**

-  XCoordinate (Numeric 0-5)
-  YCoordinate (Numeric 0-5)
-  direction (NORTH,EAST,SOUTH and WEST)

```
robot-cli place
? xCoordinate: 1
? yCoordinate: 2
? direction: North
```

### move

**alias:** m

**description:** moves robot one unit to the direction it is facing.

**usage:**

```
robot-cli move
```

### left

**alias:** l

**description:** rotates the robot 90 degrees to the left (counter clockwise).

**usage:**

```
robot-cli left
```

### right

**alias:** r

**description:** rotates the robot 90 degrees to the right (clockwise).

**usage:**

```
robot-cli right
```

### report

**alias:** rep

**description:** outputs the X Coordinate, Y Coordinate and the Facing direction of the robot.

**usage:**

```
robot-cli report
```

## Rules

- Ignores move command if the robot will fall off the 5 x 5 units
- Ignores place command if inputs are not valid data types
