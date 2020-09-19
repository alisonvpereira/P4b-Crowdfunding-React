export const allProjects = 
    [
        {
            "id": 1,
            "title": "Project One",
            "description": "test project",
            "category": ["Sports"],
            "goal_hours": 120,
            "image": "https://picsum.photos/300",
            "is_open": true,
            "date_created": "2020-09-10T13:10:40Z",
            "owner": 1
        },
        {
            "id": 2,
            "title": "popo",
            "description": "test project",
            "category": ["Medical","Sports"],
            "goal_hours": 220,
            "image": "https://picsum.photos/600",
            "is_open": true,
            "date_created": "2020-09-11T13:10:40Z",
            "owner": 1
        },
        {
            "id": 3,
            "title": "guitarhero",
            "description": "another project",
            "category": ["Music"],
            "goal_hours": 520,
            "image": "https://picsum.photos/100",
            "is_open": true,
            "date_created": "2020-09-11T13:10:40Z",
            "owner": 1
        }
];

export const oneProject = {
    "id": 1,
    "title": "Project One",
    "description": "test project",
    "category": ["Sports"],
    "goal_hours": 120,
    "image": "https://via.placeholder.com/300.jpg",
    "is_open": true,
    "date_created": "2020-09-10T13:10:40Z",
    "owner": 1,
    "pledges": [
        {id: 1,
         amount: 100,
         comment: "A comment for the pledge",
         anonymous: false,
         supporter: 3,
         project_id: 1,
         },
    ]
};