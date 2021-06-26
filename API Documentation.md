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
"deptName": "Computer Science and Engineering",
"deptCode": "CSE",
"school": "Applied Science",
"address": "Sylhet"
}
```

> Response:
```json
{
  "school": "Applied Science",
  "address": "Sylhet 3114 IICT",
  "_id": "60d79fc7909eb8d7efd63272",
  "deptName": "Computer Science and Engineering",
  "deptCode": "CSE",
  "createdAt": "2021-06-26T21:44:39.317Z",
  "updatedAt": "2021-06-26T21:44:39.317Z",
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
      "address": "Sylhet 3114 IICT",
      "_id": "60d79fc7909eb8d7efd63272",
      "deptName": "Software Engineering",
      "deptCode": "SWE"
    },
    {
      "school": "Applied Science",
      "address": "Sylhet 3114 IICT",
      "_id": "60bf56d6b7996b125ba87b35",
      "deptName": "Computer Science and Engineering",
      "deptCode": "CSE"
    }
  ]
}
```

### 3. Create a new course (must have to pass token as x-auth-header)

> POST [URL](https://sust-exam-management-system.herokuapp.com)/admin/courseInfo
> 
> x-auth-header: TOKEN
```json
{
   "deptId":"60bf56d6b7996b125ba87b35",
   "courseName": "Web Engineering",
   "courseCode":"CSE450",
   "credit": "2.0"
}
```

> Response:
```json
{
  "deptInfo": {
    "school": "Applied Science",
    "address": "Sylhet 3114 IICT",
    "deptName": "Computer Science and Engineering",
    "deptCode": "CSE"
  },
  "_id": "60d7a107909eb8d7efd63273",
  "deptId": "60bf56d6b7996b125ba87b35",
  "courseName": "Web Engineering",
  "courseCode": "CSE450",
  "credit": "2.0",
  "createdAt": "2021-06-26T21:49:59.581Z",
  "updatedAt": "2021-06-26T21:49:59.581Z",
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
        "address": "Sylhet 3114 IICT",
        "deptName": "Computer Science and Engineering",
        "deptCode": "CSE"
      },
      "_id": "60d7a107909eb8d7efd63273",
      "deptId": "60bf56d6b7996b125ba87b35",
      "courseName": "Web Engineering",
      "courseCode": "CSE450",
      "credit": "2.0"
    },
    {
      "deptInfo": {
        "school": "Applied Science",
        "address": "Sylhet 3114 IICT",
        "deptName": "Computer Science and Engineering",
        "deptCode": "CSE"
      },
      "_id": "60c33bca52cc2f0c458e81b1",
      "deptId": "60bf56d6b7996b125ba87b35",
      "courseName": "Digital Signal Processing",
      "courseCode": "CSE454",
      "credit": "3.0"
    }
  ]
}
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
