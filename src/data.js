export const allProjects = 
    [{"id":1,"title":"Project one","description":"The first project.","category":["Animals"],"goal_hours":500,"image":"https://picsum.photos/300","is_open":false,"date_created":"2020-03-20T14:28:23Z","date_updated":"2020-09-22T10:34:14.841588Z","owner":"admin"},{"id":2,"title":"Project two","description":"The second project.","category":["Community","Creative"],"goal_hours":200,"image":"https://picsum.photos/301","is_open":true,"date_created":"2020-03-21T14:28:23Z","date_updated":"2020-09-22T10:34:31.865175Z","owner":"admin1"},{"id":5,"title":"Project three","description":"The third project.","category":["Education"],"goal_hours":200,"image":"https://picsum.photos/303","is_open":true,"date_created":"2020-03-21T14:28:23Z","date_updated":"2020-09-22T10:34:41.339373Z","owner":"admin"},{"id":6,"title":"Project blah","description":"test.","category":["Business"],"goal_hours":200,"image":"https://picsum.photos/304","is_open":true,"date_created":"2020-03-21T14:28:23Z","date_updated":"2020-09-22T10:34:51.779870Z","owner":"admin"},{"id":7,"title":"Popo","description":"test project","category":["Animals"],"goal_hours":220,"image":"https://picsum.photos/305","is_open":true,"date_created":"2020-09-11T13:10:40Z","date_updated":"2020-09-22T10:34:59.708467Z","owner":"admin"},{"id":8,"title":"Different popo","description":"test project","category":["Community"],"goal_hours":220,"image":"https://picsum.photos/306","is_open":true,"date_created":"2020-09-11T13:10:40Z","date_updated":"2020-09-22T10:35:06.539399Z","owner":"admin"},{"id":9,"title":"Seven Heaven","description":"test project","category":["Animals","Business","Community","Creative"],"goal_hours":220,"image":"https://picsum.photos/307","is_open":true,"date_created":"2020-09-11T13:10:40Z","date_updated":"2020-09-22T10:35:26.036599Z","owner":"admin"},{"id":10,"title":"Origami","description":"blah di blah","category":["Community"],"goal_hours":220,"image":"https://picsum.photos/308","is_open":true,"date_created":"2020-09-11T13:10:40Z","date_updated":"2020-09-22T10:35:36.140837Z","owner":"admin"},{"id":11,"title":"Testing tasting","description":"boohoo","category":["Business"],"goal_hours":220,"image":"https://picsum.photos/309","is_open":true,"date_created":"2020-09-11T13:10:40Z","date_updated":"2020-09-22T10:35:43.339546Z","owner":"admin"},{"id":13,"title":"After pledges put","description":"blah blah","category":["Travel"],"goal_hours":20,"image":"https://picsum.photos/310","is_open":true,"date_created":"2020-09-11T13:10:40Z","date_updated":"2020-09-22T10:35:50.781044Z","owner":"admin"},{"id":15,"title":"Fruit Flies","description":"testing normal user access","category":["Event"],"goal_hours":50,"image":"https://picsum.photos/311","is_open":true,"date_created":"2020-09-11T13:10:40Z","date_updated":"2020-09-22T10:35:57.942291Z","owner":"apple"},{"id":16,"title":"Check datetime field","description":"boohoo","category":["Travel"],"goal_hours":55,"image":"https://picsum.photos/312","is_open":true,"date_created":"2020-09-20T10:47:43.364074Z","date_updated":"2020-09-22T10:36:11.462635Z","owner":"orange"},{"id":17,"title":"Apple datetime check","description":"bankjs asikugfiqtehjkrgb vsdgf","category":["Family","Memorial"],"goal_hours":200,"image":"https://picsum.photos/313","is_open":true,"date_created":"2020-09-20T10:57:52.692461Z","date_updated":"2020-09-22T10:36:19.354842Z","owner":"apple"}]
    ;

export const oneProject = {
    "id":2,
    "title":"Project two",
    "description":"The second project.",
    "category":[
        "Community",
        "Creative"
    ],
    "goal_hours":200,
    "image":"https://picsum.photos/101",
    "is_open":true,
    "date_created":"2020-03-21T14:28:23Z",
    "date_updated":"2020-09-22T10:34:31.865175Z",
    "owner":"admin1",
    "pledges":[
        {
            "id":2,
            "date_created":"2020-09-20T10:23:17.165285Z",
            "date_updated":"2020-09-20T10:56:27.368888Z",
            "hours":3,
            "skill":[
                "Security Engineer"
            ],
            "comment":"testing",
            "anonymous":false,
            "volunteer":"admin",
            "project_id":2,
            "project_title":"Project two"
        },
        {
            "id":9,
            "date_created":"2020-09-20T10:23:17.165285Z",
            "date_updated":"2020-09-20T10:56:27.368888Z",
            "hours":2,
            "skill":[
                "Reporting & Analytics"
            ],
            "comment":"test pledge without skill",
            "anonymous":true,
            "volunteer":"admin",
            "project_id":2,
            "project_title":"Project two"
        },
            {
            "id":10,
            "date_created":"2020-09-20T10:23:17.165285Z",
            "date_updated":"2020-09-20T10:56:27.368888Z",
            "hours":2,
            "skill":[
                "Software Developer"
            ],
            "comment":"cannot post without skill",
            "anonymous":true,
            "volunteer":"admin",
            "project_id":2,
            "project_title":"Project two"
        },
        {
            "id":11,
            "date_created":"2020-09-20T10:23:17.165285Z",
            "date_updated":"2020-09-20T10:56:27.368888Z",
            "hours":2,
            "skill":[
                "Reporting & Analytics"
            ],
            "comment":"test pledge without skill",
            "anonymous":true,
            "volunteer":"admin",
            "project_id":2,
            "project_title":"Project two"
        },
        {
            "id":12,
            "date_created":"2020-09-20T10:23:17.165285Z",
            "date_updated":"2020-09-20T10:56:27.368888Z",
            "hours":2,
            "skill":[
                "Reporting & Analytics"
            ],
            "comment":"test pledge without skill",
            "anonymous":true,
            "volunteer":"admin",
            "project_id":2,
            "project_title":"Project two"
        },
        {
            "id":13,
            "date_created":"2020-09-20T10:23:17.165285Z",
            "date_updated":"2020-09-20T10:56:27.368888Z",
            "hours":2,
            "skill":[
                "Business Analyst"
            ],
            "comment":"test apple pledge",
            "anonymous":true,
            "volunteer":"apple",
            "project_id":2,
            "project_title":"Project two"
        },
        {
            "id":14,
            "date_created":"2020-09-20T10:23:17.165285Z",
            "date_updated":"2020-09-20T10:56:27.368888Z",
            "hours":2,
            "skill":[
                "Business Analyst"
            ],
            "comment":"test apple pledge",
            "anonymous":true,
            "volunteer":"apple",
            "project_id":2,
            "project_title":"Project two"
        },
        {
            "id":15,
            "date_created":"2020-09-20T10:23:17.165285Z",
            "date_updated":"2020-09-20T10:56:27.368888Z",
            "hours":2,
            "skill":[
                "Business Analyst"
            ],
            "comment":"test apple pledge",
            "anonymous":true,
            "volunteer":"apple",
            "project_id":2,
            "project_title":"Project two"
        }
    ]
}
;