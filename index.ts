#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.bgGreen.bold("******************************"));
console.log(chalk.bgGreenBright.bold("   Exams Timetable Checker    "));
console.log(chalk.bgGreen.bold("******************************"));

let condition: boolean = true;

// while loop 
while(condition) {

    let answer = await inquirer.prompt([
        {
            name: "rollNum",
            message: chalk.bgGray.bold("\nEnter your Roll Number:"),
            type: "input",
            validate: function (value: string) {
                const numberValue = Number(value);

                if (isNaN(numberValue)) {
                    return chalk.bgRed.bold('Invalid Roll Number. Please enter a valid number.');
                }else if (numberValue <= 0) {
                    return chalk.bgRed.bold('Please enter a Positive number greater than 0.');
                } else if (numberValue > 2000) {
                    return chalk.bgRed.bold('Invalid Roll Number. The number must not exceed 2000');
                } else {
                    return true;
                }
            }
        }
    ]);
    
    if (answer.rollNum >= 1 && answer.rollNum <= 200) {
        console.log(chalk.bgYellow.bold(`\nExam Schedule of Roll Number "${answer.rollNum}" is:\n`));
    
        console.log(chalk.bgBlue.bold("--------------------------"));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Date: 20 July 2024     ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Day: Saturday          ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Time: 2pm              ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold("--------------------------"));
        
        console.log(chalk.bgCyanBright.bold.magenta("\nALL THE BEST FOR EXAMS"));
        
    } else if (answer.rollNum >= 201 && answer.rollNum <= 400 ) {
        console.log(chalk.bgYellow.bold(`\nExam Schedule of Roll Number "${answer.rollNum}" is:\n`));
    
        console.log(chalk.bgBlue.bold("--------------------------"));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Date: 20 July 2024     ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Day: Saturday          ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Time: 4pm              ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold("--------------------------"));
        
        console.log(chalk.bgCyanBright.bold.magenta("\nALL THE BEST FOR EXAMS"));
    
    } else if (answer.rollNum >= 401 && answer.rollNum <= 600) {
        console.log(chalk.bgYellow.bold(`\nExam Schedule of Roll Number "${answer.rollNum}" is:\n`));
    
        console.log(chalk.bgBlue.bold("--------------------------"));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Date: 21 July 2024     ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Day: Sunday            ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Time: 2pm              ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold("--------------------------"));
        
        console.log(chalk.bgCyanBright.bold.magenta("\nALL THE BEST FOR EXAMS"));
    
    } else if (answer.rollNum >= 601 && answer.rollNum <= 800) {
        console.log(chalk.bgYellow.bold(`\nExam Schedule of Roll Number "${answer.rollNum}" is:\n`));
    
        console.log(chalk.bgBlue.bold("--------------------------"));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Date: 21 July 2024     ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Day: Sunday            ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Time: 4pm              ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold("--------------------------"));
        
        console.log(chalk.bgCyanBright.bold.magenta("\nALL THE BEST FOR EXAMS"));
    
    } else if (answer.rollNum >= 801 && answer.rollNum <= 1000) {
        console.log(chalk.bgYellow.bold(`\nExam Schedule of Roll Number "${answer.rollNum}" is:\n`));
    
        console.log(chalk.bgBlue.bold("--------------------------"));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Date: 22 July 2024     ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Day: Monday            ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Time: 2pm              ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold("--------------------------"));
        
        console.log(chalk.bgCyanBright.bold.magenta("\nALL THE BEST FOR EXAMS"));
    
    } else if (answer.rollNum >= 1001 && answer.rollNum <= 1200) {
        console.log(chalk.bgYellow.bold(`\nExam Schedule of Roll Number "${answer.rollNum}" is:\n`));
    
        console.log(chalk.bgBlue.bold("--------------------------"));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Date: 22 July 2024     ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Day: Monday            ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Time: 4pm              ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold("--------------------------"));
        
        console.log(chalk.bgCyanBright.bold.magenta("\nALL THE BEST FOR EXAMS"));
    
    } else if (answer.rollNum >= 1201 && answer.rollNum <= 1400) {
        console.log(chalk.bgYellow.bold(`\nExam Schedule of Roll Number "${answer.rollNum}" is:\n`));
    
        console.log(chalk.bgBlue.bold("--------------------------"));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Date: 23 July 2024     ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Day: Tuesday           ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Time: 2pm              ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold("--------------------------"));
        
        console.log(chalk.bgCyanBright.bold.magenta("\nALL THE BEST FOR EXAMS"));
    
    } else if (answer.rollNum >= 1401 && answer.rollNum <= 1600) {
        console.log(chalk.bgYellow.bold(`\nExam Schedule of Roll Number "${answer.rollNum}" is:\n`));
    
        console.log(chalk.bgBlue.bold("--------------------------"));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Date: 23 July 2024     ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Day: Tuesday           ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Time: 4pm              ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold("--------------------------"));
        
        console.log(chalk.bgCyanBright.bold.magenta("\nALL THE BEST FOR EXAMS"));
    
    } else if (answer.rollNum >= 1601 && answer.rollNum <= 1800) {
        console.log(chalk.bgYellow.bold(`\nExam Schedule of Roll Number "${answer.rollNum}" is:\n`));
    
        console.log(chalk.bgBlue.bold("--------------------------"));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Date: 24 July 2024     ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Day: Wednesday         ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Time: 2pm              ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold("--------------------------"));
        
        console.log(chalk.bgCyanBright.bold.magenta("\nALL THE BEST FOR EXAMS"));
    
    } else if (answer.rollNum >= 1801 && answer.rollNum <= 2000) {
        console.log(chalk.bgYellow.bold(`\nExam Schedule of Roll Number "${answer.rollNum}" is:\n`));
    
        console.log(chalk.bgBlue.bold("--------------------------"));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Date: 24 July 2024     ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Day: Wednesday         ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold('|')+chalk.bgCyan.bold(' Time: 4pm              ')+chalk.bgBlue.bold('|'));
        console.log(chalk.bgBlue.bold("--------------------------"));
        
        console.log(chalk.bgCyanBright.bold.magenta("\nALL THE BEST FOR EXAMS"));
    
    } else {
        console.log(chalk.bgRed.bold("\nInvalid Roll Number"));
    }

    // Asking for Exit
    let wantExit = await inquirer.prompt([
        {
            name: "exit",
            message: chalk.bgGray.bold("\nDo you want to check more?"),
            type: "confirm",
            default: "false"
        }
    ]);

    // Loop Condition
    condition = wantExit.exit;

} // while loop end here

// while condition is false then exit
console.log(chalk.bgRed.bold("\nExit"));
