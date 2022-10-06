// import React from 'react';
// import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'
// // import { useTheme } from '@mui/material/styles'

// const Home = () => {
//     // const theme = useTheme();
//     const items = [
//         {
//             name: 'Random',
//             description: 'Testing here'
//         },
//         {
//             name: 'Random-2',
//             description: 'Second Test'
//         }
//     ]

//     return (
//         <div>
//             <Button background="background">Hello World</Button>
//             <Carousel>
//                 {
//                     items.map( (item, i) => <Item key={i} item={item} /> )
//                 }
//             </Carousel>
//         </div>
//     )
// }

// export default Home;

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Home(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default Home;