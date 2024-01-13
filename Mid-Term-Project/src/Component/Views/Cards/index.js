import { useNavigate } from "react-router-dom";
import heart from '../../../heart.svg'


function Cards(props) {
    const { price, description, images, title, id } = props;
    const navigate = useNavigate()

    const HandleCardPress = (e) => {
        navigate(`/DetailScreen/${id}`, { state: e })
    }

    return (
        <div style={{ display: "inline-flex", marginBottom: 20, margin: 10 , cursor:"pointer"}}  >
            <div onClick={() => HandleCardPress(props)} style={{ borderRadius: 5, height: 400, border: '1px solid rgb(199, 196, 196)' }} className="color">
                <img style={{ width: '17.3rem', height: 200, borderRadius: 5, borderBottom: '1px solid rgb(180, 190, 190)' }} src={images[0]} className="card-img-top" alt="alt" />
                <div style={{ width: "16rem", height: 200, textAlign: "left", paddingLeft: 10, marginTop: -10 }}>
                    <h4>Rs. {price}  <img src={heart} style={{ paddingLeft: '10rem' }} alt=""/></h4>
                    <p>{title}</p>
                    <p style={{ fontSize: 15 }}>{description}</p>
                </div>
            </div>
        </div>


    )
}

export default Cards;