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
import { Paper, Button, Container } from '@mui/material'

function Home(props)
{
    var items = [
        {
            name: "HEMPIRE",
            description: "A heavy rock and roll band based out of Boone, NC.",
            button: 'Learn More'
        },
        {
            name: "MERCH",
            description: "Our latest merch!",
            button: 'View Products'
        },
        {
            name: 'UPCOMING SHOWS',
            description: 'View our upcoming shows',
            button: 'Check it out!'
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
        <Container maxWidth='sm' margin='5'>
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton" variant='outlined' color='secondary'>
                {props.item.button}
            </Button>
  
        </Paper>
        </Container>
    )
}

export default Home;