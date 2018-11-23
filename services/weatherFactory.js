module.exports = function weatherService(pool) {

    let getLanguage = async function (language, code) {
        let result = await pool.query(`SELECT ${language} FROM conditions WHERE code=${code}`);
        return result.rows[0];
    }
    let getMain = async function (language, id) {
        let result = await pool.query(`SELECT ${language} FROM main WHERE id=${id}`);
        return result.rows[0];
    }
    let getKeyword = async function (language, id) {
        let result = await pool.query(`SELECT ${language} FROM keywords WHERE id=${id}`);
        return result.rows[0];
    }



    return {
        getLanguage,
        getMain,
        getKeyword
    }
};