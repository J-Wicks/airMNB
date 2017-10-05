
const expect = require('chai').expect;
const sinon = require('sinon');
const path = require('path');
const PythonShell = require('python-shell');

const data = require('./countVectorizerData');
const textClassify = require('../');

const testString = `“The question,” old Castel cut in almost rudely, “is to know whether it's a plague or not.”

Two or three of the doctors present protested. The others seemed to hesitate. The Prefect gave a start and hurriedly glanced toward the door to make sure it had prevented this outrageous remark from being overheard in the corridor. Richard said that in his opinion the great thing was not to take an alarmist view. All that could be said at present was that we had to deal with a special type of fever, with inguinal complications; in medical science, as in daily life, it was unwise to jump to conclusions.

Rieux, who had said nothing so far, was asked for his opinion. “We are dealing,” he said, “with a fever of typhoidal nature, accompanied by vomiting and buboes. I have incised these buboes and had the pus analyzed; our laboratory analyst believes he has identified the plague bacillus. But I am bound to add that there are specific modifications that don't quite tally with the classical description of the plague bacillus.”
`;

const pythonClassify = (text) => {
  console.log(text);
  return new Promise((resolve, reject) => {
    const options = {
      pythonPath: '/usr/local/bin/python3',
      scriptPath: path.join(__dirname,'../source'),
      args: text,
    };

    PythonShell.run('pythonFuncs.py', options, (err, result) => {
      if (err) reject(err);
      console.log(result[0]);
      resolve(result[0]);
    });
  });
};

pythonClassify(testString);

// describe('test test', function(){
//   it('does anything, anything at all', ()=>{
//     expect('hello').to.deep.equal('hello')
//   })
// })