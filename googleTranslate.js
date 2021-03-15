const {Translate} = require('@google-cloud/translate').v2;
const fs = require('fs');
const fetch = require("node-fetch")
const languages = require('./Util/langList')

const projectId = 'main-reducer-305321';

const translate = new Translate({
    projectId, 
    keyFilename: './googleApiKey.json'
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

const sourcePath = './Localization/english.json'
const outputPath = './Localization/'


async function translateThis(sourceText, targetLanguageTag) {

  console.log(`Source ${sourceText}`)
  
    //const [translation] = await translate.translate(sourceText, targetLanguageTag);
    const translation = `bypass - ${sourceText}`;
    console.log(`Result ${translation}`)
    console.log(``)

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
    //console.log(JSON.stringify(input, null, 2))
    // for (i = 0; i < Object.values(languages).length; i++) {
      //let targetLanguageTag = Object.values(languages)
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
      // output = {...input, text: value: Object.fromEntries(entries)}};
      output.language = targetLanguageLong
      output.code = targetLanguageTag
      console.log('')
      console.log(`WRITING ${targetLanguageLong.toUpperCase()} FILE TO DISK`);
      console.log('')
      console.log('')
      fs.writeFileSync(`${outputPath}${targetLanguageLong}.json`, JSON.stringify(output, null, 2));
    
  }






main();