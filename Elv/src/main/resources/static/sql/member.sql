drop table member cascade constraints purge;

create table member(
id	      varchar2(12),
password  varchar2(10),
name	  varchar2(15),
age	      number(2),
gender	  varchar2(3),
email	  varchar2(30),
PRIMARY KEY(id)
);


select * from member;
delete from member;
