import React from "react"

const Header = () => {

    const headerStyle = {
        padding: "20px 0",
        lineHeight: "1.5em",
    }

    return (
        <header style={headerStyle}>
            <h1
                // inline styling: assign a java script object to the style attribute - this is react jsx
                style={{
                    fontSize: "6rem",
                    fontWeight: "600",
                    marginBottom: "2rem",
                    lineHeight: "1em",
                    color: "#ececec",
                    textTransform: "lowercase",
                    textAlign: "center",
                }}
            >
            todos
            </h1>
        </header>
    )
}

export default Header