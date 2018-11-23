const keywords = require("../keywords.json");

module.exports = function (weatherInstance) {
    // get phrase in selected langaage
    let getPhrase = async function (req, res) {
        // let language = req.params.language;
        let language = req.query.language;
        let code = req.query.code;
        try {

            let result = await weatherInstance.getLanguage(language, code);

            res.json({
                status: 'success',
                data: result
            });
        } catch (err) {
            console.log(err);
        }
    }
    let getMain = async function (req, res) {
        console.log('gettting main')
        // let language = req.params.language;
        let language = req.query.language;
        let id = req.query.id;

        console.log(language, id)
        try {
            let result = await weatherInstance.getMain(language, id);

            res.json({
                status: 'success',
                data: result
            });
        } catch (err) {
            console.log(err);
        }
    }
    let getKeyword = async function (req, res) {
        let language = req.query.language;
        let keyWordsForLanguage = keywords[language];

        try {
            res.json({
                status: 'success',
                data: keyWordsForLanguage
            });
        } catch (err) {
            console.log(err);
        }
    }




    return {
        getPhrase,
        getMain,
        getKeyword
    }
};