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
      "gpa": "xx.yy",
      "specialty": "Comp. Sci.",
      "lvl": 3,
      "plan_no": 4,
      "success_hrs": "xy",
      "study_hrs": "yz",
      "remaining_hrs": "ab",
      "balance": "abc"
    },
    "installments": [
      {
        "due_date": "xx-xx-xxxx",
        "amount": "xx",
        "payed": "xx",
        "remaining": "xx"
      },
      {
        "due_date": "yy-yy-yyyy",
        "amount": "yy",
        "payed": "yy",
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
    "urls": [
      "url1",
      "url2",
      "url3",
      "url4",
      "url5",
      "url6"
    ],
    "management": "empty",
    "std_info": {
      "id_no": "xxxyyyzzz",
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
        "gpa": "xx.yy",
        "cgpa": "yy.zz",
        "subjects": [
          {
            "name": "sub1",
            "code": "cs101",
            "mid": "xx",
            "final": "yy",
            "credits": "credits amount"
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": "xx",
            "final": "yy",
            "credits": "credits amount"
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": "xx",
            "final": "yy",
            "credits": "credits amount"
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": "xx",
            "final": "yy",
            "credits": "credits amount"
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": "xx",
            "final": "yy",
            "credits": "credits amount"
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": "xx",
            "final": "yy",
            "credits": "credits amount"
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": "xx",
            "final": "yy",
            "credits": "credits amount"
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": "xx",
            "final": "yy",
            "credits": "credits amount"
          }
        ]
      },
      {
        "year": "2016/2017",
        "semister": 2,
        "gpa": "xx.yy",
        "cgpa": "yy.zz",
        "subjects": [
          {
            "name": "sub1",
            "code": "cs101",
            "mid": "xx",
            "final": "yy",
            "credits": "credits amount"
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": "xx",
            "final": "yy",
            "credits": "credits amount"
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": "xx",
            "final": "yy",
            "credits": "credits amount"
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": "xx",
            "final": "yy",
            "credits": "credits amount"
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": "xx",
            "final": "yy",
            "credits": "credits amount"
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": "xx",
            "final": "yy",
            "credits": "credits amount"
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": "xx",
            "final": "yy",
            "credits": "credits amount"
          },
          {
            "name": "sub1",
            "code": "cs101",
            "mid": "xx",
            "final": "yy",
            "credits": "credits amount"
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


app.listen(app.get('port'), function(){
  console.log('app running');
})
