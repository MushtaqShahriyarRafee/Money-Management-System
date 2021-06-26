<style>H1{color:Blue;}</style>
<style>H2{color:DarkOrange;}</style>
<style>p{color:Black;}</style>

## API Documentation
POST http://127.0.0.1:8000/user/register HTTP/1.1 Content-Type: application/json { "registrationType": "student", "deptId": "5fda38b9c1bc1027b4d76078", "regNo": "2016331078", "password": "2016331078", "confirmPassword": "2016331078" }
##### Response:
"Registration successful"

POST http://127.0.0.1:8000/user/register HTTP/1.1 Content-Type: application/json { "registrationType": "teacher", "email":"hasmot@teacher.sust.edu", "deptId": "5fda38b9c1bc1027b4d76078", "password":"2016331028", "confirmPassword":"2016331028", "designation": "Associate Professor" }
##### Response:
"Registration successful"

POST http://127.0.0.1:8000/user/login HTTP/1.1 Content-Type: application/json { "loginType": "student", "regNo": "2016331028", "password": "2016331028" }
##### Response:
"Successfully logged in" And a "token" is generated.

POST http://127.0.0.1:8000/user/login HTTP/1.1 Content-Type: application/json { "loginType": "teacher", "email": "hasmot@teacher.sust.edu", "password": "2016331028" }
##### Response:
"Successfully logged in" And a "token" is generated.

GET http://127.0.0.1:8000/user/userInfo HTTP/1.1 Content-Type: application/json x-auth-header: A "token"
##### Response:
{ "data": { "firstName": null, "lastName": null, "email": null, "gender": null, "contactNumber": null, "address": null, "bloodGroup": null, "role": "student", "_id": "5fdef168be7e5925f40fe5fd", "regNo": "2016331022", "deptId": "5fde29cde617183fe817ab24", "password": "$2a$10$W27tAQt2Ooo/ftWFU3QWPumw2SbR8bu26Sj9e3Tg2XrDFtPbHlDUW" }, "exams": [ { "active": true, "_id": "5ff9617b6d82332b38077c23", "studentId": "5fdef168be7e5925f40fe5fd", "examId": { "examDescription": "Mechine Learning", "examTitle": "Mechine Learning 1st TT", "totalMark": "20", "startingTime": "8-1-2021", "duration": "3 hour" } }, { "active": true, "_id": "5ff966441356ff3f041118ce", "studentId": "5fdef168be7e5925f40fe5fd", "examId": { "examDescription": "Mechine Learning", "examTitle": "M", "totalMark": "20", "startingTime": "8-1-2021", "duration": "3 hour" } } ] }

GET http://127.0.0.1:8000/user/teacherInfo HTTP/1.1 Content-Type: application/json x-auth-header: A "token"

##### Response:
{ "teacherInfo": { "firstName": null, "lastName": null, "gender": null, "contactNumber": null, "address": null, "bloodGroup": null, "role": "teacher", "_id": "5fdefe5d2d9b1b3850a12267", "designation": "Professor", "deptId": { "school": "Applied Science", "address": "Sylhet", "_id": "5fde29cde617183fe817ab24", "deptName": "Computer Science & Engineering", "deptCode": "CSE" }, "email": "msrafee@teacher.sust.edu", "password": "$2a$10$mnCs9pG7j9a71jGyTRj4l.oGTpd5oPHgikzVHOlNGNzN/D7eUXO6m" } }

GET http://127.0.0.1:8000/user/assigns HTTP/1.1 Content-Type: application/json x-auth-header: A "token"

##### Response:
{ "assignsInfo": [ { "active": true, "_id": "5fe19d7f4280e4363c0f8510", "courseId": { "deptInfo": { "school": "Applied Science", "address": "Sylhet", "deptName": "Computer Science & Engineering", "deptCode": "CSE" }, "_id": "5fe19d064280e4363c0f850d", "courseName": "Compiler Construction", "courseCode": "CSE439", "credit": "3" }, "session": "2016-17" }, { "active": true, "_id": "5fe19dac4280e4363c0f8512", "courseId": { "deptInfo": { "school": "Applied Science", "address": "Sylhet", "deptName": "Computer Science & Engineering", "deptCode": "CSE" }, "_id": "5fe19c6f4280e4363c0f850c", "courseName": "Project350", "courseCode": "CSE350", "credit": "3" }, "session": "2016-17" }, { "active": true, "_id": "5fe56b4285e47e4654f4d5f0", "courseId": { "deptInfo": { "school": "Applied Science", "address": "Sylhet", "deptName": "Computer Science & Engineering", "deptCode": "CSE" }, "_id": "5fe19d2f4280e4363c0f850e", "courseName": "Mobile and Wireless Communication", "courseCode": "CSE457", "credit": "3" }, "session": "2016-17" }, { "active": true, "_id": "5fe56f0485e47e4654f4d5f3", "courseId": { "deptInfo": { "school": "Applied Science", "address": "Sylhet", "deptName": "Computer Science & Engineering", "deptCode": "CSE" }, "_id": "5fe56ef285e47e4654f4d5f2", "courseName": "Machine Learning", "courseCode": "CSE475", "credit": "3" }, "session": "2016-17" } ] }

POST http://127.0.0.1:8000/admin/departmentInfo HTTP/1.1 Content-Type: application/json x-auth-header: A "token" { "deptName": "Bangla", "deptCode": "Ban", "school": "Applied Science", "address": "Sylhet" }

##### Response:
{ "school": "Applied Science", "address": "Sylhet", "_id": "6044ca922ed5f95ed8793e7c", "deptName": "Computer Science & Engineering", "deptCode": "CSE", "createdAt": "2021-03-07T12:44:02.486Z", "updatedAt": "2021-03-07T12:44:02.486Z", "__v": 0 }

GET http://127.0.0.1:8000/admin/departments HTTP/1.1 Content-Type: application/json x-auth-header: A "token"
##### Response:
{ "message": "Retrieved Successfully", "departments": [ { "school": "Applied Science", "address": "Sylhet", "_id": "6044ca922ed5f95ed8793e7c", "deptName": "Bangla", "deptCode": "Ban" }, { "school": "Applied Science", "address": "Sylhet", "_id": "5fe19ec24280e4363c0f8516", "deptName": "AAA", "deptCode": "AA" }, { "school": "Applied Science", "address": "Sylhet", "_id": "5fdefc7d1c357b5180337be7", "deptName": "Civil Engineering", "deptCode": "CE" }, { "school": "Applied Science", "address": "Sylhet", "_id": "5fded247899db72e5470f074", "deptName": "Software Engineering", "deptCode": "SWE" }, { "school": "Applied Science", "address": "Sylhet", "_id": "5fded22c899db72e5470f073", "deptName": "Electrical & Electronic Engineering", "deptCode": "EEE" }, { "school": "Applied Science", "address": "Sylhet", "_id": "5fde29cde617183fe817ab24", "deptName": "Computer Science & Engineering", "deptCode": "CSE" } ] }

POST http://127.0.0.1:8000/admin/courseInfo HTTP/1.1 Content-Type: application/json x-auth-header: A "token" { "deptId":"5fda38b9c1bc1027b4d76078", "courseName": "Digital Signal Processing", "courseCode":"CSE454", "credit": "3.0" }
##### Response:
{ "deptInfo": { "school": "Applied Science", "address": "Sylhet", "deptName": "Computer Science & Engineering", "deptCode": "CSE" }, "_id": "6044ce0e2ed5f95ed8793e7d", "deptId": "5fde29cde617183fe817ab24", "courseName": "Machine Learning", "courseCode": "CSE475", "credit": "3", "createdAt": "2021-03-07T12:58:54.117Z", "updatedAt": "2021-03-07T12:58:54.117Z", "__v": 0 }

GET http://127.0.0.1:8000/admin/courses HTTP/1.1 Content-Type: application/json x-auth-header: A "token"

##### Response:
{ "message": "Retrieved Successfully", "courses": [ { "deptInfo": { "school": "Applied Science", "address": "Sylhet", "deptName": "Computer Science & Engineering", "deptCode": "CSE" }, "_id": "6044ce0e2ed5f95ed8793e7d", "deptId": "5fde29cde617183fe817ab24", "courseName": "Machine Learnin", "courseCode": "CSE478", "credit": "3" }, { "deptInfo": { "school": "Applied Science", "address": "Sylhet", "deptName": "Computer Science & Engineering", "deptCode": "CSE" }, "_id": "5fe56ef285e47e4654f4d5f2", "deptId": "5fde29cde617183fe817ab24", "courseName": "Machine Learning", "courseCode": "CSE475", "credit": "3" }, { "deptInfo": { "school": "Applied Science", "address": "Sylhet", "deptName": "AAA", "deptCode": "AA" }, "_id": "5fe1a0be4280e4363c0f8519", "deptId": "5fe19ec24280e4363c0f8516", "courseName": "unknown", "courseCode": "unknown", "credit": "3" }, { "deptInfo": { "school": "Applied Science", "address": "Sylhet", "deptName": "Computer Science & Engineering", "deptCode": "CSE" }, "_id": "5fe19d504280e4363c0f850f", "deptId": "5fde29cde617183fe817ab24", "courseName": "Digital Signal Processing", "courseCode": "CSE425", "credit": "3" }, { "deptInfo": { "school": "Applied Science", "address": "Sylhet", "deptName": "Computer Science & Engineering", "deptCode": "CSE" }, "_id": "5fe19d2f4280e4363c0f850e", "deptId": "5fde29cde617183fe817ab24", "courseName": "Mobile and Wireless Communication", "courseCode": "CSE457", "credit": "3" }, { "deptInfo": { "school": "Applied Science", "address": "Sylhet", "deptName": "Computer Science & Engineering", "deptCode": "CSE" }, "_id": "5fe19d064280e4363c0f850d", "deptId": "5fde29cde617183fe817ab24", "courseName": "Compiler Construction", "courseCode": "CSE439", "credit": "3" }, { "deptInfo": { "school": "Applied Science", "address": "Sylhet", "deptName": "Computer Science & Engineering", "deptCode": "CSE" }, "_id": "5fe19c6f4280e4363c0f850c", "deptId": "5fde29cde617183fe817ab24", "courseName": "Project350", "courseCode": "CSE350", "credit": "3" } ] }
