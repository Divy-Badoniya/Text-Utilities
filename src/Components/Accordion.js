import React from 'react'

export default function Accordion() {

    const toggle = (event) => {
        let panel = event.target.nextElementSibling;
        panel.style["display"] = panel.style["display"] === "none" ? "block" : "none";
    }

    return (
        <div>
            <button class="accordion" onClick={toggle}>Section 1</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>
        </div>
    )
}
