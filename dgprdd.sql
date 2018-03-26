 SET sql_mode = '';


  DROP DATABASE      IF   EXISTS `gdprdd`  ;
  CREATE DATABASE  IF NOT EXISTS `gdprdd`  ;
  USE `gdprdd`;


DROP TABLE IF EXISTS  tbl_users        ; 

CREATE TABLE `tbl_users`         (  
    `id`             varchar(255)      
,  `email`           varchar(255)   DEFAULT '' 
,   `tel`            varchar(255)   DEFAULT ''
,  `firstname`       varchar(255)   DEFAULT '' 
,  `lastname`        varchar(255)   DEFAULT '' 
,  `password`        varchar(255)   DEFAULT ''
,  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP    ,     PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tbl_cryptos`;
CREATE TABLE `tbl_cryptos`   ( 
    `id`            bigint(25)     AUTO_INCREMENT   
 ,  `name`          varchar(255)  
 ,  `total`         varchar(255)  
 ,  `pending`       varchar(255)  
 ,  `accountid`     varchar(255)  
 ,  `accountpw`     varchar(255)  
 ,  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP    ,     PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;
  
DROP TABLE IF EXISTS `tbl_accounts`;
CREATE TABLE `tbl_accounts`   ( 
      
  `id`                          varchar(255)   
, `account_owner`               varchar(255)   DEFAULT ''

,  `createdate`                 timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP   ,   PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;


 




DROP TABLE IF EXISTS `tbl_items`;

CREATE TABLE `tbl_items`   ( 
                     `id`                   varchar(255)   
                ,   `available_products`    varchar(255)   DEFAULT ''
                ,   `billed_products`       varchar(255)   DEFAULT ''
                ,   `error`                 varchar(255)   DEFAULT ''
                ,   `institution_id`        varchar(255)   DEFAULT ''
                ,   `credentials`           varchar(255)   DEFAULT ''
                ,   `item_id`               varchar(255)   DEFAULT ''
                ,   `webhook`               varchar(255)   DEFAULT ''
                ,   `has_mfa`               varchar(25)    DEFAULT ''
                ,   `mfa`                   varchar(255)   DEFAULT ''
                ,   `name`                  varchar(255)   DEFAULT ''
                ,  `createdate`             timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ,   PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8  ;

 

DROP TABLE IF EXISTS `tbl_sessions`;
CREATE TABLE `tbl_sessions`   ( 
    `id`            bigint(25)     AUTO_INCREMENT   
 ,  `name`          varchar(255)  
 ,  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP    ,     PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tbl_sequence`;
CREATE TABLE `tbl_sequence`   ( 
      `id`         bigint(25)     AUTO_INCREMENT   
  ,   `type`       varchar(25)      
  ,  `counter`     bigint(25)  
  ,  `updatetime`  timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP    , PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  INSERT INTO tbl_sequence(type,counter)   VALUES ( 'complaints' , 10000);

 
