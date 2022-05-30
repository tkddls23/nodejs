form 으로 입력 받은 data가

url encoded인경우는 app.js에서
>> app.use(express.urlencoded({ extended: false }));
>>urlencoded로 보내는경우 여기서 해석함 req.body.email 머 이런식으로

but

form data가 enctype이 multipart인경우는 못바꿔준다 - 해석불가
>> <form id="twit-form" action="/post" method="post" enctype="multipart/form-data">
>> 이런경우 multer 필요 - 이미지 업로드 구현


