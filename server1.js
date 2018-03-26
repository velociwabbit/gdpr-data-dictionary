"use strict";
 
var childproc =   require('child_process') 
var co        =   require('co' )
var config    =   require('./config.js')[0] 
var kms       =   require('koa-mysql')
var  db       = { files            :   [  '.eslintignore'      ,  '.eslintrc'             , '.babelrc'            ,  'server1.js'         ,  'gdprdd.html'    ,  'english.js'
                                        ] 

                ,   fs                  :   require( 'fs' )
                ,   dir                 :   './' 
                ,   setmysql            :   o => kms.createPool({ host : o.DBHOST , port : o.DBPORT  , database : o.DBASE, user : o.DUSER  , password : o.DPASS })  

                ,   insertFiles         :   function *( f,d ){  let res,  sql ;  try{
                                                                sql =   ' INSERT INTO ' + config.DBASE +  '.tbl_filearchive' + ' SET ?'
                                                                res =   yield  global.mdb.query( sql , { filename : f , data  : d })
                                                                        return res
                                                                        }catch(e){
                                                                        console.log('insertFiles ' + res + ' ' + e)}
                }
                ,  archiveFiles         : function * (Direct){ let res, i ,sql;  try{
                                                               res =   yield  global.mdb.query( 'DELETE FROM ' + config.DBASE +  '.tbl_filearchive where id != "0"' ,{}) 
                                                               for (  i =0; i < db.files.length; i++){
                                                               res  =   yield db.insertFiles(db.files[i], db.fs.readFileSync(Direct + db.files[i]))
                                                                            console.log('file ' + db.files[i] + ' archived')
                                                                  }
                                                               }catch(e){
                                                                        console.log('archiveFiles ' + res + ' ' + e)}
                }
                ,   extractFiles        :   function *( f, Direct = './' ){  let res,  sql ;  try{
                                                                sql =   ' SELECT * FROM ' + config.DBASE +  '.tbl_filearchive  WHERE  filename ="' + f  + '" '
                                                                res =   yield  global.mdb.query( sql ,{})
                                                                             db.fs.writeFileSync(Direct  + f, res[0].data) 
                                                                }catch(e){
                                                                console.log('insertFiles ' + res + ' ' + e)}
                }
                 ,  unarchiveFiles       : function * (Direct=''){   let res,logs ,i  ;  try{
                                                              db.dir = (Direct ) ?     Direct : db.dir
                                                              if (!  db.fs.existsSync(Direct || db.dir) )     
                                                                     db.fs.mkdirSync(Direct  || db.dir)
                                                              logs = Direct  || db.dir 
                                                              logs += 'logs'
                                                              if (!  db.fs.existsSync(logs) )     
                                                                     db.fs.mkdirSync(logs)
                                                              for (  i =0; i < db.files.length; i++){
                                                                    res =   yield db.extractFiles(db.files[i]  , db.dir )
                                                                            console.log('file ' + db.dir +   db.files[i] + ' restored '   )
                                                              }
                                                              }catch(e){
                                                                        console.log('archiveFiles ' + res + ' ' + e)}
               }
                ,   insertFile          :   function *(t, f,d ){  let res,  sql ;  try{
                                                                sql =   ' INSERT INTO ' + config.DBASE +  '.' +  t  + ' SET ?'
                                                                res =   yield  global.mdb.query( sql , { filename : f , data  : d })
                                                                        return res
                                                                        }catch(e){
                                                                        console.log('insertFiles ' + res + ' ' + e)}
                }
              ,  extractFile        :   function *(t,  f, Direct = './' ){  let res,  sql ;  try{
                                                                 // sql =   ' SELECT * FROM ' + config.DBASE +  '.' +  t + ' WHERE  filename ="' + f  + '" '
                                                                    sql =" SELECT * FROM archimedesdemo.tbl_mlmodels WHERE  id ='10000000' " 
                                                                 
                                                                res =   yield  global.mdb.query( sql ,{})
                                                                             db.fs.writeFileSync(Direct  + f + '1.js' , res[0].data) 
                                                                }catch(e){
                                                                console.log('extractFile ' + res + ' ' + e)}
                }

 
             ,  jus : (v,cnt, out )=> {      v =      "'" + v + "'"
                                            let len  = v.length + 3
                                            if ( cnt   <= len) cnt = len + 6
                                            v =     (v + '                                                                                                                              ').slice(0,cnt)
                                          return    v + out
             }
            , createSQLFile        :   function *(t='tbl_tablcolx',  f='tblcolx', Direct = './' ){  let res, xxx, rex,rrx, sql='' ,a, xxl, i, list={},  xql;    try{
                                                                    sql += '\n DROP TABLE IF EXISTS `tbl_engish`   ;      '
                                                                    sql += '\n CREATE TABLE `tbl_tablcolx`     ( '
                                                                    sql += '\n   `id`          bigint(25)  NOT NULL  AUTO_INCREMENT '
                                                                    sql += '\n , `tblname`     VARCHAR(255) NOT NULL                '
                                                                    sql += '\n , `field`       VARCHAR(255) NOT NULL                '
                                                                    sql += '\n , `createdate`   timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP    '
                                                                    sql += '\n ,  PRIMARY KEY (`id`)  )   ENGINE=InnoDB AUTO_INCREMENT=10000000   DEFAULT CHARSET=utf8; \n\n'

                                                                    xql =   " SELECT * FROM tbl_tablcolx  "

                                                                    rex =   yield  global.mdb.query( xql ,{})
                                                                    for (i=0; i < rex.length; i++){   a = rex[i]
                                                                        sql += '\n  INSERT INTO   tbl_tablcolx(id, tblname,field, showcol,label ,tooltip ,labec ,tooltic ,labet ,tooltit , labej , tooltij  ) VALUES (' 
                                                                        sql +=   db.jus( a.id       , 14 ,' , ' )     
                                                                        sql +=   db.jus( a.tblname  , 30 ,' , ' )  
                                                                        sql +=   db.jus( a.field    , 30 ,' , ' )  

                                                                     }                           
                                                                    db.fs.writeFileSync(Direct  + f + '.sql' ,sql) 
                                                                    }catch(e){
                                                                    console.log('extractFile ' + res + ' ' + e)}
                }


             , deleteExtra : function * (){                 let res  ;  try{
                                                                    res =   yield  global.mdb.query( 'DELETE FROM ' + config.DBASE +  '.tbl_english WHERE id != "0"' ,{})
                                                                    res =   yield  global.mdb.query( 'DELETE FROM ' + config.DBASE +  '.tbl_english WHERE id != "0"' ,{})
 


                                                                 }catch(e){
                                                                        console.log('archiveFiles ' + res + ' ' + e)}

               }
}
  global.mdb      = db.setmysql(config)
 
   
let dlist   =    db.fs.readdirSync('./')
let sqlname =   dlist.filter( r=> r.indexOf('.sql')  >=0  ) 
let loadcmd =   'mysql.exe' + ' --host=' + config.DBHOST + ' --user=' + config.DUSER + ' --port=' + config.DBPORT + ' --database=' + config.DBASE + '  < ".\\' + sqlname + '"'

 //childproc.exec(loadcmd)


    co(function*() {
       //  yield         db.insertFile('tbl_mlmodels' ,'mlmodel',  db.fs.readFileSync( 'mlmodel.js'), 'Updated from loadunload.js') 
      //    yield          db.createSQLFile(  ) 
  
      //   yield        db.extractFile('tbl_xxxxs' ,'xxx' ) 
      //    yield       db.deleteExtra()
      //   yield        db.archiveFiles('./')
      //   yield        db.unarchiveFiles( './')
         process.exit()
        
  })
 

  // mysql.exe   --host=localhost --user=root --port=3306 --database=archimdes  < ".\\Dump20180118.sql"
 
