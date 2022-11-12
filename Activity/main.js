console.log("connected");
let number =prompt("Give me a Number");

for(number; number>=0; number --)
{
    //when a number is lesthan to 50 we need to display the message that termintae the loop
    if(number<50){
        console.log(`Currently at number ${number}. terminating the loop`);
        break;// break statement jumps out the loop
    }
    if (number % 10 === 0)
    {
        console.log(`the number is divisible by 10. Skipping the number`);
        continue;// continue jump over one iteration in the loop
    }
    if (number % 5 == 0)
    {
        console.log(number);
    }
} 