import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

// using class provider
class ThemeContextProvider extends Component {

    state = {
        isLightTheme: true,
        light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
        dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
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
        console.log(this.state)
    }

}

export default ThemeContextProvider;