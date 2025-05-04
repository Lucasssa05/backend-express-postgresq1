#!/bin/bash

curl -X POST http://localhost:8080/register \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "email": "invalid-email", "password": "Password123"}'
