//Styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        <Image src={image} alt='movie thumbnail' />
    </div>
)

export default Thumb;