import {data as data1} from "./data.js";
console.log(data1.reduce((acc, num) => acc + num, 0));

const response = {
                data: {
                    id: 1,
                    title: "Destructuring in JavaScript",
                    author: {
                        name: "Dev",
                        email: "Dev@gmail.com",
                    },
                },
            };

            const {data} = response

            const {title, author: {name, email}} = data;
            


            /**
             * Tilte : 
             * Author :
             * author name:
             * author email:
             */

