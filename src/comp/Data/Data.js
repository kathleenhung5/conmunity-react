export const Data = [
    {
        username: 'Ivan Kokovihin',
        company: 'High Rise Glass',
        projects: [
            {
                name: "Skyscraper",
                progress: 31,
                code: "3JK1JH",
                floors: [
                    {
                        num: 1,
                        progress: 23,
                        deleted: 0,
                        windows: [
                            {
                                num: 1,
                                progress: 43,
                                deleted: 0,
                                tasks: [
                                    {
                                        name: 'Install Window',
                                        tag: 'Pending',
                                        alert: false,
                                        des: 'Install the window properly by May 15th',
                                        comments: [
                                            {
                                                username: 'Bob Ross',
                                                comment: 'I did not finish work because the materials were not delivered.',
                                                stamp:'Feb 2nd 18:23'
                                            },
                                            {
                                                username: 'Hello Kitty',
                                                comment: 'Okay. I will contact them tmr',
                                                stamp:'Feb 2nd 19:43'
                                            }
                                        ]
                                    },
                                    {
                                        name: "Painting",
                                        tag: '',
                                        alert: true,
                                        des: 'Paint the window frame with white paint'
                                    },
                                    {
                                        name: "Inspection",
                                        tag: '',
                                        alert: false,
                                        des: 'Two inspectors should check this window.'
                                    } 
                                ]
                            },
                            {
                                num: 2,
                                progress: 78,
                                deleted: 0
                            },
                            {
                                num: 3,
                                progress: 86, 
                                deleted: 0
                            }
                        ]
                    },
                    {
                        num: 2,
                        progress: 35,
                        deleted: 0
                    },
                    {
                        num: 3,
                        progress: 49, 
                        deleted: 0
                    }
                ]
            },
            {
                name: "Office Building",
                progress: 67,
                code: "2J9LL2"
            }
        ]
    }
]