import React, { PureComponent } from "react";
import css from './ColorPiker.module.css'

export class ColorPiker extends PureComponent {
    state = {
        activeColor : 0,
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevState :', prevState.activeColor, 'nextState : ', this.state.activeColor)
    }

    setActiveColor = (idx) => {
        this.setState({activeColor : idx})
    }

    render() {
        const { colors } = this.props;
        const elemActiveColor = colors[this.state.activeColor]; 

        return (
            <div>
                <div className={css.container}>
                    <div className={css.elemMarginRight}>Name : {elemActiveColor.name}</div>
                    <div>Color : {elemActiveColor.color}</div>
                </div>

                <div className={css.container}>
                {colors.map(({name, color}, idx) => {
                    const isActive = this.state.activeColor === idx;
                    const divStyle = {
                        backgroundColor: color,
                        transform: isActive ? "scale(1.5)" : "none",
                    };

                    return (
                        <div key={idx} onClick={() => this.setActiveColor(idx)}>
                            <div style={divStyle} className={css.baseStyleColorPiker}></div>
                            <p className={css.label}>{name}</p>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}