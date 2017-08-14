const data = require('../test/data');
const utils = require('./utils');
const allClasses = utils.gatherClasses(data);
const classifyMNB = require('./trainMNB')(allClasses, data);
const text = `He had decided long ago that no Situation had any objective reality: it only existed in the minds of those who happened to be in on it at any specific moment. Since these several minds tended to form a sum total or complex more mongrel than homogeneous, The Situation must necessarily appear to a single observer much like a diagram in four dimensions to an eye conditioned to seeing the world in only three. Hence the success or failure of any diplomatic issue must vary directly with the degree of rapport achieved by the team confronting it. …it was a neat theory, and he was in love with it. The only consolation he drew from the present chaos was that his theory managed to explain it.`

console.log(classifyMNB(text))

// console.log(trainMNB(C, data));
