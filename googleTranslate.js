const {Translate} = require('@google-cloud/translate').v2;
const fs = require('fs');
const fetch = require("node-fetch")


const languages = {
    "Afrikaans": "af",
    "Albanian": "sq",
    "Amharic": "am",
    "Arabic": "ar",
    "Armenian": "hy",
    "Azerbaijani": "az",
    "Basque": "eu",
    "Belarusian": "be",
    "Bengali": "bn",
    "Bosnian": "bs",
    "Bulgarian": "bg",
    "Catalan": "ca",
    "Cebuano": "ceb",
    "Chinese_Simplified": "zh-CN",
    "Chinese_Traditional": "zh-TW",
    "Corsican": "co",
    "Croatian": "hr",
    "Czech": "cs",
    "Danish": "da",
    "Dutch": "nl",
    "English": "en",
    "Esperanto": "eo",
    "Estonian": "et",
    "Finnish": "fi",
    "French": "fr",
    "Frisian": "fy",
    "Galician": "gl",
    "Georgian": "ka",
    "German": "de",
    "Greek": "el",
    "Gujarati": "gu",
    "Haitian Creole": "ht",
    "Hausa": "ha",
    "Hawaiian": "haw",
    "Hebrew": "he",
    "Hindi": "hi",
    "Hmong": "hmn",
    "Hungarian": "hu",
    "Icelandic": "is",
    "Igbo": "ig",
    "Indonesian": "id",
    "Irish": "ga",
    "Italian": "it",
    "Japanese": "ja",
    "Javanese": "jv",
    "Kannada": "kn",
    "Kazakh": "kk",
    "Khmer": "km",
    "Kinyarwanda": "rw",
    "Korean": "ko",
    "Kurdish": "ku",
    "Kyrgyz": "ky",
    "Lao": "lo",
    "Latin": "la",
    "Latvian": "lv",
    "Lithuanian": "lt",
    "Luxembourgish": "lb",
    "Macedonian": "mk",
    "Malagasy": "mg",
    "Malay": "ms",
    "Malayalam": "ml",
    "Maltese": "mt",
    "Maori": "mi",
    "Marathi": "mr",
    "Mongolian": "mn",
    "Myanmar_Burmese": "my",
    "Nepali": "ne",
    "Norwegian": "no",
    "Nyanja_Chichewa": "ny",
    "Odia_Oriya": "or",
    "Pashto": "ps",
    "Persian": "fa",
    "Polish": "pl",
    "Portuguese": "pt",
    "Punjabi": "pa",
    "Romanian": "ro",
    "Russian": "ru",
    "Samoan": "sm",
    "Scots_Gaelic": "gd",
    "Serbian": "sr",
    "Sesotho": "st",
    "Shona": "sn",
    "Sindhi": "sd",
    "Sinhala_Sinhalese": "si",
    "Slovak": "sk",
    "Slovenian": "sl",
    "Somali": "so",
    "Spanish": "es",
    "Sundanese": "su",
    "Swahili": "sw",
    "Swedish": "sv",
    "Tagalog": "tl",
    "Tajik": "tg",
    "Tamil": "ta",
    "Tatar": "tt",
    "Telugu": "te",
    "Thai": "th",
    "Turkish": "tr",
    "Turkmen": "tk",
    "Ukrainian": "uk",
    "Urdu": "ur",
    "Uyghur": "ug",
    "Uzbek": "uz",
    "Vietnamese": "vi",
    "Welsh": "cy",
    "Xhosa": "xh",
    "Yiddish": "yi",
    "Yoruba": "yo",
    "Zulu": "zu"
  }

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
    console.log('')
    console.log('node googleTranslate fr')
    process.exit()
}

const sourcePath = '../../Localization/english.json'
const outputPath = '../../Localization/'


async function translateThis(sourceText, targetLanguageTag) {
    console.log(`Source ${sourceText}`)
  
    const [translation] = await translate.translate(sourceText, targetLanguageTag);
    //const translation = `bypass - ${sourceText}`;
    console.log(`Result ${translation}`)
    console.log(``)

    return translation
}

function getKeyByValue(object, value) { 
    return Object.keys(object).find(key =>  
            object[key] === value); 
}

async function main() {
//    console.log(JSON.stringify(languages))
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