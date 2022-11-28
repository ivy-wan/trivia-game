import React from "react";

const Category = (props) => {

    let colors = ["#FFD6D6", "#D6F5FF", "#D9DDFF"]
    let points = ["100", "200", "300"]
    
    return (
        <div className="category-container">
            <div className="category-name">{props.categoryName}</div>
            {
                points.map((point) => {
                    return (
                        <div className="point-value" style={{backgroundColor: colors[props.i % 3]}}>
                            {point}
                        </div>
                    )
                })
            }
        </div>
    )
   
}

export default Category