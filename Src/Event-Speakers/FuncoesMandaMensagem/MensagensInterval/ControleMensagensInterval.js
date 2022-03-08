import {IntervalInsta,
        IntervalSubs,
        IntervalLoja,
        IntervalPe, 
        IntervalDetomini,
        IntervalMec} 
from './MandaMensagensIntervals.js'

let HoraLastMensagem = undefined;

export function SetHoraUltimaMensagem(HoraUltimaMensagem)
{
  HoraLastMensagem = HoraUltimaMensagem;
}

let intervals = [];
let intervalsEmp = [];

function addInterval(callback, time) {
  const interval = setInterval(callback, time);
  intervals.push(interval);
}

function removeIntervals() {
  for (const interval of intervals) {
    clearInterval(interval);           
  }
  intervals = [];
}  
 
const TimeIntervalMec      = 300000 ; // 5 min
const TimeIntervalInsta    = 780000 ; // 13min
const TimeIntervalSubs     = 1020000; // 17min
const TimeIntervalLoja     = 1140000; // 19min
const TimeIntervalPe       = 1500000;  // 20 min
const TimeIntervalDetomini = 1500000;  // 20 min


setInterval(function() 
{
  let horaAtual = Date.now();

  if(horaAtual - HoraLastMensagem >= 600000 || HoraLastMensagem == undefined)
    removeIntervals();
  else if(!intervals.length) 
    addIntervalos();

}, 60000);

function addIntervalos()
{
  addInterval(IntervalSubs, TimeIntervalSubs);
  addInterval(IntervalInsta,TimeIntervalInsta);
  addInterval(IntervalLoja, TimeIntervalLoja);
  addInterval(IntervalPe, TimeIntervalPe);
  addInterval(IntervalDetomini, TimeIntervalDetomini);
  addInterval(IntervalMec, TimeIntervalMec);
}