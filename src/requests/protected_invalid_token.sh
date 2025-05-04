#!/bin/bash

curl -X GET http://localhost:8080/protected \
-H "Authorization: Bearer invalid_token"
