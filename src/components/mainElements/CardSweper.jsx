import React from "react"
import { CardCarousel } from "../ui/Card-Carousel"

const UiElements = [
    { src: "/ui-buttons/button1.html", alt: "Ui element 1" },
    { src: "/ui-buttons/button2.html", alt: "Ui element 2" },
    { src: "/ui-buttons/button3.html", alt: "Ui element 3" },
    { src: "/ui-buttons/button4.html", alt: "Ui element 4" },
    { src: "/ui-buttons/button5.html", alt: "Ui element 5" },
   
]

function CardSweeper() {
    return (
        <div className="">
            <CardCarousel images={UiElements} />
        </div>
    )
}

export default CardSweeper
