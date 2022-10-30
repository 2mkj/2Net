create table persistent_logins(
 username varchar(64) not null,
 series   varchar(64) primary key, --기기, 브라우저별 쿠키를 구분할 고유 값
 token    varchar(64) not null, --브라우저가 가지고 있는 쿠키의 값을 검증할 인증값
 last_used timestamp not null --가장 최신 자동 로그인 시간
)

select * from persistent_logins
