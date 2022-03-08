
import Console from 'console'
import fs from 'fs'

const data = new Date();
let dataAtualFormatada = (adicionaZero(data.getDate().toString()) + "-" + (adicionaZero(data.getMonth()+1).toString()));
const PathSuccess = `src/logs/SaveLogs/SucessLog${dataAtualFormatada}.txt`
const PathError = `src/logs/SaveLogs/ErrorLog${dataAtualFormatada}.txt`

const myLogger = new Console.Console({
  stdout: fs.createWriteStream(PathSuccess, { overwrite: false }),
  stderr: fs.createWriteStream(PathError, { overwrite: false }),
});

function adicionaZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
}

export function SucessLog(log)
{
    let DataLog = new Date();
    let dataAtualFormatada = (adicionaZero(DataLog.getDate().toString()) + "/" + (adicionaZero(DataLog.getMonth()+1).toString()));

    myLogger.log(`${dataAtualFormatada}:[${adicionaZero(DataLog.getHours())}:${adicionaZero(DataLog.getMinutes())}:${adicionaZero(DataLog.getSeconds())}] ${log}`);
}

export function ErrorLog(error)
{
    let DataLog = new Date();
    let dataAtualFormatada = (adicionaZero(DataLog.getDate().toString()) + "/" + (adicionaZero(DataLog.getMonth()+1).toString()));

    myLogger.error(`${dataAtualFormatada}:[${adicionaZero(DataLog.getHours())}:${adicionaZero(DataLog.getMinutes())}:${adicionaZero(DataLog.getSeconds())}] ${error}`);
}
