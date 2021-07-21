import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import { useState } from "react";
import styles from './DataCards.css'


const defaultImgUrl = 'https://infatuation.imgix.net/media/images/guides/the-best-san-francisco-restaurants-for-date-night/VirginiaMaeRollison_ForeignCinema_Interiors024.jpg?auto=format&w=256';
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;


const DataCards = ({ icon = 'img-url', name = 'business name', vicinity = 'address', photo_reference = '', business_status = false }) => {

    const [expend, SetExpend] = useState(null);

    let url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=250&photoreference=${photo_reference}&key=${API_KEY}`

    return (
        <Card className='Card'>
            <CardContent>
                <CardMedia
                    className='icon'
                    image={icon}>
                </CardMedia>
                <div className='bussiness-status'>
                    {business_status ? <p className='open'>open</p> : <p className='close'>currently closed</p>}
                </div>
                <CardMedia
                    className='CardMedia'
                    image={photo_reference ? url : defaultImgUrl}
                    title='image'>
                </CardMedia>
                <Typography className='title' color="textPrimary" variant='h6' gutterBottom>
                    {name}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {vicinity}
                </Typography>
            </CardContent>
        </Card >
    )
}

export default DataCards;