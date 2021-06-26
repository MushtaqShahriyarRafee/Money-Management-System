## Local URL: http://127.0.0.1:8000
## Global URL: https://sust-exam-management-system.herokuapp.com
#
#

### 1. Creating a new department (must have to pass token as x-auth-header)

> POST [URL](https://sust-exam-management-system.herokuapp.com)/admin/departmentInfo
> 
> x-auth-header: TOKEN
```json
{
"deptName": "English",
"deptCode": "Eng",
"school": "Applied Science",
"address": "Sylhet"
}
```

> Response:
```json
{
"school": "Applied Science",
"address": "Sylhet",
"_id": "60b754e1fa1081186c7c6303",
"deptName": "English",
"deptCode": "Eng",
"createdAt": "2021-06-02T09:52:33.428Z",
"updatedAt": "2021-06-02T09:52:33.428Z",
"_v": 0
}
```

### 2. Provide the infos of all the departments (must have to pass token as x-auth-header)

> GET [URL](https://sust-exam-management-system.herokuapp.com)/admin/departments
> 
> x-auth-header: TOKEN

> Response:
```json
{
"message": "Retrieved Successfully",
"departments": [
{
"school": "Applied Science",
"address": "Sylhet",
"_id": "60b754e1fa1081186c7c6303",
"deptName": "English",
"deptCode": "Eng"
},
{
"school": "Applied Science",
"address": "Sylhet",
"_id": "6044ca922ed5f95ed8793e7c",
"deptName": "Bangla",
"deptCode": "Ban"
},
{
"school": "Applied Science",
"address": "Sylhet",
"_id": "5fe19ec24280e4363c0f8516",
"deptName": "AAA",
"deptCode": "AA"
},
{
"school": "Applied Science",
"address": "Sylhet",
"_id": "5fdefc7d1c357b5180337be7",
"deptName": "Civil Engineering",
"deptCode": "CE"
},
{
"school": "Applied Science",
"address": "Sylhet",
"_id": "5fded247899db72e5470f074",
"deptName": "Software Engineering",
"deptCode": "SWE"
},
{
"school": "Applied Science",
"address": "Sylhet",
"_id": "5fded22c899db72e5470f073",
"deptName": "Electrical & Electronic Engineering",
"deptCode": "EEE"
},
{
"school": "Applied Science",
"address": "Sylhet",
"_id": "5fde29cde617183fe817ab24",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
}]}
```

### 3. Create a new course (must have to pass token as x-auth-header)

> POST [URL](https://sust-exam-management-system.herokuapp.com)/admin/courseInfo
> 
> x-auth-header: TOKEN
```json
{
"deptId": "5fde29cde617183fe817ab24",
"courseName": "Bangla",
"courseCode": "BAN478",
"credit": "3"
}
```

> Response:
```json
{
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"_id": "60b75635fa1081186c7c6304",
"deptId": "5fde29cde617183fe817ab24",
"courseName": "Bangla",
"courseCode": "BAN478",
"credit": "3",
"createdAt": "2021-06-02T09:58:13.413Z",
"updatedAt": "2021-06-02T09:58:13.413Z",
"_v": 0
}
```

### 4. Provide the infos of all the courses (must have to pass token as x-auth-header)

> GET [URL](https://sust-exam-management-system.herokuapp.com)/admin/courses
> 
> x-auth-header: TOKEN

> Response:
```json
{
"message": "Retrieved Successfully",
"courses": [
{
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"_id": "60b75635fa1081186c7c6304",
"deptId": "5fde29cde617183fe817ab24",
"courseName": "Bangla",
"courseCode": "BAN478",
"credit": "3"
},
{
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"_id": "6044ce0e2ed5f95ed8793e7d",
"deptId": "5fde29cde617183fe817ab24",
"courseName": "Machine Learnin",
"courseCode": "CSE478",
"credit": "3"
},
{
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"_id": "5fe56ef285e47e4654f4d5f2",
"deptId": "5fde29cde617183fe817ab24",
"courseName": "Machine Learning",
"courseCode": "CSE475",
"credit": "3"
},
{
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "AAA",
"deptCode": "AA"
},
"_id": "5fe1a0be4280e4363c0f8519",
"deptId": "5fe19ec24280e4363c0f8516",
"courseName": "unknown",
"courseCode": "unknown",
"credit": "3"
},
{
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"_id": "5fe19d504280e4363c0f850f",
"deptId": "5fde29cde617183fe817ab24",
"courseName": "Digital Signal Processing",
"courseCode": "CSE425",
"credit": "3"
},
{
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"_id": "5fe19d2f4280e4363c0f850e",
"deptId": "5fde29cde617183fe817ab24",
"courseName": "Mobile and Wireless Communication",
"courseCode": "CSE457",
"credit": "3"
},
{
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"_id": "5fe19d064280e4363c0f850d",
"deptId": "5fde29cde617183fe817ab24",
"courseName": "Compiler Construction",
"courseCode": "CSE439",
"credit": "3"
},
{
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"_id": "5fe19c6f4280e4363c0f850c",
"deptId": "5fde29cde617183fe817ab24",
"courseName": "Project350",
"courseCode": "CSE350",
"credit": "3"
}]}
```

### 5. Assign a course to a teacher (must have to pass token as x-auth-header)

> POST [URL](https://sust-exam-management-system.herokuapp.com)/admin/assignationInfo
> 
> x-auth-header: TOKEN
```json
{
"teacherId":"5ff9905607531b0609839367",
"courseId":"5fdf185370471816adefb065",
"session": "2016-17"
}
```

> Response:
```json
{
"active": true,
"_id": "60b756a1fa1081186c7c6305",
"teacherId": "5fdefe5d2d9b1b3850a12267",
"courseId": "60b75635fa1081186c7c6304",
"session": "2016-17",
"createdAt": "2021-06-02T10:00:01.723Z",
"updatedAt": "2021-06-02T10:00:01.723Z",
"_v": 0
}
```

### 6. Provide all the assignation infos (must have to pass token as x-auth-header)

> GET [URL](https://sust-exam-management-system.herokuapp.com)/admin/assigns
> 
> x-auth-header: TOKEN

> Response:
```json
{
"info": [
{
"active": true,
"_id": "5fe19d7f4280e4363c0f8510",
"teacherId": "5fdefe5d2d9b1b3850a12267",
"courseId": {
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"courseName": "Compiler Construction",
"courseCode": "CSE439",
"credit": "3"
},
"session": "2016-17"
},
{
"active": true,
"_id": "5fe19dac4280e4363c0f8512",
"teacherId": "5fdefe5d2d9b1b3850a12267",
"courseId": {
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"courseName": "Project350",
"courseCode": "CSE350",
"credit": "3"
},
"session": "2016-17"
},
{
"active": true,
"_id": "5fe56b4285e47e4654f4d5f0",
"teacherId": "5fdefe5d2d9b1b3850a12267",
"courseId": {
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"courseName": "Mobile and Wireless Communication",
"courseCode": "CSE457",
"credit": "3"
},
"session": "2016-17"
},
{
"active": true,
"_id": "5fe56f0485e47e4654f4d5f3",
"teacherId": "5fdefe5d2d9b1b3850a12267",
"courseId": {
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"courseName": "Machine Learning",
"courseCode": "CSE475",
"credit": "3"
},
"session": "2016-17"
},
{
"active": true,
"_id": "60b756a1fa1081186c7c6305",
"teacherId": "5fdefe5d2d9b1b3850a12267",
"courseId": {
"deptInfo": {
"school": "Applied Science",
"address": "Sylhet",
"deptName": "Computer Science & Engineering",
"deptCode": "CSE"
},
"courseName": "Bangla",
"courseCode": "BAN478",
"credit": "3"
},
"session": "2016-17"
}]}
```
