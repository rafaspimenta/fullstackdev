const randomTeams = ['atletico', 'cruzeiro', 'sao paulo', 'flalixo', 'fluminense'];

const randomIdx = Math.floor(Math.random() * randomTeams.length);

const randomTeam = () => randomTeams[randomIdx];

/*console.log(`The soccer team that will win the brazilian championship at 2023 will be: ${randomTeam()}`)
*/

const formatNumber = number => {
    // Get rid of the decimals and convert to a string.
    let numStr = String(Math.floor(number));
    
    // Starting 3 from the end, add a comma every 3 digits.
    for (let i = numStr.length - 3; i > 0; i -= 3) {
        numStr = numStr.slice(0, i) + ',' + numStr.slice(i);
        console.log(numStr);
    }
  
    // And return!
    return numStr;
  }

formatNumber(155666689);  //7