const {Translate} = require('@google-cloud/translate').v2;
const fs = require('fs');
const languages = require('./Util/langList')

const projectId = 'main-reducer-305321';


/* 
 *********************************************
 Process Variables!

 *********************************************
*/


//change to true if testing
const bypass = false

const sourcePath = './Localization/english.json'
const outputPath = './Localization/'



const translate = new Translate({
  projectId, 
  keyFilename: './Util/googleApiKey.json'
});


const myArgs = process.argv.slice(2).toString();
if(myArgs === '') {
    console.log('')
    console.log("NO LANGUAGE ARGUMENT!")
    console.log('')
    console.log("enter French as:")
    console.log('node googleTranslate fr')
    process.exit()
}

async function translateThis(sourceText, targetLanguageTag) {
  let translation;
  
  // reads "bypass" variable - if true no calls to Google are made
  if(bypass) {
    translation = `bypass - ${sourceText}`;
  } else {
    [translation] = await translate.translate(sourceText, targetLanguageTag);
  }
  console.log(``)
  console.log(`Source:  ${sourceText}`)
  console.log(`Result:  ${translation} ----`)

  return translation
}

function getKeyByValue(object, value) { 
    return Object.keys(object).find(key =>  
            object[key] === value); 
}

async function main() {
    let jsonInput = fs.readFileSync(sourcePath)
    let input = JSON.parse(jsonInput)
    const targetLanguageLong = getKeyByValue(languages, myArgs).toLowerCase()
    const targetLanguageTag = myArgs

    console.log(`TRANSLATING INTO ${targetLanguageLong.toUpperCase()} - - - ${targetLanguageTag}`)
    let output = {...input};
    let entries;
    let valueObj = {};
    for (t = 0; t < Object.entries(input.text).length; t++) {
      let masterKey = Object.keys(input.text)[t]
      entries = Object.entries(input.text[masterKey]);
      for (let v of entries) {
          v[1] = await translateThis(v[1], targetLanguageTag);
        }
      valueObj[masterKey] = Object.fromEntries(entries);
      output.text = {...valueObj};
    }
      output.language = targetLanguageLong
      output.code = targetLanguageTag
      console.log('')
      console.log(`WRITING ${targetLanguageLong.toUpperCase()} FILE TO DISK`);
      console.log('')
      console.log('')
      fs.writeFileSync(`${outputPath}${targetLanguageLong}.json`, JSON.stringify(output, null, 2));
      console.log('DONE!')

  }


main();