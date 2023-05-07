import { useSearchParams } from 'react-router-dom'
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";

function Filter() {
    let [filter, setFilter] = useSearchParams()

    let handlehtl=()=>{
        setFilter({sort:'htl'})
    }
    let handlelth=()=>{
        setFilter({sort:'lth'})
    }
    let handleall=()=>{
        setFilter({sort:'all'})
        alert('hey')
    }
    let[catefilter,setCatefilter]=useSearchParams()
    let handleelect=()=>{
        setCatefilter({
            cate:'electronics'
        })
    }

    return (
        <div>
            <ul>
                <h3>delivery day</h3>
                <li><input type="radio" name="deli" id="1" /><label htmlFor="1">today</label></li>
                <li><input type="radio" name="deli" id="2" /><label htmlFor="2">after 1 day</label></li>
                <li><input type="radio" name="deli" id="3" /><label htmlFor="3">after 2 day</label></li>
            </ul>
            <ul>
                <h3>category</h3>
                <li onClick={handleelect}>electronics</li>
                <li>mens</li>
                <li>womens</li>
                <li>kids</li>
                <li>furniture</li>
                <li>automotive</li>
                <li>motocycle</li>
                <li>lighting</li>
                <li>skincare</li>
            </ul>
            <ul>
                <h3>customer review</h3>
                <li><div className="row align-items-center">
                    <span className="rating"><StarFill /></span>
                    <span className="rating"><StarFill /></span>
                    <span className="rating"><StarFill /></span>
                    <span className="rating"><StarFill /></span>
                    <span className="rating"><Star /></span>
                    <h6>&up</h6>
                </div></li>
                <li><div className="row align-items-center">
                    <span className="rating"><StarFill /></span>
                    <span className="rating"><StarFill /></span>
                    <span className="rating"><StarFill /></span>
                    <span className="rating"><Star /></span>
                    <span className="rating"><Star /></span>
                    <h6>&up</h6>
                </div></li>
                <li><div className="row align-items-center">
                    <span className="rating"><StarFill /></span>
                    <span className="rating"><StarFill /></span>
                    <span className="rating"><Star /></span>
                    <span className="rating"><Star /></span>
                    <span className="rating"><Star /></span>
                    <h6>&up</h6>
                </div></li>
                <li><div className="row align-items-center">
                    <span className="rating"><StarFill /></span>
                    <span className="rating"><Star /></span>
                    <span className="rating"><Star /></span>
                    <span className="rating"><Star /></span>
                    <span className="rating"><Star /></span>
                    <h6>&up</h6>
                </div></li>
            </ul>
            <ul>
                <h3>sorting</h3>
                <li onClick={()=>handlehtl()}>hign to low</li>
                <li onClick={()=>handlelth()}>low to high</li>
                <li onClick={()=>handleall()}>all</li>
            </ul>
            <ul>
                <h3>discount</h3>
                <li>5% descount or more</li>
                <li>10% descount or more</li>
                <li>20% descount or more</li>
                <li>30% descount or more</li>
                <li>40% descount or more</li>
            </ul>
            <ul>
                <h3>item condition</h3>
                <li>new</li>
                <li>renewd</li>
                <li>used</li>
            </ul>
        </div>
    )
}

export default Filter