import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/index.css";

import Review from "../components/Review";
export default function Home() {
    const [currentRating, setCurrentRating] = useState(0);

    const handleClick = (starNumber) => {
        setCurrentRating(starNumber);
    };

    let def = "grey";
    const [yescolor, yessetcolor] = useState(def);
    const [nocolor, nosetcolor] = useState(def);

    function colorchange(val) {
        if (val == "green") {
            if (yescolor == "green") yessetcolor(def);
            else yessetcolor("green");
            nosetcolor(def);
        } else if (val === "red") {
            if (nocolor == "red") nosetcolor(def);
            else nosetcolor("red");
            yessetcolor(def);
        }
    }
    return (
        <main>
            <span className="cross">⨯</span>
            <div className="first-block">
                <p className="heading-para">Leave a review</p>
                <p className="heading-safety" id="heading-safety">
                    Safety
                </p>
                <p className="heading-safety-para">
                    Lorem, ipsum dolor sit amet consectetur adipisici
                </p>

                <Review />
            </div>
            <div className="first-block">
                <p className="heading-safety">Communication</p>
                <p className="heading-safety-para">
                    Lorem, ipsum dolor sit amet consectetur adipisici sit amet consectetur
                    ad
                </p>

                <Review />
            </div>
            <div className="first-block">
                <p className="heading-safety">Would You Recommend Trausti?</p>
                <p className="heading-safety-para">
                    Lorem, ipsum dolor sit amet consectetur adipisici
                </p>

                <div className="thumb">
                    <div>
                        <i
                            className="bi bi-hand-thumbs-down"
                            style={{ color: `${nocolor}`, fontSize: "1.5rem",fontWeight:'bold' }}
                            onClick={() => colorchange("red")}
                        >
                            {" "}
                            No
                        </i>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <i
                            className="bi bi-hand-thumbs-up"
                            style={{ color: `${yescolor}`, fontSize: "1.5rem" ,fontWeight:'bold'}}
                            onClick={() => colorchange("green")}
                        >
                            {" "}
                            Yes
                        </i>
                    </div>
                </div>

                <p className="heading-safety" id="praised">
                    Praised
                </p>
                <p className="heading-safety-para">
                    Lorem, ipsum dolor sit amet consectetur{" "}
                </p>
            </div>
        </main>
    );
}
