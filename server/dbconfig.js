const config ={
    user:"sa",
    password:"123456",
    server: 'localhost',
    database:"HETHONGTIEMCHUNG",
    options:{
        trustedconnection: true,
        enableArithAbort: true,
        instancename:"SQLEXPRESS",
        trustServerCertificate: true
    },
    port: 1433
}

module.exports = config;