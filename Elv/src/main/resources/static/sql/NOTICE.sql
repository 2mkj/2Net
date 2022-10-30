drop table NOTICE cascade constraints purge;
CREATE TABLE NOTICE(
	NOTICE_ID 		NUMBER primary key,			  --글 번호
	NOTICE_WRITER	VARCHAR2(30),		--작성자
	NOTICE_PASS		VARCHAR2(30),	  --비밀번호
	NOTICE_SUBJECT	VARCHAR2(300),	  --제목
	NOTICE_CONTENT	VARCHAR2(4000),	  --내용
	NOTICE_READCOUNT	NUMBER,			--글의 조회수 
	NOTICE_DATE DATE 				--글의 작성 날짜
);

select * from notice

insert into notice
values
(1, 'admin', '1234', 'test1234', 'test1234', 0 , sysdate)