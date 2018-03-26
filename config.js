var cfg=    
[ 
   { SPORT :   '3003' ,   SNPRT :   '3330' ,   DBPORT :   '3306' ,   DUSER :   'root' ,   DPASS :   'pass'       ,   DBHOST :   'localhost'     , DBASE    : 'gdprdd'     , CLIENT    : true       , SERVER : true }
,  { SPORT :   '3003' ,   SNPRT :   '3330' ,   DBPORT :   '3306' ,   DUSER :   'root' ,   DPASS :   'pass'       ,   DBHOST :   'localhost'    ,  URIHOST : 'localhost'   , EXTERNURL : 'localhost', DBASE : 'gdprdd' , CLIENT : true, SERVER : true }
 ]
 
var config = cfg[0]
 try {if (typeof module !==  undefined  ) module.exports = cfg;  }catch (e) { }
