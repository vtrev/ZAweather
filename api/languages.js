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

    return {
        getPhrase
    }
};