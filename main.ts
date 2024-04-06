#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


console.log(`
                ┏┓               ┏┓               
                ┃ ┓┏┏┓┏┓┏┓┏┓┏┓┏  ┃ ┏┓┏┓┓┏┏┓┏┓╋┏┓┏┓
                ┗┛┗┻┛ ┛ ┗┻┛┗┗┗┫  ┗┛┗┛┛┗┗┛┗ ┛ ┗┗┛┛ 
                                By:
                           Merchantsons                                                                                                            
                         `);


const currency:any = {
    USD: 1,        //base currency
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.30,
    PKR: 277.54,
    CAD: 1.36,
    AED: 3.67,
    AUD: 1.52,           
};

let redo = 'true';

while(redo) {
        let user_input = await inquirer.prompt([
            {
            name: 'from',
            type: 'list',
            message: 'Enter From Currency: ',
            choices:['USD','EUR','GBP','INR','PKR','CAD','AED','AUD']
            },
            {
                name: 'to',
                type: 'list',
                message: 'Enter To Currency: ',
                choices:['USD','EUR','GBP','INR','PKR','CAD','AED','AUD']
            },
            {
                name: 'amount',
                message: 'Enter your desire amount please',
                type: 'number'

            }
        ]);

        let fromAmt = currency[user_input.from]
        let toAmt = currency[user_input.to]
        let amount = user_input.amount
        let baseAmount = amount / fromAmt
        let conersion  = baseAmount * toAmt

        console.log('\n',chalk.bgYellow('Total Conversion Amount From Exchange Rate of Today : '),chalk.whiteBright(conersion.toFixed(2)));

        let user_reqagain = await inquirer.prompt(    
            {
                name: 'redoques',
                message: '\n Would you like to perform more conversions?',
                type: 'confirm',
                default: 'true',
            }            
        );  
        
        redo = user_reqagain.redoques;
    }

    console.log('\n',chalk.green('Thankyou for using this Airport Currency Exchange Terminal 2'));
    console.log(chalk.blue('                              Have A Nice Day!!!'));