import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {

    state = {
        isLightTheme: true,
        light: { syntax: "#555 !important", ui: "#ddd !important", bg: "#eee !important" },
        dark: { syntax: "#ddd !important", ui: "#333 !important", bg: "#555 !important" }
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
    }

}

export default ThemeContextProvider;