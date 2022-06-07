var config = require("../dbconfig");
const sql = require("mssql");

const loginUser = async (info) => {
  try {
    let pool = await sql.connect(config);
     
    let account = await pool.request().input("USERNAME",sql.NVarChar,info.username).input("PASSWORD",sql.NVarChar,info.password).query("select * from ACCOUNT where USERNAME = @USERNAME and PASSWORD = @PASSWORD");
    
    return account.recordsets;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  loginUser,
};