module.exports = function weatherService(pool) {

    let getLanguage = async function (language, code) {
        let result = await pool.query(`SELECT ${language} FROM conditions WHERE code=${code}`);
        // console.log(result.rows)
        return result.rows[0];
    }
    return {
        getLanguage
    }
};