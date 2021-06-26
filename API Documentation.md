## Local URL: http://127.0.0.1:8000
## Global URL: https://sust-exam-management-system.herokuapp.com
#
#

### 1 (Student Registration)

> POST [URL](https://sust-exam-management-system.herokuapp.com)/user/register
```json
{
"registrationType": "student",
"deptId": "5fda38b9c1bc1027b4d76078",
"regNo": "2016331078",
"password": "2016331078",
"confirmPassword": "2016331078"
}
```

Response: 
```json
"Registration successful"
```

## 2 (Teacher Registration)

POST http://127.0.0.1:8000/user/register
```json
{
"registrationType": "teacher",
"email":"enam@teacher.sust.edu",
"deptId": "5fda38b9c1bc1027b4d76078",
"password":"2016331028",
"confirmPassword":"2016331028",
"designation": "Associate Professor"
}
```

Response: 
```json
"Registration successful"
```

## 3 (Student login)

```json
POST http://127.0.0.1:8000/user/login
{
"loginType": "student",
"regNo": "2016331028",
"password": "2016331028"
}
```

Response:
```json
{
"authStatus": true,
"message": "Login Successful, please update your profile",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYzMzNWYwZTljZjFjMDlmMzE3ZDNiZSIsInJlZ05vIjoiMjAxNjMzMTAyOCIsImRlcHRJZCI6IjYwYmY1NmQ2Yjc5OTZiMTI1YmE4N2IzNSIsImRlcHRDb2RlIjoiQ1NFIiwiZGVwdE5hbWUiOiJDb21wdXRlciBTY2llbmNlIGFuZCBFbmdpbmVlcmluZyIsImZpcnN0TmFtZSI6bnVsbCwibGFzdE5hbWUiOm51bGwsImVtYWlsIjpudWxsLCJnZW5kZXIiOm51bGwsImNvbnRhY3ROdW1iZXIiOm51bGwsImFkZHJlc3MiOm51bGwsImJsb29kR3JvdXAiOm51bGwsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjIzNDA2NDkzLCJleHAiOjE2MjM0OTI4OTN9.pdtugAe7nj7MPX3YkkpW3KEU-tSletfYe3S_bdtSVWE",
"expiresIn": 86400,
"user": {
"id": "60c335f0e9cf1c09f317d3be",
"regNo": "2016331028",
"deptId": "60bf56d6b7996b125ba87b35",
"deptCode": "CSE",
"deptName": "Computer Science and Engineering",
"firstName": null,
"lastName": null,
"email": null,
"gender": null,
"contactNumber": null,
"address": null,
"bloodGroup": null,
"role": "student"
}
}
```

## 4 (Teacher login)
```json
POST http://127.0.0.1:8000/user/login
{
"loginType": "teacher",
"email": "msrafee@teacher.sust.edu",
"password": "2016331098"
}
```

Response:
```json
{
"message": "Successfully logged in",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYzMzNmM0Mjc0MDQ3MGE1NzU0NjYzMCIsImVtYWlsIjoibXppQHRlYWNoZXIuc3VzdC5lZHUiLCJkZXNpZ25hdGlvbiI6IlByb2Zlc3NvciIsImRlcHRDb2RlIjoiQ1NFIiwiZGVwdE5hbWUiOiJDb21wdXRlciBTY2llbmNlIGFuZCBFbmdpbmVlcmluZyIsImRlcHRJZCI6IjYwYmY1NmQ2Yjc5OTZiMTI1YmE4N2IzNSIsImZpcnN0TmFtZSI6bnVsbCwibGFzdE5hbWUiOm51bGwsImdlbmRlciI6bnVsbCwiY29udGFjdE51bWJlciI6bnVsbCwiYWRkcmVzcyI6bnVsbCwiYmxvb2RHcm91cCI6bnVsbCwicm9sZSI6InRlYWNoZXIiLCJpYXQiOjE2MjM0MDY0NjksImV4cCI6MTYyMzQ5Mjg2OX0.J-jD17ZyrWJrsGlksYUsPiw-3PXpJd0tt8Ds_NnVku8",
"expiresIn": 86400,
"user": {
"id": "60c336c42740470a57546630",
"email": "mzi@teacher.sust.edu",
"designation": "Professor",
"deptCode": "CSE",
"deptName": "Computer Science and Engineering",
"deptId": "60bf56d6b7996b125ba87b35",
"firstName": null,
"lastName": null,
"gender": null,
"contactNumber": null,
"address": null,
"bloodGroup": null,
"role": "teacher"
}
}
```

## Provide User info (must have to pass token as x-auth-header)

GET http://127.0.0.1:8000/user/userInfo
x-auth-header: TOKEN

Response:
// for teacher
{
"user": {
"firstName": null,
"lastName": null,
"gender": null,
"contactNumber": null,
"address": null,
"bloodGroup": null,
"role": "teacher",
"\_id": "60c336c42740470a57546630",
"designation": "Professor",
"deptId": "60bf56d6b7996b125ba87b35",
"email": "mzi@teacher.sust.edu",
"password": "$2a$10$Hu2k/td/TExCgsEYIcrMfuK2aItV/A1MNus2/0vGRPGd8hCWR2K96",
"createdAt": "2021-06-11T10:11:16.665Z",
"updatedAt": "2021-06-11T10:11:16.665Z",
"\_\_v": 0
}
}

//student
{
"user": {
"firstName": null,
"lastName": null,
"email": null,
"gender": null,
"contactNumber": null,
"address": null,
"bloodGroup": null,
"role": "student",
"\_id": "60c33b9c52cc2f0c458e81b0",
"regNo": "2016331000",
"deptId": "60bf56d6b7996b125ba87b35",
"password": "$2a$10$F23MIqejnh1iulKnpjhEuu.L5kPgYIY.CHI4i9H6dFsO1MwT3A6.6"
},
"exams": [
{
"active": true,
"_id": "60c33fc470914b14f827c2f6",
"studentId": "60c33b9c52cc2f0c458e81b0",
"examId": {
"examDescription": null,
"examTitle": "Digital Signal Processing - TT01",
"totalMark": "20",
"startingTime": "11/06/2021, 08:00:00PM",
"duration": "20 mins"
}
},
{
"active": true,
"_id": "60c3437e35efca1587284fc2",
"studentId": "60c33b9c52cc2f0c458e81b0",
"examId": {
"examDescription": null,
"examTitle": "Digital Signal Processing - TT02",
"totalMark": "20",
"startingTime": "11/06/2021, 08:00:00PM",
"duration": "20 mins"
}
}
]
}

## Provide Teacher info (must have to pass token as x-auth-header)

GET http://127.0.0.1:8000/user/teacherInfo
x-auth-header: TOKEN

Response:
{
"teacherInfo": {
"firstName": null,
"lastName": null,
"gender": null,
"contactNumber": null,
"address": null,
"bloodGroup": null,
"role": "teacher",
"\_id": "5fdefe5d2d9b1b3850a12267",
"designation": "Professor",
"deptId": {
"school": "Applied Science",
"address": "Sylhet",
"\_id": "5fde29cde617183fe817ab24",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"email": "msrafee@teacher.sust.edu",
"password": "$2a$10$mnCs9pG7j9a71jGyTRj4l.oGTpd5oPHgikzVHOlNGNzN/D7eUXO6m"
}
}

## Provide assigned courses of a teacher (must have to pass token as x-auth-header)

GET http://127.0.0.1:8000/user/assigns
x-auth-header: TOKEN

Response:
{
"assignsInfo": [
{
"active": true,
"_id": "5fe19d7f4280e4363c0f8510",
"courseId": {
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"_id": "5fe19d064280e4363c0f850d",
"courseName": "Compiler Construction",
"courseCode": "CSE439",
"credit": "3"
},
"session": "2016-17"
},
{
"active": true,
"_id": "5fe19dac4280e4363c0f8512",
"courseId": {
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"_id": "5fe19c6f4280e4363c0f850c",
"courseName": "Project350",
"courseCode": "CSE350",
"credit": "3"
},
"session": "2016-17"
},
{
"active": true,
"_id": "5fe56b4285e47e4654f4d5f0",
"courseId": {
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"_id": "5fe19d2f4280e4363c0f850e",
"courseName": "Mobile and Wireless Communication",
"courseCode": "CSE457",
"credit": "3"
},
"session": "2016-17"
},
{
"active": true,
"_id": "5fe56f0485e47e4654f4d5f3",
"courseId": {
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"_id": "5fe56ef285e47e4654f4d5f2",
"courseName": "Machine Learning",
"courseCode": "CSE475",
"credit": "3"
},
"session": "2016-17"
}
]
}

## Create an exam (must have to pass token as x-auth-header)

POST http://127.0.0.1:8000/exam/examInfo
x-auth-header: TOKEN

{
"assignationId": "5fe19d7f4280e4363c0f8510",
"examTitle": "Mechine Learning 1st-TT",
"examDescription": "Mechine Learning",
"totalMark": "20",
"startingTime": "8-1-2021",
"duration": "3 hour",
"examCode": "",
"status": "sheduled"
}

Response:
{
"examDescription": "Mechine Learning",
"status": "sheduled",
"\_id": "60b759ebfa1081186c7c6306",
"assignationId": "5fe19d7f4280e4363c0f8510",
"examTitle": "Mechine Learning 1st-TT",
"totalMark": "20",
"startingTime": "8-1-2021",
"duration": "3 hour",
"examCode": "UgFf0NFe",
"createdAt": "2021-06-02T10:14:05.434Z",
"updatedAt": "2021-06-02T10:14:05.434Z",
"\_\_v": 0
}

## Create a question (must have to pass token as x-auth-header)

POST http://127.0.0.1:8000/exam/questionInfo
x-auth-header: TOKEN

{
"examId": "5ff94f8fb28715281cb0dc67",
"question": "Complexity of Quick Sort?",
"type": "mcq",
"options": "aaa",
"mark": "5",
"answer": "O(nlogn)"
}

Response:
{
"options": [
"aaa"
],
"\_id": "60b75a02fa1081186c7c6307",
"examId": "5ff94f8fb28715281cb0dc67",
"question": "Complexity of Quick Sort?",
"type": "mcq",
"mark": "5",
"answer": "O(nlogn)",
"createdAt": "2021-06-02T10:14:26.464Z",
"updatedAt": "2021-06-02T10:14:26.464Z",
"\_\_v": 0
}

## Provide all the questions of a teacher (must have to pass token as x-auth-header)

GET http://127.0.0.1:8000/exam/questionsOfTeacher
x-auth-header: TOKEN

{
"assignationId": "5fe19d7f4280e4363c0f8510"
}

Response:
{
"message": "Retrieved Successfully",
"examInfo": {
"examDescription": "Mechine Learning",
"status": "sheduled",
"\_id": "5ff898cd7f570d1ae0e39af9",
"assignationId": "5fe19d7f4280e4363c0f8510",
"examTitle": "M",
"totalMark": "20",
"startingTime": "8-1-2021",
"duration": "3 hour",
"examCode": "fLgBmMi9"
},
"questions": [
{
"options": [
"aaa"
],
"\_id": "5ff94f34b28715281cb0dc65",
"question": "Complexity of Quick Sort ?",
"type": "mcq",
"mark": "5",
"answer": "O(nlogn)"
},
{
"options": [
"aaa"
],
"\_id": "5ff94f57b28715281cb0dc66",
"question": "Complexity of Binary Sort ?",
"type": "mcq",
"mark": "5",
"answer": "O(nlogn)"
}
]
}

## Storing answer of a student (must have to pass token as x-auth-header)

POST http://127.0.0.1:8000/exam/studentAnswerSheet
x-auth-header: TOKEN

{
"examId":"5ff898cd7f570d1ae0e39af9",
"answers": {
"5fe33f1c1bf6a024b44fdd09": {
"answer": "O(nlogn)"
},
"5fe341e1e00afd363067402c": {
"answer": "O(nlog(n))"
}
}
}

Response:
{
"message": "Your answers have been stored, Thank you",
"studentAnswers": {
"obtainedMark": "0",
"\_id": "60b75c76fa1081186c7c6309",
"examId": "5ff898cd7f570d1ae0e39af9",
"studentId": "5fdefb220b5f374210d007a5",
"answers": {
"5fe33f1c1bf6a024b44fdd09": {
"answer": "O(nlogn)"
},
"5fe341e1e00afd363067402c": {
"answer": "O(nlog(n))"
}
},
"createdAt": "2021-06-02T10:24:54.619Z",
"updatedAt": "2021-06-02T10:24:54.619Z",
"\_\_v": 0
}
}

## Enroll an exam (must have to pass token as x-auth-header)

POST http://127.0.0.1:8000/enroll/enrollmentCode
x-auth-header: TOKEN

{
"examCode" : "UgFf0NFe"
}

Response:
{
"enroll": {
"active": true,
"\_id": "60b75aa0fa1081186c7c6308",
"studentId": "5fdef168be7e5925f40fe5fd",
"examId": "60b759ebfa1081186c7c6306",
"createdAt": "2021-06-02T10:17:04.057Z",
"updatedAt": "2021-06-02T10:17:04.057Z",
"\_\_v": 0
},
"exam": {
"examDescription": "Mechine Learning",
"status": "sheduled",
"\_id": "60b759ebfa1081186c7c6306",
"assignationId": "5fe19d7f4280e4363c0f8510",
"examTitle": "Mechine Learning 1st-TT",
"totalMark": "20",
"startingTime": "8-1-2021",
"duration": "3 hour",
"examCode": "UgFf0NFe"
}
}
