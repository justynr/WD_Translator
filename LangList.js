const langs = [
   {
      "column0": "Afrikaans",
      "Afrikaans": "af"
   },
   {
      "column0": "Albanian",
      "Albanian": "sq"
   },
   {
      "column0": "Amharic",
      "Amharic": "am"
   },
   {
      "column0": "Arabic",
      "Arabic": "ar"
   },
   {
      "column0": "Armenian",
      "Armenian": "hy"
   },
   {
      "column0": "Azerbaijani",
      "Azerbaijani": "az"
   },
   {
      "column0": "Basque",
      "column1": "eu"
   },
   {
      "column0": "Belarusian",
      "column1": "be"
   },
   {
      "column0": "Bengali",
      "column1": "bn"
   },
   {
      "column0": "Bosnian",
      "column1": "bs"
   },
   {
      "column0": "Bulgarian",
      "column1": "bg"
   },
   {
      "column0": "Catalan",
      "column1": "ca"
   },
   {
      "column0": "Cebuano",
      "column1": "ceb (ISO-639-2)"
   },
   {
      "column0": "Chinese (Simplified)",
      "column1": "zh-CN or zh (BCP-47)"
   },
   {
      "column0": "Chinese (Traditional)",
      "column1": "zh-TW (BCP-47)"
   },
   {
      "column0": "Corsican",
      "column1": "co"
   },
   {
      "column0": "Croatian",
      "column1": "hr"
   },
   {
      "column0": "Czech",
      "column1": "cs"
   },
   {
      "column0": "Danish",
      "column1": "da"
   },
   {
      "column0": "Dutch",
      "column1": "nl"
   },
   {
      "column0": "English",
      "column1": "en"
   },
   {
      "column0": "Esperanto",
      "column1": "eo"
   },
   {
      "column0": "Estonian",
      "column1": "et"
   },
   {
      "column0": "Finnish",
      "column1": "fi"
   },
   {
      "column0": "French",
      "column1": "fr"
   },
   {
      "column0": "Frisian",
      "column1": "fy"
   },
   {
      "column0": "Galician",
      "column1": "gl"
   },
   {
      "column0": "Georgian",
      "column1": "ka"
   },
   {
      "column0": "German",
      "column1": "de"
   },
   {
      "column0": "Greek",
      "column1": "el"
   },
   {
      "column0": "Gujarati",
      "column1": "gu"
   },
   {
      "column0": "Haitian Creole",
      "column1": "ht"
   },
   {
      "column0": "Hausa",
      "column1": "ha"
   },
   {
      "column0": "Hawaiian",
      "column1": "haw (ISO-639-2)"
   },
   {
      "column0": "Hebrew",
      "column1": "he or iw"
   },
   {
      "column0": "Hindi",
      "column1": "hi"
   },
   {
      "column0": "Hmong",
      "column1": "hmn (ISO-639-2)"
   },
   {
      "column0": "Hungarian",
      "column1": "hu"
   },
   {
      "column0": "Icelandic",
      "column1": "is"
   },
   {
      "column0": "Igbo",
      "column1": "ig"
   },
   {
      "column0": "Indonesian",
      "column1": "id"
   },
   {
      "column0": "Irish",
      "column1": "ga"
   },
   {
      "column0": "Italian",
      "column1": "it"
   },
   {
      "column0": "Japanese",
      "column1": "ja"
   },
   {
      "column0": "Javanese",
      "column1": "jv"
   },
   {
      "column0": "Kannada",
      "column1": "kn"
   },
   {
      "column0": "Kazakh",
      "column1": "kk"
   },
   {
      "column0": "Khmer",
      "column1": "km"
   },
   {
      "column0": "Kinyarwanda",
      "column1": "rw"
   },
   {
      "column0": "Korean",
      "column1": "ko"
   },
   {
      "column0": "Kurdish",
      "column1": "ku"
   },
   {
      "column0": "Kyrgyz",
      "column1": "ky"
   },
   {
      "column0": "Lao",
      "column1": "lo"
   },
   {
      "column0": "Latin",
      "column1": "la"
   },
   {
      "column0": "Latvian",
      "column1": "lv"
   },
   {
      "column0": "Lithuanian",
      "column1": "lt"
   },
   {
      "column0": "Luxembourgish",
      "column1": "lb"
   },
   {
      "column0": "Macedonian",
      "column1": "mk"
   },
   {
      "column0": "Malagasy",
      "column1": "mg"
   },
   {
      "column0": "Malay",
      "column1": "ms"
   },
   {
      "column0": "Malayalam",
      "column1": "ml"
   },
   {
      "column0": "Maltese",
      "column1": "mt"
   },
   {
      "column0": "Maori",
      "column1": "mi"
   },
   {
      "column0": "Marathi",
      "column1": "mr"
   },
   {
      "column0": "Mongolian",
      "column1": "mn"
   },
   {
      "column0": "Myanmar (Burmese)",
      "column1": "my"
   },
   {
      "column0": "Nepali",
      "column1": "ne"
   },
   {
      "column0": "Norwegian",
      "column1": "no"
   },
   {
      "column0": "Nyanja (Chichewa)",
      "column1": "ny"
   },
   {
      "column0": "Odia (Oriya)",
      "column1": "or"
   },
   {
      "column0": "Pashto",
      "column1": "ps"
   },
   {
      "column0": "Persian",
      "column1": "fa"
   },
   {
      "column0": "Polish",
      "column1": "pl"
   },
   {
      "column0": "Portuguese (Portugal, Brazil)",
      "column1": "pt"
   },
   {
      "column0": "Punjabi",
      "column1": "pa"
   },
   {
      "column0": "Romanian",
      "column1": "ro"
   },
   {
      "column0": "Russian",
      "column1": "ru"
   },
   {
      "column0": "Samoan",
      "column1": "sm"
   },
   {
      "column0": "Scots Gaelic",
      "column1": "gd"
   },
   {
      "column0": "Serbian",
      "column1": "sr"
   },
   {
      "column0": "Sesotho",
      "column1": "st"
   },
   {
      "column0": "Shona",
      "column1": "sn"
   },
   {
      "column0": "Sindhi",
      "column1": "sd"
   },
   {
      "column0": "Sinhala (Sinhalese)",
      "column1": "si"
   },
   {
      "column0": "Slovak",
      "column1": "sk"
   },
   {
      "column0": "Slovenian",
      "column1": "sl"
   },
   {
      "column0": "Somali",
      "column1": "so"
   },
   {
      "column0": "Spanish",
      "column1": "es"
   },
   {
      "column0": "Sundanese",
      "column1": "su"
   },
   {
      "column0": "Swahili",
      "column1": "sw"
   },
   {
      "column0": "Swedish",
      "column1": "sv"
   },
   {
      "column0": "Tagalog (Filipino)",
      "column1": "tl"
   },
   {
      "column0": "Tajik",
      "column1": "tg"
   },
   {
      "column0": "Tamil",
      "column1": "ta"
   },
   {
      "column0": "Tatar",
      "column1": "tt"
   },
   {
      "column0": "Telugu",
      "column1": "te"
   },
   {
      "column0": "Thai",
      "column1": "th"
   },
   {
      "column0": "Turkish",
      "column1": "tr"
   },
   {
      "column0": "Turkmen",
      "column1": "tk"
   },
   {
      "column0": "Ukrainian",
      "column1": "uk"
   },
   {
      "column0": "Urdu",
      "column1": "ur"
   },
   {
      "column0": "Uyghur",
      "column1": "ug"
   },
   {
      "column0": "Uzbek",
      "column1": "uz"
   },
   {
      "column0": "Vietnamese",
      "column1": "vi"
   },
   {
      "column0": "Welsh",
      "column1": "cy"
   },
   {
      "column0": "Xhosa",
      "column1": "xh"
   },
   {
      "column0": "Yiddish",
      "column1": "yi"
   },
   {
      "column0": "Yoruba",
      "column1": "yo"
   },
   {
      "column0": "Zulu",
      "column1": "zu"
   }
]


let complete = {}
function rename() {
    for (let index = 0; index < langs.length; index++) {
        const element = langs[index];
        const long = Object.values(element)[0] 
        const short = Object.values(element)[1]
        //console.log(long, short)
        
        complete[long] = short

     }
     console.log(complete)
    }

rename()