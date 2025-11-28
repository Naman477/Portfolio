import React, { useState, useEffect } from "react";
import "./cursor.css";

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [click, setClick] = useState(false);
    const [linkHover, setLinkHover] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", mMove);
            document.addEventListener("mouseenter", mEnter);
            document.addEventListener("mouseleave", mLeave);
            document.addEventListener("mousedown", mDown);
            document.addEventListener("mouseup", mUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", mMove);
            document.removeEventListener("mouseenter", mEnter);
            document.removeEventListener("mouseleave", mLeave);
            document.removeEventListener("mousedown", mDown);
            document.removeEventListener("mouseup", mUp);
        };

        const mMove = (el) => {
            setPosition({ x: el.clientX, y: el.clientY });
        };

        const mEnter = () => {
            setHidden(false);
        };

        const mLeave = () => {
            setHidden(true);
        };

        const mDown = () => {
            setClick(true);
        };

        const mUp = () => {
            setClick(false);
        };

        const handleLinkHoverEvents = () => {
            document.querySelectorAll("a, button, .pointer").forEach((el) => {
                el.addEventListener("mouseover", () => setLinkHover(true));
                el.addEventListener("mouseout", () => setLinkHover(false));
            });
        };

        addEventListeners();
        handleLinkHoverEvents();
        return () => removeEventListeners();
    }, []);

    const cursorClasses = `cursor ${hidden ? "cursor--hidden" : ""} ${click ? "cursor--clicked" : ""} ${linkHover ? "cursor--link-hover" : ""}`;

    return (
        <div
            className={cursorClasses}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
}

export default Cursor;
