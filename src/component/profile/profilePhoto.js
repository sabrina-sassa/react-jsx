import ImgUrl from '../image/user-icon.png'
import 'bootstrap/dist/css/bootstrap.css'

export const ProfilPhoto=()=>{
    return(
<>
<img src={ImgUrl} alt="" style={{  borderradius:'50%'}} class='position-absolute top-0 start-50 translate-middle'/>
</>
)
}