//Data Structures Exercise
//1a
const jedi = [];

//1b
jedi.splice(0, 0, `Luke`);
/*
or
jedi[0] = `Luke`;
*/

//1c
jedi.push(`Obi-Wan Kenobi`);

//1d
jedi.unshift(`Yoda`);

//1e
console.log(jedi[1]);//Yoda

//1f
jedi.pop();
console.log(jedi);//Yoda, Luke

//1g
jedi.shift();
console.log(jedi);//Luke

//2a
const sithLords = [`Darth Vader`, `Darth Sidious`, `Darth Maul`];

//2b
const imperialOfficers = [`Grand Moff Tarkin`, `Orson Krennic`];

//2c
const starWarsVillans = sithLords.concat(imperialOfficers);
console.log(starWarsVillans);
/*[
    'Darth Vader',
    'Darth Sidious',
    'Darth Maul',
    'Grand Moff Tarkin',
    'Orson Krennic'
  ]
  */

//2d
console.log(starWarsVillans.slice(0, 2));//[ 'Darth Vader', 'Darth Sidious' ]

//3a
const droids = { 
    astromech:`R2-D2`, 
    protocol:`C-3PO`, 
    assassin:`IG-88`};

//3b
console.log(droids[`astromech`]);//R2-D2

//3c
console.log(droids.protocol);//C3-PO

//3d
droids[`assassin`] = `IG-11`;
console.log(droids);
/*
{ astromech: 'R2-D2', 
protocol: 'C-3PO', 
assassin: 'IG-11' }
*/


//BONUS

//4
console.log(starWarsVillans[0][6]);//V

//5
console.log(starWarsVillans.slice(-4, -3));//Darth Sidious

//6a
const starWarsMovies = [
    {
        episodeOne: `The Phantom Menace`,
        episodeTwo: `Attack of the Clones`,
        episodeThree: `Revenge of teh Sith`
    },
    {
        episodeFour: `A New Hope`,
        episodeFive: `The Empire Strikes Back`,
        episodeSix: `Return of the Jedi`
    },
    {
        episodeSeven: `The Force Awakens`,
        episodeEight: `The Last Jedi`,
        episodeNine: `The Rise of Skywalker`
    }
];

//6b
starWarsMovies.splice(1, 0, `Rouge One`, `Solo`);
console.log(starWarsMovies);
/*
[
  {
    episodeOne: 'The Phantom Menace',
    episodeTwo: 'Attack of the Clones',
    episodeThree: 'Revenge of teh Sith'
  },
  'Solo',
  'Rouge One',
  {
    episodeFour: 'A New Hope',
    episodeFive: 'The Empire Strikes Back',
    episodeSix: 'Return of the Jedi'
  },
  {
    episodeSeven: 'The Force Awakens',
    episodeEight: 'The Last Jedi',
    episodeNine: 'The Rise of Skywalker'
  }
]
*/