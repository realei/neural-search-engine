#/bin/bash

curl -X POST 'http://127.0.0.1:3000/image/query' \
--header 'Content-Type: multipart/form-data' \
--form  'file=@'$1';filename=test.jpg' \
