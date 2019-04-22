const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
  const data ={
    "agenda": {
      "regs": "xx-xx-xxxx",
      "rege": "xx-xx-xxxx",
      "studs": "xx-xx-xxxx",
      "stude": "xx-xx-xxxx",
      "adds": "xx-xx-xxxx",
      "adde": "xx-xx-xxxx",
      "exams": "xx-xx-xxxx",
      "exame": "xx-xx-xxxx",
      "drope": "xx-xx-xxxx"
    },
    "academical_data": {
      "college": "Engineering",
      "gpa": 80.2,
      "specialty": "Comp. Sci.",
      "lvl": 3,
      "plan_no": 4,
      "success_hrs": 89,
      "study_hrs": 89,
      "remaining_hrs": 58,
      "balance": 200.5
    },
    "installments": [
      {
        "due_date": "xx-xx-xxxx",
        "amount": 100,
        "payed": 90,
        "remaining": "xx"
      },
      {
        "due_date": "yy-yy-yyyy",
        "amount": 80,
        "payed": 40,
        "remaining": "yy"
      }
    ],
    "ads": [
      {
        "address": "ad1",
        "dest": "dest1"
      },
      {
        "address": "ad2",
        "dest": "dest2"
      },
      {
        "address": "ad3",
        "dest": "dest3"
      },
      {
        "address": "ad4",
        "dest": "dest4"
      }
    ],
    "management": "empty",
    "std_info": {
      "id_no": 120160513,
      "dob": "xx-yy-zzzz",
      "pob": "somewhere",
      "name_eng": "Basel N. M. Abuhadrous",
      "name_ara": "باسل نضال محمد ايوب ابو هدروس",
      "address": "somewhere else"
    },
    "study_plan": "a big excel file goes here",
    "marks": [
      {
        "year": "2016/2017",
        "semister": 1,
        "gpa": 50.0,
        "cgpa": 50.0,
        "subjects": [
          {
            "name": "sub1",
            "code": "cs101",
            "mid": 50,
            "final": 50,
            "credits": 3
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": 50,
            "final": 50,
            "credits": 3
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": 50,
            "final": 50,
            "credits": 3
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": 50,
            "final": 50,
            "credits": 3
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": 50,
            "final": 50,
            "credits": 3
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": 50,
            "final": 50,
            "credits": 3
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": 50,
            "final": 50,
            "credits": 3
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": 50,
            "final": 50,
            "credits": 3
          }
        ]
      },
      {
        "year": "2016/2017",
        "semister": 2,
        "gpa": 50.0,
        "cgpa": 50.0,
        "subjects": [
          {
            "name": "sub1",
            "code": "cs101",
            "mid": 50,
            "final": 50,
            "credits": 3
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": 50,
            "final": 50,
            "credits": 3
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": 50,
            "final": 50,
            "credits": 3
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": 50,
            "final": 50,
            "credits": 3
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": 50,
            "final": 50,
            "credits": 3
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": 50,
            "final": 50,
            "credits": 3
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": 50,
            "final": 50,
            "credits": 3
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": 50,
            "final": 50,
            "credits": 3
          }
        ]
      }
    ],
    "exams": {
      "mid": [
        {
          "subject": "sub1",
          "date:": "xx-yy-zzzz",
          "time": "aa:bb - xx-yy"
        },
        {
          "subject": "sub2",
          "date:": "xx-yy-zzzz",
          "time": "aa:bb - xx-yy"
        },
        {
          "subject": "sub3",
          "date:": "xx-yy-zzzz",
          "time": "aa:bb - xx-yy"
        }
      ],
      "final": [
        {
          "subject": "sub1",
          "date:": "xx-yy-zzzz",
          "time": "aa:bb - xx-yy"
        },
        {
          "subject": "sub2",
          "date:": "xx-yy-zzzz",
          "time": "aa:bb - xx-yy"
        },
        {
          "subject": "sub3",
          "date:": "xx-yy-zzzz",
          "time": "aa:bb - xx-yy"
        }
      ]
    },
    "financial_record": "emoty",
    "schedual": {
      "sat": [
        {
          "subject": "sub1",
          "time": "aa:bb - xx-yy"
        },
        {
          "subject": "sub2",
          "time": "aa:bb - xx-yy"
        },
        {
          "subject": "sub3",
          "time": "aa:bb - xx-yy"
        }
      ],
      "sun": [
        {
          "subject": "sub1",
          "time": "aa:bb - xx-yy"
        },
        {
          "subject": "sub2",
          "time": "aa:bb - xx-yy"
        },
        {
          "subject": "sub3",
          "time": "aa:bb - xx-yy"
        }
      ],
      "mon": [
        {
          "subject": "sub1",
          "time": "aa:bb - xx-yy"
        },
        {
          "subject": "sub2",
          "time": "aa:bb - xx-yy"
        },
        {
          "subject": "sub3",
          "time": "aa:bb - xx-yy"
        }
      ],
      "tue": [
        {
          "subject": "sub1",
          "time": "aa:bb - xx-yy"
        },
        {
          "subject": "sub2",
          "time": "aa:bb - xx-yy"
        },
        {
          "subject": "sub3",
          "time": "aa:bb - xx-yy"
        }
      ],
      "wed": [
        {
          "subject": "sub1",
          "time": "aa:bb - xx-yy"
        },
        {
          "subject": "sub2",
          "time": "aa:bb - xx-yy"
        },
        {
          "subject": "sub3",
          "time": "aa:bb - xx-yy"
        }
      ]
    }
  };
  
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(data);
})

app.get('/agenda', function(req, res){
  const data ={
      "regs": "xx-xx-xxxx",
      "rege": "xx-xx-xxxx",
      "studs": "xx-xx-xxxx",
      "stude": "xx-xx-xxxx",
      "adds": "xx-xx-xxxx",
      "adde": "xx-xx-xxxx",
      "exams": "xx-xx-xxxx",
      "exame": "xx-xx-xxxx",
      "drope": "xx-xx-xxxx"
    };
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(data);
})

app.get('/academical_data', function(req, res){
  const data ={
      "college": "Engineering",
      "gpa": 80.2,
      "specialty": "Comp. Sci.",
      "lvl": 3,
      "plan_no": 4,
      "success_hrs": 89,
      "study_hrs": 89,
      "remaining_hrs": 58,
      "balance": 200.5
    };
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(data);
})

app.get('/installments', function(req, res){
  const data =[
    {
      "due_date": "xx-xx-xxxx",
      "amount": 100,
      "payed": 90,
      "remaining": "xx"
    },
    {
      "due_date": "yy-yy-yyyy",
      "amount": 80,
      "payed": 40,
      "remaining": "yy"
    }
    ];
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(data);
})

app.listen(app.get('port'), function(){
  console.log('app running');
})
