CREATE OR REPLACE TRIGGER emp01_temp
AFTER DELETE ON emp01
FOR EACH ROW
BEGIN
INSERT INTO temp(EMPNO,JOB,ENAME) 
VALUES (:old.EMPNO,:old.JOB,:old.ENAME);
END;

select * from temp;
select * from emp01;

drop table emp01
drop table temp;

create table emp01 as select * from emp;
create table temp as select empno, job, ename from emp where 1=0;

delete emp01 where deptno=20;
-----------------------------------------------------------
drop table delete_file purge;
create table delete_file(
	board_file varchar2(50),
	reg_date date default sysdate
);

select * from delete_file;
drop trigger save_delete_file;
select trigger_name from user_triggers;

--sts에서 실행하는 경우는 (/미포함) 설정 후 As One statement로 실행
create or replace trigger save_delete_file
after update or delete
on board2
 for each row
 begin
   if(:old.board_file is not null) then
    if(:old.board_file != :new.board_file or :new.board_file is null ) then
	     insert into delete_file
	      (board_file)
	     values(:old.board_file);
     end if;
   end if;
 end;
