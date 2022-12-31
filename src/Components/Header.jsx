export default function Footer(props) {
    return(
        <div className="card-text">
            <h5>100K PAGEVIEWS</h5>
            <div className="price-text">
                <h1>{props.value}</h1>
                <h6>/ month</h6>
            </div>
        </div>
    );    
}
