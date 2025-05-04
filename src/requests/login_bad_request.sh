#!/bin/bash

curl -X POST http://localhost:8080/login \
-H "Content-Type: application/json" \
-d '{"invalid": "data"}'