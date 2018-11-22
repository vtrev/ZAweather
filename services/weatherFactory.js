module.exports = function weatherService(pool) {

    let getLanguage = async function (language, code) {
        let result = await pool.query(`SELECT ${language} FROM conditions WHERE code=${code}`);
        // console.log(result.rows)
        return result.rows[0];
    }
    let getMain = async function (language, id) {
        console.log(language, id)
        let result = await pool.query(`SELECT ${language} FROM main WHERE id=${id}`);
        // console.log(result.rows)
        return result.rows[0];
    }
    let getKeyword = async function (language, id) {
        console.log(language, id)
        let result = await pool.query(`SELECT ${language} FROM keywords WHERE id=${id}`);
        // console.log(result.rows)
        return result.rows[0];
    }



    return {
        getLanguage,
        getMain,
        getKeyword
    }
};