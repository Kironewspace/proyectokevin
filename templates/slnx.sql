create database contacts

use contacts


create table info(

id_info int IDENTITY (1,1) primary key,
usr_name NVARCHAR(20),
usr_email NVARCHAR(MAX),
usr_message NVARCHAR(100)



)

select * from info