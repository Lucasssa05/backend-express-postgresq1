#!/bin/bash

curl -X POST http://localhost:8080/register \
     -H "Content-Type: application/json" \
     -d '{"name": "Maria", "email": "joao@example.com", "password": "Senha123"}'

curl -X POST http://localhost:8080/register \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "email": "john.doe@example.com", "password": "Password123"}'
