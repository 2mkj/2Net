drop table comments cascade constraints purge;

create table comments(
num 			number		 primary key,
id				varchar2(30) references member(id),
content			varchar2(200),
reg_date		date,
board_num number  references board(board_num) on delete cascade
							            --comm테이블이 참조하는 보드 글 번호
);
--게시판 글이 삭제되면 참조하는 댓글도 삭제됩니다.

drop sequence com_seq;

--시퀀스를 생성합니다.
create sequence com_seq;

delete comments
select * from comments






select * 
		from ( select rownum rnum, b.*
		  from (select board2.*,  nvl(cnt,0) cnt
				from board2 left outer join (select comments2.board_num, count(*) cnt
											from comments2
											 group by comments2.board_num) c
				on board2.board_num = c.board_num
				order by BOARD_RE_REF desc,
				BOARD_RE_SEQ asc) b
		  where rownum <= 10
		)
		where rnum >= 1 and rnum <= 10